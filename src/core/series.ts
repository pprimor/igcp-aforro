import type { PremiumTier, SeriesCode, SeriesMetadata } from '../types/domain.js';

/** Quarters starting before this date use {@link SeriesMetadata.premiumTiersLegacy} for Série C. */
export const SERIE_C_PREMIUM_TIER_MODERNIZATION = '2009-03-01';

/**
 * Série C — IGCP-published parameters.
 *
 * Created by Portaria n.º 73-A/2008 (23 January 2008, effective 26 January 2008).
 * Subscriptions closed when Série D opened (Portaria n.º 17-B/2015); last
 * subscriptions 31 January 2015. Base rate: `0,85 × E3 + k`, where E3 is the
 * 10 TARGET2-business-day Euribor 3M mean rounded to 3 decimals; `k` was
 * `−0,25` until February 2009 and `+0,25` from March 2009 onward (Portaria
 * n.º 230-A/2009, effective 1 March 2009). Cap per Conta Aforro was 1M units
 * until 230-A/2009 aligned it to 250.000 units. Permanence premiums were
 * revised in 230-A/2009; quarters whose start is still before 1 March 2009
 * keep the pre-reform tier table.
 */
const SERIE_C_LEGACY_PREMIUM_TIERS: readonly PremiumTier[] = [
  { fromYear: 1, toYear: 1, ratePct: '0.00' },
  { fromYear: 2, toYear: 2, ratePct: '0.25' },
  { fromYear: 3, toYear: 3, ratePct: '0.50' },
  { fromYear: 4, toYear: 7, ratePct: '0.75' },
  { fromYear: 8, toYear: 8, ratePct: '1.00' },
  { fromYear: 9, toYear: 9, ratePct: '1.50' },
  { fromYear: 10, toYear: 10, ratePct: '2.50' },
];

const SERIE_C_PREMIUM_TIERS: readonly PremiumTier[] = [
  { fromYear: 1, toYear: 1, ratePct: '0.00' },
  { fromYear: 2, toYear: 2, ratePct: '0.50' },
  { fromYear: 3, toYear: 3, ratePct: '0.75' },
  { fromYear: 4, toYear: 7, ratePct: '1.00' },
  { fromYear: 8, toYear: 8, ratePct: '1.25' },
  { fromYear: 9, toYear: 9, ratePct: '1.50' },
  { fromYear: 10, toYear: 10, ratePct: '2.50' },
];

const SERIE_C_METADATA: SeriesMetadata = {
  code: 'C',
  name: 'Série C',
  minimumHoldingMonths: 3,
  maturityYears: 10,
  subscriptionStartDate: '2008-01-26',
  subscriptionEndDate: '2015-01-31',
  minUnits: 100,
  maxUnits: 250_000,
  baseRateClampMinPct: '0',
  baseRateClampMaxPct: '100',
  baseRateSpreadPct: '0',
  baseRateEuriborMultiplierPct: '0.85',
  baseRatePostMeanOffsets: [
    { effectiveFromMonth: '2008-01', offsetPct: '-0.25' },
    { effectiveFromMonth: '2009-03', offsetPct: '0.25' },
  ],
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: 'quarterly',
  defaultIrsRate: '0.28',
  premiumTiers: SERIE_C_PREMIUM_TIERS,
  premiumTiersLegacy: SERIE_C_LEGACY_PREMIUM_TIERS,
  premiumTierModernizationDate: SERIE_C_PREMIUM_TIER_MODERNIZATION,
};

/**
 * Série D — IGCP-published parameters.
 *
 * Source: IGCP technical sheet for Certificados de Aforro Série D. Created by
 * Portaria n.º 17-B/2015 (30 Jan 2015); subscriptions closed by Portaria
 * n.º 329-A/2017 (27 Oct 2017). Base-rate formula matches Série E:
 * `E3 + 1%`, clamped into `[0%, 3.5%]`. Premium tiers: 0.5% from year 2-5,
 * 1.0% from year 6-10. Maturity is 10 years and the account cap is 250.000€.
 */
const SERIE_D_PREMIUM_TIERS: readonly PremiumTier[] = [
  { fromYear: 1, toYear: 1, ratePct: '0.00' },
  { fromYear: 2, toYear: 5, ratePct: '0.50' },
  { fromYear: 6, toYear: 10, ratePct: '1.00' },
];

const SERIE_D_METADATA: SeriesMetadata = {
  code: 'D',
  name: 'Série D',
  minimumHoldingMonths: 3,
  maturityYears: 10,
  subscriptionStartDate: '2015-02-01',
  subscriptionEndDate: '2017-10-31',
  minUnits: 100,
  maxUnits: 250_000,
  baseRateClampMinPct: '0',
  baseRateClampMaxPct: '3.5',
  baseRateSpreadPct: '1',
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: 'quarterly',
  defaultIrsRate: '0.28',
  premiumTiers: SERIE_D_PREMIUM_TIERS,
};

/**
 * Série F — IGCP-published parameters.
 *
 * Source: IGCP technical sheet ("ficha técnica") for Certificados de Aforro
 * Série F. The premium tiers, maturity, account limits, and base-rate clamp
 * are all reproduced verbatim; the IRS withholding default is the standard
 * 28% PIT rate applied to interest income at each capitalization.
 *
 * Year 1 is included as an explicit zero-premium tier so that schedule rows
 * can always carry a non-null `premiumTier` without special-casing.
 */
