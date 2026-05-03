// ============================================================
//  AGTM Digital Academy — Configuration LLM centralisée
//  netlify/functions/lib/config.js
//  Modèles, timeouts, chaîne de fallback, tiers
//  © 2026 AGTM Academy — Issa Bamba
// ============================================================

const DEFAULT_MODELS = {
  claude: {
    default: 'claude-haiku-4-5-20251001',
    tiers: {
      essentiel:  'claude-haiku-4-5-20251001',
      recommande: 'claude-sonnet-4-6',
      premium:    'claude-opus-4-6'
    }
  },
  deepseek: {
    default: 'deepseek-chat',
    aliases: {
      'deepseek-reasoner': 'deepseek-reasoner',
      'deepseek-coder':    'deepseek-coder',
      'deepseek-v4':       'deepseek-chat',
      'deepseek-pro':      'deepseek-chat',
      'deepseek-flash':    'deepseek-chat'
    }
  },
  groq: {
    default: 'llama-3.3-70b-versatile',
    fast:    'llama-3.1-8b-instant'
  }
}

const DEFAULT_TIMEOUTS = {
  claude:   20000,
  deepseek: 15000,
  groq:     12000
}

const DEFAULT_FALLBACK_CHAIN = ['deepseek', 'claude', 'groq']

const DEFAULT_MAX_RETRIES = 2
const DEFAULT_RETRY_DELAY_MS = 500

function getConfig() {
  return {
    models: {
      claude: {
        default: process.env.LLM_MODEL_CLAUDE_DEFAULT     || DEFAULT_MODELS.claude.default,
        tiers: {
          essentiel:  process.env.LLM_MODEL_CLAUDE_ESSENTIEL  || DEFAULT_MODELS.claude.tiers.essentiel,
          recommande: process.env.LLM_MODEL_CLAUDE_RECOMMANDE || DEFAULT_MODELS.claude.tiers.recommande,
          premium:    process.env.LLM_MODEL_CLAUDE_PREMIUM    || DEFAULT_MODELS.claude.tiers.premium
        }
      },
      deepseek: {
        default: process.env.LLM_MODEL_DEEPSEEK_DEFAULT   || DEFAULT_MODELS.deepseek.default,
        aliases: DEFAULT_MODELS.deepseek.aliases
      },
      groq: {
        default: process.env.LLM_MODEL_GROQ_DEFAULT       || DEFAULT_MODELS.groq.default,
        fast:    process.env.LLM_MODEL_GROQ_FAST          || DEFAULT_MODELS.groq.fast
      }
    },
    timeouts: {
      claude:   parseInt(process.env.LLM_TIMEOUT_CLAUDE   || DEFAULT_TIMEOUTS.claude,   10),
      deepseek: parseInt(process.env.LLM_TIMEOUT_DEEPSEEK || DEFAULT_TIMEOUTS.deepseek, 10),
      groq:     parseInt(process.env.LLM_TIMEOUT_GROQ     || DEFAULT_TIMEOUTS.groq,     10),
      default:  parseInt(process.env.LLM_TIMEOUT_DEFAULT  || '20000', 10)
    },
    fallbackChain: (process.env.LLM_FALLBACK_ORDER || DEFAULT_FALLBACK_CHAIN.join(','))
      .split(',').map(s => s.trim()).filter(Boolean),
    maxRetries:    parseInt(process.env.LLM_RETRY_MAX    || DEFAULT_MAX_RETRIES, 10),
    retryDelayMs:  parseInt(process.env.LLM_RETRY_DELAY  || DEFAULT_RETRY_DELAY_MS, 10)
  }
}

function getModelForTier(provider, tier) {
  const cfg = getConfig()
  if (provider === 'claude' && tier && cfg.models.claude.tiers[tier]) {
    return cfg.models.claude.tiers[tier]
  }
  return cfg.models[provider]?.default || DEFAULT_MODELS[provider]?.default
}

function resolveModel(provider, requestedModel) {
  if (!requestedModel) return getModelForTier(provider)
  if (provider === 'deepseek') {
    const cfg = getConfig()
    return cfg.models.deepseek.aliases[requestedModel] || requestedModel
  }
  return requestedModel
}

module.exports = {
  DEFAULT_MODELS,
  DEFAULT_TIMEOUTS,
  DEFAULT_FALLBACK_CHAIN,
  getConfig,
  getModelForTier,
  resolveModel
}
