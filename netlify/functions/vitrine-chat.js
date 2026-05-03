// ============================================================
//  AGTM Digital Academy — Chatbot Vitrine (Prospects)
//  Endpoint public — pas d'authentification requise
//  Moteur : Claude (primaire) → DeepSeek → Groq-70B → Groq-8B → FAQ statique
//  Fonctions : infos formations, capture leads, notif admin
//  © 2026 AGTM Academy — Issa Bamba
// ============================================================

const { callLLM } = require('./lib/llm-providers')

const SUPABASE_URL    = process.env.SUPABASE_URL
const SUPABASE_KEY    = process.env.SUPABASE_SERVICE_KEY
const TWILIO_SID      = process.env.TWILIO_ACCOUNT_SID   || ''
const TWILIO_TOKEN    = process.env.TWILIO_AUTH_TOKEN     || ''
const TWILIO_FROM     = process.env.TWILIO_WHATSAPP_FROM  || ''
const ADMIN_WHATSAPP  = process.env.ADMIN_WHATSAPP_PHONE || ''

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['*']

function getCorsHeaders(origin) {
  const allowedOrigin = ALLOWED_ORIGINS.includes('*') ? '*' :
                       (origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0])
  return {
    'Content-Type':                'application/json',
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers':'Content-Type',
    'Access-Control-Allow-Methods':'POST, OPTIONS',
    'Vary': 'Origin'
  }
}

async function fetchWithTimeout(url, options, timeoutMs = 15000) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal })
    clearTimeout(timer)
    return res
  } catch(e) {
    clearTimeout(timer)
    if (e.name === 'AbortError') throw new Error(`Timeout (${timeoutMs}ms)`)
    throw e
  }
}

async function sbInsert(table, body) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error(`sbInsert: Supabase not configured, skipping ${table} insert`)
    return
  }
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey:        SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type':'application/json',
        Prefer:        'return=minimal'
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) console.error(`sbInsert ${table} failed: ${res.status}`)
  } catch(e) { console.error(`sbInsert ${table} error:`, e.message) }
}

async function sbQuery(path, params = '') {
  if (!SUPABASE_URL || !SUPABASE_KEY) return []
  try {
    const res = await fetchWithTimeout(
      `${SUPABASE_URL}/rest/v1/${path}${params ? '?' + params : ''}`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } },
      6000
    )
    if (!res.ok) return []
    return res.json()
  } catch(e) { console.error(`sbQuery ${path} error:`, e.message); return [] }
}

async function loadMarketingInfo() {
  try {
    const rows = await sbQuery('marketing_config', 'select=cle,valeur')
    const cfg = {}
    for (const r of rows) cfg[r.cle] = r.valeur
    return cfg
  } catch(e) { return {} }
}

