import { describe, expect, it } from 'vitest';
import {
  type PortfolioPlaygroundUrlState,
  hasPortfolioPlaygroundQuery,
  parsePortfolioPlaygroundUrlState,
  serializePortfolioPlaygroundUrlState,
} from '../src/portfolioPlaygroundUrlState.js';

const defaults: PortfolioPlaygroundUrlState = {
  rows: [
    { series: 'F', subscriptionDate: '2024-03-15', units: '1000', irsRate: '' },
    { series: 'E', subscriptionDate: '2018-01-15', units: '1000', irsRate: '' },
    { series: 'D', subscriptionDate: '2017-10-01', units: '1000', irsRate: '' },
  ],
  asOfDate: '2026-05-03',
  includeSchedule: false,
};

describe('portfolio playground URL state', () => {
  it('round-trips multiple rows with asOf and schedule=1', () => {
    const state: PortfolioPlaygroundUrlState = {
      rows: [
        { series: 'C', subscriptionDate: '2020-01-15', units: '2500', irsRate: '' },
        { series: 'B', subscriptionDate: '2021-06-01', units: '500', irsRate: '0.125' },
      ],
      asOfDate: '2024-01-15',
      includeSchedule: true,
    };

    const params = serializePortfolioPlaygroundUrlState(state);
    const search = params.toString();

    expect(search).toBe(
      'row=C%2C2020-01-15%2C2500&row=B%2C2021-06-01%2C500%2C0.125&asOf=2024-01-15&schedule=1',
    );
    expect(parsePortfolioPlaygroundUrlState(params, defaults)).toEqual(state);
  });

  it('preserves getAll(row) order', () => {
    const params = new URLSearchParams();
    params.append('row', 'F,2024-01-01,100');
    params.append('row', 'E,2024-02-01,200');
    params.append('row', 'D,2024-03-01,300');

    const parsed = parsePortfolioPlaygroundUrlState(params, defaults);
    expect(parsed.rows.map((r) => r.series)).toEqual(['F', 'E', 'D']);
    expect(parsed.rows.map((r) => r.units)).toEqual(['100', '200', '300']);
  });

  it('returns defaults unchanged when no row keys are present', () => {
    const params = new URLSearchParams('asOf=2099-01-01&schedule=1&series=F');
    expect(hasPortfolioPlaygroundQuery(params)).toBe(false);
    expect(parsePortfolioPlaygroundUrlState(params, defaults)).toEqual(defaults);
  });

  it('falls back to the default series for a row when the token is unknown', () => {
    const params = new URLSearchParams();
    params.append('row', 'F,2024-03-15,1000');
    params.append('row', 'Z,2018-01-15,999');

    const parsed = parsePortfolioPlaygroundUrlState(params, defaults);
    expect(parsed.rows).toHaveLength(2);
    expect(parsed.rows[0]?.series).toBe('F');
    expect(parsed.rows[1]?.series).toBe('E');
    expect(parsed.rows[1]?.units).toBe('999');
  });

  it('preserves invalid date and units strings for downstream validation', () => {
    const params = new URLSearchParams();
    params.append('row', 'F,not-a-date,nope');

    const parsed = parsePortfolioPlaygroundUrlState(params, defaults);
    expect(parsed.rows[0]).toMatchObject({
      series: 'F',
      subscriptionDate: 'not-a-date',
      units: 'nope',
    });
  });

  it('hasPortfolioPlaygroundQuery is true iff at least one row entry exists', () => {
    expect(hasPortfolioPlaygroundQuery(new URLSearchParams())).toBe(false);
    expect(hasPortfolioPlaygroundQuery(new URLSearchParams('row=F%2C2024-01-01%2C1'))).toBe(true);
  });

  it('extends rows beyond defaults using the last default row as template', () => {
    const params = new URLSearchParams();
    params.append('row', 'F,2024-03-15,1000');
    params.append('row', 'E,2018-01-15,1000');
    params.append('row', 'D,2017-10-01,1000');
    params.append('row', 'C,2010-01-01,50');

    const parsed = parsePortfolioPlaygroundUrlState(params, defaults);
    expect(parsed.rows).toHaveLength(4);
    expect(parsed.rows[3]).toEqual({
      series: 'C',
      subscriptionDate: '2010-01-01',
      units: '50',
      irsRate: '',
    });
  });
});
