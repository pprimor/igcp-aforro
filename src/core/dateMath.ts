import type { IsoDate } from '../types/domain.js';

/**
 * Pure ISO-8601 date arithmetic, kept separate from `calendar.ts` (which
 * deals with TARGET2 holidays and bridges to native `Date`) and from
 * `money.ts` (which owns decimals).
 *
 * Every public function here takes and returns `YYYY-MM-DD` strings — UTC
 * is implied throughout — so callers never have to instantiate `Date`
 * themselves. The few internal `Date.UTC` uses are confined to this module.
 *
 * Lexicographic comparison is sound for `YYYY-MM-DD` strings, so callers
 * needing range checks (`from <= to`, etc.) can keep using `<`/`>` directly
 * rather than reaching for a helper here.
 */

const MS_PER_DAY = 86_400_000;

/** Two-digit zero-pad for month/day components. */
export function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/** Today's date in UTC, formatted as `YYYY-MM-DD`. */
export function todayIsoUtc(): IsoDate {
  const now = new Date();
  return `${now.getUTCFullYear()}-${pad2(now.getUTCMonth() + 1)}-${pad2(now.getUTCDate())}`;
}

/**
 * Splits an ISO date into its numeric components. Trusts the caller to have
 * validated the format upstream (the public API funnels every date through
 * Zod's `isoDateSchema` before reaching this module).
 */
export function parseIsoDateParts(date: IsoDate): {
  year: number;
  month: number;
  day: number;
} {
  const [y, m, d] = date.split('-').map(Number);
  return { year: y as number, month: m as number, day: d as number };
}

/**
 * Adds `months` (may be negative) to an ISO date, preserving the day-of-month
 * when it exists in the target month and otherwise rolling forward to the
 * first day of the *following* month.
 *
 * The roll-forward semantics intentionally match IGCP's stated rule for
 * Série F quarter boundaries when the original day does not exist in the
 * target month (e.g. `2024-08-31 + 1 month → 2024-10-01` rather than the
 * more common `→ 2024-09-30` clamp).
 */
export function shiftMonths(date: IsoDate, months: number): IsoDate {
  const { year, month, day } = parseIsoDateParts(date);
  const totalM0 = month - 1 + months;
  let newY = year + Math.floor(totalM0 / 12);
  let newM = (((totalM0 % 12) + 12) % 12) + 1;
  // `Date.UTC(y, m, 0)` is "day 0 of next month" = last day of month m,
  // which is the cleanest cross-platform way to learn a month's length.
  const lastDayOfTarget = new Date(Date.UTC(newY, newM, 0)).getUTCDate();
  if (day <= lastDayOfTarget) {
    return `${newY}-${pad2(newM)}-${pad2(day)}`;
  }
  newM += 1;
  if (newM > 12) {
    newM = 1;
    newY += 1;
  }
  return `${newY}-${pad2(newM)}-01`;
}

/**
 * Anniversary-based whole years between two dates, floored at 0. Returns the
 * 0-based contract-year index used to look up the permanence premium tier
 * (`tierForYear(yearsSince + 1)`).
 *
 * Negative or out-of-order inputs are floored to `0` so callers can never
 * accidentally index a negative tier.
 */
export function floorYearsBetween(from: IsoDate, to: IsoDate): number {
  const f = parseIsoDateParts(from);
  const t = parseIsoDateParts(to);
  let years = t.year - f.year;
  if (t.month < f.month || (t.month === f.month && t.day < f.day)) {
    years -= 1;
  }
  return Math.max(0, years);
}

/**
 * Whole-day distance between two ISO dates, computed in UTC so daylight
 * saving never perturbs the count. Returns a signed integer: negative when
 * `to < from`.
 */
export function daysBetween(from: IsoDate, to: IsoDate): number {
  const f = parseIsoDateParts(from);
  const t = parseIsoDateParts(to);
  const fromMs = Date.UTC(f.year, f.month - 1, f.day);
  const toMs = Date.UTC(t.year, t.month - 1, t.day);
  return Math.round((toMs - fromMs) / MS_PER_DAY);
}
