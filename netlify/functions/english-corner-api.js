// english-corner-api.js — Netlify serverless function
// Proxies API calls for the English Corner
// API keys are read from environment variables (never exposed to the browser)
// Cache Supabase : TTL 24h (listenotes) pour économiser les quotas API

const https = require('https');
const { callLLM } = require('./lib/llm-providers');

// ── Supabase REST helpers ─────────────────────────────────────────
const SB_URL   = process.env.SUPABASE_URL          || '';
// Service key pour écriture cache (upsert) — lecture aussi
const SB_KEY   = process.env.SUPABASE_SERVICE_KEY  || process.env.SUPABASE_ANON || '';
const CACHE_TTL_MS = 1 * 60 * 60 * 1000; // 1 heure (était 24h)

async function sbGet(table, filters) {
  if (!SB_URL || !SB_KEY) return null;
  let qs = Object.entries(filters).map(([k,v]) => `${k}=eq.${encodeURIComponent(v)}`).join('&');
  const url = `${SB_URL}/rest/v1/${table}?${qs}&limit=1`;
  try {
    const rows = await fetchJson(url, {
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, 'Content-Type': 'application/json' },
    });
    return Array.isArray(rows) && rows.length ? rows[0] : null;
  } catch { return null; }
}

async function sbUpsert(table, row) {
  if (!SB_URL || !SB_KEY) return;
  const url = `${SB_URL}/rest/v1/${table}`;
  try {
    await fetchJson(url, {
      method: 'POST',
      headers: {
        apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(row),
    });
  } catch { /* cache write failure is non-fatal */ }
}

// Helper: emoji par catégorie
function getEmojiForCategory(category) {
  const emojiMap = {
    'Grammar': '📝',
    'Vocabulary': '📚',
    'Speaking': '🗣️',
    'Listening': '👂',
    'Writing': '✏️',
    'TOEIC': '🎯',
    'Business': '💼',
    'Pronunciation': '🔊',
    'Conversation': '💬',
    'Culture': '🌍',
    'Exam': '📋',
    'General': '🎬'
  };
  return emojiMap[category] || '🎬';
}

function fetchJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const reqOptions = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: options.headers || {},
      timeout: 15000
    };
    const req = https.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 400) {
          let parsed = {};
          try { parsed = JSON.parse(data) } catch {}
          resolve({ _error: true, _status: res.statusCode, error: parsed, _raw: data.substring(0, 500) });
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch (e) { resolve({ _raw: data, _status: res.statusCode }); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Request timeout (15s)')); });
    if (options.body) req.write(options.body);
    req.end();
  });
}

