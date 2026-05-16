import type { SeriesCode } from './types/domain.js';

/** URL params are strings; use Set<string> so `has()` accepts parsed query values. */
const VALID_SERIES = new Set<string>(['A', 'B', 'C', 'D', 'E', 'F']);

export const PORTFOLIO_ROW_QUERY_KEY = 'row';

/** Keys used by the portfolio playground query contract (for discovery / docs). */
export const PORTFOLIO_QUERY_KEYS = ['row', 'asOf', 'schedule'] as const;

export interface PortfolioPlaygroundRowState {
  series: SeriesCode;
  subscriptionDate: string;
  units: string;
  /** Reserved for future UI; omitted from the URL when blank. */
  irsRate: string;
}

export interface PortfolioPlaygroundUrlState {
  rows: PortfolioPlaygroundRowState[];
  asOfDate: string;
  includeSchedule: boolean;
}

/** True when at least one `row` entry is present (portfolio scenario discriminator). */
export function hasPortfolioPlaygroundQuery(params: URLSearchParams): boolean {
  return params.getAll(PORTFOLIO_ROW_QUERY_KEY).length > 0;
}

function serializeRow(row: PortfolioPlaygroundRowState): string {
  const base = `${row.series},${row.subscriptionDate},${row.units}`;
  if (row.irsRate.trim() !== '') {
    return `${base},${row.irsRate}`;
  }
  return base;
}

export function serializePortfolioPlaygroundUrlState(
  state: PortfolioPlaygroundUrlState,
): URLSearchParams {
  const params = new URLSearchParams();
  for (const row of state.rows) {
    params.append(PORTFOLIO_ROW_QUERY_KEY, serializeRow(row));
  }
  params.set('asOf', state.asOfDate);
  if (state.includeSchedule) {
    params.set('schedule', '1');
  }
  return params;
}

function parseOneRow(
  raw: string,
  rowDefault: PortfolioPlaygroundRowState,
): PortfolioPlaygroundRowState {
  const parts = raw.split(',');
  const rawSeries = parts[0]?.trim() ?? '';
  const series =
    rawSeries !== '' && VALID_SERIES.has(rawSeries) ? (rawSeries as SeriesCode) : rowDefault.series;

  const subscriptionDate =
    parts.length >= 2 ? (parts[1] ?? rowDefault.subscriptionDate) : rowDefault.subscriptionDate;
  const units = parts.length >= 3 ? (parts[2] ?? rowDefault.units) : rowDefault.units;
  const irsRate = parts.length >= 4 ? (parts[3] ?? rowDefault.irsRate) : rowDefault.irsRate;

  return { series, subscriptionDate, units, irsRate };
}

export function parsePortfolioPlaygroundUrlState(
  params: URLSearchParams,
  defaults: PortfolioPlaygroundUrlState,
): PortfolioPlaygroundUrlState {
  const rowStrings = params.getAll(PORTFOLIO_ROW_QUERY_KEY);
  if (rowStrings.length === 0) {
    return defaults;
  }

  const fallbackRow: PortfolioPlaygroundRowState = defaults.rows.at(-1) ?? {
    series: 'F',
    subscriptionDate: '2024-03-15',
    units: '1000',
    irsRate: '',
  };
  const rows: PortfolioPlaygroundRowState[] = rowStrings.map((raw, i) => {
    const rowDefault = defaults.rows[i] ?? fallbackRow;
    return parseOneRow(raw, rowDefault);
  });

  return {
    rows,
    asOfDate: params.get('asOf') ?? defaults.asOfDate,
    includeSchedule: params.get('schedule') === '1',
  };
}
