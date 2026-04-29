---
title: Início rápido
description: Instale o igcp-aforro, simule um grupo de subscrição da Série E ou Série F e consulte o calendário.
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

Passe `series: Series.E` (ou a *string* `'E'`) para simular um grupo de subscrição da Série E. A Série E tem uma fórmula de taxa-base diferente (`E3 + 1%`, limitada a `[0%, 3,5%]`), prémios de permanência próprios, maturidade de 10 anos e uma janela de subscrição `[2017-11-01, 2023-06-01]`:

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
  - **Série E**: dentro de `[2017-11-01, 2023-06-01]` (encerrada a novas subscrições);
- `units` está fora do intervalo `[minUnits, maxUnits]` da série:
  - **Série F**: `[100, 100000]`;
  - **Série E**: `[100, 250000]`;
- `asOfDate < subscriptionDate`.

Depois de `subscriptionDate + maturityYears` (15 anos para a Série F, 10 anos para a Série E), a simulação termina na maturidade e devolve `matured: true`.

## Próximos passos

- [Referência da API](/api/) — todos os valores e tipos exportados, gerados a partir de TSDoc em inglês.
- [Referência da CLI](/cli/) — `aforro simulate`, `aforro current`, `aforro rates`, `aforro cohort`.
- [Metodologia](/methodology/) — a ficha técnica do IGCP mapeada para os caminhos de código desta biblioteca.
- [Esquema do `rates.json`](/rates-json/) — para consumidores que não usam JavaScript.
