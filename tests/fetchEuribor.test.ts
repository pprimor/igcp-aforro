import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import {
  BUNDESBANK_BBIG1_URL,
  fetchEuriborCsv,
  mergeObservations,
  parseBundesbankCsv,
} from '../scripts/fetchEuriborCore.js';
import type { RateEntry } from '../src/types/domain.js';

/**
 * Tests for the Bundesbank BBIG1 (EMMI EURIBOR® 3M) fetcher core.
 *
 * The transport layer is exercised via msw -- the same pattern documented
 * in the data-sourcing subplan. Pure helpers (`parseBundesbankCsv`,
 * `mergeObservations`) are exercised directly with inline payloads or
 * the checked-in `tests/fixtures/bundesbank-bbig1-sample.csv` snippet so
 * any drift in the upstream CSV shape (column order, "no value"
 * sentinel, decimal precision) is caught at the parser boundary.
 */

const FIXTURE_PATH = resolve(
  fileURLToPath(import.meta.url),
  '../fixtures/bundesbank-bbig1-sample.csv',
);
const SAMPLE_CSV = readFileSync(FIXTURE_PATH, 'utf8');

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('parseBundesbankCsv', () => {
  it('skips the 9-line preamble and returns only data rows, sorted ascending', () => {
    const parsed = parseBundesbankCsv(SAMPLE_CSV);
    expect(parsed.observations.map((row) => row.date)).toEqual([
      '2026-04-09',
      '2026-04-10',
      '2026-04-13',
      '2026-04-14',
      '2026-04-15',
      '2026-04-16',
    ]);
    expect(parsed.skippedPreambleRows).toBe(9);
  });

  it('filters out "No value available" rows without inserting zeros', () => {
    const parsed = parseBundesbankCsv(SAMPLE_CSV);
    expect(parsed.skippedEmptyValueRows).toBe(2);
    expect(parsed.observations.find((row) => row.date === '2026-04-11')).toBeUndefined();
    expect(parsed.observations.find((row) => row.date === '2026-04-12')).toBeUndefined();
  });

  it('parses values as numbers and preserves Bundesbank 3-decimal precision', () => {
    const parsed = parseBundesbankCsv(SAMPLE_CSV);
    const apr16 = parsed.observations.find((row) => row.date === '2026-04-16');
    expect(apr16?.ratePct).toBe('2.238');
  });

  it('mines the upstream `last update` timestamp from the preamble', () => {
    const parsed = parseBundesbankCsv(SAMPLE_CSV);
    expect(parsed.upstreamLastUpdate).toBe('2026-04-17 13:47:50');
  });

  it('sorts unsorted input ascending by date', () => {
    const csv = [
      'last update,2026-04-17 13:47:50,',
      '2026-04-10,2.219,',
      '2026-04-09,2.221,',
      '2026-04-08,2.220,',
    ].join('\n');
    const { observations } = parseBundesbankCsv(csv);
    expect(observations.map((row) => row.date)).toEqual(['2026-04-08', '2026-04-09', '2026-04-10']);
  });

  it('tolerates Windows-style CRLF line endings', () => {
    const crlfCsv = SAMPLE_CSV.replace(/\n/g, '\r\n');
    const parsed = parseBundesbankCsv(crlfCsv);
    expect(parsed.observations).toHaveLength(6);
  });

  it('throws on a non-numeric value (upstream schema break)', () => {
    const csv = ['Decimals,3,', '2026-04-16,oops,'].join('\n');
    expect(() => parseBundesbankCsv(csv)).toThrow(/non-numeric value/);
  });
});

describe('mergeObservations', () => {
  const existing: readonly RateEntry[] = [
    { date: '2026-04-09', ratePct: '2.221' },
    { date: '2026-04-10', ratePct: '2.219' },
    { date: '2026-04-13', ratePct: '2.204' },
  ];

  it('appends new observations and keeps the array sorted ascending', () => {
    const incoming: readonly RateEntry[] = [
      { date: '2026-04-15', ratePct: '2.240' },
      { date: '2026-04-14', ratePct: '2.243' },
    ];
    const { merged, stats } = mergeObservations(existing, incoming);
    expect(merged.map((row) => row.date)).toEqual([
      '2026-04-09',
      '2026-04-10',
      '2026-04-13',
      '2026-04-14',
      '2026-04-15',
    ]);
    expect(stats).toEqual({ added: 2, updated: 0, unchanged: 0 });
  });

  it('dedupes by date — incoming wins on conflict (Bundesbank/EMMI is authoritative)', () => {
    const incoming: readonly RateEntry[] = [{ date: '2026-04-10', ratePct: '2.220' }];
    const { merged, stats } = mergeObservations(existing, incoming);
    expect(merged.find((row) => row.date === '2026-04-10')?.ratePct).toBe('2.220');
    expect(stats).toEqual({ added: 0, updated: 1, unchanged: 0 });
  });

  it('reports unchanged-count when the incoming value matches the stored one', () => {
    const incoming: readonly RateEntry[] = [{ date: '2026-04-10', ratePct: '2.219' }];
    const { stats } = mergeObservations(existing, incoming);
    expect(stats).toEqual({ added: 0, updated: 0, unchanged: 1 });
  });

  it('does not mutate the inputs', () => {
    const existingCopy = existing.map((row) => ({ ...row }));
    const incoming: readonly RateEntry[] = [{ date: '2026-04-15', ratePct: '2.240' }];
    mergeObservations(existing, incoming);
    expect(existing).toEqual(existingCopy);
  });
});

describe('fetchEuriborCsv (msw-mocked HTTP)', () => {
  it('GETs the Bundesbank BBIG1 endpoint and parses the response', async () => {
    let requestedUrl = '';
    server.use(
      http.get('https://api.statistiken.bundesbank.de/rest/download/BBIG1/*', ({ request }) => {
        requestedUrl = request.url;
        return new HttpResponse(SAMPLE_CSV, {
          status: 200,
          headers: { 'content-type': 'text/csv' },
        });
      }),
    );

    const parsed = await fetchEuriborCsv();
    expect(requestedUrl).toBe(BUNDESBANK_BBIG1_URL);
    expect(parsed.observations).toHaveLength(6);
    expect(parsed.upstreamLastUpdate).toBe('2026-04-17 13:47:50');
  });

  it('throws on a non-2xx response with status text in the message', async () => {
    server.use(
      http.get(
        'https://api.statistiken.bundesbank.de/rest/download/BBIG1/*',
        () =>
          new HttpResponse('upstream is down', { status: 503, statusText: 'Service Unavailable' }),
      ),
    );

    await expect(fetchEuriborCsv()).rejects.toThrow(/HTTP 503 Service Unavailable/);
  });

  it('round-trips through merge: fetched rows merge cleanly into a stored snapshot', async () => {
    server.use(
      http.get(
        'https://api.statistiken.bundesbank.de/rest/download/BBIG1/*',
        () => new HttpResponse(SAMPLE_CSV, { status: 200 }),
      ),
    );

    const stored: readonly RateEntry[] = [
      { date: '2026-04-09', ratePct: '2.221' },
      { date: '2026-04-10', ratePct: '2.219' },
    ];
    const parsed = await fetchEuriborCsv();
    const { merged, stats } = mergeObservations(stored, parsed.observations);

    expect(merged).toHaveLength(6);
    expect(stats.added).toBe(4);
    expect(stats.unchanged).toBe(2);
    expect(stats.updated).toBe(0);
  });
});