function staticFallback(lastMessage, mkt) {
  const txt = (lastMessage || '').toLowerCase()
  const prix = [
    mkt.prix_general  || '35 000 FCFA/mois',
    mkt.prix_business || '45 000 FCFA/mois',
    mkt.prix_bac_bepc || '25 000 FCFA/mois',
    mkt.prix_toeic    || 'nous contacter',
    mkt.prix_kids     || '20 000 FCFA/mois'
  ]
  const contact = mkt.contact_inscription || '+225 XX XX XX XX'
  const rentree = mkt.inscription_ouverte === 'true'
    ? `Les inscriptions sont ouvertes. ${mkt.periode_inscription || ''}`
    : `Prochaine rentrée : ${mkt.prochaine_rentree || 'Contactez-nous pour les dates.'}`

  if (/prix|tarif|coût|cout|combien|payment|payer/.test(txt)) {
    return `Voici nos tarifs actuels :\n\nCours Général (A1 à C1) : ${prix[0]}\nBusiness English : ${prix[1]}\nPrépa BAC/BEPC : ${prix[2]}\nTOEIC / TOEFL : ${prix[3]}\nKids & Juniors : ${prix[4]}\n\nPour un devis personnalisé ou des facilités de paiement, contactez-nous au ${contact}.`
  }
  if (/inscription|inscrire|s.inscrire|rejoindre|intégrer|commencer|dossier/.test(txt)) {
    return `${rentree}\n\nPour vous inscrire ou obtenir un formulaire d'inscription, contactez notre équipe au ${contact}. Nous vous guiderons dans toutes les démarches.`
  }
  if (/formation|cours|programme|niveau|apprentissage|apprendre|anglais|enseign/.test(txt)) {
    return `EIP propose 5 formations d'anglais :\n\n1. Cours Général (A1 à C1) : grammaire, speaking, listening, writing\n2. Business English (B1 à C1) : emails, présentations, réunions\n3. Prépa BAC/BEPC Anglais : pour les lycéens ivoiriens\n4. Préparation TOEIC / TOEFL : certifications internationales\n5. English for Kids : enfants 6 à 15 ans, méthode ludique\n\nNous suivons les niveaux du cadre européen CECRL (A1 à C2). Quel type de formation vous intéresse ?`
  }
  if (/toeic|toefl|ielts|certif|diplôme|examen/.test(txt)) {
    return `EIP propose une préparation complète aux certifications internationales d'anglais : TOEIC et TOEFL. Ces certifications sont reconnues mondialement et très appréciées des employeurs et des universités. Pour les tarifs et les prochaines sessions, contactez-nous au ${contact}.`
  }
  if (/enfant|kid|junior|jeune|fils|fille|ado|adolescent/.test(txt)) {
    return `Notre programme English for Kids s'adresse aux enfants de 6 à 15 ans. La méthode est ludique, basée sur le jeu, les chansons et les situations du quotidien. Tarif : ${prix[4]}. Pour inscrire votre enfant, appelez-nous au ${contact}.`
  }
  if (/business|professionnel|travail|entreprise|réunion|négociation/.test(txt)) {
    return `Notre formation Business English (niveaux B1 à C1) est spécialement conçue pour les professionnels. Au programme : rédaction d'emails professionnels, conduite de réunions, présentations en anglais, négociations commerciales. Tarif : ${prix[1]}. Contactez-nous au ${contact}.`
  }
  if (/horaire|emploi du temps|séance|schedule|planning|disponible|quand/.test(txt)) {
    return `Les cours se déroulent du lundi au samedi en présentiel à Abidjan, avec des options en ligne et en mode hybride. Les horaires sont adaptés à votre disponibilité (matin, après-midi, soir). Pour connaître les créneaux disponibles, contactez-nous au ${contact}.`
  }
  if (/lieu|où|adresse|localisation|venir|trouver|abidjan|emplacement/.test(txt)) {
    return `EIP (English In Practice) est basée à Abidjan, Côte d'Ivoire. Nous proposons également des cours en ligne pour les apprenants qui ne peuvent pas se déplacer. Pour l'adresse exacte, contactez-nous au ${contact}.`
  }
  if (/contact|appeler|téléphone|joindre|email|whatsapp/.test(txt)) {
    return `Vous pouvez nous joindre au ${contact}. Notre équipe est disponible du lundi au samedi pour répondre à toutes vos questions sur les formations et les inscriptions.`
  }
  if (/bonjour|bonsoir|salut|hello|hi|allo/.test(txt)) {
    return `Bonjour et bienvenue chez EIP, l'école d'anglais de l'AGTM Digital Academy ! Je suis votre assistant. Je peux vous renseigner sur nos formations, nos tarifs, les inscriptions ou prendre vos coordonnées pour qu'un conseiller vous rappelle. Qu'est-ce que je peux faire pour vous ?`
  }
  return `Merci pour votre message ! Chez EIP (English In Practice), nous proposons des formations d'anglais pour tous les niveaux et tous les profils : professionnels, étudiants, enfants et adultes.\n\nPour obtenir une réponse personnalisée rapidement, vous pouvez nous contacter directement au ${contact}. Nous serons ravis de vous aider.`
}