exports.handler = async (event, context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  const params = event.queryStringParameters || {};
  const service = params.service;

  try {
    // ── 1. YOUTUBE (avec cache Supabase + pagination) ─────────────
    if (service === 'youtube') {
      const key = process.env.YOUTUBE_API_KEY;
      if (!key) {
        // Sans clé YouTube, essayer de servir depuis corner_content
        let dbVideos = [];
        try {
          const vUrl = `${SB_URL}/rest/v1/corner_content?select=id,title,level,url,topic&type=eq.video&active=eq.true&order=priority.desc&limit=2000`;
          const vData = await fetchJson(vUrl, {
            headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, 'Content-Type': 'application/json' },
          });
          dbVideos = Array.isArray(vData) ? vData.map(v => ({
            id: v.url?.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/|^)([a-zA-Z0-9_-]{11})/)?.[1] || v.id,
            title: v.title || '',
            level: v.level || 'B1',
            channel: v.topic || 'EIP English In Practice',
            thumb: `https://i.ytimg.com/vi/${v.url?.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/|^)([a-zA-Z0-9_-]{11})/)?.[1] || v.id}/mqdefault.jpg`
          })) : [];
        } catch(e) { /* silent */ }
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ videos: dbVideos, total: dbVideos.length, page: 1, limit: dbVideos.length }),
        };
      }
      
      const page = parseInt(params.page) || 1;
      const limit = parseInt(params.limit) || 50;
      const offset = (page - 1) * limit;
      
      // 1. Vérifier cache Supabase d'abord
      const cacheKey = `youtube_videos_page_${page}_limit_${limit}`;
      const cached = await sbGet('api_cache', { key: cacheKey });
      
      if (cached && Date.now() - new Date(cached.updated_at).getTime() < CACHE_TTL_MS) {
        // Cache valide (moins de 24h)
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            videos: cached.value.videos || [],
            total: cached.value.total || 0,
            page,
            limit,
            cached: true
          }),
        };
      }
      
      // 2. Récupérer playlists depuis Supabase (table corner_content)
      let playlists = [];
      try {
        const playlistsUrl = `${SB_URL}/rest/v1/corner_content?select=id,title,provider,level,topic,url&type=eq.playlist&active=eq.true&order=priority.desc`;
        const playlistsData = await fetchJson(playlistsUrl, {
          headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, 'Content-Type': 'application/json' },
        });
        playlists = Array.isArray(playlistsData) ? playlistsData : [];
        
        // Extraire playlist_id depuis l'URL YouTube
        playlists = playlists.map(playlist => {
          const url = playlist.url || '';
          const playlistIdMatch = url.match(/list=([^&]+)/);
          return {
            ...playlist,
            playlist_id: playlistIdMatch ? playlistIdMatch[1] : playlist.id,
            channel: playlist.provider || 'EIP English In Practice',
            category: playlist.topic || 'General'
          };
        }).filter(p => p.playlist_id);
        
        console.log(`Found ${playlists.length} playlists from corner_content`);
      } catch (err) {
        console.error('Error fetching playlists from corner_content:', err);
      }
      
      // 3. Si pas de playlists, utiliser recherche par défaut
      let allVideos = [];
      let totalVideos = 0;
      
      if (playlists.length > 0) {
        // Récupérer vidéos de chaque playlist avec pagination YouTube
        const MAX_VIDEOS_TOTAL = 2000; // Supporte jusqu'à 2000 vidéos
        for (const playlist of playlists) { // Toutes les playlists, plus de limite à 5
          if (allVideos.length >= MAX_VIDEOS_TOTAL) break;
          try {
            let nextPageToken = '';
            let retries = 0;
            do {
              const pageTokenParam = nextPageToken ? `&pageToken=${nextPageToken}` : '';
              const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlist.playlist_id}&key=${key}${pageTokenParam}`;
              const playlistData = await fetchJson(playlistUrl);
              
              if (playlistData.items && playlistData.items.length > 0) {
                const playlistVideos = playlistData.items.map(item => ({
                  id: item.snippet.resourceId.videoId,
                  title: item.snippet.title,
                  channel: playlist.channel || item.snippet.channelTitle,
                  level: playlist.level || 'A2',
                  cat: playlist.category || 'Listening',
                  duration: '--:--',
                  thumb: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
                  emoji: getEmojiForCategory(playlist.category)
                }));
                
                allVideos = [...allVideos, ...playlistVideos];
                if (!totalVideos) totalVideos = playlistData.pageInfo?.totalResults || 0;
                nextPageToken = playlistData.nextPageToken || '';
              } else {
                nextPageToken = '';
              }
              retries++;
              if (allVideos.length >= MAX_VIDEOS_TOTAL) break;
            } while (nextPageToken && retries < 40); // Max 40 pages × 50 = 2000 vidéos par playlist
          } catch (err) {
            console.error(`Error fetching playlist ${playlist.playlist_id}:`, err);
          }
        }
        if (!totalVideos) totalVideos = allVideos.length;
      } else {
        // Fallback: recherche YouTube
        const q = encodeURIComponent(params.q || 'BBC Learning English grammar');
        const maxResults = Math.min(limit, 50);
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${q}&maxResults=${maxResults}&key=${key}`;
        const data = await fetchJson(url);
        
        if (data.items) {
          allVideos = data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            level: 'B1',
            cat: 'General',
            duration: '--:--',
            thumb: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
            emoji: '🎬'
          }));
          totalVideos = data.pageInfo?.totalResults || allVideos.length;
        }
      }
      
      // 4. Pagination locale (découpage propre sans wrap-around)
      const startIndex = Math.min(offset, Math.max(0, allVideos.length - 1));
      const paginatedVideos = allVideos.slice(startIndex, startIndex + limit);
      
      // 5. Mettre en cache dans Supabase
      if (paginatedVideos.length > 0) {
        await sbUpsert('api_cache', {
          key: cacheKey,
          value: { videos: paginatedVideos, total: totalVideos },
          updated_at: new Date().toISOString()
        });
      }
      
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videos: paginatedVideos,
          total: totalVideos,
          page,
          limit,
          cached: false
        }),
      };
    }

    // ── 2. NEWS ─────────────────────────────────────────────────
    if (service === 'news') {
      const key = process.env.NEWS_API_KEY;
      if (!key) {
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'NEWS_API_KEY not configured', articles: [] }),
        };
      }
      const q = encodeURIComponent(params.q || 'English learning');
      const url = `https://newsapi.org/v2/everything?language=en&pageSize=6&q=${q}&apiKey=${key}`;
      const data = await fetchJson(url);
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
    }

    // ── 3. MERRIAM-WEBSTER ──────────────────────────────────────
    if (service === 'merriam') {
      const key = process.env.MERRIAM_WEBSTER_KEY;
      if (!key) {
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'MERRIAM_WEBSTER_KEY not configured' }),
        };
      }
      const word = encodeURIComponent(params.word || 'resilient');
      const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`;
      const data = await fetchJson(url);
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
    }

    // ── 4. LISTEN NOTES (avec cache Supabase 24h) ───────────────
    if (service === 'listenotes') {
      const key = process.env.LISTEN_NOTES_KEY;
      if (!key) {
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'LISTEN_NOTES_KEY not configured', results: [] }),
        };
      }
      const lnHeaders = { 'X-ListenAPI-Key': key };
      const action   = params.action   || 'search';
      const pageSize = params.page_size || '12';
      const offset   = params.offset   || '0';
      const q        = params.q        || 'BBC Learning English';

      // Clé de cache : action + query + offset + pageSize
      const cacheKey = `ln:${action}:${q}:${offset}:${pageSize}`;

      // ── 1. Vérifier le cache Supabase ────────────────────────
      const cached = await sbGet('ec_api_cache', { cache_key: cacheKey });
      if (cached && cached.data && cached.cached_at) {
        const age = Date.now() - new Date(cached.cached_at).getTime();
        if (age < CACHE_TTL_MS) {
          return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
            body: JSON.stringify({ ...cached.data, _cached: true, _cached_at: cached.cached_at }),
          };
        }
      }

      // ── 2. Appel Listen Notes si cache absent/expiré ─────────
      let apiUrl;
      if (action === 'best_podcasts') {
        const genreId = params.genre_id || '68';
        apiUrl = `https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${genreId}&page=1&region=us&safe_mode=0`;
      } else if (action === 'podcast_episodes') {
        const podId = params.podcast_id || '';
        if (!podId) return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'podcast_id required' }) };
        apiUrl = `https://listen-api.listennotes.com/api/v2/podcasts/${encodeURIComponent(podId)}/episodes?page_size=${pageSize}&sort=recent_first`;
      } else {
        apiUrl = `https://listen-api.listennotes.com/api/v2/search?type=episode&language=English&page_size=${pageSize}&offset=${offset}&q=${encodeURIComponent(q)}`;
      }

      const data = await fetchJson(apiUrl, { headers: lnHeaders });

      // ── 3. Sauvegarder dans le cache Supabase ────────────────
      if (!data.error && !data._raw) {
        await sbUpsert('ec_api_cache', {
          cache_key:  cacheKey,
          data:       data,
          cached_at:  new Date().toISOString(),
          service:    'listenotes',
          query:      q,
          action:     action,
        });
      }

      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
        body: JSON.stringify(data),
      };
    }

    // ── 5. AI QUIZ (via callLLM: Claude → DeepSeek → Groq) ────────
    if (service === 'claude-quiz') {
      let body;
      try {
        body = JSON.parse(event.body || '{}');
      } catch (e) {
        body = {};
      }

      const prompt = body.prompt || 'Generate 3 English comprehension questions.';

      const result = await callLLM({
        provider: 'auto',
        messages: [{ role: 'user', content: prompt }],
        system: 'You are an expert English teacher. Generate the requested content.',
        max_tokens: 1200,
        temperature: 0.7
      });

      const text = result.success
        ? result.text
        : 'No response generated. Please try again.';

      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, provider: result.provider_used, model: result.model_used }),
      };
    }

    // ── 6. YOUTUBE PLAYLIST (pagination complète) ─────────────────
    if (service === 'youtube-playlist') {
      const key = process.env.YOUTUBE_API_KEY;
      if (!key) {
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'YOUTUBE_API_KEY not configured', items: [] }),
        };
      }
      const playlistId = params.playlistId || '';
      if (!playlistId) {
        return {
          statusCode: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'playlistId parameter required', items: [] }),
        };
      }
      const maxResults = Math.min(parseInt(params.maxResults || '50'), 50);
      
      // Clé de cache : playlistId uniquement (on fetch toutes les pages)
      const cacheKey = `ytpl:${playlistId}:full`;
      
      // ── 1. Vérifier le cache Supabase ────────────────────────────
      const cached = await sbGet('ec_api_cache', { cache_key: cacheKey });
      if (cached && cached.data && cached.cached_at) {
        const age = Date.now() - new Date(cached.cached_at).getTime();
        if (age < CACHE_TTL_MS) {
          return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
            body: JSON.stringify({ ...cached.data, _cached: true, _cached_at: cached.cached_at }),
          };
        }
      }
      
      // ── 2. Fetch toutes les pages via pagination ─────────────────
      let allItems = [];
      let nextPageToken = '';
      let pageCount = 0;
      const MAX_PAGES = 10; // 10 × 50 = 500 vidéos max
      let totalResults = 0;
      let lastError = null;

      do {
        const pageTokenParam = nextPageToken ? `&pageToken=${encodeURIComponent(nextPageToken)}` : '';
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${encodeURIComponent(playlistId)}&maxResults=${maxResults}${pageTokenParam}&key=${key}`;
        const data = await fetchJson(url);

        if (data._error) {
          lastError = data;
          console.error(`YouTube playlist page ${pageCount + 1} error:`, playlistId, data._status);
          break;
        }

        if (data.items && data.items.length > 0) {
          allItems = [...allItems, ...data.items];
          totalResults = data.pageInfo?.totalResults || 0;
        }
        nextPageToken = data.nextPageToken || '';
        pageCount++;
      } while (nextPageToken && pageCount < MAX_PAGES);

      if (allItems.length === 0 && lastError) {
        console.error('YouTube playlist API error:', playlistId, lastError._status, JSON.stringify(lastError.error).substring(0, 300));
        return {
          statusCode: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            error: lastError.error?.error?.message || `YouTube API error ${lastError._status}`,
            yt_status: lastError._status,
            items: []
          }),
        };
      }

      const response = {
        items: allItems,
        totalResults: totalResults || allItems.length,
        nextPageToken: null,
        pagesFetched: pageCount,
      };
      
      // ── 3. Sauvegarder dans le cache ─────────────────────────────
      await sbUpsert('ec_api_cache', {
        cache_key:  cacheKey,
        data:       response,
        cached_at:  new Date().toISOString(),
        service:    'youtube',
        query:      playlistId,
        action:     'playlist_full',
      });
      
      return {
        statusCode: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
        body: JSON.stringify(response),
      };
    }

    // ── 7. DICTIONARY (WordReference proxy) ─────────────────────
    if (service === 'dictionary') {
      const word = params.word || '';
      const dictType = params.type || 'bilingue';
      if (!word) {
        return { statusCode: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Missing word parameter' }) };
      }
      try {
        if (dictType === 'bilingue') {
          const wrKey = process.env.WORDREFERENCE_API_KEY || '85921';
          const wrUrl = `https://api.wordreference.com/0.8/${wrKey}/json/enfr/${encodeURIComponent(word)}`;
          const wrRes = await fetchJson(wrUrl);
          return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify(wrRes) };
        } else {
          const dictUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
          const dictRes = await fetchJson(dictUrl);
          return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify(dictRes) };
        }
      } catch (e) {
        return { statusCode: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: e.message }) };
      }
    }

    // ── Unknown service ─────────────────────────────────────────
    return {
      statusCode: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: `Unknown service: ${service}. Supported: youtube, youtube-playlist, news, merriam, listenotes, claude-quiz, dictionary` }),
    };

  } catch (err) {
    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Internal server error' }),
    };
  }
};
