const BRAVE_KEY = process.env.BRAVE_SEARCH_API_KEY || ''
const TAVILY_KEY = process.env.TAVILY_API_KEY || ''

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json'
}

function json(status, body) {
  return { statusCode: status, headers: CORS, body: JSON.stringify(body) }
}

async function searchBrave(query, count = 5) {
  const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${count}`
  const res = await fetch(url, {
    headers: { 'Accept': 'application/json', 'Accept-Encoding': 'gzip', 'X-Subscription-Token': BRAVE_KEY }
  })
  if (!res.ok) throw new Error('Brave search error: ' + res.status)
  const data = await res.json()
  return (data.web?.results || []).map(r => ({
    title: r.title,
    url: r.url,
    snippet: r.description || ''
  }))
}

async function searchTavily(query, count = 5) {
  const res = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: TAVILY_KEY, query, max_results: count, search_depth: 'basic' })
  })
  if (!res.ok) throw new Error('Tavily search error: ' + res.status)
  const data = await res.json()
  return (data.results || []).map(r => ({
    title: r.title,
    url: r.url,
    snippet: r.content || ''
  }))
}

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') return json(200, {})
  if (event.httpMethod !== 'GET' && event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  try {
    let query, count = 5

    if (event.httpMethod === 'GET') {
      const params = event.queryStringParameters || {}
      query = params.q || ''
      count = parseInt(params.count) || 5
    } else {
      const body = JSON.parse(event.body || '{}')
      query = body.q || body.query || ''
      count = body.count || 5
    }

    if (!query) return json(400, { error: 'Missing search query' })

    let results
    try {
      results = BRAVE_KEY ? await searchBrave(query, count) : await searchTavily(query, count)
    } catch {
      results = TAVILY_KEY ? await searchTavily(query, count) : await searchBrave(query, count)
    }

    return json(200, { results, query, count: results.length })
  } catch (err) {
    console.error('web-search error:', err)
    return json(500, { error: err.message || 'Search failed' })
  }
}
