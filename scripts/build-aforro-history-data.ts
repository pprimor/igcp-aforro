#!/usr/bin/env tsx
/**
 * One-shot: fetch Banco de Portugal BPstat series and write bundled JSON for
 * Série A/B historical base-rate tiers (TBA from Treasury bills; Lisbor-era
 * daily expansion from monthly Lisbor 3M/12M).
 *
 * Run: pnpm exec tsx scripts/build-aforro-history-data.ts
 *
 * Requires network. Writes:
 *   - src/data/tba-history.json
 *   - src/data/lisbor3m.json
 *   - src/data/lisbor12m.json
 * Updates src/data/_meta.json keys: tbaHistory, lisbor3m, lisbor12m, serieAAdminRates.
 *
 * Série A administrative months (1961-01 .. 1986-06) use a deterministic linear
 * placeholder table until DR-sourced rows replace them (see serie-a-research.md).
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { isTarget2BusinessDay } from '../src/core/calendar.js';
import { formatPercent, toBig } from '../src/core/money.js';
import type { IsoDate } from '../src/types/domain.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const META_PATH = resolve(REPO_ROOT, 'src/data/_meta.json');
const TBA_HISTORY_PATH = resolve(REPO_ROOT, 'src/data/tba-history.json');
const LISBOR_3M_PATH = resolve(REPO_ROOT, 'src/data/lisbor3m.json');
const LISBOR_12M_PATH = resolve(REPO_ROOT, 'src/data/lisbor12m.json');
const SERIE_A_ADMIN_PATH = resolve(REPO_ROOT, 'src/data/serie-a-admin-rates.json');
const RAW_DIR = resolve(REPO_ROOT, 'raw/bpstat');

const BPSTAT = 'https://bpstat.bportugal.pt/data/v1';
const DOMAIN = '22';
const DATASET = '471186a839daf97d9280419fc06c8579';
const DATASET_MM = '2829cb9155cb4f6ba6906db6b204c4bc';

const SERIES_TBA_TB_MONTHLY = 12504604;
const SERIES_LISBOR_3M_MONTHLY = 12504609;
const SERIES_LISBOR_12M_MONTHLY = 12504612;

interface JsonStatDataset {
  readonly value: readonly number[];
  readonly dimension: {
    readonly reference_date: {
      readonly category: { readonly index: readonly string[] };
    };
  };
}

interface TbaHistoryRow {
  readonly month: string;
  readonly tbaPct: string;
  readonly source: string;
}

interface SerieAAdminRow {
  readonly month: string;
  readonly basePct: string;
  readonly source: string;
}

interface RateRow {
  readonly date: string;
  readonly ratePct: number;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`BPstat fetch failed ${res.status}: ${url}`);
  }
  return (await res.json()) as T;
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function isoMonthFromIndex(s: string): string {
  return s.slice(0, 7);
}

/** Parse YYYY-MM-DD as UTC midnight for ordering. */
function parseIso(d: string): number {
  return Date.parse(`${d}T00:00:00Z`);
}

function monthRangeInclusive(fromMonth: string, toMonth: string): string[] {
  const out: string[] = [];
  let [y, m] = fromMonth.split('-').map(Number) as [number, number];
  const endY = Number(toMonth.slice(0, 4));
  const endM = Number(toMonth.slice(5, 7));
  while (y < endY || (y === endY && m <= endM)) {
    out.push(`${y}-${pad2(m)}`);
    m += 1;
    if (m > 12) {
      m = 1;
      y += 1;
    }
  }
  return out;
}

function expandMonthlyToDaily(
  monthly: Map<string, number>,
  fromDate: string,
  toDate: string,
): RateRow[] {
  const rows: RateRow[] = [];
  const start = parseIso(fromDate);
  const end = parseIso(toDate);
  for (let t = start; t <= end; t += 86_400_000) {
    const d = new Date(t);
    const iso =
      `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}` as IsoDate;
    if (!isTarget2BusinessDay(iso)) continue;
    const month = iso.slice(0, 7);
    const v = monthly.get(month);
    if (v === undefined) continue;
    rows.push({ date: iso, ratePct: v });
  }
  return rows;
}

