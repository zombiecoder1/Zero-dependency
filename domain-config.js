// =============================================================================
// Domain Configuration — Per-Server Identity & Settings
// Mission Barisal v3 — Zero Dependency
// =============================================================================
// প্রতিটি deployed server নিজের domain দিয়ে নিজেকে চিহ্নিত করে।
// Host header থেকে detect করে, নাহলে DEPLOY_DOMAIN env var ব্যবহার করে।
// প্রতিটি domain-এর জন্য আলাদা: CORS, Pusher, Identity, Rate Limits, Features
// =============================================================================

const DOMAIN_CONFIGS = {
  // ── Production: m.skilltoearn.org ──────────────────────────
  // Full-featured: Frontend UI + API + Pusher + All Models
  "m.skilltoearn.org": {
    name: "Mission Barisal — Production",
    domain: "m.skilltoearn.org",
    version: "3.2.1",
    type: "production",
    hasFrontend: true,
    hasPusher: true,  // .env-এ PUSHER_* থাকলে কাজ করবে
    hasDevModels: true,  // /api/v1/models দেখাবে
    maxRateLimitPerServer: 50,  // 50 requests/min per server instance
    corsOrigins: [
      "http://m.skilltoearn.org",
      "https://m.skilltoearn.org",
      "http://localhost:3000",
      "http://localhost:5010",
      "http://localhost:7799",
    ],
    sessionVerifyUrl: "http://zombiecoder.my.id/api/verify-session",
    identity: {
      name: "ZombieCoder",
      version: "3.2.1",
      tagline: "যেখানে কোড ও কথা বলে",
      branding: {
        owner: "Sahon Srabon",
        organization: "Developer Zone",
        address: "235 South Pirarbag, Amtala Bazar, Mirpur - 60 feet",
        location: "Barisal, Bangladesh",
        contact: {
          phone: "+880 1323-626282",
          email: "infi@zombiecoder.my.id",
          website: "http://zombiecoder.my.id/",
        },
      },
      project: "Mission Barisal — Multi-Agent Code Platform",
      runtime: "Zero Dependency · Pure Node.js",
    },
  },

  // ── Render Free Tier: zero-dependency-server.onrender.com ──
  // API-only (no frontend), Pusher enabled, medium models
  "zero-dependency-server.onrender.com": {
    name: "Mission Barisal — Render",
    domain: "zero-dependency-server.onrender.com",
    version: "3.2.1",
    type: "render",
    hasFrontend: false,  // Render free tier: no static files
    hasPusher: true,
    hasDevModels: true,
    maxRateLimitPerServer: 30,  // Render free tier: lower limit
    corsOrigins: [
      "https://zero-dependency-server.onrender.com",
      "http://localhost:3000",
      "http://localhost:5010",
      "http://localhost:7799",
    ],
    sessionVerifyUrl: "http://zombiecoder.my.id/api/verify-session",
    identity: {
      name: "ZombieCoder",
      version: "3.2.1",
      tagline: "যেখানে কোড ও কথা বলে",
      branding: {
        owner: "Sahon Srabon",
        organization: "Developer Zone",
        address: "235 South Pirarbag, Amtala Bazar, Mirpur - 60 feet",
        location: "Barisal, Bangladesh",
        contact: {
          phone: "+880 1323-626282",
          email: "infi@zombiecoder.my.id",
          website: "http://zombiecoder.my.id/",
        },
      },
      project: "Mission Barisal — Multi-Agent Code Platform",
      runtime: "Zero Dependency · Pure Node.js · Render Free Tier",
    },
  },

  // ── Custom Domain: api.kingwin360.com ──────────────────────
  // Custom domain, most stable, strict CORS, masked models for production
  "api.kingwin360.com": {
    name: "Mission Barisal — KingWin360",
    domain: "api.kingwin360.com",
    version: "3.2.1",
    type: "custom",
    hasFrontend: false,
    hasPusher: true,
    hasDevModels: false,  // Production: hide dev models
    maxRateLimitPerServer: 100,  // Custom domain: higher limit
    corsOrigins: [
      "http://localhost:3000",
      "http://localhost:5010",
      "http://localhost:7799",
      "http://zombiecoder.my.id",
      "https://api.kingwin360.com",
      "http://m.skilltoearn.org",
      "https://m.skilltoearn.org",
    ],
    sessionVerifyUrl: "http://zombiecoder.my.id/api/verify-session",
    identity: {
      name: "ZombieCoder",
      version: "3.2.1",
      tagline: "যেখানে কোড ও কথা বলে",
      branding: {
        owner: "Sahon Srabon",
        organization: "Developer Zone",
        address: "235 South Pirarbag, Amtala Bazar, Mirpur - 60 feet",
        location: "Barisal, Bangladesh",
        contact: {
          phone: "+880 1323-626282",
          email: "infi@zombiecoder.my.id",
          website: "http://zombiecoder.my.id/",
        },
      },
      project: "Mission Barisal — Multi-Agent Code Platform",
      runtime: "Zero Dependency · Pure Node.js · Custom Domain",
    },
  },

  // ── Local Development (fallback) ───────────────────────────
  // localhost / 127.0.0.1 — development only, everything open
  "localhost": {
    name: "Mission Barisal — Dev",
    domain: "localhost",
    version: "3.2.1",
    type: "development",
    hasFrontend: true,
    hasPusher: false,
    hasDevModels: true,
    maxRateLimitPerServer: 999999,  // No limit for dev
    corsOrigins: ["*"],  // Dev: allow all
    sessionVerifyUrl: "http://localhost:5010/api/verify-session",
    identity: {
      name: "ZombieCoder",
      version: "3.2.1",
      tagline: "যেখানে কোড ও কথা বলে — DEV MODE",
      branding: {
        owner: "Sahon Srabon",
        organization: "Developer Zone",
        address: "Local Development",
        location: "Barisal, Bangladesh",
        contact: {
          phone: "+880 1323-626282",
          email: "infi@zombiecoder.my.id",
          website: "http://zombiecoder.my.id/",
        },
      },
      project: "Mission Barisal — Multi-Agent Code Platform (DEV)",
      runtime: "Zero Dependency · Pure Node.js · Development",
    },
  },
};

