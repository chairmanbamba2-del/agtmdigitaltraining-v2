// ============================================================
//  AGTM Digital Academy — Routeur LLM Centralisé
//  netlify/functions/lib/llm-providers.js
//  Hiérarchie: Claude (primaire) → DeepSeek → Groq (fallback auto)
//  Rotation automatique des clés backup (429/401)
//  © 2026 AGTM Academy — Issa Bamba
// ============================================================

const { getConfig, resolveModel, getModelForTier } = require('./config')

const API_URLS = {
  claude:    'https://api.anthropic.com/v1/messages',
  deepseek:  'https://api.deepseek.com/v1/chat/completions',
  groq:      'https://api.groq.com/openai/v1/chat/completions'
}

function getKey(provider) {
  switch (provider) {
    case 'claude':   return { primary: process.env.ANTHROPIC_API_KEY,        backup: process.env.ANTHROPIC_API_KEY_BACKUP        }
    case 'deepseek': return { primary: process.env.DEEPSEEK_API_KEY,          backup: process.env.DEEPSEEK_API_KEY_BACKUP          }
    case 'groq':     return { primary: process.env.GROQ_API_KEY,              backup: process.env.GROQ_API_KEY_BACKUP              }
    default:         return { primary: null, backup: null }
  }
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal })
    clearTimeout(timer)
    return res
  } catch (e) {
    clearTimeout(timer)
    if (e.name === 'AbortError') throw new Error(`Timeout (${timeoutMs}ms)`)
    throw e
  }
}

async function callClaude({ model, messages, system, max_tokens, temperature, tools }, timeoutMs, keyIndex = 0) {
  const keys = getKey('claude')
  const key = keyIndex === 0 ? keys.primary : keys.backup
  if (!key) return { error: 'ANTHROPIC_API_KEY not configured', status: null }

  const body = { model, max_tokens, system, messages }
  if (tools && tools.length) body.tools = tools
  if (temperature !== undefined) body.temperature = temperature

  const res = await fetchWithTimeout(API_URLS.claude, {
    method: 'POST',
    headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify(body)
  }, timeoutMs)

  if (!res.ok) {
    const errText = await res.text().catch(() => res.status.toString())
    let detail = ''
    try { detail = JSON.parse(errText)?.error?.message || errText } catch { detail = errText }
    return { error: `Claude ${res.status}: ${detail.substring(0, 300)}`, status: res.status }
  }

  const data = await res.json()
  return {
    content: data,
    status: 200,
    usage: data.usage,
    model: data.model,
    provider: 'claude'
  }
}

async function callDeepSeek({ model, messages, system, max_tokens, temperature }, timeoutMs, keyIndex = 0) {
  const keys = getKey('deepseek')
  const key = keyIndex === 0 ? keys.primary : keys.backup
  if (!key) return { error: 'DEEPSEEK_API_KEY not configured', status: null }

  const body = {
    model, max_tokens,
    temperature: temperature !== undefined ? temperature : 0.3,
    messages: [
      { role: 'system', content: system || 'You are a helpful assistant.' },
      ...messages.map(m => ({ role: m.role, content: typeof m.content === 'string' ? m.content : '' }))
    ]
  }

  const res = await fetchWithTimeout(API_URLS.deepseek, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }, timeoutMs)

  if (!res.ok) {
    const errText = await res.text().catch(() => res.status.toString())
    return { error: `DeepSeek ${res.status}: ${errText.substring(0, 300)}`, status: res.status }
  }

  const data = await res.json()
  return {
    content: data,
    status: 200,
    usage: data.usage,
    model: data.model,
    provider: 'deepseek'
  }
}

async function callGroq({ model, messages, system, max_tokens, temperature }, timeoutMs, keyIndex = 0) {
  const keys = getKey('groq')
  const key = keyIndex === 0 ? keys.primary : keys.backup
  if (!key) return { error: 'GROQ_API_KEY not configured', status: null }

  const body = {
    model, max_tokens,
    temperature: temperature !== undefined ? temperature : 0.7,
    messages: [
      { role: 'system', content: system || 'You are a helpful assistant.' },
      ...messages.map(m => ({ role: m.role, content: typeof m.content === 'string' ? m.content : '' }))
    ]
  }

  const res = await fetchWithTimeout(API_URLS.groq, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }, timeoutMs)

  if (!res.ok) {
    const errText = await res.text().catch(() => res.status.toString())
    return { error: `Groq ${res.status}: ${errText.substring(0, 300)}`, status: res.status }
  }

  const data = await res.json()
  return {
    content: data,
    status: 200,
    usage: data.usage,
    model: data.model,
    provider: 'groq'
  }
}

