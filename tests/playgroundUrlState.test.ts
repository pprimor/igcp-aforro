import { describe, expect, it } from 'vitest';
import {
  type PlaygroundFormState,
  parsePlaygroundUrlState,
  serializePlaygroundUrlState,
} from '../src/playgroundUrlState.js';

const defaults: PlaygroundFormState = {
  series: 'F',
  subscriptionDate: '2024-03-15',
  units: '1000',
  asOfDate: '2026-05-03',
  irsRate: '',
  includeSchedule: true,
};

describe('playground URL state', () => {
  it('round-trips a full scenario through stable query params', () => {
    const form: PlaygroundFormState = {
      series: 'E',
      subscriptionDate: '2020-01-15',
      units: '2500',
      asOfDate: '2024-01-15',
      irsRate: '0.25',
      includeSchedule: false,
    };

    const search = serializePlaygroundUrlState(form).toString();

    expect(search).toBe(
      'series=E&subscribed=2020-01-15&units=2500&asOf=2024-01-15&irs=0.25&schedule=0',
    );
    expect(parsePlaygroundUrlState(new URLSearchParams(search), defaults)).toEqual(form);
  });

  it('omits blank IRS and only encodes schedule when disabled', () => {
    const search = serializePlaygroundUrlState(defaults).toString();

    expect(search).toBe('series=F&subscribed=2024-03-15&units=1000&asOf=2026-05-03');
  });

  it('falls back to the default series when the query contains an unknown series', () => {
    const parsed = parsePlaygroundUrlState(
      new URLSearchParams('series=Z&subscribed=2020-01-15'),
      defaults,
    );

    expect(parsed.series).toBe(defaults.series);
    expect(parsed.subscriptionDate).toBe('2020-01-15');
  });

  it('preserves invalid scalar values so field validation can render normal errors', () => {
    const parsed = parsePlaygroundUrlState(
      new URLSearchParams('subscribed=not-a-date&units=nope&asOf=also-bad&irs=bad'),
      defaults,
    );

    expect(parsed).toMatchObject({
      subscriptionDate: 'not-a-date',
      units: 'nope',
      asOfDate: 'also-bad',
      irsRate: 'bad',
    });
  });
});
