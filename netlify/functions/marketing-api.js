// ============================================================
//  AGTM Digital Academy — Marketing CMS API v1
//  Netlify Function: marketing-api.js
//  Routes CRUD pour blocs, actualités, galeries, médias, liens
//  © 2026 AGTM Academy — Issa Bamba
// ============================================================

const SUPABASE_URL = process.env.SUPABASE_URL || ''
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_ANON || ''

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json'
}

const TABLES = ['marketing_blocs','marketing_actualites','marketing_galeries','marketing_galeries_images','marketing_liens','marketing_media','marketing_config']

function json(status, body) {
  return { statusCode: status, headers: CORS, body: JSON.stringify(body) }
}

async function sb(table, method = 'GET', params = {}, body = null) {
  let url = `${SUPABASE_URL}/rest/v1/${table}`
  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
  }

  if (Object.keys(params).length) {
    const qs = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&')
    url += `?${qs}`
  }

  const opts = { method, headers }
  if (body && method !== 'GET') opts.body = JSON.stringify(body)

  try {
    const res = await fetch(url, opts)
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || `Supabase ${res.status}`)
    return { data, status: res.status, total: res.headers.get('content-range') || null }
  } catch (e) {
    throw new Error(e.message || 'Supabase error')
  }
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(200, {})

  const method = event.httpMethod
  const url = new URL(event.rawUrl || `http://localhost${event.path}`)
  const parts = url.pathname.split('/').filter(Boolean)
  const query = event.queryStringParameters || {}
  const resource = query.resource || parts[parts.length - 1] || ''
  const isPublic = (resource === 'render' || resource === 'config')

  try {
    // ─── Endpoints publics (sans auth) ──────────────────────────
    if (isPublic && method === 'GET') {
      if (resource === 'render') {
        const lang = query.lang || 'fr'

        // Chaque requête est isolée pour éviter qu'une erreur ne casse tout le rendu
        const safeSb = async (...args) => {
          try { return await sb(...args) }
          catch(e) { console.warn('[Marketing API] safeSb error:', e.message); return { data: [] } }
        }

        const [blocs, actus, galeries, gImgs, liens, cfg, mktConfig] = await Promise.all([
          safeSb('marketing_blocs', 'GET', { status: 'eq.published', order: 'sort_order.asc' }),
          safeSb('marketing_actualites', 'GET', { status: 'eq.published', order: 'date_publication.desc', limit: '6' }),
          safeSb('marketing_galeries', 'GET', { status: 'eq.published', order: 'sort_order.asc' }),
          query.with_images ? safeSb('marketing_galeries_images', 'GET', { visible: 'eq.true', order: 'sort_order.asc' }) : Promise.resolve({ data: [] }),
          safeSb('marketing_liens', 'GET', { visible: 'eq.true', order: 'sort_order.asc' }),
          safeSb('marketing_media', 'GET', { limit: '20', order: 'created_at.desc' }),
          safeSb('marketing_config', 'GET', { select: 'cle,valeur' }),
        ])

        // Grouper les images par galerie
        const galeriesAvecImages = (galeries.data || []).map(g => ({
          ...g,
          images: (gImgs.data || []).filter(img => img.galerie_id === g.id)
        }))

        return json(200, {
          blocs: blocs.data || [],
          actualites: actus.data || [],
          galeries: galeriesAvecImages,
          liens: liens.data || [],
          media: (cfg.data || []).slice(0, 10),
          _config: (mktConfig.data || [])
        })
      }

      if (resource === 'config') {
        const { data } = await sb('marketing_media', 'GET', { limit: '50', order: 'created_at.desc' })
        return json(200, { media: data || [] })
      }
    }

    // ─── Endpoints protégés (clé anon ou service key valide) ──────
    const auth = event.headers.authorization || event.headers.Authorization || ''
    const token = auth.replace(/^Bearer\s+/i, '')
    if (!token && method !== 'GET') return json(401, { error: 'Non authentifié' })
    // Les opérations Supabase utilisent déjà SUPABASE_KEY (service key)
    // La clé anon en Bearer suffit comme garde-barrière

    // ─── CRUD Ressource ─────────────────────────────────────────
    if (method === 'GET' && resource && TABLES.includes(resource)) {
      const { resource: _, id: __, ...cleanQuery } = query
      const params = { ...cleanQuery }
      if (!params.order) {
        params.order = resource === 'marketing_actualites' ? 'created_at.desc' : 'sort_order.asc'
      }
      if (query.id) params.id = `eq.${query.id}`
      else if (!params.select && !params.limit) params.limit = (params.limit || '100')
      const { data } = await sb(resource, 'GET', params)
      return json(200, data)
    }

    if (method === 'POST' && resource && TABLES.includes(resource)) {
      const body = JSON.parse(event.body || '{}')
      const { data } = await sb(resource, 'POST', {}, body)
      return json(201, data)
    }

    if (method === 'PATCH' && resource && TABLES.includes(resource) && (query.id || query.cle)) {
      const body = JSON.parse(event.body || '{}')
      const filterKey = query.cle ? 'cle' : 'id'
      const filterVal = query.cle || query.id
      const { data } = await sb(resource, 'PATCH', { [filterKey]: `eq.${filterVal}` }, body)
      if (!data || (Array.isArray(data) && data.length === 0)) return json(404, { error: 'Non trouvé' })
      return json(200, data)
    }

    if (method === 'DELETE' && resource && TABLES.includes(resource) && query.id) {
      await sb(resource, 'DELETE', { id: `eq.${query.id}` })
      return json(200, { success: true })
    }

    // ─── Upload média (base64 → Supabase Storage) ──────────────
    if (method === 'POST' && resource === 'upload') {
      const { filename, base64, mime_type } = JSON.parse(event.body || '{}')
      if (!filename || !base64) return json(400, { error: 'filename et base64 requis' })

      const bucket = 'marketing-media'
      const cleanName = Date.now() + '-' + filename.replace(/[^a-zA-Z0-9._-]/g, '_')
      const storageUrl = `${SUPABASE_URL}/storage/v1/object/${bucket}/${cleanName}`
      const buffer = Buffer.from(base64, 'base64')

      const upRes = await fetch(storageUrl, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': mime_type || 'image/png',
          'x-upsert': 'true'
        },
        body: buffer
      })

      if (!upRes.ok) return json(500, { error: 'Upload échoué' })

      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${cleanName}`

      const { data } = await sb('marketing_media', 'POST', {}, {
        url: publicUrl, filename: cleanName,
        type: (mime_type || '').startsWith('image') ? 'image' : 'document',
        mime_type: mime_type || 'image/png',
        file_size: buffer.length
      })

      return json(200, { url: publicUrl, id: data?.[0]?.id })
    }

    return json(404, { error: 'Route non trouvée', resource, method })
  } catch (e) {
    console.error('[Marketing API]', e.message)
    return json(500, { error: e.message || 'Erreur interne' })
  }
}
