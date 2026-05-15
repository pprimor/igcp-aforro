---
title: Histórico de alterações
description: Versões publicadas do igcp-aforro, no formato CalVer YYYY.MMDD.PATCH.
---

`igcp-aforro` usa [CalVer](https://calver.org/) no formato `YYYY.MMDD.PATCH`. Atualizações mensais da Euribor tornam-se releases `YYYY.MMDD.0`; correções no mesmo dia incrementam o componente final (`.1`, `.2`, ...).

O histórico canónico está na [página de Releases do GitHub](https://github.com/pprimor/igcp-aforro/releases), gerado automaticamente pelo workflow de release em cada `workflow_dispatch`. Esta página replica as entradas principais.

## Por publicar

- Documentação: páginas iniciais com menção explícita à **Série B** (alinhamento da descrição em `package.json`).
- CI: ajustes ao deploy das Pages na Cloudflare (fluxo Wrangler e instalação de dependências dos docs).

## `2026.515.0`

- **API HTTP pública + servidor MCP**. Worker Cloudflare com rotas `/v1/*` (semântica `safe*`, CORS aberto, cabeçalho legal), pacote `igcp-aforro-mcp` (stdio) — ver [API HTTP](/api-http/).
- **Agregação por ano civil (auxiliar IRS)**. `rollupTaxYears()`, `getTaxYearRollup()`, `rollupTaxYearsFromPortfolio()`, `getPortfolioTaxYearRollup()`; CLI `aforro tax-year`; cartão no playground com selector de ano.
- **Simulador na documentação**. **Export CSV** do calendário trimestral, **três gráficos SVG** (taxa, saldo, fluxo trimestral); testes por propriedade no núcleo e gate de cobertura na CI; exigência de **Node 22** para o check de motor do Wrangler.

## `2026.513.0`

- Comando **`aforro portfolio`** para vários grupos; **URLs partilháveis** no simulador de portefólio (`row=série,data,unidades`).
- Envoltórios **`safe*`** sem excepções (`SafeResult`).
- **`--csv`** nos comandos `rates` e `cohort` da CLI.
- Paridade i18n do playground, correções ao JSX/layout do «accrued net» e reorganização de módulos partilhados.

## `2026.510.0`

- **Série B**: taxas-base em linha com a TBA, dados Euribor 12 meses e simulação perpétua.
- Destaque à **Série C** na página inicial em português; correção ao estilo do crachá de maturidade.
- Validação reforçada das séries nas URLs do playground de portefólio.

## `2026.509.0`

- Suporte à **Série C** (backfill histórico em EUR, goldens, documentação de pesquisa/parâmetros).
- **`aforro current`**: taxas brutas por patamar e grupo opcionalmente filtrável.

## `2026.507.1`

- **`simulatePortfolio()`**, tipos e validação por série sobre toda a carteira; reconciliação dos totais com `cohorts[]`.
- **Janela Euribor mais estrita** para taxas-base e extremos da simulação.

## `2026.507.0`

- **`simulateRedemption()`** e **`aforro redeem`** (regra de detenção mínima, maturidade, perda do `accrued` não capitalizado); `SeriesMetadata.minimumHoldingMonths`.
- **URLs partilháveis** no playground de grupo único.
- CI de *refresh* de dados condicionada à data de publicação no IGCP.

## `2026.503.0`

- Suporte à **Série D** (`rates.json` inclui `series.D`).
- Documentação bilingue em Starlight, guias de *compare* e contribuição, limiares de cobertura e testes contrato da CLI.

## `2026.429.0`

- **Selector de série** (E/F) no playground e texto actualizado.
- Ligações de alojamento dos docs e workflow reutilizável de deploy (Cloudflare Pages).

## `2026.428.0`

- Suporte à **Série E** (`spread` aditiva antes do *clamp*, metadados, backfill Euribor, *compare* com `--series`).
- **Alteração comportamental**: capitalização em **cotação unitária líquida** (5 casas decimais) espelhando o modelo IGCP/`aforro.net` (`currentUnitQuote`, `unitQuoteAfter`); compounding intermédio em precisão total; totais ao cêntimo mantêm reconciliação com o `schedule`.
- Documentação e tolerâncias do *compare* actualizadas.

## `2026.420.0`

- Estrutura pública inicial: biblioteca TypeScript + CLI `aforro` + snapshot estático `rates.json`.
- Série F suportada de ponta a ponta (taxa-base, prémios de permanência, capitalização trimestral, retenção de IRS).
- Dataset Euribor 3M incluído, obtido a partir do Deutsche Bundesbank (`BBIG1`, redistribuição de fixações EMMI EURIBOR®).
- Site de documentação em Astro Starlight.