const SERIE_F_PREMIUM_TIERS: readonly PremiumTier[] = [
  { fromYear: 1, toYear: 1, ratePct: '0.00' },
  { fromYear: 2, toYear: 5, ratePct: '0.25' },
  { fromYear: 6, toYear: 9, ratePct: '0.50' },
  { fromYear: 10, toYear: 11, ratePct: '1.00' },
  { fromYear: 12, toYear: 13, ratePct: '1.50' },
  { fromYear: 14, toYear: 15, ratePct: '1.75' },
];

const SERIE_F_METADATA: SeriesMetadata = {
  code: 'F',
  name: 'Série F',
  minimumHoldingMonths: 3,
  maturityYears: 15,
  subscriptionStartDate: '2023-06-01',
  minUnits: 100,
  maxUnits: 100_000,
  baseRateClampMinPct: '0',
  baseRateClampMaxPct: '2.5',
  baseRateSpreadPct: '0',
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: 'quarterly',
  defaultIrsRate: '0.28',
  premiumTiers: SERIE_F_PREMIUM_TIERS,
};

/**
 * Série E — IGCP-published parameters.
 *
 * Source: IGCP technical sheet ("ficha técnica") for Certificados de Aforro
 * Série E. Created by Portaria n.º 329-A/2017 (30 Oct 2017); subscriptions
 * closed by Portaria n.º 149-A/2023 (2 Jun 2023). Base-rate formula is
 * `E3 + 1%`, where E3 is the rounded 10-business-day mean of Euribor 3M
 * (rounded to 3 decimals **before** the +1pp spread is added) and the final
 * value is clamped into `[0%, 3.5%]`. Premium tiers: 0.5% from year 2-5,
 * 1.0% from year 6-10. Maturity is 10 years. Account-cap (`maxUnits`) is
 * the pre-Série-F 250.000€ ceiling per Conta Aforro.
 */
const SERIE_E_PREMIUM_TIERS: readonly PremiumTier[] = [
  { fromYear: 1, toYear: 1, ratePct: '0.00' },
  { fromYear: 2, toYear: 5, ratePct: '0.50' },
  { fromYear: 6, toYear: 10, ratePct: '1.00' },
];

const SERIE_E_METADATA: SeriesMetadata = {
  code: 'E',
  name: 'Série E',
  minimumHoldingMonths: 3,
  maturityYears: 10,
  subscriptionStartDate: '2017-11-01',
  subscriptionEndDate: '2023-06-01',
  minUnits: 100,
  maxUnits: 250_000,
  baseRateClampMinPct: '0',
  baseRateClampMaxPct: '3.5',
  baseRateSpreadPct: '1',
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: 'quarterly',
  defaultIrsRate: '0.28',
  premiumTiers: SERIE_E_PREMIUM_TIERS,
};

/**
 * Enum-like accessor for series codes. Lets callers write `Series.F` instead
 * of the bare string `'F'` while keeping the type a narrow string literal so
 * it remains JSON-serializable and tree-shakable.
 */
export const Series = {
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
} as const satisfies Record<string, SeriesCode>;

const SERIES_REGISTRY: Readonly<Partial<Record<SeriesCode, SeriesMetadata>>> = {
  C: SERIE_C_METADATA,
  D: SERIE_D_METADATA,
  E: SERIE_E_METADATA,
  F: SERIE_F_METADATA,
};

/** Returns metadata for every series supported by this build. */
export function listSeries(): readonly SeriesMetadata[] {
  return Object.values(SERIES_REGISTRY);
}

/**
 * Returns the metadata for a given series code.
 *
 * @throws {Error} when the code is not registered.
 */
export function getSeries(code: SeriesCode): SeriesMetadata {
  const metadata = SERIES_REGISTRY[code];
  if (!metadata) {
    throw new Error(`Unknown series code: ${String(code)}`);
  }
  return metadata;
}

/**
 * Resolves the permanence-premium tier that applies to the given
 * `contractYear` (1-indexed: year 1 = subscription → 1st anniversary,
 * year 2 = 1st → 2nd, etc.). Lives next to the tier definitions so any new
 * series added to {@link SERIES_REGISTRY} inherits the same lookup.
 *
 * @throws {Error} when no tier covers `contractYear` — guards against
 *   accidentally indexing past maturity.
 */
function premiumTiersForQuarter(
  series: SeriesMetadata,
  quarterStartDate?: string,
): readonly PremiumTier[] {
  if (
    series.premiumTiersLegacy &&
    series.premiumTierModernizationDate &&
    quarterStartDate !== undefined &&
    quarterStartDate < series.premiumTierModernizationDate
  ) {
    return series.premiumTiersLegacy;
  }
  return series.premiumTiers;
}

/**
 * @param quarterStartDate — when provided for series with
 *   {@link SeriesMetadata.premiumTiersLegacy}, selects the legacy vs modern
 *   tier table (Série C around March 2009).
 */
export function premiumTierForYear(
  series: SeriesMetadata,
  contractYear: number,
  quarterStartDate?: string,
): PremiumTier {
  const tiers = premiumTiersForQuarter(series, quarterStartDate);
  for (const tier of tiers) {
    if (contractYear >= tier.fromYear && contractYear <= tier.toYear) {
      return tier;
    }
  }
  throw new Error(
    `No premium tier defined for year ${contractYear} of ${series.name} ` +
      `(supported range 1..${series.maturityYears})`,
  );
}
