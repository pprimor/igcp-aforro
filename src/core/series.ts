import type { PremiumTier, SeriesCode, SeriesMetadata } from '../types/domain.js';

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
  E: 'E',
  F: 'F',
} as const satisfies Record<string, SeriesCode>;

const SERIES_REGISTRY: Readonly<Partial<Record<SeriesCode, SeriesMetadata>>> = {
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
export function premiumTierForYear(series: SeriesMetadata, contractYear: number): PremiumTier {
  for (const tier of series.premiumTiers) {
    if (contractYear >= tier.fromYear && contractYear <= tier.toYear) {
      return tier;
    }
  }
  throw new Error(
    `No premium tier defined for year ${contractYear} of ${series.name} ` +
      `(supported range 1..${series.maturityYears})`,
  );
}
