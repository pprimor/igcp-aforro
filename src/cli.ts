import { cac } from 'cac';
import { runCohort } from './cli/commands/cohort.js';
import { runCurrent } from './cli/commands/current.js';
import { runFetchEuribor } from './cli/commands/fetchEuribor.js';
import { runRates } from './cli/commands/rates.js';
import { runRedeem } from './cli/commands/redeem.js';
import { runSimulate } from './cli/commands/simulate.js';
import { VERSION } from './index.js';

/**
 * `aforro` CLI entry point.
 *
 * Each command lives in `./cli/commands/*` and receives a typed options
 * bag from `cac` (kebab-case flags become camelCase keys). The
 * cross-cutting flag `--json` is accepted on every command and toggles
 * between machine-readable JSON output and a human-friendly pretty
 * layout (key-value pairs for single records, aligned tables for lists).
 *
 * The CLI never throws to the top level: each command body is wrapped by
 * `runCommand()` which renders errors via `printError()` and sets a
 * non-zero `process.exitCode`. That keeps `cac` from re-printing the
 * stack trace and gives users a single, parseable error line.
 */
const cli = cac('aforro');

cli
  .command('simulate', 'Simulate an IGCP Aforro cohort (Série B, C, D, E, or F) up to an as-of date')
  .option('--subscribed <date>', 'Subscription date (YYYY-MM-DD)')
  .option('--units <n>', 'Principal in EUR (integer inside the selected series range)')
  .option('--as-of <date>', 'As-of date (YYYY-MM-DD); defaults to today (UTC)')
  .option('--schedule', 'Include the per-quarter capitalization schedule')
  .option('--irs <rate>', 'IRS withholding rate (e.g. 0.28); defaults to series default')
  .option('--series <code>', 'Series code', { default: 'F' })
  .option('--json', 'Emit JSON instead of a pretty table')
  .example('aforro simulate --subscribed 2024-03-15 --units 1000 --schedule')
  .action(runSimulate);

cli
  .command('redeem', 'Compute the redemption value of a Série B/C/D/E/F holding on a given date')
  .option('--subscribed <date>', 'Subscription date (YYYY-MM-DD)')
  .option('--units <n>', 'Original principal in EUR')
  .option('--redeem-on <date>', 'Redemption date (YYYY-MM-DD)')
  .option('--redeem-units <n>', 'Units to redeem; defaults to full balance')
  .option('--series <code>', 'Series code', { default: 'F' })
  .option('--irs <rate>', 'IRS withholding rate; defaults to series default')
  .option('--schedule', 'Include the per-quarter schedule of the embedded simulation')
  .option('--json', 'Emit JSON instead of a pretty table')
  .action(runRedeem);

cli
  .command(
    'current',
    'Print the monthly base rate and gross annual rates by permanence tier for the as-of month',
  )
  .option('--series <code>', 'Series code', { default: 'F' })
  .option('--as-of <date>', 'As-of date (YYYY-MM-DD); defaults to today (UTC)')
  .option(
    '--subscribed <date>',
    'Optional subscription date (YYYY-MM or YYYY-MM-DD); also print cohort rate for the quarter containing --as-of',
  )
  .option('--json', 'Emit JSON instead of a pretty table')
  .example('aforro current')
  .example('aforro current --as-of 2026-04-19')
  .example('aforro current --series E --subscribed 2022-06-15')
  .action(runCurrent);

cli
  .command('rates', 'Print monthly base rates between --from and --to (inclusive)')
  .option('--series <code>', 'Series code', { default: 'F' })
  .option('--from <month>', 'Start month (YYYY-MM)')
  .option('--to <month>', 'End month (YYYY-MM)')
  .option('--json', 'Emit JSON instead of a pretty table')
  .example('aforro rates --from 2023-06 --to 2026-04')
  .action(runRates);

cli
  .command('cohort', 'Resolve the annual rate that applies to a cohort for a given quarter')
  .option('--subscribed <date>', 'Subscription date (YYYY-MM or YYYY-MM-DD)')
  .option('--as-of <date>', 'As-of date (YYYY-MM or YYYY-MM-DD); defaults to today (UTC)')
  .option('--series <code>', 'Series code', { default: 'F' })
  .option('--json', 'Emit JSON instead of a pretty table')
  .example('aforro cohort --subscribed 2024-03 --as-of 2026-04')
  .action(runCohort);

cli
  .command(
    'fetch-euribor',
    'Refresh src/data/euribor3m.json and euribor12m.json from Bundesbank (developer checkout only)',
  )
  .option(
    '--mode <mode>',
    'Forwarded to scripts/fetch-euribor.ts (e.g. seed | incremental | range)',
  )
  .action(runFetchEuribor);

cli.help();
cli.version(VERSION);

cli.parse();