function detectProspectFromMessages(messages) {
  const userMsgs = messages.filter(m => m.role === 'user').map(m => m.content || '').join('\n')
  const phoneRx = /(?:\+?225[\s.-]?)?(?:0[0-9])[\s.-]?(?:\d{2}[\s.-]?){4}|\d{10}/g
  const phones  = userMsgs.match(phoneRx) || []
  const telephone = phones.length ? phones[0].replace(/[\s.-]/g, '') : ''
  const namePatterns = [
    /je m['']appelle\s+([A-Za-zÀ-ÿ][\w\sÀ-ÿ]{1,30})/i,
    /mon (?:nom|prénom)(?: est)?\s*[:\-]?\s*([A-Za-zÀ-ÿ][\w\sÀ-ÿ]{1,30})/i,
    /(?:^|[\n,.])\s*((?:[A-ZÀÂÉÈÊËÎÏÔÙÛÜŸ][a-zàâéèêëîïôùûü]+\s+){1,2}[A-ZÀÂÉÈÊËÎÏÔÙÛÜ][a-zàâéèêëîïôùûü]+)/m,
  ]
  let nom = ''
  for (const rx of namePatterns) {
    const m = userMsgs.match(rx)
    if (m) { nom = m[1].trim(); break }
  }
  const emailRx = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/
  const emailMatch = userMsgs.match(emailRx)
  const email = emailMatch ? emailMatch[0] : ''
  const interetMap = [
    [/business|professionnel/i,   'Business English'],
    [/toeic|toefl|certif/i,       'TOEIC/TOEFL'],
    [/bac|bepc|lycée|lyceen/i,    'Prépa BAC/BEPC'],
    [/enfant|kid|junior/i,        'Kids & Juniors'],
    [/général|general|débutant/i, 'Cours Général'],
  ]
  let interet = ''
  for (const [rx, label] of interetMap) {
    if (rx.test(userMsgs)) { interet = label; break }
  }
  if (telephone || email) {
    return { nom, telephone, email, interet, niveau: '' }
  }
  return null
}

async function alertAdminSms(prospectInfo) {
  if (!TWILIO_SID || !TWILIO_TOKEN || !ADMIN_WHATSAPP) return
  const smsFrom = (process.env.TWILIO_SMS_FROM || TWILIO_FROM || '')
    .replace(/\s/g, '')
    .replace(/^whatsapp:/, '')
  if (!smsFrom) { console.error('alertAdminSms: aucun numéro SMS expéditeur configuré'); return }
  try {
    let phone = ADMIN_WHATSAPP.replace(/[\s\-().]/g, '')
    if (!phone.startsWith('+')) phone = '+' + phone.replace(/^00/, '')
    const body = `NOUVEAU PROSPECT EIP\nNom : ${[prospectInfo.prenom, prospectInfo.nom].filter(Boolean).join(' ') || '—'}\nTel : ${prospectInfo.telephone || '—'}\nEmail : ${prospectInfo.email || '—'}\nInteret : ${prospectInfo.interet || '—'}\n${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Abidjan' })}`
    const params = new URLSearchParams({ From: smsFrom, To: phone, Body: body })
    const res = await fetchWithTimeout(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${TWILIO_SID}:${TWILIO_TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      },
      6000
    )
    if (!res.ok) {
      const err = await res.text().catch(() => res.status)
      console.error('alertAdminSms Twilio error:', err)
    }
  } catch(e) { console.error('alertAdminSms error:', e.message) }
}

async function notifyAdmin(prospectInfo) {
  const now  = new Date().toISOString()
  const sujet = `Nouveau prospect : ${[prospectInfo.prenom, prospectInfo.nom].filter(Boolean).join(' ') || 'Anonyme'}`
  const msg   = `NOUVEAU PROSPECT VITRINE\n\nNom : ${[prospectInfo.prenom, prospectInfo.nom].filter(Boolean).join(' ') || 'Non renseigné'}\nTéléphone : ${prospectInfo.telephone || 'Non renseigné'}\nEmail : ${prospectInfo.email || 'Non renseigné'}\nIntérêt : ${prospectInfo.interet || 'Non précisé'}\nNiveau visé : ${prospectInfo.niveau || 'Non précisé'}\nMessage : ${prospectInfo.message || '-'}\nSource : ${prospectInfo.source || 'vitrine'}\n\nCapturé le : ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Abidjan' })}`
  try {
    const admins = await sbQuery('utilisateurs', 'select=id&role=eq.admin&limit=3')
    for (const admin of admins) {
      await sbInsert('messages', {
        destinataire_user_id: admin.id,
        expediteur_nom:       'Chatbot Vitrine',
        expediteur_role:      'system',
        sujet,
        objet:                sujet,
        contenu:              msg,
        corps:                msg,
        lu:                   false,
        created_at:           now
      })
    }
  } catch(e) { console.error('notifyAdmin message error:', e.message) }
  alertAdminSms(prospectInfo).catch(e => console.error('alertAdminSms fallback error:', e.message))
}

