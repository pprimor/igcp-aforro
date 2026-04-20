---
title: igcp-aforro
description: TypeScript library and CLI for simulating Portuguese IGCP Aforro (Série F) Treasury Certificates.
template: splash
hero:
  tagline: Deterministic, decimal-safe Aforro Série F simulator. Drop-in for JS/TS apps; ships with a CLI and a static `rates.json` for everyone else.
  actions:
    - text: Quickstart
      link: /quickstart/
      icon: right-arrow
    - text: API reference
      link: /api/
      variant: minimal
    - text: View on GitHub
      link: https://github.com/primor/igcp-aforro
      icon: external
      variant: minimal
---

## What it does

`igcp-aforro` reproduces the [IGCP Aforro Série F](https://www.igcp.pt/) calculation end-to-end:

- Resolves the **monthly base rate** from the antepenultimate-business-day Euribor 3M average and clamps it to `[0%, 2.5%]`.
- Adds the **permanence-premium tier** that applies to the cohort's contract year.
- Compounds **quarterly** with **28% IRS withholding** at each capitalization.
- Returns decimal strings so callers can JSON-serialize results without precision loss.

## Choose your interface

- **JS/TS app?** Install the npm package and call [`simulate()`](/api/functions/simulate/).
- **Shell user?** Install the CLI and run [`aforro simulate`](/cli/).
- **Python / Java / Excel user?** Fetch the precomputed [`rates.json`](/rates-json/) and write a ~50-line compounder.

## Status

The library covers **Série F** end-to-end. Series A, B, D, E, and Série C are out of scope for v1 — the `Series` abstraction in `src/core/series.ts` leaves room to add them as additional constants tables without restructuring.
