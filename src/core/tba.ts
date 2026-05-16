import type { IsoDate, RateEntry } from '../types/domain.js';
import { antepenultimateBusinessDay } from './calendar.js';
import { formatIsoMonth } from './dateMath.js';
import { Big, ROUND_HALF_EVEN, formatPercent, toBig } from './money.js';

/**
 * Taxa base anual (TBA) per Decreto-Lei n.º 11/99 (11 January 1999), with
 * EURIBOR substituted for LISBOR after EMU — the formula published in the
 * diploma is `0,52 × L3 + 0,47 × L12 − 0,12`, where L3 and L12 are 20-day
 * moving averages of daily EURIBOR fixings at 3M and 12M, terminated on the
 * penultimate TARGET2 business day strictly before the IGCP monthly fixing
 * anchor (antepenultimate TARGET2 business day of the preceding calendar month,
 * aligned with Séries C–F base-rate publication cadence).
 *
 * The 20-day moving averages **end** on the same TARGET2 date as the IGCP
 * monthly Euribor fixing (antepenultimate business day of the month before
 * the published rate month), so {@link maEndDate} matches the `fixingDate`
 * returned by {@link ../core/baseRate.ts} for Séries C–F.
 */

const MOVING_AVERAGE_DAYS = 20;

function previousMonth(year: number, month: number): { year: number; month: number } {
  if (month === 1) {
    return { year: year - 1, month: 12 };
  }
  return { year, month: month - 1 };
}

function findLastIndexAtOrBefore(observations: readonly RateEntry[], cutoff: IsoDate): number {
  let lo = 0;
  let hi = observations.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    const entry = observations[mid];
    if (entry !== undefined && entry.date <= cutoff) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}

function movingAveragePct(
  observations: readonly RateEntry[],
  endDate: IsoDate,
  strictWindowEnd: boolean,
  label: string,
  targetMonth: string,
): { readonly avg: Big; readonly window: readonly RateEntry[] } {
  const lastIdx = findLastIndexAtOrBefore(observations, endDate);
  const lastSeen = lastIdx >= 0 ? observations[lastIdx]?.date : undefined;
  if (strictWindowEnd && lastSeen !== endDate) {
    throw new Error(
      `Insufficient EURIBOR data for TBA in ${targetMonth}: need a fixing on ${endDate} for ${label} ` +
        `but the latest observation on or before that date is ${lastSeen ?? 'none'}`,
    );
  }
  if (lastIdx < MOVING_AVERAGE_DAYS - 1) {
    throw new Error(
      `Insufficient EURIBOR data for TBA in ${targetMonth}: ${label} requires ${MOVING_AVERAGE_DAYS} ` +
        `observations on or before ${endDate} but only ${lastIdx + 1} are available`,
    );
  }
  const window = observations.slice(lastIdx - MOVING_AVERAGE_DAYS + 1, lastIdx + 1);
  let sum = new Big(0);
  for (const row of window) {
    sum = sum.plus(toBig(row.ratePct));
  }
  return { avg: sum.div(MOVING_AVERAGE_DAYS), window };
}

export interface TbaDetail {
  readonly maEndDate: IsoDate;
  readonly l3Window: readonly RateEntry[];
  readonly l12Window: readonly RateEntry[];
  readonly l3MovingAveragePct: string;
  readonly l12MovingAveragePct: string;
  readonly rawTbaPct: string;
  readonly tbaPct: string;
}

export interface TbaOptions {
  readonly observations3m: readonly RateEntry[];
  readonly observations12m: readonly RateEntry[];
  readonly strictWindowEnd?: boolean;
  /** Defaults to EURIBOR labels (Lisbor-era callers pass LISBOR names). */
  readonly indexLabels?: { readonly l3: string; readonly l12: string };
}

/**
 * Computes rounded TBA (3 decimal places, banker's rounding) for the IGCP
 * calendar month `(year, month)`.
 */
export function computeTba(year: number, month: number, options: TbaOptions): TbaDetail {
  const { year: fixingYear, month: fixingMonth } = previousMonth(year, month);
  const fixingDate = antepenultimateBusinessDay(fixingYear, fixingMonth);
  const maEndDate = fixingDate;

  const targetMonth = formatIsoMonth(year, month);
  const strict = options.strictWindowEnd ?? true;

  const l3Label = options.indexLabels?.l3 ?? 'EURIBOR 3M';
  const l12Label = options.indexLabels?.l12 ?? 'EURIBOR 12M';

  const l3 = movingAveragePct(options.observations3m, maEndDate, strict, l3Label, targetMonth);
  const l12 = movingAveragePct(options.observations12m, maEndDate, strict, l12Label, targetMonth);

  const tbaRaw = toBig('0.52')
    .times(l3.avg)
    .plus(toBig('0.47').times(l12.avg))
    .minus(toBig('0.12'));
  const tbaRounded = tbaRaw.round(3, ROUND_HALF_EVEN);

  return {
    maEndDate,
    l3Window: l3.window,
    l12Window: l12.window,
    l3MovingAveragePct: formatPercent(l3.avg, 3),
    l12MovingAveragePct: formatPercent(l12.avg, 3),
    rawTbaPct: tbaRaw.toString(),
    tbaPct: formatPercent(tbaRounded, 3),
  };
}
