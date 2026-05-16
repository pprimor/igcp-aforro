---
title: Série A — pesquisa e parâmetros
description: Nota de pesquisa para suporte à Série A (Decreto 43.454/1960, DL 79/2024, taxa-base em cascata, valor nominal da unidade, arquivo bruto).
---

## Origem legal

- **Criação**: [Decreto n.º 43.454/1960](https://diariodarepublica.pt/dr/detalhe/decreto/43454-1960-43454) (estrutura original dos Certificados de Aforro; valor facial da unidade **€0,34916**).
- **Desmaterialização**: [Decreto-Lei n.º 79/2024](https://diariodarepublica.pt/dr/detalhe/decreto-lei/79-2024-000000) e quadro regulamentar IGCP para títulos em meio eletrónico.
- **Taxa-base pós-1986**: alinhamento com a **Série B** — **0,60 × TBA** ([Portaria n.º 73-B/2008](https://diariodarepublica.pt/dr/detalhe/portaria/73-b-2008-694)); TBA por [Decreto-Lei n.º 11/1999](https://diariodarepublica.pt/dr/detalhe/decreto-lei/11-1999-000000) (médias móveis L3/L12).
- **Prémio de permanência**: mesma escada que a Série B ([Portaria n.º 1219/1991](https://diariodarepublica.pt/dr/detalhe/portaria/1219-1991-000000)), tal como modelada em `SERIE_B_PREMIUM_TIERS` em [`src/core/series.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/series.ts).

## Parâmetros modelados (`SeriesMetadata`)

| Campo | Valor | Fonte / notas |
| --- | --- | --- |
| `subscriptionStartDate` | `1960-01-01` | Cobre janelas de fixação em `M−1` antes de 1961-01 sem disparar o guard de `fixingDate` vs início de subscrição. |
| `subscriptionEndDate` | `1986-06-30` | Último dia de novas subscrições da Série A (janela histórica IGCP). |
| `maturityYears` | `null` | Perpétua até resgate, como a Série B. |
| `unitFaceValueEur` | `0.34916` | Valor facial de **uma** unidade de certificado (EUR); o nominal em carteira é `units × unitFaceValueEur`. |
| `minUnits` / `maxUnits` | 100 / 250 000 | Mesmo teto de conta que a Série B na biblioteca. |
| Taxa-base | Ver cascata abaixo | Quatro níveis históricos antes/despois da era Euribor plena. |

## Cascata histórica da taxa-base (implementação)

A resolução mensal em [`src/core/baseRate.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/baseRate.ts) segue o mês de publicação `YYYY-MM`:

1. **`1961-01` … `1986-06` (só Série A)** — leitura directa de [`src/data/serie-a-admin-rates.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/serie-a-admin-rates.json): taxa administrativa mensal **já** como taxa-base publicável (sem passo `0,60×TBA`). *Nota:* o ficheiro em repo inclui uma tabela linear **placeholder** até substituição por linhas com citação *DR* linha-a-linha; cada linha traz `source` para auditoria.
2. **`1986-07` … `1999-01` (A e B)** — TBA mensal histórica em [`src/data/tba-history.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/tba-history.json) (série BPstat e extrapolações documentadas por mês); depois **`0,60 × TBA`**.
3. **`1999-02` … `2002-03` (A e B)** — mesma fórmula DL 11/99, alimentada por expansão diária **Lisbor** 3M/12M em [`src/data/lisbor3m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/lisbor3m.json) / [`lisbor12m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/lisbor12m.json) (BPstat; dias úteis TARGET2).
4. **A partir de `2002-04` (A e B)** — médias móveis alimentadas por **Euribor** empacotada (`euribor3m.json` / `euribor12m.json`), como hoje.

O campo `perpetualBaseRateTier` em `BaseRateResult` indica qual degrau serviu o mês (`admin` \| `tbaHistory` \| `lisbor` \| `euribor`).

## Dados e scripts

- **`pnpm fetch:lisbor`** — executa [`scripts/build-aforro-history-data.ts`](https://github.com/pprimor/igcp-aforro/blob/main/scripts/build-aforro-history-data.ts) (rede): actualiza `tba-history.json`, `lisbor3m.json`, `lisbor12m.json`, blocos em `_meta.json`, e regenera o placeholder de `serie-a-admin-rates.json` se voltar a correr.
- **Curadoria manual** — `tba-history.json` e (no futuro) linhas não-placeholder de `serie-a-admin-rates.json` devem trazer `source` citando diploma IGCP ou *DR*; a revisão de PR é o controlo de qualidade.

## Arquivos brutos

- `raw/bpstat/` — respostas JSON-STAT espelhadas pelo *fetcher* (séries BPstat usadas na construção das tabelas).
- `raw/igcp/serie-a/` — reservado para PDFs e espelhos IGCP (ex.: tabelas **Taxa_Anual_A+PP**) à medida que forem adicionados ao repositório.

## Paridade com o simulador IGCP

O *harness* [`compare/igcp-simulator.ts`](https://github.com/pprimor/igcp-aforro/blob/main/compare/igcp-simulator.ts) continua a comparar apenas **Séries D/E/F** com o simulador público IGCP; a Série A não tem homólogo web — use os *golden tests* e a documentação acima como prova principal.
