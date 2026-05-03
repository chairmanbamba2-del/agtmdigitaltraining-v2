// pedagogy-api.js — API Contenu Pédagogique AGTM
//
// Routes (via netlify.toml redirects) :
//   GET /api/pedagogy/modules?level=A1&programme=grammar&page=1
//   GET /api/pedagogy/quiz/:module_code
//   GET /api/pedagogy/placement
//   GET /api/pedagogy/level-test/:level
//   GET /api/pedagogy/programmes

const https = require('https')

const SB_URL = process.env.SUPABASE_URL         || ''
const SB_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON || ''

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type':                 'application/json',
  'Cache-Control':                'no-store',
}

// ── Supabase REST GET ─────────────────────────────────────────────────────────
function sbGet(table, qs) {
  return new Promise((resolve, reject) => {
    if (!SB_URL || !SB_KEY) return reject(new Error('Missing Supabase env vars'))
    const u   = new URL(`${SB_URL}/rest/v1/${table}?${qs}`)
    const req = https.request({
      hostname: u.hostname,
      path:     u.pathname + u.search,
      method:   'GET',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        Prefer:         'count=exact',
      },
    }, (res) => {
      let data = ''
      res.on('data', c => { data += c })
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data), total: res.headers['content-range'] || null })
        } catch {
          resolve({ status: res.statusCode, body: data, total: null })
        }
      })
    })
    req.on('error', reject)
    req.end()
  })
}

// ── Supabase POST ─────────────────────────────────────────────────────────────
function sbPost(table, body) {
  return new Promise((resolve, reject) => {
    if (!SB_URL || !SB_KEY) return reject(new Error('Missing Supabase env vars'))
    const u   = new URL(`${SB_URL}/rest/v1/${table}`)
    const req = https.request({
      hostname: u.hostname,
      path:     u.pathname,
      method:   'POST',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        Prefer:         'return=representation',
      },
    }, (res) => {
      let data = ''
      res.on('data', c => { data += c })
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) })
        } catch {
          resolve({ status: res.statusCode, body: data })
        }
      })
    })
    req.on('error', reject)
    req.write(JSON.stringify(body))
    req.end()
  })
}

// ── Supabase POST batch (insert multiple rows) ────────────────────────────────
function sbPostBatch(table, rows) {
  return new Promise((resolve, reject) => {
    if (!SB_URL || !SB_KEY) return reject(new Error('Missing Supabase env vars'))
    const u   = new URL(`${SB_URL}/rest/v1/${table}`)
    const req = https.request({
      hostname: u.hostname,
      path:     u.pathname,
      method:   'POST',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        Prefer:         'return=representation',
      },
    }, (res) => {
      let data = ''
      res.on('data', c => { data += c })
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) })
        } catch {
          resolve({ status: res.statusCode, body: data })
        }
      })
    })
    req.on('error', reject)
    req.write(JSON.stringify(rows))
    req.end()
  })
}

// ── Supabase PATCH ────────────────────────────────────────────────────────────
function sbPatch(table, id, body) {
  return new Promise((resolve, reject) => {
    if (!SB_URL || !SB_KEY) return reject(new Error('Missing Supabase env vars'))
    const u   = new URL(`${SB_URL}/rest/v1/${table}?id=eq.${id}`)
    const req = https.request({
      hostname: u.hostname,
      path:     u.pathname + u.search,
      method:   'PATCH',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        Prefer:         'return=representation',
      },
    }, (res) => {
      let data = ''
      res.on('data', c => { data += c })
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) })
        } catch {
          resolve({ status: res.statusCode, body: data })
        }
      })
    })
    req.on('error', reject)
    req.write(JSON.stringify(body))
    req.end()
  })
}

