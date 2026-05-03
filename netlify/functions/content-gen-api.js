const { callLLM } = require('./lib/llm-providers')

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

function buildPrompt(params) {
  const { module, secteur, domaine, docType, prospect, tone, depth, goal, content, lecon, niveau, pages, slidesCount, projet, couleurs, produits, profil } = params

  let specificInstructions = ''
  let sectionsCount = depth || 5

  if ((docType === 'Cours' || docType === 'Course') && lecon) {
    specificInstructions = `\nGenerate a complete lesson plan for "${lecon}" at ${niveau} level.\nStructure: introduction, main concepts (${sectionsCount} parts), examples, exercises, summary.\nAdapt the language and complexity for ${niveau} level students.`
  } else if (docType === 'Presentation' || docType === 'Pitch deck' || docType === 'Presentation investisseur') {
    const slidesN = Math.min(slidesCount || 5, 20)
    sectionsCount = slidesN
    const elements = (projet && projet.elements && projet.elements.length) ? projet.elements.join(', ') : 'all sections'
    const cible = (projet && projet.cible) || 'general audience'
    specificInstructions = `\nGenerate a professional presentation for "${projet?.nom || 'the project'}" targeting ${cible}.\nContext: ${projet?.contexte || 'No context provided'}\nInclude these sections: ${elements}\nGenerate exactly ${slidesN} slides. Each slide should be concise and impactful for a ${cible} audience.\nSlide 1 should be a title slide with the project name and tagline.`
  } else if (docType === 'Fiche de paie' || docType === 'Bulletin salaire') {
    specificInstructions = `\nGenerate a professional payroll document template.\nInclude: employee info, gross salary, social contributions breakdown, net salary, employer contributions, payment date.\nLeave salary amounts as variables with clear labels.`
  } else if (docType === 'Versement journalier') {
    specificInstructions = `\nGenerate a daily payment report for a transport/VTC driver.\nInclude: driver name, vehicle, date, number of trips, total revenue, platform commission, fuel cost, driver net earnings, company share.`
  } else if (docType === 'Rapport mecanique') {
    specificInstructions = `\nGenerate a vehicle mechanical inspection report.\nInclude: vehicle info, mileage, inspection date, checklist of components (engine, brakes, tires, lights, AC), issues found, recommended actions, cost estimate, next maintenance date.`
  } else if (docType === 'Fiche vehicule') {
    specificInstructions = `\nGenerate a vehicle information sheet.\nInclude: make/model, year, license plate, VIN, owner, insurance policy, technical inspection dates, fuel type, current mileage, registration documents status.`
  } else if (docType === 'Suivi assurance') {
    specificInstructions = `\nGenerate an insurance tracking document.\nInclude: policy number, insurer, coverage type, vehicle(s) covered, premium amount, payment schedule, renewal date, claims history.`
  } else if (docType === 'Rapport financier' || docType === 'Rapport') {
    specificInstructions = `\nGenerate a financial/professional report with ${sectionsCount} sections.\nInclude: executive summary, key figures, detailed analysis, recommendations, next steps.\nUse professional language suitable for management.`
  } else if (docType === 'Facture' || docType === 'Facture proforma') {
    const produitsStr = (produits && produits.length) ? `\nAvailable products: ${produits.map(p => `${p.nom} (${p.prix_ht} FCFA, TVA ${p.tva}%)`).join(', ')}` : ''
    specificInstructions = `\nGenerate a professional ${docType.toLowerCase()} document.${produitsStr}\nInclude: document number, date, client info, itemized list of products/services, unit prices, quantities, VAT, total, payment terms.`
  } else if (docType === 'Ordonnance' || docType === 'Prescription') {
    specificInstructions = `\nGenerate a medical prescription document.\nInclude: patient info, date, prescribed medications (name, dosage, duration), doctor's signature area, medical stamp area.`
  } else {
    specificInstructions = `\nGenerate professional content for ${docType || 'document'} in ${secteur} sector.\nInclude ${sectionsCount} relevant sections with practical, actionable content.`
  }

  const produitsStr = (produits && produits.length)
    ? `\nProducts/services catalog:\n${produits.map(p => `- ${p.nom}: ${p.prix_ht} FCFA/unit (TVA ${p.tva}%)`).join('\n')}`
    : ''

  const profilStr = (profil && profil.nom_structure)
    ? `\nCompany: ${profil.nom_structure} | ${profil.adresse || ''} | RC: ${profil.rc || ''} | Devise: ${profil.devise || 'FCFA'}`
    : ''

  const cols = (couleurs && couleurs.length) ? couleurs : ['#0C1F40', '#E8631A', '#F5A623']

  return `You are Impact Gen, a professional content generation AI founded by Issa BAMBA.

Generate ${sectionsCount} sections of content for the following:

DOCUMENT TYPE: ${docType || 'Document'}
SECTOR: ${secteur || 'General'}
DOMAIN: ${domaine || ''}
TARGET/CLIENT: ${prospect || 'Client'}
TONE: ${tone || 'Professional'}
GOAL: ${goal || 'Professional communication'}
USER CONTENT: ${content || 'Not provided'}${produitsStr}${profilStr}${specificInstructions}

Brand colors: primary ${cols[0]}, secondary ${cols[1]}, accent ${cols[2]}.

Return ONLY valid JSON (no markdown, no code fences):
{"slides":[{"tag":"S1","title":"...","h":"...","pts":["point 1","point 2","point 3"]},...],"stats":{"doc_count":${sectionsCount},"duration":0,"source_count":8,"quality":"98%"}}

Each point should be professional and practical. Total slides = ${sectionsCount}.`
}

function parseResult(text) {
  let cleaned = text.trim()
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```\n?$/g, '').trim()
  }
  if (cleaned.startsWith('{') && cleaned.endsWith('}')) {
    return JSON.parse(cleaned)
  }
  const braceStart = cleaned.indexOf('{')
  const braceEnd = cleaned.lastIndexOf('}')
  if (braceStart >= 0 && braceEnd > braceStart) {
    return JSON.parse(cleaned.substring(braceStart, braceEnd + 1))
  }
  throw new Error('No valid JSON found in response')
}

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') return json(200, {})
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' })

  try {
    const params = JSON.parse(event.body || '{}')
    const prompt = buildPrompt(params)
    const tier = params.tier || 'free'
    const startTime = Date.now()

    const result = await callLLM({
      provider: 'auto',
      messages: [{ role: 'user', content: prompt }],
      system: '',
      max_tokens: 4096,
      temperature: 0.7
    })

    if (!result.success) {
      return json(502, { error: 'All AI providers failed', details: result.errors })
    }

    const modelResult = parseResult(result.text)
    const duration = Math.round((Date.now() - startTime) / 1000)

    if (modelResult.stats) {
      modelResult.stats.duration = modelResult.stats.duration || duration
    }

    modelResult._provider = result.provider_used
    modelResult._model = result.model_used
    modelResult._duration_ms = result.duration_ms

    return json(200, modelResult)
  } catch (err) {
    console.error('content-gen-api error:', err)
    return json(500, { error: err.message || 'Internal error' })
  }
}
