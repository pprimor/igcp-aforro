import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { buildIgcpUrl, mergeFixture, runFetch } from '../scripts/fetch-igcp-base-rates.js';
import { IgcpParseError, parseArticle } from '../scripts/igcpArticleParser.js';

/**
 * Tests for the IGCP Série F base-rate fetcher.
 *
 * The HTTP layer is exercised via msw against a frozen 2026-04 IGCP
 * notice snapshot under `tests/fixtures/igcp-html-snapshots/2026-04.html`.
 * The parser and the idempotent merge helper are exercised directly so
 * any drift in IGCP's markup (sentence wording, percent formatting, scope
 * selectors) or in the fixture-merge contract trips a focused unit test
 * before it can corrupt `tests/fixtures/igcpPublishedBaseRates.json`.
 */

const SNAPSHOT_PATH = resolve(
  fileURLToPath(import.meta.url),
  '../fixtures/igcp-html-snapshots/2026-04.html',
);
const SNAPSHOT_HTML = readFileSync(SNAPSHOT_PATH, 'utf8');

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('buildIgcpUrl', () => {
  it('builds the canonical IGCP slug for a given month', () => {
    expect(buildIgcpUrl('2026-04')).toBe(
      'https://www.igcp.pt/pt/noticias/taxas-de-juro-dos-certificados-de-aforro-das-series-b-d-e-e-f-em-abril-de-2026',
    );
  });

  it('uses the diacritic-free Portuguese month name (marco, not março)', () => {
    expect(buildIgcpUrl('2025-03')).toMatch(/em-marco-de-2025$/);
    expect(buildIgcpUrl('2025-03')).not.toMatch(/março/);
  });

  it('throws on a malformed month string', () => {
    expect(() => buildIgcpUrl('2026-13')).toThrow(/invalid month/);
    expect(() => buildIgcpUrl('not-a-month')).toThrow(/invalid month/);
  });
});

describe('parseArticle', () => {
  it('extracts the Série F base rate from the frozen 2026-04 snapshot', () => {
    expect(parseArticle(SNAPSHOT_HTML)).toEqual({ basePct: '2.138' });
  });

  it('normalises the Portuguese comma decimal to a 3-decimal string', () => {
    const html = `
      <html><body><article>
        <p>A taxa de juro bruta para novas subscrições de Certificados de
        Aforro, Série F, em janeiro de 2025 foi fixada em 2,415%.</p>
      </article></body></html>
    `;
    expect(parseArticle(html).basePct).toBe('2.415');
  });

  it('tolerates &nbsp; and double whitespace between "abril" and "de 2026"', () => {
    const html = `
      <html><body><article>
        <p>A taxa de juro bruta para novas subscrições de Certificados de
        Aforro, Série F, em abril&nbsp; de 2026 foi fixada em 2,138%.</p>
      </article></body></html>
    `;
    expect(parseArticle(html).basePct).toBe('2.138');
  });

  it('extracts the rate when IGCP publishes it only in field-news-description', () => {
    const html = `
      <html><body>
        <div class="field field--name-field-news-description field__item">
          A taxa de juro bruta para novas subscrições de Certificados de Aforro,
          Série F, em junho de 2026 foi fixada em 2,215%.
        </div>
        <div class="content_body alignwide">
          <p>A taxa de juro anual em vigor no trimestre corrente pode ser consultada nos quadros seguintes.</p>
        </div>
      </body></html>
    `;
    expect(parseArticle(html).basePct).toBe('2.215');
  });

  it('scopes the regex to news-description / content_body / <article>, ignoring percentages elsewhere', () => {
    // A bogus 9.999% percentage in the page <head> / sidebar must not be
    // matched: only the Série F value inside the article body counts.
    const html = `
      <html>
        <head>
          <meta name="description" content="Série F bogus 9,999%" />
        </head>
        <body>
          <aside>Tesouro Poupança Série F: 5,500%</aside>
          <article>
            <p>A taxa de juro bruta para novas subscrições de Certificados de
            Aforro, Série F, em abril de 2026 foi fixada em 2,138%.</p>
          </article>
        </body>
      </html>
    `;
    expect(parseArticle(html).basePct).toBe('2.138');
  });

  it('throws IgcpParseError when the article has no Série F sentence', () => {
    const html = `
      <html><body><article>
        <p>A taxa de juro bruta para novas subscrições de Certificados de
        Aforro, Série E, em abril de 2026 foi fixada em 2,000%.</p>
      </article></body></html>
    `;
    expect(() => parseArticle(html)).toThrow(IgcpParseError);
    expect(() => parseArticle(html)).toThrow(/no "Série F .* X,YYY%" sentence/);
  });

  it('throws IgcpParseError when multiple distinct Série F percentages appear', () => {
    const html = `
      <html><body><article>
        <p>Série F, em abril de 2026 foi fixada em 2,138%.</p>
        <p>Errata: Série F, em abril de 2026 foi fixada em 2,200%.</p>
      </article></body></html>
    `;
    expect(() => parseArticle(html)).toThrow(IgcpParseError);
    expect(() => parseArticle(html)).toThrow(/multiple distinct Série F rates/);
  });

  it('does not double-count when the same Série F value appears in <meta> and body', () => {
    // The 2026-04 snapshot legitimately repeats "Série F ... 2,138%" in
    // the <meta name="description">, the news description block, and the
    // article body. Those duplicates collapse to one distinct value and
    // must not trip the "multiple distinct" guard.
    expect(parseArticle(SNAPSHOT_HTML).basePct).toBe('2.138');
  });
});

