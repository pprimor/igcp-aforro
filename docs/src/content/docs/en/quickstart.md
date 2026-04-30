---
title: Quickstart
description: Install igcp-aforro, simulate a Série D, E, or F cohort, and inspect the schedule.
---

## Install

```bash
pnpm add igcp-aforro
```

`igcp-aforro` ships ESM and CJS bundles plus full `.d.ts` typings. Node >= 20.

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

Pass `series: Series.D` or `series: Series.E` to simulate historical cohorts. Séries D and E use `E3 + 1%`, clamped to `[0%, 3.5%]`, premium tiers of `+0.50%` in years 2-5 and `+1.00%` in years 6-10, a 10-year maturity, and closed subscription windows:

```ts
import { simulate, Series } from 'igcp-aforro';

simulate({
  series: Series.E,
  subscriptionDate: '2018-01-15',
  units: 1000,
  asOfDate: '2026-04-19',
});
```

All money and rate fields come back as **decimal strings** (e.g. `"1078.42"`, `"0.02750"`). They are produced by `big.js` with banker's rounding (`ROUND_HALF_EVEN`) at every cent quantization, so you can:

- compare results across runs and machines without floating-point drift,
- send them straight through `JSON.stringify` without losing precision,
- feed them back into `Big` (or your own decimal library) on the consumer side.

## Look up rates without simulating

```ts
import { getCurrentRate, getRateForCohort, getRateTable } from 'igcp-aforro';

getCurrentRate({ series: 'F' });
// -> { series: 'F', month: '2026-04', fixingDate: '2026-03-27', basePct: '2.500' }

getRateForCohort({
  series: 'F',
  subscriptionDate: '2024-03-15',
  asOfDate: '2026-04-19',
});
// -> { ..., baseRatePct: '2.500', premiumTier: { ratePct: '0.25', ... }, annualRatePct: '2.750' }

getRateTable({ series: 'F', fromMonth: '2023-06', toMonth: '2026-04' });
// -> MonthlyBaseRate[]
```

## Validation rules

`simulate()` validates inputs with Zod against the metadata of the chosen series and throws on:

- a `subscriptionDate` outside the series' subscription window:
  - **Série F**: strictly on or after `2023-06-01`;
  - **Série D**: within `[2015-02-01, 2017-10-31]` (closed to new subscriptions);
  - **Série E**: within `[2017-11-01, 2023-06-01]` (closed to new subscriptions);
- `units` outside the series' `[minUnits, maxUnits]` range:
  - **Série F**: `[100, 100000]`;
  - **Série D**: `[100, 250000]`;
  - **Série E**: `[100, 250000]`;
- `asOfDate < subscriptionDate`.

Past `subscriptionDate + maturityYears` (15 for Série F, 10 for Séries D and E) the simulation stops at maturity and returns `matured: true`.

## Next steps

- [API reference](/api/) — every exported value and type, generated from English TSDoc.
- [CLI reference](/en/cli/) — `aforro simulate`, `aforro current`, `aforro rates`, `aforro cohort`.
- [Methodology](/en/methodology/) — the IGCP technical sheet, mapped to this library's code paths.
- [`rates.json` schema](/en/rates-json/) — for non-JS consumers.
