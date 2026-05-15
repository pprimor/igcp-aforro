---
title: HTTP API
description: Hosted Cloudflare Workers REST API with the same safe* semantics as the library.
---

The public HTTP API exposes the library's `safe*` operations as JSON over HTTPS. It is **read-only** (no persistence), **unauthenticated** in v1, and intended for Excel, Python, `curl`, and other clients that do not install Node.

**Production base URL:** `https://api.igcp-aforro.primor.me`

For bulk precomputed rates, keep using the static [`rates.json`](/en/rates-json/) artifact. The API runs **live** simulations with the same inputs as `simulate()` and `safeSimulate()`.

## Disclaimer

This project is not affiliated with IGCP. Results are calculator-quality estimates, not financial or tax advice. Always verify against official statements. Every response includes the `X-IGCP-Aforro-Disclaimer` header.

## Response contract

All `POST` routes return JSON shaped as `SafeResult`:

```json
{ "ok": true, "value": { } }
```

```json
{ "ok": false, "kind": "validation", "error": { "issues": [ ] } }
```

```json
{ "ok": false, "kind": "runtime", "message": "…" }
```

| Outcome | HTTP |
| --- | --- |
| Success | `200` |
| Validation error (Zod) | `400` |
| Domain / runtime error | `422` |
| Unknown route | `404` |
| Wrong method | `405` |

## CORS

`Access-Control-Allow-Origin: *` on `GET`, `POST`, and `OPTIONS`. `OPTIONS` on `/v1/*` returns `204` for preflight.

## Endpoints

| Method | Path | Maps to |
| --- | --- | --- |
| `GET` | `/health` | Version, status, Euribor metadata (`_meta.json`) |
| `POST` | `/v1/simulate` | `safeSimulate` — body = `SimulateInput` |
| `POST` | `/v1/portfolio` | `safeSimulatePortfolio` |
| `POST` | `/v1/redeem` | `safeSimulateRedemption` |
| `POST` | `/v1/rates/current` | `safeGetCurrentRate` |
| `POST` | `/v1/rates/cohort` | `safeGetRateForCohort` |
| `POST` | `/v1/rates/table` | `safeGetRateTable` |
| `POST` | `/v1/tax-year/rollup` | `safeRollupTaxYears` — body = `SimulateResult` with schedule |
| `POST` | `/v1/tax-year/rollup-portfolio` | `safeRollupTaxYearsFromPortfolio` |
| `POST` | `/v1/tax-year/get` | `safeGetTaxYearRollup` — body `{ "result": …, "taxYear": 2025 }` |

## Example

```bash
curl -sS -X POST 'https://api.igcp-aforro.primor.me/v1/simulate' \
  -H 'content-type: application/json' \
  -d '{
    "series": "F",
    "subscriptionDate": "2024-03-15",
    "units": 1000,
    "includeSchedule": true
  }' | jq .
```

## Rate limits

v1 does not require an API key. Configure Cloudflare WAF rate limiting (for example **60 requests/minute per IP** on `/v1/*`). The Worker itself does not enforce quotas in v1.

## MCP (Cursor / Claude Desktop)

The same core is available as a stdio MCP server in the monorepo (`igcp-aforro-mcp`). See [CONTRIBUTING](https://github.com/pprimor/igcp-aforro/blob/main/CONTRIBUTING.md#http-api-and-mcp-local-dev) for local development and a sample `mcp.json`.
