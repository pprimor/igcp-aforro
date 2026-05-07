import { isTarget2BusinessDay } from '../../src/core/calendar.js';
import type { IsoDate, RateEntry } from '../../src/types/domain.js';

const MS_PER_DAY = 86_400_000;

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function toIsoDate(d: Date): IsoDate {
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

/**
 * Builds one Euribor 3M fixing per TARGET2 business day from `fromDate` through
 * `toDate` inclusive, all at the same quoted rate. Lets strict
 * {@link computeBaseRate} windows resolve for long-horizon simulations in tests
 * without depending on the bundled Bundesbank series reaching arbitrary future
 * dates.
 */
export function syntheticEuriborFlat(fromDate: IsoDate, toDate: IsoDate, ratePct: string): RateEntry[] {
  const out: RateEntry[] = [];
  const start = Date.parse(`${fromDate}T00:00:00Z`);
  const end = Date.parse(`${toDate}T00:00:00Z`);
  for (let t = start; t <= end; t += MS_PER_DAY) {
    const iso = toIsoDate(new Date(t));
    if (isTarget2BusinessDay(iso)) {
      out.push({ date: iso, ratePct });
    }
  }
  return out;
}
