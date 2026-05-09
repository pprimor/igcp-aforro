---
title: Methodology
description: How this library reproduces the Série C, D, E, and F Aforro certificate calculation, with references to IGCP technical sheets and Portuguese legal instruments.
---

This page explains how `igcp-aforro` reproduces, step by step, the remuneration calculation for **Série C** (closed to new subscriptions), **Série D**, **Série E**, and **Série F** Aforro certificates published by [IGCP — Agência de Gestão da Tesouraria e da Dívida Pública](https://www.igcp.pt/). Each section points to the official technical sheets and identifies the code file where the rule is implemented. Research note and PDF mirrors: [Série C — pesquisa e parâmetros](/serie-c-research/) (Portuguese).

::::note[Official sources]
- Portaria n.º 73-A/2008 and Portaria n.º 230-A/2009 (Série C — *Diário da República*).
- Portaria n.º 17-B/2015, approving the Série D conditions.
- Portaria n.º 329-A/2017, approving the Série E conditions.
- Portaria n.º 149-A/2023, approving the Série F conditions and closing Série E subscriptions.
- [IGCP technical sheets](https://www.igcp.pt/) for Aforro certificates.
- [EMMI](https://www.emmi-benchmarks.eu/) terms of use for EURIBOR® (in-scope series index to 3-month Euribor).

This library **does not replace** official IGCP communications and is not financial advice. If values differ, the values published by IGCP prevail.
::::

## Structural parameters

| Parameter | Série F | Séries D/E | Série C | Implementation |
| --- | --- | --- | --- | --- |
| Maturity | 15 years | 10 years | 10 years | `SeriesMetadata.maturityYears` in [`src/core/series.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/series.ts) |
| Minimum subscription | 100 units (1 unit = EUR 1) | 100 units | 100 units | `SeriesMetadata.minUnits` |
| Maximum subscription | 100,000 units | 250,000 units | 250,000 units (post-230-A/2009) | `SeriesMetadata.maxUnits` |
| Subscription window | From 1 June 2023 | Série D: 1 February 2015 to 31 October 2017; Série E: 1 November 2017 to 1 June 2023 | 26 January 2008 to 31 January 2015 | `SeriesMetadata.subscriptionStartDate` / `subscriptionEndDate` |
| Capitalization | Quarterly, automatic | Quarterly, automatic | Quarterly, automatic | `SeriesMetadata.capitalizationFrequency` |
| Unit quote precision | 5 decimal places | 5 decimal places | 5 decimal places | `SeriesMetadata.unitQuoteDecimals` |
| IRS withholding | 28% on interest at capitalization | 28% on interest at capitalization | 28% default (aligned with other series) | `SeriesMetadata.defaultIrsRate`, overridable with `simulate({ irsRate })` |

## Monthly base rate

The base rate for each month `M` is calculated from 3-month Euribor according to the technical sheet. The steps common to all in-scope series are:

1. Determine the **antepenultimate TARGET2 business day** of month `M-1`; this is the `fixingDate`.
2. Take the sequence of the **10 TARGET2 business days** ending on, and including, `fixingDate`.
3. Calculate the simple arithmetic mean of those 10 3-month Euribor fixings.
4. Round the mean to **3 decimal places** using **half-even** rounding.

The final step differs by series:

- **Série F**: the rounded result is clamped to `[0%, 2.5%]`.
- **Séries D and E**: add a fixed **+1 percentage point** spread (`E3 + 1%`) to the rounded mean, then clamp the final value to `[0%, 3.5%]`. The order matters: rounding is applied to the mean **before** adding the spread, and the clamp is applied **after**.
- **Série C**: apply **`0.85 × E3 + k`**, where E3 is the **already** 3dp-rounded mean; `k` is **−0.25** for published months through February 2009 and **+0.25** from March 2009 onward (Portarias n.º 73-A/2008 and 230-A/2009). The scaled value is rounded again to 3dp before a **floor** clamp at `0%` (no upper cap like D/E/F).

The implementation lives in [`src/core/baseRate.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/baseRate.ts) and uses the TARGET2 calendar implemented in [`src/core/calendar.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/calendar.ts). Séries D/E/F parameterize the additive spread in `SeriesMetadata.baseRateSpreadPct` (Série F: `'0'`, Séries D/E: `'1'`). Série C uses `baseRateEuriborMultiplierPct` (`'0.85'`) and the monthly schedule `baseRatePostMeanOffsets`. The 3-month Euribor fixings come from [`src/data/euribor3m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/euribor3m.json), sourced from the Deutsche Bundesbank (`BBIG1`, redistributing EMMI EURIBOR®).

Correctness against IGCP-published values is covered by the golden tests in [`tests/baseRate.test.ts`](https://github.com/pprimor/igcp-aforro/blob/main/tests/baseRate.test.ts).

## Permanence premium

A permanence premium is added to the base rate, indexed to the **contract year** elapsed since the subscription date (based on anniversaries). The tiers differ by series.

**Série F** (defined in `SERIE_F_PREMIUM_TIERS`):

| Contract years | Premium added to base rate |
| --- | --- |
| 1 | 0.00% |
| 2 to 5 | +0.25% |
| 6 to 9 | +0.50% |
| 10 to 11 | +1.00% |
| 12 to 13 | +1.50% |
| 14 to 15 | +1.75% |

**Séries D and E** (defined in `SERIE_D_PREMIUM_TIERS` / `SERIE_E_PREMIUM_TIERS`):

| Contract years | Premium added to base rate |
| --- | --- |
| 1 | 0.00% |
| 2 to 5 | +0.50% |
| 6 to 10 | +1.00% |

**Série C** — two tables: quarters starting **before** `2009-03-01` use the **73-A/2008** premiums (`premiumTiersLegacy`); on or after that date, the **230-A/2009** table (`premiumTiers`).

| Regime | Years 2–3 | Years 4–7 | Year 8 | Year 9 | Year 10 |
| --- | --- | --- | --- | --- | --- |
| 73-A/2008 | +0.25% / +0.50% | +0.75% | +1.00% | +1.50% | +2.50% |
| 230-A/2009 | +0.50% / +0.75% | +1.00% | +1.25% | +1.50% | +2.50% |

(Year 1 = 0.00% in both.)

In every series, year 1 is represented explicitly as a zero-premium tier so every schedule row can always carry a non-null `premiumTier`. The tiers are defined in [`src/core/series.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/series.ts).

`premiumTierForYear(series, contractYear, quarterStartDate?)` resolves the applicable tier (the third argument selects legacy vs modern on Série C); `getRateForCohort()` composes the annual rate (`base + premium`).

## Quarterly capitalization and IRS withholding

At each quarter end `Q`, `simulate()` keeps the net position as a **unit quote**, not as a high-precision EUR balance:

1. Resolve the **annual rate** for the quarter, based on `quarterStartDate` (the base-rate reference month) and the cohort's **contract age** at that start date.
2. Calculate the **quarterly rate** as `annual_rate / 4`.
3. Calculate gross interest per unit as `unit_quote x quarterly_rate`.
4. Apply IRS withholding to the per-unit interest to obtain net interest per unit.
5. The new quote is `unit_quote + net_interest_per_unit`, rounded to **5 decimal places** using **half-even** rounding.

The loop is implemented in [`src/core/calculator.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/calculator.ts) and uses `big.js` (alias `Big`) for exact decimal arithmetic. The initial quote is `1.00000`; after each completed capitalization, `currentUnitQuote` carries the rounded net quote. The reported net value is always:

```
currentValueNet = round(units x currentUnitQuote, 2)
```

This matches the cent-level values shown by **aforro.net** for certificates in a portfolio, regardless of the number of units.

In parallel, gross interest and IRS values are booked in real euros at holding level:

```
interestGross = round(units x previous_quote x quarterly_rate, 2)
irsWithheld = round(interestGross x irsRate, 2)
interestNet = interestGross - irsWithheld
```

This reflects effective withholding in euros and keeps `totalInterestGross`, `totalIrsWithheld`, and `totalInterestNet` reconcilable with the `schedule`.

::::note[Schedule snapshots]
Each `schedule` row exposes `unitQuoteAfter`, the net quote after that capitalization, already rounded to 5 decimal places. `balanceAfter` is `round(units x unitQuoteAfter, 2)`. Because `interestGross`, `irsWithheld`, and `interestNet` are also rounded to cents in the quarter itself, the rows reconcile exactly with `totalInterestGross`, `totalIrsWithheld`, and `totalInterestNet`.
::::

## Quarters anchored to the subscription day

Each quarter starts on the subscription day shifted by multiples of 3 months. When the target day does not exist in the destination month (for example, subscription on 31 January -> next quarter on 30 April), roll-forward to the first day of the following month is applied according to the technical sheet. `shiftMonths()` in [`src/core/dateMath.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/dateMath.ts) implements this behavior and is used by both the calculator and the `rates.json` generator.

## Accrued interest between capitalizations

When `asOfDate` falls strictly inside an open quarter, `simulate()` separately reports **accrued but not yet capitalized** interest in `accruedSinceLastCapitalization`. It is calculated pro rata in calendar days over the theoretical quarterly interest:

```
accrued = balance x quarterly_rate x elapsed_days / total_days
```

where `balance` is `units x currentUnitQuote`, quantized to cents with banker's rounding. **This number is a library convention, not a value published by IGCP**: IRS withholding is *not* applied (it only occurs at capitalization). Consumers estimating a "redemption value today" should subtract `accrued x IRS` themselves.

## Early redemption

`simulateRedemption()` in [`src/core/redemption.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/redemption.ts) computes the payable value of an early redemption (full or partial) while delegating quote math to `simulate({ asOfDate: redemptionDate })` so quote cadence remains identical.

Applied rules:

- **Minimum holding period**: redemption is only allowed from `subscriptionDate + 3 months` onward (`SeriesMetadata.minimumHoldingMonths`, currently `3` for D/E/F).
- **Maturity boundary**: `redemptionDate >= maturityDate` is not considered early redemption and is rejected; use `simulate()` for matured payouts.
- **Payable redemption value**: `redemptionValue = round(unitsToRedeem x currentUnitQuote, 2)`, where `currentUnitQuote` is the booked quote after the last completed capitalization at redemption date.
- **Accrued between capitalizations**: the redeemed slice of `accruedSinceLastCapitalization` is reported as `forfeitedAccruedGross` and is **not paid** at redemption (interest is only paid on capitalization dates).
- **Partial redemption guardrails**: `unitsToRedeem` must be in `[1, units]`, and the residual position must be either `0` (full redemption) or at least the series `minUnits`.

Reconciliation note: for partial redemptions, `round(unitsToRedeem x quote, 2) + round(remainingUnits x quote, 2)` can differ from `round(units x quote, 2)` by one cent due to independent rounding.

## Portfolio and top-ups

`simulatePortfolio()` models a portfolio as a list of independent subscription cohorts. Each top-up is represented as a new row, even when it has the same series and the same subscription date as an existing row.

Applied rules:

- Each cohort is simulated through `simulate()` using the same portfolio-level `asOfDate`.
- The units cap is enforced per series by summing all rows in that series (assumption: one Conta Aforro per series).
- Portfolio aggregation sums already-cent-quantized cohort fields (`currentValueNet`, `totalInterestNet`, `totalIrsWithheld`, and related totals).

Because totals are built from direct sums of quantized cohort values, every `PortfolioResult.total*` field reconciles exactly with the corresponding sum over `PortfolioResult.cohorts[]`.

## Validations

`simulate()` validates inputs with Zod, reading limits from the selected series' `SeriesMetadata`, before any calculation. It throws when:

- `subscriptionDate` falls outside the series' subscription window:
  - **Série F**: strictly from `2023-06-01`;
  - **Série D**: between `2015-02-01` and `2017-10-31` (closed to new subscriptions);
  - **Série E**: between `2017-11-01` and `2023-06-01` (closed to new subscriptions);
- `units` falls outside the series' `[minUnits, maxUnits]` range:
  - **Série F**: `[100, 100000]`;
  - **Série D**: `[100, 250000]`;
  - **Série E**: `[100, 250000]`;
- `asOfDate < subscriptionDate`.

After `subscriptionDate + maturityYears` (15 years for Série F, 10 years for Séries D and E), the loop stops at maturity and the result returns `matured: true` with `maturityDate` populated.
