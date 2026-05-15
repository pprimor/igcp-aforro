---
title: API HTTP
description: API REST alojada em Cloudflare Workers com a mesma semântica safe* da biblioteca.
---

A API HTTP pública expõe as operações `safe*` da biblioteca como JSON sobre HTTPS. É **read-only** (sem persistência), **sem autenticação** na v1, e destina-se a integrações em Excel, Python, `curl` ou outras ferramentas que não instalem Node.

**Base URL (produção):** `https://api.igcp-aforro.primor.me`

Para taxas pré-computadas em massa, continue a usar o artefacto estático [`rates.json`](/rates-json/). A API executa simulações **ao vivo** com os mesmos parâmetros que `simulate()` e `safeSimulate()`.

## Aviso

Não somos o IGCP. Os resultados são estimativas de calculadora; não constituem aconselhamento financeiro nem fiscal. Confirme sempre com extractos oficiais. Cada resposta inclui o cabeçalho `X-IGCP-Aforro-Disclaimer`.

## Contrato de resposta

Todas as rotas `POST` devolvem JSON no formato `SafeResult`:

```json
{ "ok": true, "value": { } }
```

```json
{ "ok": false, "kind": "validation", "error": { "issues": [ ] } }
```

```json
{ "ok": false, "kind": "runtime", "message": "…" }
```

| Situação | HTTP |
| --- | --- |
| Sucesso | `200` |
| Erro de validação (Zod) | `400` |
| Erro de domínio / runtime | `422` |
| Rota desconhecida | `404` |
| Método incorreto | `405` |

## CORS

`Access-Control-Allow-Origin: *` em `GET`, `POST` e `OPTIONS`. Pedidos `OPTIONS` em `/v1/*` respondem `204` para *preflight*.

## Endpoints

| Método | Caminho | Função |
| --- | --- | --- |
| `GET` | `/health` | Versão, estado e metadados Euribor (`_meta.json`) |
| `POST` | `/v1/simulate` | `safeSimulate` — corpo = `SimulateInput` |
| `POST` | `/v1/portfolio` | `safeSimulatePortfolio` |
| `POST` | `/v1/redeem` | `safeSimulateRedemption` |
| `POST` | `/v1/rates/current` | `safeGetCurrentRate` |
| `POST` | `/v1/rates/cohort` | `safeGetRateForCohort` |
| `POST` | `/v1/rates/table` | `safeGetRateTable` |
| `POST` | `/v1/tax-year/rollup` | `safeRollupTaxYears` — corpo = `SimulateResult` com calendário |
| `POST` | `/v1/tax-year/rollup-portfolio` | `safeRollupTaxYearsFromPortfolio` |
| `POST` | `/v1/tax-year/get` | `safeGetTaxYearRollup` — corpo `{ "result": …, "taxYear": 2025 }` |

## Exemplo

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

## Limites e abuso

A v1 não exige chave API. Recomenda-se limitar no Cloudflare WAF (por exemplo **60 pedidos/minuto por IP** em `/v1/*`). Respostas `429` podem ser configuradas no edge; o Worker em si não implementa quota na v1.

## MCP (Cursor / Claude Desktop)

O mesmo núcleo está disponível via servidor MCP stdio no monorepo (`igcp-aforro-mcp`). Ver [CONTRIBUTING](https://github.com/pprimor/igcp-aforro/blob/main/CONTRIBUTING.md#http-api-and-mcp-local-dev) para desenvolvimento local e exemplo de `mcp.json`.
