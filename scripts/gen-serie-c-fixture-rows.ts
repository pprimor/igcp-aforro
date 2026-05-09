#!/usr/bin/env tsx
/**
 * One-off helper: print Série C `igcpPublishedBaseRates.json` rows from
 * `computeBaseRate` after Euribor backfill. Redirect output into the fixture
 * or paste manually — used while bootstrapping golden months.
 */
import { computeBaseRate } from '../src/core/baseRate.js';
import { getSeries } from '../src/core/series.js';

const s = getSeries('C');
const rows: { series: 'C'; month: string; basePct: string }[] = [];

outer: for (let y = 2008; y <= 2026; y += 1) {
  const startM = y === 2008 ? 2 : 1;
  const endM = y === 2026 ? 5 : 12;
  for (let m = startM; m <= endM; m += 1) {
    try {
      const r = computeBaseRate(y, m, { series: s });
      rows.push({
        series: 'C',
        month: `${y}-${String(m).padStart(2, '0')}`,
        basePct: r.basePct,
      });
    } catch {
      process.stderr.write(
        `Stopped at ${y}-${String(m).padStart(2, '0')} (computeBaseRate failed)\n`,
      );
      break outer;
    }
  }
}

process.stdout.write(`${JSON.stringify(rows, null, 2)}\n`);