const PROVIDER_CALLERS = { claude: callClaude, deepseek: callDeepSeek, groq: callGroq }

function shouldRotateKey(status) {
  return status === 429 || status === 401
}

function extractText(provider, response) {
  if (!response || !response.content) return ''
  switch (provider) {
    case 'claude':
      return response.content?.content
        ? response.content.content.filter(c => c.type === 'text').map(c => c.text).join('\n')
        : ''
    case 'deepseek':
    case 'groq':
      return response.content.choices?.[0]?.message?.content || ''
    default:
      return ''
  }
}

function computeDuration(startTime) {
  return Date.now() - startTime
}

/**
 * Routeur central d'appel LLM
 *
 * @param {Object} opts
 * @param {string}  opts.provider        - 'claude' | 'deepseek' | 'groq' | 'auto'
 * @param {string}  opts.model           - override modèle
 * @param {string}  opts.tier            - tier utilisateur (essentiel/recommande/premium/groq)
 * @param {Array}   opts.messages        - [{ role, content }]
 * @param {string}  opts.system          - system prompt
 * @param {number}  opts.max_tokens      - max tokens
 * @param {number}  opts.temperature     - temperature
 * @param {Array}   opts.tools           - outils Claude (ignorés par DeepSeek/Groq)
 * @param {number}  opts.timeout_ms      - override timeout
 * @param {number}  opts.retries         - nombre de retries par provider
 * @param {boolean} opts.fallback_chain  - activer la chaîne de fallback (défaut: true)
 *
 * @returns {Object} { success, text, provider_used, model_used, usage, duration_ms, errors[] }
 */
async function callLLM(opts = {}) {
  const cfg = getConfig()
  const {
    provider     = 'auto',
    model        = null,
    tier         = null,
    messages     = [],
    system       = '',
    max_tokens   = 1500,
    temperature  = undefined,
    tools        = null,
    timeout_ms   = null,
    retries      = cfg.maxRetries,
    fallback_chain = true
  } = opts

  const startTime = Date.now()
  const errors = []

  const effectiveProvider = provider === 'auto' ? cfg.fallbackChain[0] : provider
  const providersToTry = fallback_chain
    ? [...new Set([effectiveProvider, ...cfg.fallbackChain.filter(p => p !== effectiveProvider)])]
    : [effectiveProvider]

  for (const prov of providersToTry) {
    const caller = PROVIDER_CALLERS[prov]
    if (!caller) {
      errors.push(`Provider inconnu: ${prov}`)
      continue
    }

    const keys = getKey(prov)
    if (!keys.primary) {
      errors.push(`${prov}: clé API primaire absente`)
      continue
    }

    const resolvedModel = model
      ? resolveModel(prov, model)
      : tier
        ? getModelForTier(prov, tier)
        : resolveModel(prov, cfg.models[prov]?.default)

    const timeout = timeout_ms || cfg.timeouts[prov] || cfg.timeouts.default
    const maxRetries = Math.min(retries, cfg.maxRetries)

    const callParams = {
      model: resolvedModel,
      messages,
      system,
      max_tokens,
      temperature,
      tools: prov === 'claude' ? tools : null
    }

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const keyIndex = attempt === 0 ? 0 : 1
      const result = await caller(callParams, timeout, keyIndex)

      if (result.status === 200) {
        return {
          success: true,
          text: extractText(prov, result),
          raw: result.content,
          provider_used: prov,
          model_used: resolvedModel,
          usage: result.usage,
          duration_ms: computeDuration(startTime),
          errors: errors.length ? errors : undefined
        }
      }

      if (shouldRotateKey(result.status) && attempt < maxRetries) {
        errors.push(`${prov} (tentative ${attempt + 1}): ${result.error} → rotation clé`)
        await new Promise(r => setTimeout(r, cfg.retryDelayMs))
        continue
      }

      if (attempt < maxRetries) {
        errors.push(`${prov} (tentative ${attempt + 1}): ${result.error}`)
        await new Promise(r => setTimeout(r, cfg.retryDelayMs))
        continue
      }

      errors.push(`${prov}: ${result.error}`)
      break
    }
  }

  return {
    success: false,
    text: '',
    raw: null,
    provider_used: null,
    model_used: null,
    usage: null,
    duration_ms: computeDuration(startTime),
    errors
  }
}

module.exports = { callLLM, callClaude, callDeepSeek, callGroq, extractText, getConfig }