// ── Supabase DELETE ───────────────────────────────────────────────────────────
function sbDelete(table, id) {
  return new Promise((resolve, reject) => {
    if (!SB_URL || !SB_KEY) return reject(new Error('Missing Supabase env vars'))
    const u   = new URL(`${SB_URL}/rest/v1/${table}?id=eq.${id}`)
    const req = https.request({
      hostname: u.hostname,
      path:     u.pathname + u.search,
      method:   'DELETE',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${SB_KEY}`,
      },
    }, (res) => {
      let data = ''
      res.on('data', c => { data += c })
      res.on('end', () => {
        resolve({ status: res.statusCode, body: data })
      })
    })
    req.on('error', reject)
    req.end()
  })
}

function json(statusCode, payload) {
  return { statusCode, headers: CORS, body: JSON.stringify(payload) }
}

// ── Handler ───────────────────────────────────────────────────────────────────
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: CORS, body: '' }

  const p = { ...(event.queryStringParameters || {}) }
  const method = event.httpMethod

  // Parser le path pour extraire action et params
  const rawPath = (() => {
    try { return new URL(event.rawUrl || '').pathname } catch { return event.path || '' }
  })()

  // /api/pedagogy/quiz/:code
  const quizMatch = rawPath.match(/\/api\/pedagogy\/quiz\/([^/?]+)/)
  if (quizMatch) { p.action = p.action || 'quiz'; p.module_code = p.module_code || quizMatch[1] }

  // /api/pedagogy/level-test/:level
  const ltMatch = rawPath.match(/\/api\/pedagogy\/level-test\/([A-C][12])/i)
  if (ltMatch) { p.action = p.action || 'level-test'; p.level = p.level || ltMatch[1].toUpperCase() }

  const action = p.action || 'modules'

  try {

    // ── POST /api/pedagogy/modules (create module) ─────────────────
    if (method === 'POST' && action === 'modules') {
      const body = JSON.parse(event.body || '{}')
      if (!body.code || !body.title) return json(400, { error: 'code and title required' })

      // Résoudre level_code → level_id
      let levelId = body.level_id || null
      if (body.level_code) {
        const lvlR = await sbGet('levels', `code=eq.${encodeURIComponent(body.level_code)}&select=id`)
        const lvls = Array.isArray(lvlR.body) ? lvlR.body : []
        if (lvls.length) levelId = lvls[0].id
      }

      // Résoudre category_code → category_id
      let catId = body.category_id || null
      if (body.category_code) {
        const catR = await sbGet('categories', `code=eq.${encodeURIComponent(body.category_code)}&select=id`)
        const cats = Array.isArray(catR.body) ? catR.body : []
        if (cats.length) catId = cats[0].id
      }

      // Résoudre programme_code → programme_id
      let progId = body.programme_id || null
      if (body.programme_code) {
        const progR = await sbGet('programmes', `code=eq.${encodeURIComponent(body.programme_code)}&select=id`)
        const progs = Array.isArray(progR.body) ? progR.body : []
        if (progs.length) progId = progs[0].id
      }

      const modData = {
        code: body.code,
        title: body.title,
        description: body.description || '',
        content: body.content || [],
        duration_minutes: body.duration_minutes || 30,
        level_id: levelId,
        category_id: catId,
        programme_id: progId,
        is_free: body.is_free !== undefined ? body.is_free : true,
        is_active: body.is_active !== undefined ? body.is_active : true,
        video_url: body.video_url || null,
        sort_order: body.sort_order || 0,
      }

      // Insérer le module
      const modR = await sbPost('modules', modData)
      if (modR.status >= 400) return json(modR.status, { error: 'Failed to create module', detail: modR.body })

      const modId = modR.body?.[0]?.id
      if (!modId) return json(500, { error: 'Module created but no ID returned' })

      // Insérer les objectifs si fournis
      if (body.objectives && body.objectives.length) {
        const objs = body.objectives.map((desc, i) => ({
          module_id: modId,
          description: desc,
          sort_order: i + 1,
        }))
        await sbPostBatch('objectives', objs)
      }

      // Insérer le quiz si fourni
      if (body.quiz && body.quiz.length) {
        const quizData = {
          module_id: modId,
          title: `Quiz — ${body.title}`,
          is_active: true,
        }
        const quizR = await sbPost('quizzes', quizData)
        if (quizR.body?.[0]?.id) {
          const quizId = quizR.body[0].id
          const questions = body.quiz.map((q, i) => ({
            quiz_id: quizId,
            question_text: q.q || q.question || '',
            explanation: q.expl || q.explanation || '',
            difficulty: q.difficulty || 'medium',
            points: q.points || 1,
            sort_order: i + 1,
            is_active: true,
          }))
          const qR = await sbPostBatch('questions', questions)
          const insertedQuestions = Array.isArray(qR.body) ? qR.body : []

          // Insérer les options de réponse
          const allOptions = []
          insertedQuestions.forEach((insQ, qi) => {
            const origQ = body.quiz[qi]
            if (origQ.opts && origQ.opts.length) {
              origQ.opts.forEach((optText, oi) => {
                allOptions.push({
                  question_id: insQ.id,
                  option_text: optText,
                  is_correct: (origQ.rep || origQ.correct_answer || 'A') === String.fromCharCode(65 + oi),
                  sort_order: oi + 1,
                })
              })
            }
          })
          if (allOptions.length) {
            await sbPostBatch('answer_options', allOptions)
          }
        }
      }

      return json(201, { success: true, module_id: modId, code: body.code })
    }

    // ── PATCH /api/pedagogy/modules (update module) ────────────────
    if (method === 'PATCH' && action === 'modules' && p.id) {
      const body = JSON.parse(event.body || '{}')
      const updateData = { updated_at: new Date().toISOString() }

      // Mapper les champs
      if (body.title !== undefined) updateData.title = body.title
      if (body.description !== undefined) updateData.description = body.description
      if (body.content !== undefined) updateData.content = body.content
      if (body.duration_minutes !== undefined) updateData.duration_minutes = body.duration_minutes
      if (body.is_active !== undefined) updateData.is_active = body.is_active
      if (body.is_free !== undefined) updateData.is_free = body.is_free
      if (body.video_url !== undefined) updateData.video_url = body.video_url
      if (body.sort_order !== undefined) updateData.sort_order = body.sort_order

      if (body.level_code) {
        const lvlR = await sbGet('levels', `code=eq.${encodeURIComponent(body.level_code)}&select=id`)
        const lvls = Array.isArray(lvlR.body) ? lvlR.body : []
        if (lvls.length) updateData.level_id = lvls[0].id
      }
      if (body.category_code) {
        const catR = await sbGet('categories', `code=eq.${encodeURIComponent(body.category_code)}&select=id`)
        const cats = Array.isArray(catR.body) ? catR.body : []
        if (cats.length) updateData.category_id = cats[0].id
      }

      const r = await sbPatch('modules', p.id, updateData)
      if (r.status >= 400) return json(r.status, { error: 'Failed to update module', detail: r.body })
      return json(200, { success: true })
    }

    // ── DELETE /api/pedagogy/modules (delete module) ───────────────
    if (method === 'DELETE' && action === 'modules' && p.id) {
      const r = await sbDelete('modules', p.id)
      if (r.status >= 400) return json(r.status, { error: 'Failed to delete module', detail: r.body })
      return json(200, { success: true })
    }

    // ── GET /api/pedagogy/modules ──────────────────────────────────
    if (action === 'modules') {
      const level      = p.level      ? `&level_id=eq.${encodeURIComponent(p.level_id_raw || '')}` : ''
      const page       = Math.max(0, parseInt(p.page || '0'))
      const limit      = Math.min(parseInt(p.limit || '50'), 200)
      const offset     = page * limit

      // Résoudre level code → level_id si fourni
      let levelFilter = ''
      if (p.level) {
        const lvlR = await sbGet('levels', `code=eq.${encodeURIComponent(p.level)}&select=id`)
        const lvls = Array.isArray(lvlR.body) ? lvlR.body : []
        if (lvls.length) levelFilter = `&level_id=eq.${lvls[0].id}`
      }

      // Résoudre programme code → category ids si fourni
      let catFilter = ''
      if (p.programme) {
        const progR = await sbGet('programmes', `code=eq.${encodeURIComponent(p.programme)}&select=id`)
        const progs = Array.isArray(progR.body) ? progR.body : []
        if (progs.length) {
          const catR = await sbGet('categories', `programme_id=eq.${progs[0].id}&select=id`)
          const catIds = (Array.isArray(catR.body) ? catR.body : []).map(c => c.id)
          if (catIds.length) catFilter = `&category_id=in.(${catIds.join(',')})`
        }
      }

      const qs = `is_active=eq.true&order=sort_order.asc&limit=${limit}&offset=${offset}${levelFilter}${catFilter}`
               + `&select=id,code,title,description,content,duration_minutes,level_id,category_id,is_free,video_url`

      const r = await sbGet('modules', qs)
      if (r.status >= 400) return json(r.status, { error: 'Supabase error', detail: r.body })

      const modules = Array.isArray(r.body) ? r.body : []
      const modIds  = modules.map(m => m.id)

      // Enrichir avec niveau, catégorie, objectifs et présence de quiz
      const [lvlR, catR, objR, quizR] = await Promise.all([
        sbGet('levels',     'select=id,code,name,color&order=sort_order.asc'),
        sbGet('categories', 'select=id,code,name,icon&order=sort_order.asc'),
        modIds.length ? sbGet('objectives', `module_id=in.(${modIds.join(',')})&select=module_id,description&order=sort_order.asc`) : Promise.resolve({ body: [] }),
        modIds.length ? sbGet('quizzes',    `module_id=in.(${modIds.join(',')})&is_active=eq.true&select=module_id`)               : Promise.resolve({ body: [] }),
      ])
      const levels = Object.fromEntries((Array.isArray(lvlR.body) ? lvlR.body : []).map(l => [l.id, l]))
      const cats   = Object.fromEntries((Array.isArray(catR.body) ? catR.body : []).map(c => [c.id, c]))

      const objsByMod = {}
      ;(Array.isArray(objR.body) ? objR.body : []).forEach(o => {
        if (!objsByMod[o.module_id]) objsByMod[o.module_id] = []
        objsByMod[o.module_id].push(o.description)
      })
      const quizModSet = new Set((Array.isArray(quizR.body) ? quizR.body : []).map(q => q.module_id))

      const enriched = modules.map(m => ({
        ...m,
        level:      levels[m.level_id]  || null,
        category:   cats[m.category_id] || null,
        objectives: objsByMod[m.id]     || [],
        has_quiz:   quizModSet.has(m.id),
      }))

      return json(200, { modules: enriched, count: enriched.length, page, limit })
    }

    // ── GET /api/pedagogy/programmes ──────────────────────────────
    if (action === 'programmes') {
      const r = await sbGet('programmes',
        'is_active=eq.true&order=sort_order.asc&select=id,code,name,name_en,icon,color')
      if (r.status >= 400) return json(r.status, { error: 'Supabase error' })
      return json(200, Array.isArray(r.body) ? r.body : [])
    }

    // ── GET /api/pedagogy/quiz/:module_code ────────────────────────
    if (action === 'quiz') {
      const code = p.module_code
      if (!code) return json(400, { error: 'module_code required' })

      // Trouver le module
      const modR = await sbGet('modules', `code=eq.${encodeURIComponent(code)}&select=id,code,title,level_id`)
      const mods = Array.isArray(modR.body) ? modR.body : []
      if (!mods.length) return json(404, { error: `Module '${code}' introuvable` })
      const mod = mods[0]

      // Trouver le quiz associé
      const qzR = await sbGet('quizzes', `module_id=eq.${mod.id}&is_active=eq.true&select=id,title,time_limit_sec,pass_score`)
      const quizzes = Array.isArray(qzR.body) ? qzR.body : []
      if (!quizzes.length) return json(404, { error: `Aucun quiz pour le module '${code}'` })
      const quiz = quizzes[0]

      // Questions du quiz
      const qR = await sbGet('questions',
        `quiz_id=eq.${quiz.id}&is_active=eq.true&order=sort_order.asc`
        + `&select=id,question_text,explanation,difficulty,points,sort_order`)
      const questions = Array.isArray(qR.body) ? qR.body : []

      // Options de réponse pour chaque question
      const qIds = questions.map(q => q.id)
      let options = []
      if (qIds.length) {
        const aoR = await sbGet('answer_options',
          `question_id=in.(${qIds.join(',')})&order=sort_order.asc`
          + `&select=id,question_id,option_text,is_correct,sort_order`)
        options = Array.isArray(aoR.body) ? aoR.body : []
      }

      // Regrouper options par question
      const optMap = {}
      options.forEach(o => {
        if (!optMap[o.question_id]) optMap[o.question_id] = []
        optMap[o.question_id].push(o)
      })

      const fullQuestions = questions.map(q => ({
        ...q,
        options: (optMap[q.id] || []).map(o => ({ text: o.option_text, is_correct: o.is_correct })),
      }))

      return json(200, {
        module:    { code: mod.code, title: mod.title },
        quiz:      { id: quiz.id, title: quiz.title, time_limit_sec: quiz.time_limit_sec, pass_score: quiz.pass_score },
        questions: fullQuestions,
      })
    }

    // ── GET /api/pedagogy/placement ────────────────────────────────
    if (action === 'placement') {
      // Récupérer le premier test de placement actif
      const ptR = await sbGet('placement_tests',
        'is_active=eq.true&order=id.asc&limit=1&select=id,code,title,question_count,time_limit_sec')
      const pts = Array.isArray(ptR.body) ? ptR.body : []
      if (!pts.length) return json(404, { error: 'Aucun test de placement actif' })
      const pt = pts[0]

      const qR = await sbGet('questions',
        `placement_test_id=eq.${pt.id}&is_active=eq.true&order=sort_order.asc`
        + `&select=id,question_text,explanation,difficulty,sort_order,level_id`)
      const questions = Array.isArray(qR.body) ? qR.body : []

      const qIds = questions.map(q => q.id)
      let options = []
      if (qIds.length) {
        const aoR = await sbGet('answer_options',
          `question_id=in.(${qIds.join(',')})&order=sort_order.asc`
          + `&select=id,question_id,option_text,is_correct,sort_order`)
        options = Array.isArray(aoR.body) ? aoR.body : []
      }

      const optMap = {}
      options.forEach(o => {
        if (!optMap[o.question_id]) optMap[o.question_id] = []
        optMap[o.question_id].push(o)
      })

      const fullQuestions = questions.map(q => ({
        id:           q.id,
        question:     q.question_text,
        explanation:  q.explanation,
        difficulty:   q.difficulty,
        sort_order:   q.sort_order,
        options: (optMap[q.id] || []).map(o => ({ text: o.option_text, correct: o.is_correct })),
      }))

      return json(200, {
        test:      { id: pt.id, title: pt.title, question_count: pt.question_count, time_limit_sec: pt.time_limit_sec },
        questions: fullQuestions,
      })
    }

    // ── GET /api/pedagogy/level-test/:level ────────────────────────
    if (action === 'level-test') {
      const levelCode = (p.level || '').toUpperCase()
      if (!levelCode) return json(400, { error: 'level required (A1/A2/B1/B2/C1/C2)' })

      const lvlR = await sbGet('levels', `code=eq.${levelCode}&select=id,code,name`)
      const lvls = Array.isArray(lvlR.body) ? lvlR.body : []
      if (!lvls.length) return json(404, { error: `Niveau '${levelCode}' introuvable` })
      const lvl = lvls[0]

      const ltR = await sbGet('level_tests',
        `level_id=eq.${lvl.id}&is_active=eq.true&order=id.asc&limit=1`
        + `&select=id,title,question_count,time_limit_sec`)
      const lts = Array.isArray(ltR.body) ? ltR.body : []
      if (!lts.length) return json(404, { error: `Aucun test pour le niveau ${levelCode}` })
      const lt = lts[0]

      const qR = await sbGet('questions',
        `level_test_id=eq.${lt.id}&is_active=eq.true&order=sort_order.asc`
        + `&select=id,question_text,explanation,difficulty,sort_order`)
      const questions = Array.isArray(qR.body) ? qR.body : []

      const qIds = questions.map(q => q.id)
      let options = []
      if (qIds.length) {
        const aoR = await sbGet('answer_options',
          `question_id=in.(${qIds.join(',')})&order=sort_order.asc`
          + `&select=question_id,option_text,is_correct,sort_order`)
        options = Array.isArray(aoR.body) ? aoR.body : []
      }
      const optMap = {}
      options.forEach(o => {
        if (!optMap[o.question_id]) optMap[o.question_id] = []
        optMap[o.question_id].push(o)
      })

      const fullQuestions = questions.map(q => ({
        id:          q.id,
        question:    q.question_text,
        explanation: q.explanation,
        options: (optMap[q.id] || []).map(o => ({ text: o.option_text, correct: o.is_correct })),
      }))

      return json(200, {
        level:     { code: lvl.code, name: lvl.name },
        test:      { id: lt.id, title: lt.title, question_count: lt.question_count, time_limit_sec: lt.time_limit_sec },
        questions: fullQuestions,
      })
    }

    return json(400, { error: `Action inconnue : '${action}'. Valeurs : modules | programmes | quiz | placement | level-test` })

  } catch (err) {
    console.error('[pedagogy-api] error:', err.message)
    return json(500, { error: err.message })
  }
}
