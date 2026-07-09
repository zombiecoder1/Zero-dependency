# ZeroDependency — Mission Barisal v3

## Project Overview
Multi-Agent MCP Server with 6 AI agents, Groq fallback provider, rate-limit tracking system, and SSOT-based project context auto-detection.

## Project Location
- **Root:** `/home/sahon/Desktop/deki`
- **Main File:** `hamba.js` (~7150 lines, zero dependencies)
- **Agent Personas:** `PERSONAS.md`
- **SSOT:** `.zombiecoder/SSOT.md` (auto-generated project context)

## Architecture
1. **Server:** Node.js HTTP server, zero npm dependencies
2. **Hosting:** Render (primary), kingwin360.com, skilltoearn.org (fallbacks)
3. **Providers:** OpenCode free models (primary), Groq (fallback)
4. **MCP:** JSON-RPC 2.0, 11 tools, remote MCP protocol
5. **Rate Limit Tracking:** OpenCode daily limit monitor with auto-fallback to Groq

## 6 Agents
| Agent | Name | Role |
|-------|------|------|
| code-guru | Monu | System Architecture, Design Patterns |
| bug-hunter | Jewel | Debugging, Error Handling |
| security-hero | Bablu | Security Audit, Vulnerability |
| perf-wizard | Rashed | Performance Optimization |
| doc-king | Halim | Documentation, Technical Writing |
| qa-tyrant | Mojnu | Code Quality, Best Practices |

## Key APIs
- `GET /health` — Server health check
- `GET /v1/models` — List all agents
- `POST /v1/chat/completions` — Chat with agent (stream + non-stream)
- `POST /mcp` — MCP JSON-RPC 2.0 endpoint
- `GET /api/rate-limit` — Rate limit status

## Client Communication
- Send `project_context` field in chat completions to provide project context
- MCP Initialize carries `roots` for auto SSOT generation
- Use `read_ssot` MCP tool to load .zombiecoder/SSOT.md

## Language
- Primary: Bengali (Bangla)
- Code: English
- Communication: Friendly, respectful ("ভাইয়া" prefix)