async function callVitrineAI(messages, systemPrompt) {
  const errors = []

  // Essai 1 : Claude (primaire, avec fallback DeepSeek → Groq)
  const result = await callLLM({
    provider: 'auto',
    messages,
    system: systemPrompt,
    max_tokens: 500,
    temperature: 0.7,
    timeout_ms: 15000
  })
  if (result.success && result.text.trim()) return { reply: result.text, provider: result.provider_used, model: result.model_used }
  if (result.errors) errors.push(...result.errors)

  // Essai 2 : Groq modèle léger (plus rapide, timeout court)
  const fastResult = await callLLM({
    provider: 'groq',
    model: 'llama-3.1-8b-instant',
    messages,
    system: systemPrompt,
    max_tokens: 400,
    temperature: 0.7,
    timeout_ms: 6000,
    fallback_chain: false
  })
  if (fastResult.success && fastResult.text.trim()) return { reply: fastResult.text, provider: fastResult.provider_used, model: fastResult.model_used }
  if (fastResult.errors) errors.push(...fastResult.errors)

  console.error('Vitrine-chat — toutes les IA ont échoué:', errors.join(' | '))
  return null
}

exports.handler = async (event) => {
  const corsHeaders = getCorsHeaders(event.headers?.origin)

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: corsHeaders, body: '' }
  if (event.httpMethod !== 'POST')    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Méthode non autorisée' }) }

  let body
  try { body = JSON.parse(event.body || '{}') }
  catch { return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'JSON invalide' }) } }

  const { messages = [], action, prospect } = body

  if (action === 'capture_prospect') {
    if (!prospect?.nom && !prospect?.telephone && !prospect?.email) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Informations prospect manquantes' }) }
    }
    try {
      await sbInsert('prospects', {
        nom:       prospect.nom       || '',
        prenom:    prospect.prenom    || '',
        telephone: prospect.telephone || '',
        email:     prospect.email     || '',
        niveau:    prospect.niveau    || '',
        interet:   prospect.interet   || '',
        message:   prospect.message   || '',
        source:    'vitrine_chatbot',
        created_at: new Date().toISOString()
      })
      await notifyAdmin(prospect)
      return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true }) }
    } catch(e) {
      console.error('capture_prospect error:', e.message)
      notifyAdmin(prospect).catch(() => {})
      return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true }) }
    }
  }

  if (!messages.length) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Messages requis' }) }
  }

  const mkt = await loadMarketingInfo().catch(() => ({}))

  const prixInfo = [
    mkt.prix_general    ? `Cours Général : ${mkt.prix_general}` : 'Cours Général : à partir de 35 000 FCFA/mois',
    mkt.prix_business   ? `Business English : ${mkt.prix_business}` : 'Business English : à partir de 45 000 FCFA/mois',
    mkt.prix_bac_bepc   ? `Prépa BAC/BEPC : ${mkt.prix_bac_bepc}` : 'Prépa BAC/BEPC : à partir de 25 000 FCFA/mois',
    mkt.prix_toeic      ? `TOEIC/TOEFL : ${mkt.prix_toeic}` : 'TOEIC/TOEFL : nous consulter',
    mkt.prix_kids       ? `Kids & Juniors : ${mkt.prix_kids}` : 'Kids & Juniors : à partir de 20 000 FCFA/mois',
  ].join('\n')

  const inscriptionInfo = mkt.inscription_ouverte === 'true'
    ? `Les inscriptions sont OUVERTES. ${mkt.periode_inscription || ''}`
    : `Prochaine rentrée : ${mkt.prochaine_rentree || 'Nous contacter pour les dates'}`

  const contactInfo = mkt.contact_inscription || '+225 XX XX XX XX'

  const systemPrompt = `Tu es l'assistant commercial de EIP (English In Practice), l'école d'anglais de l'AGTM Digital Academy basée à Abidjan, Côte d'Ivoire.

Ton objectif : répondre aux questions des visiteurs sur les formations, les inciter à s'inscrire, et collecter leurs coordonnées pour que l'équipe les recontacte.

INFORMATIONS SUR L'ÉCOLE :
- Nom complet : EIP - English In Practice (AGTM Digital Academy)
- Spécialité : Anglais pour adultes, professionnels et étudiants — Abidjan, Côte d'Ivoire
- Niveaux CECRL : A1 (Débutant) → C2 (Bilingue)
- Méthode : pratique, immersive, orientée communication réelle

FORMATIONS PROPOSÉES :
1. Cours Général (A1→C1) — Grammaire, Speaking, Listening, Writing
2. Business English (B1→C1) — Emails, présentations, réunions, négociations
3. Préparation BAC/BEPC Anglais — Spécial lycéens ivoiriens
4. Préparation TOEIC/TOEFL — Certifications internationales
5. English for Kids — Enfants 6-15 ans, méthode ludique

TARIFS :
${prixInfo}

INSCRIPTIONS :
${inscriptionInfo}
Contact : ${contactInfo}

RÈGLES DE CONDUITE :
- Réponds TOUJOURS en français (sauf si on te parle en anglais)
- Sois chaleureux, professionnel, bref (max 3 paragraphes)
- N'utilise PAS de markdown (pas d'étoiles, tirets, dièses)
- Si quelqu'un est intéressé : demande son prénom, son numéro de téléphone et son niveau actuel
- Une fois que tu as nom + téléphone : dis-leur que l'équipe va les rappeler et confirme avec le message : "PROSPECT_READY:{nom}|{telephone}|{email_optionnel}|{niveau}|{interet}"
- Ne donne JAMAIS de prix non mentionnés ci-dessus, redirige vers le contact
- Ne réponds pas aux questions hors contexte formation/anglais/école`

  const normalised = messages.slice(-10).filter(m =>
    m?.role && m?.content && typeof m.content === 'string' && ['user','assistant'].includes(m.role)
  )

  if (!normalised.length) {
    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ reply: "Bonjour ! Je suis l'assistant EIP. Comment puis-je vous aider ?" }) }
  }

  const lastUserMsg = normalised.filter(m => m.role === 'user').slice(-1)[0]?.content || ''

  let reply = ''
  let providerUsed = ''
  let modelUsed = ''

  const aiResult = await callVitrineAI(normalised, systemPrompt)
  if (aiResult) {
    reply = aiResult.reply
    providerUsed = aiResult.provider
    modelUsed = aiResult.model
  }

  if (!reply || !reply.trim()) {
    reply = staticFallback(lastUserMsg, mkt)
    providerUsed = 'static'
    modelUsed = 'faq'
  }

  let captureSignal = null
  const captureMatch = reply.match(/PROSPECT_READY:([^\s"']+)/)
  if (captureMatch) {
    const parts = captureMatch[1].split('|')
    captureSignal = {
      nom: parts[0] || '',
      telephone: parts[1] || '',
      email: parts[2] || '',
      niveau: parts[3] || '',
      interet: parts[4] || 'Formation EIP'
    }
    reply = reply.replace(/PROSPECT_READY:[^\s"']+/, '').trim()
  }

  if (!captureSignal) {
    const detected = detectProspectFromMessages(normalised)
    if (detected && detected.telephone) {
      captureSignal = {
        nom: detected.nom,
        telephone: detected.telephone,
        email: detected.email,
        niveau: detected.niveau,
        interet: detected.interet || 'Formation EIP'
      }
    }
  }

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify({ reply, capture: captureSignal, provider: providerUsed, model: modelUsed })
  }
}