describe('mergeFixture', () => {
  const baseMeta = {
    source: 'IGCP',
    sourceUrl: 'https://www.igcp.pt/pt/noticias',
    channel: 'Aforristas',
    lastVerifiedAt: '2026-01-15',
    notes: 'test fixture',
  } as const;

  const existingFixture = {
    _meta: baseMeta,
    rates: [
      { series: 'F', month: '2025-12', basePct: '2.057' },
      { series: 'F', month: '2026-01', basePct: '2.046' },
      { series: 'F', month: '2026-03', basePct: '2.012' },
    ],
  } as const;

  it('is a no-op when the month is present and the value matches', () => {
    const result = mergeFixture(existingFixture, {
      series: 'F',
      month: '2026-01',
      basePct: '2.046',
    });
    expect(result.changed).toBe(false);
    expect(result.inserted).toBe(false);
    // Same fixture reference is returned to make the no-op cheap and
    // make the contract obvious to the caller.
    expect(result.fixture).toBe(existingFixture);
  });

  it('throws when the month is present with a different value (refuses overwrite)', () => {
    expect(() =>
      mergeFixture(existingFixture, {
        series: 'F',
        month: '2026-01',
        basePct: '2.099',
      }),
    ).toThrow(/IGCP rate for 2026-01 .* changed: fixture=2.046 igcp=2.099/);
  });

  it('inserts a missing month in chronological order and bumps lastVerifiedAt', () => {
    const result = mergeFixture(existingFixture, {
      series: 'F',
      month: '2026-02',
      basePct: '2.031',
    });
    expect(result.changed).toBe(true);
    expect(result.inserted).toBe(true);
    expect(result.fixture.rates.map((r) => r.month)).toEqual([
      '2025-12',
      '2026-01',
      '2026-02',
      '2026-03',
    ]);
    expect(result.fixture.rates.find((r) => r.month === '2026-02')).toEqual({
      series: 'F',
      month: '2026-02',
      basePct: '2.031',
    });
    // lastVerifiedAt is rewritten to today's UTC date (YYYY-MM-DD), not
    // the previous fixture's stale value.
    expect(result.fixture._meta.lastVerifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(result.fixture._meta.lastVerifiedAt).not.toBe(baseMeta.lastVerifiedAt);
    expect(result.fixture._meta.source).toBe(baseMeta.source);
  });

  it('appends a future month at the tail when it sorts after every existing row', () => {
    const result = mergeFixture(existingFixture, {
      series: 'F',
      month: '2026-12',
      basePct: '1.900',
    });
    expect(result.fixture.rates.at(-1)).toEqual({
      series: 'F',
      month: '2026-12',
      basePct: '1.900',
    });
  });

  it('does not mutate the input fixture when a new row is inserted', () => {
    const before = JSON.parse(JSON.stringify(existingFixture));
    mergeFixture(existingFixture, {
      series: 'F',
      month: '2026-02',
      basePct: '2.031',
    });
    expect(existingFixture).toEqual(before);
  });
});

describe('runFetch (msw-mocked HTTP)', () => {
  const APRIL_2026_URL = buildIgcpUrl('2026-04');

  it('GETs the IGCP slug and parses the snapshot Série F rate', async () => {
    let requestedUrl = '';
    server.use(
      http.get(APRIL_2026_URL, ({ request }) => {
        requestedUrl = request.url;
        return new HttpResponse(SNAPSHOT_HTML, {
          status: 200,
          headers: { 'content-type': 'text/html; charset=utf-8' },
        });
      }),
    );

    const result = await runFetch({ month: '2026-04', dryRun: true, quiet: true }, () => {});

    expect(requestedUrl).toBe(APRIL_2026_URL);
    expect(result.url).toBe(APRIL_2026_URL);
    expect(result.month).toBe('2026-04');
    expect(result.parsed).toEqual({ basePct: '2.138' });
    // The on-disk fixture already carries 2026-04 = 2.138, so the merge
    // is idempotent and `writeOutputs` would be a no-op when `main`
    // dispatches based on `merge.changed`.
    expect(result.merge.changed).toBe(false);
    expect(result.merge.inserted).toBe(false);
    expect(result.html).toBe(SNAPSHOT_HTML);
  });

  it('honours --url override and bypasses the slug builder', async () => {
    const overrideUrl = 'https://staging.example.test/some/igcp-mirror.html';
    let requestedUrl = '';
    server.use(
      http.get(overrideUrl, ({ request }) => {
        requestedUrl = request.url;
        return new HttpResponse(SNAPSHOT_HTML, { status: 200 });
      }),
    );

    const result = await runFetch(
      { month: '2026-04', url: overrideUrl, dryRun: true, quiet: true },
      () => {},
    );

    expect(requestedUrl).toBe(overrideUrl);
    expect(result.url).toBe(overrideUrl);
    expect(result.parsed.basePct).toBe('2.138');
  });

  it('throws on a non-2xx upstream response with status text in the message', async () => {
    server.use(
      http.get(
        APRIL_2026_URL,
        () => new HttpResponse('not found', { status: 404, statusText: 'Not Found' }),
      ),
    );

    await expect(
      runFetch({ month: '2026-04', dryRun: true, quiet: true }, () => {}),
    ).rejects.toThrow(/HTTP 404 Not Found/);
  });

  it('propagates IgcpParseError when the upstream HTML lacks a Série F sentence', async () => {
    server.use(
      http.get(
        APRIL_2026_URL,
        () =>
          new HttpResponse(
            '<html><body><article><p>Página em construção</p></article></body></html>',
            { status: 200 },
          ),
      ),
    );

    await expect(
      runFetch({ month: '2026-04', dryRun: true, quiet: true }, () => {}),
    ).rejects.toThrow(IgcpParseError);
  });

  it('emits informational logs through the injected Logger', async () => {
    server.use(http.get(APRIL_2026_URL, () => new HttpResponse(SNAPSHOT_HTML, { status: 200 })));

    const logs: string[] = [];
    await runFetch({ month: '2026-04', dryRun: true, quiet: false }, (msg) => logs.push(msg));

    expect(logs.some((line) => line.includes('month=2026-04'))).toBe(true);
    expect(logs.some((line) => line.includes('basePct=2.138'))).toBe(true);
    expect(logs.some((line) => line.includes('no-op: 2026-04'))).toBe(true);
  });
});
