const SUPABASE_URL = process.env.SUPABASE_URL || ''
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON || ''

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json'
}

function json(status, body) {
  return { statusCode: status, headers: CORS, body: JSON.stringify(body) }
}

async function sbQuery(method, table, params, body) {
  let url = `${SUPABASE_URL}/rest/v1/${table}`
  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  }

  if (params) {
    const qs = Object.entries(params)
      .filter(([k, v]) => v !== undefined && v !== null)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&')
    if (qs) url += '?' + qs
  }

  const opts = { method, headers }
  if (body && (method === 'POST' || method === 'PATCH')) {
    opts.body = typeof body === 'string' ? body : JSON.stringify(body)
    if (method === 'POST') headers['Prefer'] = 'return=representation'
  }

  const res = await fetch(url, opts)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`${res.status}: ${text}`)
  }
  return method === 'DELETE' ? true : await res.json()
}

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') return json(200, {})
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'GET') {
    return json(405, { error: 'Method not allowed' })
  }

  try {
    const params = event.queryStringParameters || {}
    const action = params.action || ''

    // GET : récupérer les données
    if (event.httpMethod === 'GET') {
      const userFilter = `user_id=eq.${params.user_id || ''}`
      switch (action) {
        case 'profil':
          const profil = await sbQuery('GET', 'impact_gen_profil', { user_id: `eq.${params.user_id}`, limit: '1' })
          return json(200, { data: profil[0] || null })

        case 'produits':
          const produits = await sbQuery('GET', 'impact_gen_produits', { user_id: `eq.${params.user_id}`, order: 'nom.asc' })
          return json(200, { data: produits || [] })

        case 'clients':
          const clients = await sbQuery('GET', 'impact_gen_clients', { user_id: `eq.${params.user_id}`, order: 'nom.asc' })
          return json(200, { data: clients || [] })

        case 'documents':
          const docs = await sbQuery('GET', 'impact_gen_documents', {
            user_id: `eq.${params.user_id}`,
            order: 'created_at.desc',
            limit: params.limit || '50'
          })
          return json(200, { data: docs || [] })

        case 'suggestions':
          return json(200, { data: getSuggestions(params.secteur || '') })

        case 'generate-prompt':
          return await generatePrompt(params)

        default:
          return json(400, { error: 'Unknown action: ' + action })
      }
    }

    // POST : créer/mettre à jour
    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}')

      switch (action) {
        case 'save-profil': {
          const existing = await sbQuery('GET', 'impact_gen_profil', { user_id: `eq.${body.user_id}`, limit: '1' })
          if (existing.length > 0) {
            await sbQuery('PATCH', `impact_gen_profil?id=eq.${existing[0].id}`, null, { ...body, updated_at: new Date().toISOString() })
          } else {
            await sbQuery('POST', 'impact_gen_profil', null, body)
          }
          return json(200, { ok: true })
        }

        case 'add-produit':
          const p = await sbQuery('POST', 'impact_gen_produits', null, body)
          return json(200, { data: p[0], ok: true })

        case 'import-produits':
          for (const item of (body.produits || [])) {
            await sbQuery('POST', 'impact_gen_produits', null, { ...item, user_id: body.user_id })
          }
          return json(200, { ok: true, count: (body.produits || []).length })

        case 'delete-produit':
          await sbQuery('DELETE', `impact_gen_produits?id=eq.${body.id}`, null, null)
          return json(200, { ok: true })

        case 'add-client':
          const c = await sbQuery('POST', 'impact_gen_clients', null, body)
          return json(200, { data: c[0], ok: true })

        case 'delete-client':
          await sbQuery('DELETE', `impact_gen_clients?id=eq.${body.id}`, null, null)
          return json(200, { ok: true })

        case 'save-document':
          if (body.id) {
            await sbQuery('PATCH', `impact_gen_documents?id=eq.${body.id}`, null, { ...body, updated_at: new Date().toISOString() })
          } else {
            const d = await sbQuery('POST', 'impact_gen_documents', null, body)
            return json(200, { data: d[0], ok: true })
          }
          return json(200, { ok: true })

        default:
          return json(400, { error: 'Unknown action: ' + action })
      }
    }

    return json(400, { error: 'Invalid request' })
  } catch (err) {
    console.error('impact-api error:', err)
    return json(500, { error: err.message || 'Internal error' })
  }
}

