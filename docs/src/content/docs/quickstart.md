---
title: Quickstart
description: Install igcp-aforro, simulate a Série F cohort, and inspect the schedule.
---

## Install

```bash
pnpm add igcp-aforro
```

`igcp-aforro` ships ESM and CJS bundles plus full `.d.ts` typings. Node ≥ 20.

## Simulate a cohort

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

All money and rate fields come back as **decimal strings** (e.g. `"1078.42"`, `"0.02750"`). They are produced by `big.js` with banker's rounding (`ROUND_HALF_EVEN`) at every cent quantization, so you can:

- compare results across runs and machines without floating-point drift,
- send them straight through `JSON.stringify` without losing precision,
- feed them back into `Big` (or your own decimal library) on the consumer side.

## Look up rates without simulating

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

## Validation rules

`simulate()` validates inputs with Zod and throws on:

- `subscriptionDate < 2023-06-01` (Série F's launch month),
- `units < 100` or `units > 100000`,
- `asOfDate < subscriptionDate`.

Past `subscriptionDate + 15 years` the simulation stops at maturity and returns `matured: true`.

## Next steps

- [API reference](/api/) — every exported value and type, generated from TSDoc.
- [CLI reference](/cli/) — `aforro simulate`, `aforro current`, `aforro rates`, `aforro cohort`.
- [Methodology (PT)](/methodology/) — the IGCP technical sheet, mapped to this library's code paths.
- [`rates.json` schema](/rates-json/) — for non-JS consumers.
