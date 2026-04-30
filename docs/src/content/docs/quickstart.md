---
title: Início rápido
description: Instale o igcp-aforro, simule um grupo de subscrição da Série D, E ou F e consulte o calendário.
---

## Instalar

```bash
pnpm add igcp-aforro
```

`igcp-aforro` inclui bundles ESM e CJS, além de tipagens `.d.ts` completas. Requer Node >= 20.

## Simular um grupo de subscrição

```ts
import { simulate, Series } from 'igcp-aforro';

const result = simulate({
  series: Series.F,
  subscriptionDate: '2024-03-15',
  units: 1000,
  asOfDate: '2026-04-19',
  includeSchedule: true,
});

console.log(result.currentValueNet);
console.log(result.totalInterestNet);
console.log(result.matured);
console.log(result.schedule?.length);
```

Passe `series: Series.D` ou `series: Series.E` para simular grupos de subscrição históricos. As Séries D e E usam `E3 + 1%`, limitado a `[0%, 3,5%]`, prémios de permanência de `+0,50%` nos anos 2-5 e `+1,00%` nos anos 6-10, maturidade de 10 anos e janelas de subscrição fechadas:

```ts
import { simulate, Series } from 'igcp-aforro';

simulate({
  series: Series.E,
  subscriptionDate: '2018-01-15',
  units: 1000,
  asOfDate: '2026-04-19',
});
```

Todos os campos monetários e de taxas são devolvidos como **strings decimais** (por exemplo, `"1078.42"`, `"0.02750"`). São produzidos por `big.js` com arredondamento bancário (`ROUND_HALF_EVEN`) em cada quantização ao cêntimo, para que possa:

- comparar resultados entre execuções e máquinas sem desvios de vírgula flutuante;
- passar os resultados diretamente por `JSON.stringify` sem perder precisão;
- voltar a carregar os valores em `Big` (ou noutra biblioteca decimal) no consumidor.

## Consultar taxas sem simular

```ts
import { getCurrentRate, getRateForCohort, getRateTable } from 'igcp-aforro';

getCurrentRate({ series: 'F' });
// → { series: 'F', month: '2026-04', fixingDate: '2026-03-27', basePct: '2.500' }

getRateForCohort({
  series: 'F',
  subscriptionDate: '2024-03-15',
  asOfDate: '2026-04-19',
});
// → { ..., baseRatePct: '2.500', premiumTier: { ratePct: '0.25', ... }, annualRatePct: '2.750' }

getRateTable({ series: 'F', fromMonth: '2023-06', toMonth: '2026-04' });
// → MonthlyBaseRate[]
```

## Regras de validação

`simulate()` valida os dados de entrada com Zod contra os metadados da série escolhida e lança erro quando:

- a `subscriptionDate` está fora da janela de subscrição da série:
  - **Série F**: estritamente a partir de `2023-06-01`;
  - **Série D**: dentro de `[2015-02-01, 2017-10-31]` (encerrada a novas subscrições);
  - **Série E**: dentro de `[2017-11-01, 2023-06-01]` (encerrada a novas subscrições);
- `units` está fora do intervalo `[minUnits, maxUnits]` da série:
  - **Série F**: `[100, 100000]`;
  - **Série D**: `[100, 250000]`;
  - **Série E**: `[100, 250000]`;
- `asOfDate < subscriptionDate`.

Depois de `subscriptionDate + maturityYears` (15 anos para a Série F, 10 anos para as Séries D e E), a simulação termina na maturidade e devolve `matured: true`.

## Próximos passos

- [Referência da API](/api/) — todos os valores e tipos exportados, gerados a partir de TSDoc em inglês.
- [Referência da CLI](/cli/) — `aforro simulate`, `aforro current`, `aforro rates`, `aforro cohort`.
- [Metodologia](/methodology/) — a ficha técnica do IGCP mapeada para os caminhos de código desta biblioteca.
- [Esquema do `rates.json`](/rates-json/) — para consumidores que não usam JavaScript.