function getSuggestions(secteur) {
  const map = {
    'Télécommunications': {
      domaines: ['Mobile', 'Internet', 'Fibre optique', 'Data', 'IoT'],
      types: ['Fiche technique', 'Offre commerciale', 'Brochure client', 'Rapport couverture', 'Présentation partenaire'],
      couleurs: ['#0047AB', '#00A859', '#FF6B00']
    },
    'Banque & Finance': {
      domaines: ['Assurance', 'Crédit', 'Épargne', 'Investissement', 'Microfinance'],
      types: ['Proposition', 'Contrat', 'Rapport financier', 'Analyse risque', 'Brochure épargne'],
      couleurs: ['#1B3A5C', '#C8A951', '#2E7D32']
    },
    'Santé': {
      domaines: ['Médical', 'Paramédical', 'Pharmacie', 'Laboratoire', 'Santé publique'],
      types: ['Compte-rendu', 'Prescription', 'Brochure santé', 'Certificat médical', 'Rapport épidémiologique'],
      couleurs: ['#00695C', '#E91E63', '#FFFFFF']
    },
    'Éducation': {
      domaines: ['Anglais', 'Mathématiques', 'Sciences', 'Histoire', 'Français', 'Informatique'],
      types: ['Cours', 'Exercice', 'Présentation', 'Quiz', 'Examen', 'Certificat'],
      couleurs: ['#1565C0', '#FF8F00', '#43A047']
    },
    'Commerce & Retail': {
      domaines: ['E-commerce', 'Distribution', 'Grossiste', 'Détaillant', 'Import/Export'],
      types: ['Facture', 'Devis', 'Catalogue', 'Fiche produit', 'Promotion'],
      couleurs: ['#D32F2F', '#FFC107', '#1976D2']
    },
    'Industrie': {
      domaines: ['Manufacture', 'BTP', 'Agroalimentaire', 'Textile', 'Énergie'],
      types: ['Devis technique', 'Fiche specification', 'Rapport production', 'Certificat conformité', 'Facture'],
      couleurs: ['#37474F', '#FF6F00', '#00ACC1']
    },
    'Hôtellerie': {
      domaines: ['Hôtel', 'Restauration', 'Tourisme', 'Événementiel', 'Voyage'],
      types: ['Facture séjour', 'Devis banquet', 'Brochure', 'Programme événement', 'Bon commande'],
      couleurs: ['#5D4037', '#F9A825', '#00897B']
    },
    'Agriculture': {
      domaines: ['Culture', 'Élevage', 'Agro-transformation', 'Pêche', 'Foresterie'],
      types: ['Fiche technique', 'Rapport récolte', 'Devis intrants', 'Certificat origine', 'Facture'],
      couleurs: ['#2E7D32', '#F57F17', '#795548']
    },
    'Énergie': {
      domaines: ['Solaire', 'Hydroélectricité', 'Pétrole', 'Gaz', 'Éolien'],
      types: ['Rapport technique', 'Proposition', 'Fiche produit', 'Étude impact', 'Facture'],
      couleurs: ['#1A237E', '#FF6F00', '#00BCD4']
    },
    'Startup & Tech': {
      domaines: ['SaaS', 'IA', 'Mobile', 'Web', 'Blockchain'],
      types: ['Pitch deck', 'Business plan', 'Fiche produit', 'Présentation investisseur', 'Devis prestation'],
      couleurs: ['#6200EA', '#00E676', '#2979FF']
    },
    'Personnalisé': {
      domaines: ['Sur mesure'],
      types: ['Document libre', 'Template personnalisé'],
      couleurs: ['#0C1F40', '#E8631A', '#F5A623']
    }
  }
  return map[secteur] || map['Personnalisé']
}

async function generatePrompt(params) {
  const { secteur, domaine, type, prospect, tone, goal, produits, couleurs } = params
  const suggestions = getSuggestions(secteur)
  const domainesList = (domaine || suggestions.domaines[0] || '').split(',')
  const typesList = (type || suggestions.types[0] || '').split(',')
  const cols = couleurs ? JSON.parse(couleurs) : suggestions.couleurs

  const produitsStr = produits && produits.length
    ? '\nProduits disponibles:\n' + produits.map(p => `- ${p.nom}: ${p.prix_ht} FCFA (TVA ${p.tva}%)`).join('\n')
    : ''

  const prompt = `You are ImpactGen, a professional content and document generation AI for ${secteur} sector.

CONTEXT:
- Sector: ${secteur}
- Domain: ${domainesList[0]}
- Document type: ${typesList[0]}
- Target/Client: ${prospect}
- Tone: ${tone}
- Goal: ${goal || 'Professional communication'}${produitsStr}
- Brand colors: primary ${cols[0]}, secondary ${cols[1]}, accent ${cols[2]}

Generate a complete document with the following structure as JSON:
{
  "type": "${typesList[0]}",
  "title": "Document title",
  "sector": "${secteur}",
  "domain": "${domainesList[0]}",
  "header": { "title": "Main title", "subtitle": "Professional subtitle" },
  "content": [
    { "tag": "S1", "title": "Section title", "subtitle": "Section subtitle", "points": ["point 1 with **bold** for emphasis", "point 2", "point 3"] },
    { "tag": "S2", "title": "...", "subtitle": "...", "points": ["...", "..."] }
  ],
  "footer": { "text": "Footer text", "contact": "Contact info" },
  "colors": { "primary": "${cols[0]}", "secondary": "${cols[1]}", "accent": "${cols[2]}" }
}

Each section should have 3-5 points relevant to ${domainesList[0]} in ${secteur}.
Return ONLY valid JSON, no markdown or code fences.`

  return json(200, { prompt })
}
