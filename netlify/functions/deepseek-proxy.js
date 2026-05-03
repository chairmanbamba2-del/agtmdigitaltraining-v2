// ============================================================
//  AGTM Digital Academy — Proxy DeepSeek API (DÉPRÉCIÉ)
//  Netlify Function: deepseek-proxy.js
//  ⚠ Ce fichier est déprécié au profit du module centralisé
//    netlify/functions/lib/llm-providers.js (callLLM)
//  Maintenu pour backward compatibility uniquement
//  © 2026 AGTM Academy — Issa Bamba
// ============================================================

const { callLLM } = require('./lib/llm-providers')

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Méthode non autorisée' }) }
  }

  try {
    const body = JSON.parse(event.body || '{}')

    if (!body.messages || !Array.isArray(body.messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Le champ "messages" est requis et doit être un tableau' })
      }
    }

    const result = await callLLM({
      provider: 'deepseek',
      model: body.model || 'deepseek-chat',
      messages: body.messages,
      max_tokens: body.max_tokens || 2000,
      temperature: body.temperature !== undefined ? body.temperature : 0.7
    })

    if (!result.success) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          error: 'Erreur API DeepSeek',
          details: result.errors
        })
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reply: result.text,
        model: result.model_used,
        usage: result.usage,
        provider: 'deepseek',
        deprecated: true
      })
    }

  } catch (error) {
    console.error('DeepSeek proxy error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Erreur interne du proxy DeepSeek',
        message: error.message
      })
    }
  }
}
