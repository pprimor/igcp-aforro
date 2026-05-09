---
title: Série C — pesquisa e parâmetros
description: Nota de pesquisa para suporte à Série C (Portarias, ficha técnica, taxa-base, prémios, arquivo bruto).
---

## Origem legal

- **Criação**: [Portaria n.º 73-A/2008](https://diariodarepublica.pt/dr/detalhe/portaria/73-a-2008-694), de 23 de janeiro (publicação *DR* 1.ª série, n.º 16, 23/01/2008). Entrada em vigor **26 de janeiro de 2008** (art. 3.º). Cria a **série C** e encerra a subscrição da série B.
- **Reforma da taxa-base, tetos e prémios**: [Portaria n.º 230-A/2009](https://diariodarepublica.pt/dr/detalhe/portaria/230-a-2009-1388), de 27 de fevereiro (*DR* 1.ª série, n.º 41). Entrada em vigor **1 de março de 2009** (n.º 4.º). Altera a ficha técnica anexa à 73-A/2008 (máximo por conta, fórmula da taxa-base e tabela de prémios de permanência).
- **Sucessão**: A Série D abre com [Portaria n.º 17-B/2015](https://diariodarepublica.pt/dr/detalhe/portaria/17-b-2015-2102) (Série C deixa de admitir novas subscrições quando a D entra em vigor; última janela de subscrição modelada na biblioteca até **31 de janeiro de 2015**).

## Parâmetros modelados (`SeriesMetadata`)

| Campo | Valor | Fonte / notas |
| --- | --- | --- |
| `subscriptionStartDate` | `2008-01-26` | Entrada em vigor da 73-A/2008. |
| `subscriptionEndDate` | `2015-01-31` | Alinhado ao arranque da Série D (2015-02-01). |
| `maturityYears` | 10 | Ficha técnica anexa às portarias. |
| `minUnits` / `maxUnits` | 100 / 250 000 | 73-A/2008: máximo **1 milhão** de unidades; 230-A/2009: **250 000** unidades. A biblioteca usa o enquadramento **pós-230-A/2009** para o teto de subscrição (e validação de carteira), coerente com a quase totalidade da vida útil da série. |
| Capitalização | Trimestral | Ficha técnica. |
| `unitQuoteDecimals` | 5 | Mesma convenção que Séries D/E/F / IGCP. |
| `defaultIrsRate` | `0.28` | Mantém-se **28%** como nas outras séries em carteira, por consistência da biblioteca; o enquadramento histórico do IRS sobre juros evoluiu no tempo (ver nota em [Metodologia](/methodology/)). |
| Taxa-base | Ver abaixo | Não é `E3+1%`: usa **0,85 × E3 ± 0,25** sobre a média Euribor já arredondada a 3 d.p. |

### Taxa-base mensal

1. **E3**: média aritmética das fixações Euribor 3M nos **10 dias úteis TARGET2** imediatamente **anteriores** ao dia de correção (antepenúltimo dia útil de *M−1*), arredondada a **3 casas decimais** (half-even). Igual à metodologia das Séries D/E/F para a janela Euribor.
2. **Fórmula** (percentagem, antes do *clamp* inferior):
   - De **2008-02** a **2009-02** (mês de publicação *M*): `0,85 × E3 − 0,25` (73-A/2008).
   - A partir de **2009-03**: `0,85 × E3 + 0,25` (230-A/2009).
3. O resultado da combinação é arredondado de novo a **3 d.p.** (half-even) antes de aplicar o *clamp* a `[0%, +∞)`.
4. **Transição de prémios de permanência**: trimestres com `quarterStartDate` **estritamente antes** de `2009-03-01` usam a tabela **73-A/2008**; a partir dessa data, a tabela **230-A/2009** (n.º 1 al. c) e anexo).

### Arquivos brutos

PDFs espelhados em `raw/igcp/serie-c/`:

- `portaria-73-A-2008-serie-c.pdf` — Portaria n.º 73-A/2008 (ficha técnica inicial).
- `portaria-230-A-2009-serie-c.pdf` — Portaria n.º 230-A/2009 (republicação da ficha técnica).

## Valores mensais (*golden tests*)

As linhas `series: "C"` em [`tests/fixtures/igcpPublishedBaseRates.json`](https://github.com/pprimor/igcp-aforro/blob/main/tests/fixtures/igcpPublishedBaseRates.json) reproduzem `computeBaseRate()` sobre o conjunto **BBIG1** em [`src/data/euribor3m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/euribor3m.json). O *fetcher* de notícias IGCP em `scripts/fetch-igcp-base-rates.ts` **não** inclui a Série C (os *slugs* atuais cobrem sobretudo B/D/E/F); a série histórica C mantém-se como *backfill* estático alinhado às Portarias.

Para regenerar apenas as linhas C após uma extensão do Euribor: `pnpm exec tsx scripts/gen-serie-c-fixture-rows.ts` (mesclar o JSON gerado com as entradas da Série F existentes).

## Simulador IGCP / aforro.net

O *harness* `compare/igcp-simulator.ts` **não** compara a Série C com o endpoint público do simulador IGCP (o mesmo tipo de limitação que a série A enfrenta no *frontend* IGCP): use os *golden tests* acima como prova principal de corretude da taxa-base.
