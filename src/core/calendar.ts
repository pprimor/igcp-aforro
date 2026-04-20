import type { IsoDate } from '../types/domain.js';

/**
 * TARGET2 business-day calendar.
 *
 * Strictly, TARGET2 was retired on 20 March 2023 and replaced by the T2 RTGS
 * service as part of the Eurosystem's T2/T2S consolidation. The closing-day
 * calendar was carried over unchanged, and IGCP's Série F notices, the ECB
 * Euribor publication schedule, and most market data vendors still refer to
 * it as the "TARGET2 calendar" -- we keep that name here so identifiers
 * line up 1:1 with the source documents we cross-check against.
 *
 * The system closes on weekends plus six fixed/derived holidays each year:
 *
 *   - 1 January (New Year's Day)
 *   - Good Friday      (Easter Sunday − 2 days)
 *   - Easter Monday    (Easter Sunday + 1 day)
 *   - 1 May (Labour Day)
 *   - 25 December (Christmas Day)
 *   - 26 December (Christmas Holiday)
 *
 * IGCP's monthly base-rate fixing date for Série F is the antepenultimate
 * (third-from-last) TARGET2 business day of the preceding calendar month, so
 * this module is the foundational building block for `baseRate.ts`.
 *
 * All dates are handled in UTC. ISO `YYYY-MM-DD` strings cross the public
 * boundary; `Date` is used purely as an internal arithmetic vehicle.
 */

const MS_PER_DAY = 86_400_000;

const FIXED_TARGET2_HOLIDAYS: readonly { readonly month: number; readonly day: number }[] = [
  { month: 1, day: 1 },
  { month: 5, day: 1 },
  { month: 12, day: 25 },
  { month: 12, day: 26 },
];

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function toIsoDate(date: Date): IsoDate {
  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(date.getUTCDate())}`;
}

function fromIsoDate(date: IsoDate): Date {
  if (!ISO_DATE_REGEX.test(date)) {
    throw new Error(`Invalid ISO date: "${date}"; expected YYYY-MM-DD`);
  }
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid calendar date: "${date}"`);
  }
  return parsed;
}

/**
 * Easter Sunday for a given Gregorian year, computed via the Anonymous
 * Gregorian algorithm (Meeus/Jones/Butcher). Returned as an ISO date string.
 */
export function easterSunday(year: number): IsoDate {
  if (!Number.isInteger(year)) {
    throw new Error(`Invalid year: ${year}`);
  }
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const numerator = h + l - 7 * m + 114;
  const month = Math.floor(numerator / 31);
  const day = (numerator % 31) + 1;
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

const holidayCache = new Map<number, ReadonlySet<IsoDate>>();

/**
 * Returns the set of TARGET2 closing dates (excluding weekends) for the given
 * year. Memoized per year because the set is fixed for a calendar year and
 * gets queried once per business-day check.
 */
export function target2Holidays(year: number): ReadonlySet<IsoDate> {
  const cached = holidayCache.get(year);
  if (cached) {
    return cached;
  }

  const easter = fromIsoDate(easterSunday(year));
  const goodFriday = new Date(easter.getTime() - 2 * MS_PER_DAY);
  const easterMonday = new Date(easter.getTime() + 1 * MS_PER_DAY);

  const holidays = new Set<IsoDate>();
  holidays.add(toIsoDate(goodFriday));
  holidays.add(toIsoDate(easterMonday));
  for (const { month, day } of FIXED_TARGET2_HOLIDAYS) {
    holidays.add(`${year}-${pad2(month)}-${pad2(day)}`);
  }

  holidayCache.set(year, holidays);
  return holidays;
}

/**
 * Whether `date` is a day on which TARGET2 settles, i.e. a weekday that is
 * not on the holiday list returned by {@link target2Holidays}.
 */
export function isTarget2BusinessDay(date: IsoDate): boolean {
  const parsed = fromIsoDate(date);
  const weekday = parsed.getUTCDay();
  if (weekday === 0 || weekday === 6) {
    return false;
  }
  return !target2Holidays(parsed.getUTCFullYear()).has(date);
}

/**
 * Returns the most recent TARGET2 business day strictly before `date`.
 *
 * The walk is bounded to a small window because TARGET2 never has more than
 * a handful of consecutive non-business days; an excessive walk indicates a
 * programming error and is surfaced as such.
 */
export function previousBusinessDay(date: IsoDate): IsoDate {
  let cursor = new Date(fromIsoDate(date).getTime() - MS_PER_DAY);
  for (let i = 0; i < 14; i++) {
    const iso = toIsoDate(cursor);
    if (isTarget2BusinessDay(iso)) {
      return iso;
    }
    cursor = new Date(cursor.getTime() - MS_PER_DAY);
  }
  throw new Error(`Could not find a TARGET2 business day within 14 days before ${date}`);
}

/**
 * Returns the antepenultimate (third-from-last) TARGET2 business day of the
 * given calendar month. `month` is 1-based (1 = January, 12 = December).
 *
 * This is IGCP's Euribor 3M fixing date for the following month's Série F
 * base rate.
 */
export function antepenultimateBusinessDay(year: number, month: number): IsoDate {
  if (!Number.isInteger(year)) {
    throw new Error(`Invalid year: ${year}`);
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}; expected an integer in 1..12`);
  }

  // Day 0 of the next month (in UTC) is the last day of the requested month.
  let cursor = new Date(Date.UTC(year, month, 0));
  let businessDayCount = 0;

  // A calendar month has at most 31 days; a guard of 31 iterations is enough
  // to bound the walk while ensuring we never silently spin on a bad input.
  for (let i = 0; i < 31; i++) {
    const iso = toIsoDate(cursor);
    if (isTarget2BusinessDay(iso)) {
      businessDayCount++;
      if (businessDayCount === 3) {
        return iso;
      }
    }
    cursor = new Date(cursor.getTime() - MS_PER_DAY);
  }

  throw new Error(`Could not find antepenultimate TARGET2 business day for ${year}-${pad2(month)}`);
}
