import type { SeriesCode } from './types/domain.js';

/** URL params are strings; use Set<string> so `has()` accepts parsed query values. */
const VALID_SERIES = new Set<string>(['A', 'B', 'C', 'D', 'E', 'F']);

export interface PlaygroundFormState {
  series: SeriesCode;
  subscriptionDate: string;
  units: string;
  asOfDate: string;
  irsRate: string;
  includeSchedule: boolean;
}

export function serializePlaygroundUrlState(form: PlaygroundFormState): URLSearchParams {
  const params = new URLSearchParams();
  params.set('series', form.series);
  params.set('subscribed', form.subscriptionDate);
  params.set('units', form.units);
  params.set('asOf', form.asOfDate);

  if (form.irsRate.trim() !== '') {
    params.set('irs', form.irsRate);
  }
  if (!form.includeSchedule) {
    params.set('schedule', '0');
  }

  return params;
}

export function parsePlaygroundUrlState(
  params: URLSearchParams,
  defaults: PlaygroundFormState,
): PlaygroundFormState {
  const rawSeries = params.get('series');

  return {
    series:
      rawSeries !== null && VALID_SERIES.has(rawSeries)
        ? (rawSeries as SeriesCode)
        : defaults.series,
    subscriptionDate: params.get('subscribed') ?? defaults.subscriptionDate,
    units: params.get('units') ?? defaults.units,
    asOfDate: params.get('asOf') ?? defaults.asOfDate,
    irsRate: params.get('irs') ?? defaults.irsRate,
    includeSchedule: params.get('schedule') === '0' ? false : defaults.includeSchedule,
  };
}
