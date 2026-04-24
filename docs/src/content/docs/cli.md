---
title: CLI reference
description: Commands exposed by the `aforro` binary.
---

The `aforro` binary is shipped by the npm package. Every command accepts `--json` for machine-readable output; without it, the output is a human-friendly table or key-value layout.

```bash
pnpm add -g igcp-aforro
aforro --help
```

## `aforro simulate`

Simulate an IGCP Aforro Série E or Série F cohort up to an as-of date.

```bash
aforro simulate \
  --subscribed 2024-03-15 \
  --units 1000 \
  [--as-of 2026-04-19] \
  [--schedule] \
  [--irs 0.28] \
  [--series F] \
  [--json]
```

| Flag | Description |
| --- | --- |
| `--subscribed <date>` | Subscription date (`YYYY-MM-DD`). Required. |
| `--units <n>` | Principal in EUR; integer in the series' `[minUnits, maxUnits]` range (Série F: `[100, 100000]`; Série E: `[100, 250000]`). Required. |
| `--as-of <date>` | As-of date (`YYYY-MM-DD`). Defaults to today (UTC). |
| `--schedule` | Include the per-quarter capitalization schedule. |
| `--irs <rate>` | Override IRS withholding rate (e.g. `0.28`). Defaults to series default. |
| `--series <code>` | Series code. Accepts `E` or `F`. Defaults to `F`. |
| `--json` | Emit JSON instead of the pretty layout. |

## `aforro current`

Print the IGCP-published monthly base rate for the current (or given) month.

```bash
aforro current [--series E|F] [--as-of 2026-04-19] [--json]
```

Includes the `fixingDate` so you can audit the value back to a single Euribor 3M observation in `src/data/euribor3m.json`.

## `aforro rates`

Print monthly base rates between `--from` and `--to` (inclusive).

```bash
aforro rates --from 2023-06 --to 2026-04 [--series E|F] [--json]
```

Months are accepted as `YYYY-MM`. The output is one row per resolvable month — months without a bundled fixing are skipped.

## `aforro cohort`

Resolve the annual rate that applies to a cohort for a given quarter.

```bash
aforro cohort \
  --subscribed 2024-03 \
  --as-of 2026-04 \
  [--series E|F] \
  [--json]
```

`--subscribed` and `--as-of` accept either `YYYY-MM` or `YYYY-MM-DD`. Returns the composite annual rate, its base + premium components, and the quarter window they apply to.

## `aforro fetch-euribor`

:::caution[Developer-only]
This command refreshes `src/data/euribor3m.json` from the [Deutsche Bundesbank time-series API](https://api.statistiken.bundesbank.de/) (series `BBIG1`, redistributing EMMI EURIBOR® daily fixings). It only works inside a developer checkout of this repo and is wired into the `data-refresh.yml` cron. End users of the library should not need to call it.
:::

```bash
aforro fetch-euribor [--mode seed|incremental|range]
```

## Cross-cutting flags

- `--json` — emit machine-readable output. Stable across releases (changes are flagged in the [Changelog](/changelog/)).
- `--help` and `--version` — provided by `cac`.
