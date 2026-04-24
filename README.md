# igcp-aforro

[![npm version](https://img.shields.io/npm/v/igcp-aforro.svg?logo=npm)](https://www.npmjs.com/package/igcp-aforro)
[![CI](https://github.com/pprimor/igcp-aforro/actions/workflows/ci.yml/badge.svg)](https://github.com/pprimor/igcp-aforro/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Node ≥ 20](https://img.shields.io/badge/node-%E2%89%A520-brightgreen.svg)](https://nodejs.org/)
[![Types: TypeScript](https://img.shields.io/badge/types-TypeScript-3178c6.svg?logo=typescript&logoColor=white)](./src/index.ts)
[![Docs](https://img.shields.io/badge/docs-online-8a2be2.svg)](https://pprimor.github.io/igcp-aforro/)

Deterministic, decimal-safe TypeScript library and CLI for simulating Portuguese **IGCP Aforro Série E and Série F** Treasury Certificates. Drop-in for JS/TS apps; ships with a CLI and a static `rates.json` artifact for non-JS consumers.

---

## About

[Certificados de Aforro](https://www.igcp.pt/) are Portuguese state-issued retail savings instruments. This library covers the two most recent series — **Série E** (subscriptions open from 1 Nov 2017 to 1 Jun 2023, 10-year maturity) and **Série F** (subscriptions open from 1 Jun 2023 onwards, 15-year maturity). Their remuneration is the sum of:

- a **monthly base rate** derived from the 10-business-day average of the Euribor 3M, struck on the antepenultimate TARGET2 business day of the previous month, then rounded to 3 decimals (banker's). Série F clamps the result to `[0%, 2.5%]`; Série E adds a `+1pp` spread to the rounded mean and clamps to `[0%, 3.5%]`;
- a **permanence-premium tier** that depends on how many contract years have elapsed since subscription (different tier tables per series);
- with **quarterly capitalization** and **28% IRS withholding** applied at each capitalization.

This package reproduces that math end-to-end, with all monetary fields returned as decimal strings (via [`big.js`](https://github.com/MikeMcl/big.js/) with banker's rounding) so results survive `JSON.stringify` and cross-language boundaries without floating-point drift.

`igcp-aforro` is **not affiliated with IGCP** and does not constitute financial advice. See [Methodology and legal notice](#methodology-and-legal-notice).

## Features

- **Pure calculator** — no network, no state, no globals. The Euribor 3M dataset is bundled in the package.
- **Decimal-safe** — every money/rate field is a `big.js`-quantized decimal string, banker's-rounded at each cent.
- **aforro.net parity** — booked values are derived from the same per-unit quote cadence aforro.net displays: quote rounded to 5 decimals each quarter, then `round(units × quote, 2)`.
- **Validated inputs** — Zod-checked at the public boundary; the library throws on out-of-window subscriptions, invalid units, or impossible as-of dates.
- **Cohort-aware rate lookup** — resolve the annual rate that applies to a given subscription on a given quarter, with the base + premium components surfaced for auditability.
- **CLI included** — `aforro simulate | current | rates | cohort` with stable `--json` output for scripting.
- **Static `rates.json`** — every monthly base rate and every cohort × quarter annual rate (for both Série E and Série F), precomputed and published to GitHub Pages for Python / Java / Excel users.
- **Golden-tested** — every IGCP-published monthly base rate since the inaugural June 2023 Série F cohort is asserted in CI; Série E base rates are validated against the IGCP technical sheet's E3+1% formula.
- **TypeScript-first** — full `.d.ts` typings, ESM + CJS dual bundles, Node ≥ 20.

## Installation

As a library:

```bash
pnpm add igcp-aforro
# or
npm install igcp-aforro
# or
yarn add igcp-aforro
```

As a global CLI:

```bash
pnpm add -g igcp-aforro
aforro --help
```

`igcp-aforro` ships ESM and CJS bundles plus full `.d.ts` typings.

## Quickstart

### Library

```ts
import { simulate, Series } from 'igcp-aforro';

const result = simulate({
  series: Series.F,
  subscriptionDate: '2024-03-15',
  units: 1000,
  asOfDate: '2026-04-19',
  includeSchedule: true,
});

console.log(result.currentValueNet);   // e.g. "1078.42"
console.log(result.currentUnitQuote);  // e.g. "1.07842"
console.log(result.totalInterestNet);  // e.g. "78.42"
console.log(result.matured);           // false
console.log(result.schedule?.length);  // 8 quarters since subscription
```

All money and rate fields come back as **decimal strings** (e.g. `"1078.42"`, `"0.02750"`). Feed them into `Big` (or your own decimal library) on the consumer side; never coerce them with `Number()` if you care about precision.

### CLI

```bash
aforro simulate --subscribed 2024-03-15 --units 1000 --schedule
aforro current
aforro rates --from 2023-06 --to 2026-04
aforro cohort --subscribed 2024-03 --as-of 2026-04
```

Every command accepts `--json` for machine-readable output:

```bash
aforro simulate --subscribed 2024-03-15 --units 1000 --json | jq .currentValueNet
```

## Usage examples

### Look up rates without running a full simulation

```ts
import { getCurrentRate, getRateForCohort, getRateTable } from 'igcp-aforro';

getCurrentRate({ series: 'F' });
// → { series: 'F', month: '2026-04', fixingDate: '2026-03-27', basePct: '2.500' }

getRateForCohort({
  series: 'F',
  subscriptionDate: '2024-03-15',
  asOfDate: '2026-04-19',
});
// → {
//     series: 'F',
//     subscriptionDate: '2024-03-15',
//     asOfDate: '2026-04-19',
//     quarterStartDate: '2026-03-15',
//     quarterEndDate: '2026-06-15',
//     quarterIndex: 8,
//     yearsSinceSubscription: 2,
//     baseRatePct: '2.500',
//     premiumTier: { fromYear: 2, toYear: 5, ratePct: '0.25' },
//     annualRatePct: '2.750',
//   }

getRateTable({ series: 'F', fromMonth: '2023-06', toMonth: '2026-04' });
// → MonthlyBaseRate[]
```

### Inspect the per-quarter capitalization schedule

```ts
import { simulate, Series } from 'igcp-aforro';

const { schedule } = simulate({
  series: Series.F,
  subscriptionDate: '2024-03-15',
  units: 1000,
  asOfDate: '2026-04-19',
  includeSchedule: true,
});

for (const row of schedule ?? []) {
  console.log(
    row.quarterEndDate,
    row.annualRate,         // "0.02750"
    row.interestGross,      // "6.88"
    row.irsWithheld,        // "1.93"
    row.interestNet,        // "4.95"
    row.balanceAfter,       // "1004.95"
    row.unitQuoteAfter,     // "1.00495"
    row.premiumTier.ratePct // "0.25"
  );
}
```

### Override the IRS withholding rate

The default is the 28% Portuguese personal-income-tax rate on interest. Override it for non-resident scenarios or sensitivity analysis:

```ts
simulate({
  series: 'F',
  subscriptionDate: '2024-03-15',
  units: 1000,
  irsRate: 0.10,
});
```

### Project an "if I redeemed today" value

`accruedSinceLastCapitalization` reports the gross interest accrued since the last capitalization on a calendar-day pro-rata basis. IRS is **not** withheld on this amount (withholding only happens at capitalization), so subtract it yourself:

```ts
import Big from 'big.js';
import { simulate } from 'igcp-aforro';

const r = simulate({
  series: 'F',
  subscriptionDate: '2024-03-15',
  units: 1000,
  asOfDate: '2026-04-19',
});

const accruedNet = Big(r.accruedSinceLastCapitalization)
  .times(Big(1).minus(r.irsRate));
const projectedNet = Big(r.currentValueNet).plus(accruedNet);
```

## API reference

```ts
import {
  simulate,
  getCurrentRate,
  getRateForCohort,
  getRateTable,
  Series,
  getSeries,
  listSeries,
  VERSION,
} from 'igcp-aforro';

import type {
  SeriesCode,
  SeriesMetadata,
  PremiumTier,
  RateEntry,
  ScheduleRow,
  SimulateInput,
  SimulateResult,
  CohortRateInput,
  CohortRateResult,
  CurrentRateInput,
  RateTableInput,
  MonthlyBaseRate,
  IsoDate,
  IsoMonth,
} from 'igcp-aforro';
```

| Export | Kind | What it does |
| --- | --- | --- |
| `simulate(input)` | function | Quarterly-compounding simulator. Returns `SimulateResult` (optionally with `schedule`). |
| `getCurrentRate(input?)` | function | IGCP-published monthly base rate for the current (or given) month, plus its `fixingDate`. |
| `getRateForCohort(input)` | function | Composite annual rate for a cohort × quarter, with base + premium components surfaced. |
| `getRateTable(input)` | function | Monthly base rates between `fromMonth` and `toMonth` (inclusive). |
| `Series` | enum-like | `Series.E`, `Series.F` — the series code constants. |
| `getSeries(code)` | function | Returns the static `SeriesMetadata` for a series. |
| `listSeries()` | function | Returns the list of series codes the library supports. |
| `VERSION` | string | Library CalVer (`YYYY.MMDD.PATCH`). |

Full type signatures and TSDoc are generated into the docs site at <https://pprimor.github.io/igcp-aforro/api/>.

## Static `rates.json` for non-JS users

Python, Java, Excel, and spreadsheet users can skip the npm package entirely and consume a precomputed JSON snapshot of every monthly base rate and every cohort-anchored annual rate.

- **Latest**: <https://pprimor.github.io/igcp-aforro/rates.json>
- **Per-release snapshot**: `https://pprimor.github.io/igcp-aforro/v/<calver>/rates.json` (e.g. `v/2026.420.0/rates.json`)

The file is regenerated after every release and after every Euribor / IGCP base-rate refresh PR is merged.

Top-level shape:

```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-04-20T08:00:00Z",
  "libraryVersion": "2026.420.0",
  "euriborSourceMeta": {
    "lastRefreshedAt": "2026-04-19T07:42:11Z",
    "source": "Deutsche Bundesbank time-series API",
    "sourceUrl": "https://api.statistiken.bundesbank.de/rest/download/BBIG1/...",
    "seriesId": "BBIG1.D.D0.EUR.MMKT.EURIBOR.M03.BID._Z"
  },
  "series": {
    "E": { "metadata": { "...": "..." }, "monthlyBaseRates": [], "cohortRates": [] },
    "F": {
      "metadata": { "...": "..." },
      "monthlyBaseRates": [
        { "month": "2024-03", "fixingDate": "2024-02-27", "basePct": "3.892" }
      ],
      "cohortRates": [
        {
          "subscribed": "2024-03",
          "subscriptionDate": "2024-03-01",
          "quarterIndex": 8,
          "quarterStartDate": "2026-03-01",
          "quarterEndDate": "2026-06-01",
          "yearsSinceSubscription": 2,
          "basePct": "2.500",
          "premiumTierYearsRange": "2-5",
          "premiumPct": "0.25",
          "annualRatePct": "2.750"
        }
      ]
    }
  }
}
```

Minimal Python compounder using only `rates.json`:

```python
import json, urllib.request
from decimal import Decimal, ROUND_HALF_EVEN

data = json.load(urllib.request.urlopen('https://pprimor.github.io/igcp-aforro/rates.json'))
rows = [r for r in data['series']['F']['cohortRates'] if r['subscribed'] == '2024-03']

units = Decimal('1000')
unit_quote = Decimal('1')
irs = Decimal('0.28')

for r in rows:
    annual = Decimal(r['annualRatePct']) / Decimal('100')
    quarterly = annual / 4
    gross = (units * unit_quote * quarterly).quantize(Decimal('0.01'), rounding=ROUND_HALF_EVEN)
    withheld = (gross * irs).quantize(Decimal('0.01'), rounding=ROUND_HALF_EVEN)
    net_per_unit = unit_quote * quarterly * (Decimal('1') - irs)
    unit_quote = (unit_quote + net_per_unit).quantize(Decimal('0.00001'), rounding=ROUND_HALF_EVEN)

print((units * unit_quote).quantize(Decimal('0.01'), rounding=ROUND_HALF_EVEN))
```

The full schema, day-of-month caveat, and field-by-field documentation live at <https://pprimor.github.io/igcp-aforro/rates-json/>.

## Methodology and legal notice

### Methodology

The library reproduces the IGCP technical sheets for **Certificados de Aforro Série E** (Portaria n.º 329-A/2017, closed by Portaria n.º 149-A/2023) and **Série F** (Portaria n.º 149-A/2023). In summary:

1. The **monthly base rate** for month `M` is the arithmetic mean of the Euribor 3M fixings over the 10 TARGET2 business days ending at the antepenultimate business day of month `M-1`, rounded to 3 decimals (banker's rounding). For Série F the rounded mean is clamped to `[0%, 2.5%]`. For Série E a `+1pp` spread is added to the rounded mean (`E3 + 1%`) and the result is clamped to `[0%, 3.5%]`.
2. The **annual rate** for a cohort × quarter is `baseRate(quarterStartMonth) + premium(contractYear)`, where `premium` follows the IGCP-published tier table:
   - **Série F** — year 1: 0.00%, years 2–5: +0.25%, 6–9: +0.50%, 10–11: +1.00%, 12–13: +1.50%, 14–15: +1.75%.
   - **Série E** — year 1: 0.00%, years 2–5: +0.50%, 6–10: +1.00%.
3. **Quarterly capitalization**: the booked net state is a per-unit quote, starting at `1.00000`. Each quarter computes `grossPerUnit = unitQuote × annualRate / 4`, applies IRS to get `netPerUnit`, then stores the next quote rounded to the series' quote precision (`5` decimals for Série E and F). The headline booked value is `currentValueNet = round(units × currentUnitQuote, 2)`, matching aforro.net to the cent for booked certificates regardless of holding size. Gross interest and IRS withholding are booked separately in real EUR at the holding level each quarter: `interestGross = round(units × previousUnitQuote × annualRate / 4, 2)`, `irsWithheld = round(interestGross × 28%, 2)`, and `interestNet = interestGross − irsWithheld`. Those cent-rounded quarterly rows reconcile exactly with the headline `totalInterest*` fields.
4. **Quarter anchoring**: quarters start on the subscription's day-of-month, shifted by 3-month multiples. When the day doesn't exist in the target month (e.g. subscription on 31 Jan → next quarter would land on 31 Apr), the date rolls forward to the first day of the following month per the IGCP spec.
5. **Validations** (per series, read from `SeriesMetadata`):
   - **Série F** — subscriptions on or after `2023-06-01`; units in `[100, 100000]`; matures at `subscriptionDate + 15 years`.
   - **Série E** — subscriptions in `[2017-11-01, 2023-06-01]` (closed to new subscriptions); units in `[100, 250000]`; matures at `subscriptionDate + 10 years`.
   - In both cases `asOfDate` must be on or after `subscriptionDate`. Past maturity, the simulation stops and reports `matured: true`.

The Portuguese-language methodology page maps every rule above to the source file that implements it: <https://pprimor.github.io/igcp-aforro/methodology/>.

### Legal notice

This is an **independent open-source project**. It is not affiliated with, endorsed by, or sponsored by:

- the [Agência de Gestão da Tesouraria e da Dívida Pública — IGCP, E.P.E.](https://www.igcp.pt/), nor the Portuguese State;
- the [European Money Markets Institute (EMMI)](https://www.emmi-benchmarks.eu/), administrator of the EURIBOR® benchmark.

The package bundles daily EURIBOR® 3-month fixings sourced from the [Deutsche Bundesbank time-series API](https://api.statistiken.bundesbank.de/) (series `BBIG1`), which redistributes EMMI EURIBOR® data under non-commercial terms. **EURIBOR®** is a registered trademark of EMMI. Users that intend to use this library — or its bundled rates — for commercial purposes should review EMMI's [terms of use](https://www.emmi-benchmarks.eu/) and obtain any licence EMMI requires for their use case. Redistribution of the bundled fixings outside of this package may also require a separate EMMI licence.

Output produced by `simulate()` is a **calculator-quality estimate**, not an official IGCP statement. In any case of divergence between this library's output and IGCP's published values or your account statement, **the IGCP-published values prevail**. Nothing in this library or its documentation constitutes financial, legal, or tax advice.

## Development

```bash
pnpm install
pnpm build
pnpm test
pnpm lint
pnpm typecheck
```

Refresh the bundled Euribor dataset (developer-only; the cron in `.github/workflows/data-refresh.yml` does this automatically):

```bash
pnpm fetch:euribor
pnpm fetch:igcp-base-rates
```

Run the comparison suite against IGCP's public simulator:

```bash
pnpm compare:igcp
```

## License

[MIT](./LICENSE) © igcp-aforro contributors.

EURIBOR® is a registered trademark of [EMMI](https://www.emmi-benchmarks.eu/) and is used here for descriptive purposes only.