async function main(): Promise<void> {
  await mkdir(RAW_DIR, { recursive: true });

  const tbaUrl = `${BPSTAT}/domains/${DOMAIN}/datasets/${DATASET}/?lang=EN&series_ids=${SERIES_TBA_TB_MONTHLY}`;
  const tbaJson = await fetchJson<JsonStatDataset>(tbaUrl);
  await writeFile(resolve(RAW_DIR, 'tba-tb-monthly.json'), `${JSON.stringify(tbaJson)}\n`);

  const idx = tbaJson.dimension.reference_date.category.index;
  const vals = tbaJson.value;
  const byMonth = new Map<string, number>();
  for (let i = 0; i < idx.length; i += 1) {
    const key = isoMonthFromIndex(idx[i] ?? '');
    const v = vals[i];
    if (key && v !== undefined && !Number.isNaN(v)) {
      byMonth.set(key, v);
    }
  }

  const firstBpMonth = [...byMonth.keys()].sort()[0] ?? '1990-04';
  const firstVal = byMonth.get(firstBpMonth) ?? 17.41;
  const tbaRows: TbaHistoryRow[] = [];
  for (const month of monthRangeInclusive('1986-07', '1999-01')) {
    const v = byMonth.get(month) ?? firstVal;
    tbaRows.push({
      month,
      tbaPct: formatPercent(toBig(String(v)), 3),
      source:
        byMonth.has(month) && month >= firstBpMonth
          ? `BPstat series ${SERIES_TBA_TB_MONTHLY} (TBA from Treasury bills, monthly)`
          : `BPstat series ${SERIES_TBA_TB_MONTHLY} — constant extrapolation to ${firstBpMonth} (${firstVal}) pending archival months before ${firstBpMonth}`,
    });
  }

  await writeFile(
    TBA_HISTORY_PATH,
    `${JSON.stringify({ _meta: { generatedBy: 'scripts/build-aforro-history-data.ts' }, rates: tbaRows }, null, 2)}\n`,
  );

  const l3Url = `${BPSTAT}/domains/${DOMAIN}/datasets/${DATASET_MM}/?lang=EN&series_ids=${SERIES_LISBOR_3M_MONTHLY}`;
  const l12Url = `${BPSTAT}/domains/${DOMAIN}/datasets/${DATASET_MM}/?lang=EN&series_ids=${SERIES_LISBOR_12M_MONTHLY}`;
  const [l3Json, l12Json] = await Promise.all([
    fetchJson<JsonStatDataset>(l3Url),
    fetchJson<JsonStatDataset>(l12Url),
  ]);
  await writeFile(resolve(RAW_DIR, 'lisbor-3m-monthly.json'), `${JSON.stringify(l3Json)}\n`);
  await writeFile(resolve(RAW_DIR, 'lisbor-12m-monthly.json'), `${JSON.stringify(l12Json)}\n`);

  const map3 = new Map<string, number>();
  const map12 = new Map<string, number>();
  const idx3 = l3Json.dimension.reference_date.category.index;
  for (let i = 0; i < idx3.length; i += 1) {
    const m = isoMonthFromIndex(idx3[i] ?? '');
    const v = l3Json.value[i];
    if (m && v !== undefined) map3.set(m, v);
  }
  const idx12 = l12Json.dimension.reference_date.category.index;
  for (let i = 0; i < idx12.length; i += 1) {
    const m = isoMonthFromIndex(idx12[i] ?? '');
    const v = l12Json.value[i];
    if (m && v !== undefined) map12.set(m, v);
  }

  const lisborDaily3 = expandMonthlyToDaily(map3, '1999-02-01', '2002-03-29');
  const lisborDaily12 = expandMonthlyToDaily(map12, '1999-02-01', '2002-03-29');

  await writeFile(LISBOR_3M_PATH, `${JSON.stringify(lisborDaily3, null, 0)}\n`);
  await writeFile(LISBOR_12M_PATH, `${JSON.stringify(lisborDaily12, null, 0)}\n`);

  const adminMonths = monthRangeInclusive('1961-01', '1986-06');
  const adminRows: SerieAAdminRow[] = adminMonths.map((month, i) => {
    const t = adminMonths.length <= 1 ? 0 : i / (adminMonths.length - 1);
    const base = 5 + t * 9.5;
    return {
      month,
      basePct: formatPercent(toBig(String(base)), 3),
      source:
        'Linear interpolation placeholder (1961–1986) pending Diário da República archival curation — see docs/src/content/docs/serie-a-research.md',
    };
  });
  await writeFile(
    SERIE_A_ADMIN_PATH,
    `${JSON.stringify(
      {
        _meta: {
          generatedBy: 'scripts/build-aforro-history-data.ts',
          note: 'Replace placeholder basePct values with DR-sourced administrative rates when available.',
        },
        rates: adminRows,
      },
      null,
      2,
    )}\n`,
  );

  const metaRaw = await readFile(META_PATH, 'utf8');
  const meta = JSON.parse(metaRaw) as Record<string, unknown>;
  const now = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  meta.tbaHistory = {
    lastRefreshedAt: now,
    source: 'Banco de Portugal BPstat',
    sourceUrl: tbaUrl,
    seriesId: String(SERIES_TBA_TB_MONTHLY),
    earliestObservation: tbaRows[0]?.month ?? null,
    latestObservation: tbaRows[tbaRows.length - 1]?.month ?? null,
    observationCount: tbaRows.length,
    license: 'Banco de Portugal statistical data (BPstat); see https://bpstat.bportugal.pt/',
  };
  meta.lisbor3m = {
    lastRefreshedAt: now,
    source: 'Banco de Portugal BPstat — LISBOR 3 months monthly expanded to business-day series',
    sourceUrl: l3Url,
    seriesId: String(SERIES_LISBOR_3M_MONTHLY),
    earliestObservation: lisborDaily3[0]?.date ?? null,
    latestObservation: lisborDaily3[lisborDaily3.length - 1]?.date ?? null,
    observationCount: lisborDaily3.length,
    license: 'Banco de Portugal statistical data (BPstat)',
  };
  meta.lisbor12m = {
    lastRefreshedAt: now,
    source:
      'Banco de Portugal BPstat — LISBOR 1 year monthly expanded to business-day series (12M leg)',
    sourceUrl: l12Url,
    seriesId: String(SERIES_LISBOR_12M_MONTHLY),
    earliestObservation: lisborDaily12[0]?.date ?? null,
    latestObservation: lisborDaily12[lisborDaily12.length - 1]?.date ?? null,
    observationCount: lisborDaily12.length,
    license: 'Banco de Portugal statistical data (BPstat)',
  };
  meta.serieAAdminRates = {
    lastRefreshedAt: now,
    source: 'Placeholder linear table (pending DR archival)',
    sourceUrl: 'https://www.igcp.pt/pt/aforristas/produtos-de-aforro/certificados-de-aforro',
    seriesId: 'serie-a-admin-placeholder',
    earliestObservation: adminRows[0]?.month ?? null,
    latestObservation: adminRows[adminRows.length - 1]?.month ?? null,
    observationCount: adminRows.length,
    license:
      'Placeholder data generated in-repo; replace with DR-sourced rows before compliance use.',
  };

  await writeFile(META_PATH, `${JSON.stringify(meta, null, 2)}\n`);
  process.stderr.write(
    `Wrote ${TBA_HISTORY_PATH} (${tbaRows.length} months), ${LISBOR_3M_PATH} (${lisborDaily3.length} rows), ${LISBOR_12M_PATH} (${lisborDaily12.length} rows), ${SERIE_A_ADMIN_PATH} (${adminRows.length} months)\n`,
  );
}

main().catch((e) => {
  process.stderr.write(`${e}\n`);
  process.exit(1);
});
