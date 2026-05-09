---
title: igcp-aforro
description: TypeScript library and CLI for simulating Portuguese IGCP Aforro Séries C, D, E, and F Treasury Certificates.
template: splash
hero:
  tagline: Deterministic, decimal-safe Aforro Séries C, D, E, and F simulator. Drop-in for JS/TS apps; ships with a CLI and a static `rates.json` for everyone else.
  actions:
    - text: Quickstart
      link: /en/quickstart/
      icon: right-arrow
    - text: Try in browser
      link: /en/playground/
      icon: right-arrow
    - text: API reference
      link: /api/
      variant: minimal
    - text: View on GitHub
      link: https://github.com/pprimor/igcp-aforro
      icon: external
      variant: minimal
---

## What it does

`igcp-aforro` reproduces the [IGCP Aforro](https://www.igcp.pt/) calculation end-to-end for **Séries C, D, E, and F**:

- Resolves the **monthly base rate** from the antepenultimate-business-day Euribor 3M average. Série F clamps the rounded mean to `[0%, 2.5%]`; Séries D and E add a `+1pp` spread (`E3 + 1%`) and clamp to `[0%, 3.5%]`; **Série C** uses `0.85×E3 − 0.25` through Feb 2009 and `0.85×E3 + 0.25` from Mar 2009 (see [Série C research](/serie-c-research/)).
- Adds the **permanence-premium tier** that applies to the cohort's contract year (per-series tier table).
- Compounds **quarterly** with **28% IRS withholding** at each capitalization.
- Returns decimal strings so callers can JSON-serialize results without precision loss.

## Choose your interface

- **JS/TS app?** Install the npm package and call [`simulate()`](/api/functions/simulate/).
- **Shell user?** Install the CLI and run [`aforro simulate`](/en/cli/).
- **Python / Java / Excel user?** Fetch the precomputed [`rates.json`](/en/rates-json/) and write a ~50-line compounder.

## Status

The library covers **Série C** (closed series, 10-year maturity), **Série D** (subscriptions open from 1 Feb 2015 to 31 Oct 2017, 10-year maturity), **Série E** (subscriptions open from 1 Nov 2017 to 1 Jun 2023, 10-year maturity), and **Série F** (subscriptions open from 1 Jun 2023 onwards, 15-year maturity) end-to-end. **Séries A and B** remain out of scope. The generated [API reference](/api/) is English-only for now because it is built from the package’s TSDoc comments.