// ─── Default fallback (unknown domain) ───────────────────────
const DEFAULT_DOMAIN_CONFIG = {
  name: "Mission Barisal",
  domain: "unknown",
  version: "3.2.1",
  type: "unknown",
  hasFrontend: false,
  hasPusher: false,
  hasDevModels: false,
  maxRateLimitPerServer: 20,
  corsOrigins: ["http://localhost:3000"],
  sessionVerifyUrl: "http://zombiecoder.my.id/api/verify-session",
  identity: {
    name: "ZombieCoder",
    version: "3.2.1",
    tagline: "যেখানে কোড ও কথা বলে",
    branding: {
      owner: "Sahon Srabon",
      organization: "Developer Zone",
      address: "235 South Pirarbag, Amtala Bazar, Mirpur - 60 feet",
      location: "Barisal, Bangladesh",
      contact: {
        phone: "+880 1323-626282",
        email: "infi@zombiecoder.my.id",
        website: "http://zombiecoder.my.id/",
      },
    },
    project: "Mission Barisal — Multi-Agent Code Platform",
    runtime: "Zero Dependency · Pure Node.js",
  },
};

/**
 * Detect which domain this server instance is running on.
 * Priority:
 *   1. DEPLOY_DOMAIN env var (explicit override)
 *   2. Request Host header (runtime detection)
 *   3. PORT-based heuristic (5010=skilltoearn, 7799=kingwin360, other=render)
 *   4. Fallback to "localhost"
 */
function detectDomain(hostHeader) {
  // 1. Explicit env var — highest priority
  const envDomain = process.env.DEPLOY_DOMAIN;
  if (envDomain && DOMAIN_CONFIGS[envDomain]) {
    return envDomain;
  }

  // 2. Host header from incoming request
  if (hostHeader) {
    const cleanHost = hostHeader.split(":")[0].toLowerCase();
    if (DOMAIN_CONFIGS[cleanHost]) return cleanHost;
    // Partial match (e.g., "m.skilltoearn.org:8080")
    for (const key of Object.keys(DOMAIN_CONFIGS)) {
      if (cleanHost.startsWith(key) || key.startsWith(cleanHost)) {
        return key;
      }
    }
    // Pattern-based detection for known platforms
    if (cleanHost.endsWith(".onrender.com")) return "zero-dependency-server.onrender.com";
    if (cleanHost.includes("kingwin360")) return "api.kingwin360.com";
    if (cleanHost.includes("skilltoearn")) return "m.skilltoearn.org";
  }

  // 3. PORT-based heuristic (common deployments)
  const port = parseInt(process.env.PORT || "5010", 10);
  if (port === 5010) return "m.skilltoearn.org";
  if (port === 7799) return "api.kingwin360.com";
  // Render usually uses random ports

  // 4. Fallback
  return "localhost";
}

/**
 * Get the full configuration for a detected domain.
 * Returns a merged config: domain-specific + env var overrides.
 */
function getDomainConfig(detectedDomain) {
  const base = DOMAIN_CONFIGS[detectedDomain] || DEFAULT_DOMAIN_CONFIG;

  // Env var overrides (allow fine-tuning without code changes)
  const config = { ...base };

  if (process.env.ALLOWED_ORIGINS) {
    config.corsOrigins = process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  }
  if (process.env.PUSHER_APP_ID) {
    config.hasPusher = true;
  }
  if (process.env.SESSION_VERIFY_URL) {
    config.sessionVerifyUrl = process.env.SESSION_VERIFY_URL;
  }
  if (process.env.MAX_RATE_LIMIT) {
    config.maxRateLimitPerServer = parseInt(process.env.MAX_RATE_LIMIT, 10);
  }

  return config;
}

module.exports = {
  DOMAIN_CONFIGS,
  DEFAULT_DOMAIN_CONFIG,
  detectDomain,
  getDomainConfig,
};
