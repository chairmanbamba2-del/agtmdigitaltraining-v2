// generate-course.js — Netlify Function
// Génération de cours et quiz par IA (Claude → DeepSeek → Groq)
// Mode public : sans auth → rate-limité, max 1500 tokens
// Mode authentifié : avec JWT → full accès
// © 2026 AGTM Academy — Issa Bamba

const { callLLM } = require('./lib/llm-providers')

const SUPABASE_URL     = process.env.SUPABASE_URL
const SUPABASE_SERVICE = process.env.SUPABASE_SERVICE_KEY

const rateLimitMap = new Map()
const ANON_MAX_REQUESTS = 10
const ANON_WINDOW_MS    = 60000
const ANON_MAX_TOKENS   = 4000

function checkRateLimit(ip) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now - entry.resetAt > ANON_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + ANON_WINDOW_MS })
    return true
  }
  if (entry.count >= ANON_MAX_REQUESTS) return false
  entry.count++
  return true
}

async function verifyJWT(token) {
  const url = `${SUPABASE_URL}/auth/v1/user`
  const res = await fetch(url, {
    headers: { apikey: SUPABASE_SERVICE, Authorization: `Bearer ${token}` }
  })
  if (!res.ok) return null
  return res.json()
}

function parseJSON(text) {
  if (!text) return null
  let cleaned = text.trim()
  cleaned = cleaned.replace(/```json?\n?/gi, '').replace(/```\n?$/g, '').trim()
  try {
    if (cleaned.startsWith('{') && cleaned.endsWith('}')) return JSON.parse(cleaned)
    const braceStart = cleaned.indexOf('{')
    const braceEnd = cleaned.lastIndexOf('}')
    if (braceStart >= 0 && braceEnd > braceStart) {
      return JSON.parse(cleaned.substring(braceStart, braceEnd + 1))
    }
  } catch(e) {
    console.warn('parseJSON failed:', e.message.substring(0, 100))
  }
  return null
}

function buildCertificationPrompt(level, spQ, liQ, rdQ, wrQ) {
  return `Tu es un examinateur certifié CEFR. Génère un test de certification complet de niveau ${level} en anglais.

Le test évalue les 4 compétences linguistiques. Réponds UNIQUEMENT avec le JSON ci-dessous, sans markdown.

{
  "speaking": [
    { "prompt": "Question ou situation en anglais", "expected_topic": "Sujet attendu de la réponse", "keywords": ["mot1","mot2"] }
  ],
  "listening": [
    { "audio_script": "Script audio de 30-60 secondes que le TTS va lire", "q": "Question QCM", "opts": ["A) ...","B) ...","C) ...","D) ..."], "rep": "A", "expl": "Explication en français" }
  ],
  "reading": [
    { "passage": "Texte de 80-150 mots", "q": "Question QCM", "opts": ["A) ...","B) ...","C) ...","D) ..."], "rep": "A", "expl": "Explication en français" }
  ],
  "writing": [
    { "prompt": "Sujet de rédaction", "word_limit": 120, "criteria": ["Critère 1","Critère 2","Critère 3"] }
  ]
}

Niveau demandé : ${level}
Nombre de questions Speaking : ${spQ}
Nombre de questions Listening : ${liQ}
Nombre de questions Reading : ${rdQ}
Nombre de questions Writing : ${wrQ}

ADAPTE strictement la difficulté au niveau ${level}. Pour ${level}, les textes doivent être simples avec du vocabulaire courant. Pour B2, les textes doivent être plus longs avec du vocabulaire avancé.`
}

