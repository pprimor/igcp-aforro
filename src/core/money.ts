import Big from 'big.js';

/**
 * Decimal-arithmetic helpers built on top of `big.js`.
 *
 * The library treats money and rates as exact decimal values: every
 * intermediate computation flows through `Big`, every public output is a
 * decimal string, and every rounding step uses banker's rounding
 * (`ROUND_HALF_EVEN`) to match how IGCP's published simulator behaves.
 *
 * `big.js` is intentionally re-exported so callers (and other modules in this
 * package) only need to depend on `./money.js` for decimal math.
 */

export { Big };

/** Anything `Big` knows how to construct from. */
export type BigSource = Big | string | number;

/**
 * Banker's rounding, a.k.a. half-to-even. This is the rounding mode the IGCP
 * simulator uses for its published quarterly capitalizations and for the
 * 3-decimal base-rate clamp. Centralized here so it can never be set
 * inconsistently from a call site.
 */
export const ROUND_HALF_EVEN: Big.RoundingMode = 2;

/** Decimal places used for monetary amounts (cents). */
export const CENT_DECIMALS = 2;

/** Decimal places used for percentage values (e.g. "2.500"). */
export const PERCENT_DECIMALS = 3;

/** Decimal places used for fractional rate values (e.g. "0.02750"). */
export const RATE_DECIMALS = 5;

const HUNDRED = new Big(100);
/** Exact zero, exposed for callers that want a decimal-typed zero. */
export const ZERO = new Big(0);

/**
 * Coerces an input to `Big`. Accepts strings (preferred for exact decimals),
 * numbers, and existing `Big` instances. Strings are validated to surface a
 * clearer error than `big.js`'s default `[big.js] Invalid number`.
 *
 * Plain numbers are accepted because the public API surface (units, IRS rate)
 * uses them, but they should not be used for amounts that originated as
 * decimals -- pass the original string to preserve precision.
 *
 * @throws {Error} when the value cannot be parsed as a finite decimal.
 */
export function toBig(value: BigSource): Big {
  if (value instanceof Big) {
    return value;
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) {
      throw new Error(`Cannot convert non-finite number to Big: ${value}`);
    }
    return new Big(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === '') {
      throw new Error('Cannot convert empty string to Big');
    }
    try {
      return new Big(trimmed);
    } catch {
      throw new Error(`Invalid decimal string: "${value}"`);
    }
  }
  throw new Error(`Unsupported value for Big: ${typeof value}`);
}

/**
 * Rounds to a given number of decimal places using banker's rounding.
 * Returns a new `Big`; the input is not mutated.
 */
export function quantize(value: BigSource, decimals: number): Big {
  return toBig(value).round(decimals, ROUND_HALF_EVEN);
}

/**
 * Rounds a monetary amount to whole cents using banker's rounding. This is
 * the canonical quantizer for every interest, IRS, and balance number stored
 * in `ScheduleRow` or `SimulateResult`.
 */
export function quantizeCents(value: BigSource): Big {
  return quantize(value, CENT_DECIMALS);
}

/**
 * Converts a percentage value to its fractional rate equivalent, e.g.
 * "2.5" → 0.025. Useful when reading `ratePct` strings from
 * `SeriesMetadata`/`PremiumTier` and feeding them into compounding math.
 *
 * The result is not pre-rounded; round at the boundary where the rate is
 * about to be persisted (typically via {@link formatRate}).
 */
export function percentToRate(percent: BigSource): Big {
  return toBig(percent).div(HUNDRED);
}

/**
 * Converts a fractional rate to its percentage equivalent, e.g.
 * 0.025 → "2.5". Inverse of {@link percentToRate}.
 */
export function rateToPercent(rate: BigSource): Big {
  return toBig(rate).times(HUNDRED);
}

/**
 * Serializes a decimal to a fixed-precision string using banker's rounding.
 * Trailing zeros are preserved so consumers can round-trip the value through
 * JSON without losing the implied precision.
 */
export function formatDecimal(value: BigSource, decimals: number): string {
  return toBig(value).toFixed(decimals, ROUND_HALF_EVEN);
}

/** Serializes a monetary amount as a 2-decimal string, e.g. "1234.50". */
export function formatCents(value: BigSource): string {
  return formatDecimal(value, CENT_DECIMALS);
}

/**
 * Serializes a percentage as a fixed-decimal string. Defaults to
 * {@link PERCENT_DECIMALS} (3) which matches the IGCP base-rate convention.
 */
export function formatPercent(value: BigSource, decimals: number = PERCENT_DECIMALS): string {
  return formatDecimal(value, decimals);
}

/**
 * Serializes a fractional rate as a fixed-decimal string. Defaults to
 * {@link RATE_DECIMALS} (5) which is the convention used in `ScheduleRow`'s
 * `annualRate` and `quarterlyRate` fields.
 */
export function formatRate(value: BigSource, decimals: number = RATE_DECIMALS): string {
  return formatDecimal(value, decimals);
}