function buildThemePrompt(theme, level, slides, quizCount, exos, webData) {
  const webInfo = webData && webData.trim()
    ? `\n\nRECHERCHE WEB SUR LE THÈME (utilise ces informations pour enrichir le contenu) :\n${webData.substring(0, 2000)}`
    : ''

  return `Tu es un professeur d'anglais expert, spécialisé dans la création de cours personnalisés.

RÈGLE LA PLUS IMPORTANTE : Le contenu que tu génères doit être STRICTEMENT SPÉCIFIQUE au thème "${theme}". Chaque section, chaque exemple, chaque exercice et chaque mot de vocabulaire doit être DIRECTEMENT lié à ce thème. N'utilise JAMAIS d'exemples génériques ou de contenu template qui pourrait s'appliquer à n'importe quel cours.

Directives de qualité :
1. ADAPTE le contenu au niveau "${level || 'B1'}" — vocabulaire, complexité des phrases, concepts
2. UTILISE des exemples CONCRETS et RÉALISTES liés au thème "${theme}"
3. VARIE les types d'exercices (pas uniquement des QCM)
4. INCLUS du vocabulaire SPÉCIFIQUE au thème (pas du vocabulaire anglais général)
5. Si des données de recherche web sont fournies, INTÈGRE-LES dans le contenu
${webInfo}

Format de réponse — UNIQUEMENT du JSON valide, sans markdown, sans texte avant/après :
{
  "sections": [
    { "title": "Titre de la section (en français)", "content": "Contenu HTML structuré et détaillé", "duration_min": 15 }
  ],
  "quiz": [
    { "q": "Question en français liée au thème", "opts": ["A) ...", "B) ...", "C) ...", "D) ..."], "rep": "A", "expl": "Explication en français" }
  ],
  "exercices": [
    { "consigne": "Consigne en français liée au thème", "corrige": "Corrigé détaillé" }
  ],
  "vocabulary": [
    { "word": "mot anglais", "translation": "traduction française", "definition": "Définition contextuelle liée au thème" }
  ],
  "conclusion": "Résumé du cours"
}

Thème : "${theme}"
Niveau : ${level || 'B1'}
Nombre de sections : ${slides || 5}
Nombre de questions quiz : ${quizCount || 5}
Nombre d'exercices : ${exos || 3}`
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  }

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server configuration incomplete' }) }
  }

  let authUser = null
  let isAnonymous = true
  const authHeader = event.headers?.authorization || event.headers?.Authorization || ''
  const token = authHeader.replace('Bearer ', '').trim()

  if (token) {
    authUser = await verifyJWT(token)
    if (authUser?.id) isAnonymous = false
  }

  if (isAnonymous) {
    const clientIP = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown'
    if (!checkRateLimit(clientIP)) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          error: 'Rate limit exceeded. Please authenticate or wait 60 seconds.',
          auth_required: true
        })
      }
    }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const {
      messages, theme, level, slides, quizCount, exos, webData,
      certification, certLevel, certSpeakingQ, certListeningQ, certReadingQ, certWritingQ,
      model: reqModel, max_tokens, temperature,
      provider: reqProvider
    } = body

    let apiMessages
    let systemPrompt = ''
    let isMessagesMode = false

    if (messages && Array.isArray(messages) && messages.length) {
      isMessagesMode = true
      const systemMsg = messages.find(m => m.role === 'system')
      systemPrompt = systemMsg ? (typeof systemMsg.content === 'string' ? systemMsg.content : JSON.stringify(systemMsg.content)) : ''

      apiMessages = messages
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role,
          content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content)
        }))
    } else if (certification) {
      const prompt = buildCertificationPrompt(certLevel || 'B1', certSpeakingQ || 3, certListeningQ || 5, certReadingQ || 5, certWritingQ || 1)
      apiMessages = [{ role: 'user', content: prompt }]
    } else if (theme) {
      const prompt = buildThemePrompt(theme, level, slides, quizCount, exos, webData)
      apiMessages = [{ role: 'user', content: prompt }]
    } else {
      throw new Error('Either messages[] or theme is required')
    }

    const effectiveMaxTokens = isAnonymous
      ? Math.min(max_tokens || ANON_MAX_TOKENS, ANON_MAX_TOKENS)
      : (max_tokens || 3000)

    const result = await callLLM({
      provider: reqProvider || 'auto',
      model: reqModel || null,
      messages: apiMessages,
      system: systemPrompt,
      max_tokens: effectiveMaxTokens,
      temperature: temperature !== undefined ? temperature : 0.3,
      timeout_ms: 20000,
      retries: 1,
      fallback_chain: true
    })

    if (!result.success) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          error: 'All AI providers failed',
          details: result.errors,
          content: null,
          reply: null
        })
      }
    }

    const reply = result.text

    if (isMessagesMode) {
      // Mode chat/quiz : retourne le texte brut, le client gère le parsing
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          content: null,
          reply: reply,
          raw: reply.substring(0, 500),
          provider: result.provider_used,
          model: result.model_used,
          duration_ms: result.duration_ms,
          authenticated: !isAnonymous
        })
      }
    }

    // Mode cours structuré : parsing JSON côté serveur
    const parsed = parseJSON(reply)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        content: parsed,
        reply: parsed ? null : reply,
        raw: reply.substring(0, 500),
        provider: result.provider_used,
        model: result.model_used,
        duration_ms: result.duration_ms,
        authenticated: !isAnonymous
      })
    }
  } catch (e) {
    console.error('generate-course error:', e.message)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: e.message, content: null, reply: null })
    }
  }
}
