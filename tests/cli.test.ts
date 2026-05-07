import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execa } from 'execa';
import { describe, expect, it } from 'vitest';
import { VERSION } from '../src/index.js';

/**
 * End-to-end CLI contract tests.
 *
 * Each test spawns the real CLI binary via `tsx` (the same loader the
 * `aforro fetch-euribor` subcommand defers to). We invoke the TypeScript
 * entry point directly rather than the built `dist/cli.js`:
 *
 *   - it removes a `pnpm build` precondition from CI,
 *   - it makes failures point at the source file in stack traces,
 *   - and `tsx` is already a dev dependency for `scripts/`, so there is no
 *     extra moving part.
 *
 * The build artifact is still validated end-to-end by `prepublishOnly`'s
 * `pnpm build` step.
 */

const REPO_ROOT = resolve(fileURLToPath(import.meta.url), '../..');
const CLI_ENTRY = resolve(REPO_ROOT, 'src/cli.ts');
const TSX_BIN = resolve(REPO_ROOT, 'node_modules/.bin/tsx');

interface CliResult {
  readonly stdout: string;
  readonly stderr: string;
  readonly exitCode: number;
}

type JsonObject = Record<string, unknown>;

async function runCli(args: readonly string[]): Promise<CliResult> {
  const result = await execa(TSX_BIN, [CLI_ENTRY, ...args], {
    cwd: REPO_ROOT,
    reject: false,
  });
  return {
    stdout: result.stdout,
    stderr: result.stderr,
    exitCode: result.exitCode ?? 0,
  };
}

function expectSuccess(result: CliResult): void {
  expect(result.exitCode).toBe(0);
  expect(result.stderr).toBe('');
}

function expectFailure(result: CliResult): void {
  expect(result.exitCode).not.toBe(0);
  expect(result.stdout).toBe('');
  expect(result.stderr).toMatch(/^error: /);
}

function parseJson<T = unknown>(result: CliResult): T {
  expectSuccess(result);
  return JSON.parse(result.stdout) as T;
}

function linesOf(stdout: string): string[] {
  return stdout.trimEnd().split('\n');
}

describe('aforro CLI — global contracts', () => {
  it('--version prints the exported VERSION string', async () => {
    const result = await runCli(['--version']);

    expectSuccess(result);
    expect(result.stdout).toContain(VERSION);
  });

  it('--help exits cleanly and prints the global usage', async () => {
    const result = await runCli(['--help']);

    expectSuccess(result);
    expect(result.stdout).toContain('Usage:');
    expect(result.stdout).toContain('simulate');
    expect(result.stdout).toContain('current');
    expect(result.stdout).toContain('rates');
    expect(result.stdout).toContain('cohort');
    expect(result.stdout).toContain('redeem');
    expect(result.stdout).toContain('fetch-euribor');
  });

  it.each([
    [
      'simulate',
      ['--subscribed', '--units', '--as-of', '--schedule', '--irs', '--series', '--json'],
    ],
    ['current', ['--series', '--as-of', '--json']],
    ['rates', ['--series', '--from', '--to', '--json']],
    ['cohort', ['--subscribed', '--as-of', '--series', '--json']],
    [
      'redeem',
      ['--subscribed', '--units', '--redeem-on', '--redeem-units', '--series', '--irs', '--schedule', '--json'],
    ],
  ] as const)('%s --help includes the command flags', async (command, flags) => {
    const result = await runCli([command, '--help']);

    expectSuccess(result);
    for (const flag of flags) {
      expect(result.stdout).toContain(flag);
    }
  });

  it('successful --json commands keep stderr empty and emit parseable JSON', async () => {
    const result = await runCli(['current', '--as-of', '2026-04-19', '--json']);

    const parsed = parseJson<JsonObject>(result);
    expect(parsed).toHaveProperty('series', 'F');
  });

  it('command-handler failures set a non-zero exit code and keep stdout empty', async () => {
    const result = await runCli(['simulate', '--units', '1000']);

    expectFailure(result);
    expect(result.stderr).toContain('--subscribed is required');
  });
});

describe('aforro CLI — JSON contracts', () => {
  it('current --json prints the IGCP-published rate for the as-of month', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli(['current', '--as-of', '2026-04-19', '--json']),
    );

    expect(parsed).toMatchObject({
      series: 'F',
      month: '2026-04',
      fixingDate: '2026-03-27',
      basePct: '2.138',
    });
  });

  it('current --series E --json prints the Série E rate for the as-of month', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli(['current', '--series', 'E', '--as-of', '2026-04-19', '--json']),
    );

    expect(parsed).toMatchObject({
      series: 'E',
      month: '2026-04',
      fixingDate: '2026-03-27',
      basePct: '3.138',
    });
  });

  it('current --series D --json prints the Série D rate for the as-of month', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli(['current', '--series', 'D', '--as-of', '2026-04-19', '--json']),
    );

    expect(parsed).toMatchObject({
      series: 'D',
      month: '2026-04',
      fixingDate: '2026-03-27',
      basePct: '3.138',
    });
  });

  it('rates --from --to --json returns one row per month in range', async () => {
    const parsed = parseJson<ReadonlyArray<{ month: string; basePct: string }>>(
      await runCli(['rates', '--from', '2025-04', '--to', '2025-07', '--json']),
    );

    expect(parsed.map((row) => row.month)).toEqual(['2025-04', '2025-05', '2025-06', '2025-07']);
    expect(parsed[0]?.basePct).toBe('2.415');
  });

  it('rates --series E --json returns Série E rows in range', async () => {
    const parsed = parseJson<ReadonlyArray<{ series: string; month: string; basePct: string }>>(
      await runCli(['rates', '--series', 'E', '--from', '2025-04', '--to', '2025-05', '--json']),
    );

    expect(parsed).toHaveLength(2);
    expect(parsed.map((row) => row.series)).toEqual(['E', 'E']);
    expect(parsed.map((row) => row.basePct)).toEqual(['3.415', '3.216']);
  });

  it('rates --series D --json returns Série D rows in range', async () => {
    const parsed = parseJson<ReadonlyArray<{ series: string; month: string; basePct: string }>>(
      await runCli(['rates', '--series', 'D', '--from', '2025-04', '--to', '2025-05', '--json']),
    );

    expect(parsed).toHaveLength(2);
    expect(parsed.map((row) => row.series)).toEqual(['D', 'D']);
    expect(parsed.map((row) => row.basePct)).toEqual(['3.415', '3.216']);
  });

  it('cohort --json resolves the annual rate components', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli(['cohort', '--subscribed', '2024-03-15', '--as-of', '2026-03-19', '--json']),
    );

    expect(parsed).toMatchObject({
      series: 'F',
      subscriptionDate: '2024-03-15',
      yearsSinceSubscription: 2,
      premiumTier: { fromYear: 2, toYear: 5, ratePct: '0.25' },
    });
    expect(parsed.annualRatePct).toMatch(/^\d+\.\d{3}$/);
  });

  it('cohort accepts the YYYY-MM shorthand for --subscribed and --as-of', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli(['cohort', '--subscribed', '2024-03', '--as-of', '2026-04', '--json']),
    );

    expect(parsed.subscriptionDate).toBe('2024-03-01');
    expect(parsed.asOfDate).toBe('2026-04-01');
  });

  it('cohort --series E --json resolves a valid Série E cohort', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'cohort',
        '--series',
        'E',
        '--subscribed',
        '2018-01-15',
        '--as-of',
        '2020-02-15',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      series: 'E',
      subscriptionDate: '2018-01-15',
      yearsSinceSubscription: 2,
      premiumTier: { fromYear: 2, toYear: 5, ratePct: '0.50' },
    });
  });

  it('cohort --series D --json resolves a valid Série D cohort', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'cohort',
        '--series',
        'D',
        '--subscribed',
        '2017-10-01',
        '--as-of',
        '2026-04-19',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      series: 'D',
      subscriptionDate: '2017-10-01',
      yearsSinceSubscription: 8,
      premiumTier: { fromYear: 6, toYear: 10, ratePct: '1.00' },
      annualRatePct: '4.138',
    });
  });

  it('simulate --json mirrors the calculator output', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'simulate',
        '--subscribed',
        '2024-03-15',
        '--units',
        '1000',
        '--as-of',
        '2024-09-15',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      series: 'F',
      subscriptionDate: '2024-03-15',
      asOfDate: '2024-09-15',
      units: 1000,
      currentValueNet: '1009.02',
      totalInterestNet: '9.02',
      totalIrsWithheld: '3.51',
      matured: false,
    });
  });

  it('simulate --schedule populates the per-quarter breakdown', async () => {
    const parsed = parseJson<{ schedule?: ReadonlyArray<unknown> }>(
      await runCli([
        'simulate',
        '--subscribed',
        '2024-03-15',
        '--units',
        '5000',
        '--as-of',
        '2025-06-15',
        '--schedule',
        '--json',
      ]),
    );

    expect(parsed.schedule).toBeDefined();
    expect(parsed.schedule).toHaveLength(5);
  });

  it('simulate --irs overrides the default IRS rate', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'simulate',
        '--subscribed',
        '2024-03-15',
        '--units',
        '1000',
        '--as-of',
        '2024-09-15',
        '--irs',
        '0',
        '--json',
      ]),
    );

    expect(parsed.irsRate).toBe('0.0000');
    expect(parsed.totalIrsWithheld).toBe('0.00');
    expect(parsed.totalInterestNet).toBe(parsed.totalInterestGross);
  });

  it('redeem --json returns redemption values and embedded simulation', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'redeem',
        '--subscribed',
        '2024-03-15',
        '--units',
        '1000',
        '--redeem-on',
        '2024-09-20',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      series: 'F',
      subscriptionDate: '2024-03-15',
      redemptionDate: '2024-09-20',
      units: 1000,
      unitsToRedeem: 1000,
      remainingUnits: 0,
    });
    expect(parsed).toHaveProperty('simulation');
  });

  it('redeem --redeem-units supports partial redemption', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'redeem',
        '--subscribed',
        '2024-03-15',
        '--units',
        '1000',
        '--redeem-on',
        '2024-09-20',
        '--redeem-units',
        '400',
        '--json',
      ]),
    );
    expect(parsed.unitsToRedeem).toBe(400);
    expect(parsed.remainingUnits).toBe(600);
  });

  it('simulate --series E --json runs against a Série E cohort end-to-end', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'simulate',
        '--series',
        'E',
        '--subscribed',
        '2018-01-15',
        '--units',
        '1000',
        '--as-of',
        '2018-04-15',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      series: 'E',
      subscriptionDate: '2018-01-15',
      asOfDate: '2018-04-15',
      units: 1000,
      maturityDate: '2028-01-15',
      matured: false,
    });
    const gross = Number(parsed.totalInterestGross);
    const irs = Number(parsed.totalIrsWithheld);
    const net = Number(parsed.totalInterestNet);
    expect(Math.abs(gross - irs - net)).toBeLessThan(0.005);
  });

  it('simulate --series D --json runs against a Série D cohort end-to-end', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'simulate',
        '--series',
        'D',
        '--subscribed',
        '2017-10-01',
        '--units',
        '1000',
        '--as-of',
        '2018-01-01',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      series: 'D',
      subscriptionDate: '2017-10-01',
      asOfDate: '2018-01-01',
      units: 1000,
      maturityDate: '2027-10-01',
      matured: false,
    });
    const gross = Number(parsed.totalInterestGross);
    const irs = Number(parsed.totalIrsWithheld);
    const net = Number(parsed.totalInterestNet);
    expect(Math.abs(gross - irs - net)).toBeLessThan(0.005);
  });
});

describe('aforro CLI — pretty output contracts', () => {
  it('current prints the exact pretty key set', async () => {
    const result = await runCli(['current', '--as-of', '2026-04-19']);

    expectSuccess(result);
    const lines = linesOf(result.stdout);
    expect(lines.map((line) => line.split(/\s{2,}/)[0])).toEqual([
      'series',
      'month',
      'fixingDate',
      'basePct',
    ]);
    expect(lines).toContain('basePct     2.138');
  });

  it('rates prints a table with headers, separator, and one row per month', async () => {
    const result = await runCli(['rates', '--from', '2025-04', '--to', '2025-07']);

    expectSuccess(result);
    const lines = linesOf(result.stdout);
    expect(lines[0]).toMatch(/^series\s{2,}month\s{2,}fixingDate\s{2,}basePct$/);
    expect(lines[1]).toMatch(/^-{6}\s{2,}-{7}\s{2,}-{10}\s{2,}-{7}$/);
    expect(lines.slice(2)).toHaveLength(4);
    expect(lines[2]).toContain('F       2025-04  2025-03-27  2.415');
  });

  it('cohort prints key-value output with formatted premium tier', async () => {
    const result = await runCli(['cohort', '--subscribed', '2024-03', '--as-of', '2026-04']);

    expectSuccess(result);
    const lines = linesOf(result.stdout);
    expect(lines.map((line) => line.split(/\s{2,}/)[0])).toEqual([
      'series',
      'subscriptionDate',
      'asOfDate',
      'quarterStartDate',
      'quarterEndDate',
      'quarterIndex',
      'yearsSinceSubscription',
      'baseRatePct',
      'premiumTier',
      'annualRatePct',
    ]);
    expect(lines).toContain('premiumTier             y2-5 (+0.25%)');
  });

  it('simulate prints the summary key set without a schedule section by default', async () => {
    const result = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--as-of',
      '2024-09-15',
    ]);

    expectSuccess(result);
    const lines = linesOf(result.stdout);
    expect(lines.map((line) => line.split(/\s{2,}/)[0])).toEqual([
      'series',
      'subscriptionDate',
      'asOfDate',
      'units',
      'irsRate',
      'currentValueGross',
      'currentValueNet',
      'totalInterestGross',
      'totalInterestNet',
      'totalIrsWithheld',
      'accruedSinceLastCapitalization',
      'matured',
      'maturityDate',
    ]);
    expect(lines).toContain('currentValueNet                 1009.02');
    expect(lines).not.toContain('schedule');
  });

  it('simulate --schedule prints a blank-line schedule table section', async () => {
    const result = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--as-of',
      '2024-09-15',
      '--schedule',
    ]);

    expectSuccess(result);
    const lines = linesOf(result.stdout);
    const scheduleIndex = lines.indexOf('schedule');
    expect(scheduleIndex).toBeGreaterThan(0);
    expect(lines[scheduleIndex - 1]).toBe('');
    expect(lines[scheduleIndex + 1]).toMatch(
      /^quarterEndDate\s{2,}annualRate\s{2,}quarterlyRate\s{2,}interestGross\s{2,}irsWithheld\s{2,}interestNet\s{2,}balanceAfter\s{2,}tier\s*$/,
    );
    expect(lines.slice(scheduleIndex + 3)).toHaveLength(2);
    expect(lines[scheduleIndex + 3]).toContain('2024-06-15');
  });

  it('redeem prints the summary key set without schedule by default', async () => {
    const result = await runCli([
      'redeem',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--redeem-on',
      '2024-09-20',
    ]);
    expectSuccess(result);
    const lines = linesOf(result.stdout);
    expect(lines.map((line) => line.split(/\s{2,}/)[0])).toEqual([
      'series',
      'subscriptionDate',
      'redemptionDate',
      'units',
      'unitsToRedeem',
      'unitQuoteAtRedemption',
      'redemptionValue',
      'remainingUnits',
      'remainingValueAtRedemption',
      'forfeitedAccruedGross',
      'earliestRedemptionDate',
    ]);
    expect(lines).not.toContain('schedule');
  });

  it('redeem --schedule prints embedded simulation schedule section', async () => {
    const result = await runCli([
      'redeem',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--redeem-on',
      '2024-09-20',
      '--schedule',
    ]);
    expectSuccess(result);
    const lines = linesOf(result.stdout);
    const scheduleIndex = lines.indexOf('schedule');
    expect(scheduleIndex).toBeGreaterThan(0);
    expect(lines[scheduleIndex + 1]).toMatch(
      /^quarterEndDate\s{2,}annualRate\s{2,}quarterlyRate\s{2,}interestGross\s{2,}irsWithheld\s{2,}interestNet\s{2,}balanceAfter\s{2,}tier\s*$/,
    );
  });
});

describe('aforro CLI — validation contracts', () => {
  it('current rejects an invalid --series value', async () => {
    const result = await runCli(['current', '--series', 'X', '--as-of', '2026-04-19']);

    expectFailure(result);
    expect(result.stderr).toContain(
      "series: Invalid enum value. Expected 'D' | 'E' | 'F', received 'X'",
    );
  });

  it('current rejects an invalid --as-of date', async () => {
    const result = await runCli(['current', '--as-of', '2026-4-19']);

    expectFailure(result);
    expect(result.stderr).toContain('asOfDate: Expected date in YYYY-MM-DD format');
  });

  it('rates requires --from before checking --to', async () => {
    const result = await runCli(['rates']);

    expectFailure(result);
    expect(result.stderr).toContain('--from is required');
  });

  it('rates requires --to when --from is present', async () => {
    const result = await runCli(['rates', '--from', '2025-04']);

    expectFailure(result);
    expect(result.stderr).toContain('--to is required');
  });

  it('rates rejects an invalid --from month format', async () => {
    const result = await runCli(['rates', '--from', '2025-4', '--to', '2025-07']);

    expectFailure(result);
    expect(result.stderr).toContain('fromMonth: Expected month in YYYY-MM format');
  });

  it('rates rejects --from after --to', async () => {
    const result = await runCli(['rates', '--from', '2025-07', '--to', '2025-04']);

    expectFailure(result);
    expect(result.stderr).toContain('toMonth: fromMonth must be on or before toMonth');
  });

  it('cohort requires --subscribed', async () => {
    const result = await runCli(['cohort', '--as-of', '2026-04']);

    expectFailure(result);
    expect(result.stderr).toContain('--subscribed is required');
  });

  it('cohort rejects an invalid --subscribed shorthand', async () => {
    const result = await runCli(['cohort', '--subscribed', '2024/03', '--as-of', '2026-04']);

    expectFailure(result);
    expect(result.stderr).toContain('--subscribed must be YYYY-MM or YYYY-MM-DD');
  });

  it('cohort rejects an invalid --as-of shorthand', async () => {
    const result = await runCli(['cohort', '--subscribed', '2024-03', '--as-of', '2026/04']);

    expectFailure(result);
    expect(result.stderr).toContain('--as-of must be YYYY-MM or YYYY-MM-DD');
  });

  it('cohort rejects out-of-window Série E subscriptions', async () => {
    const result = await runCli([
      'cohort',
      '--series',
      'E',
      '--subscribed',
      '2024-03',
      '--as-of',
      '2024-04',
    ]);

    expectFailure(result);
    expect(result.stderr).toContain('subscriptionDate must be on or before 2023-06-01');
  });

  it('simulate requires --units when --subscribed is present', async () => {
    const result = await runCli(['simulate', '--subscribed', '2024-03-15']);

    expectFailure(result);
    expect(result.stderr).toContain('--units is required');
  });

  it('simulate rejects non-finite units', async () => {
    const result = await runCli(['simulate', '--subscribed', '2024-03-15', '--units', 'nope']);

    expectFailure(result);
    expect(result.stderr).toContain('--units must be a finite number');
  });

  it('simulate rejects non-integer units', async () => {
    const result = await runCli(['simulate', '--subscribed', '2024-03-15', '--units', '100.5']);

    expectFailure(result);
    expect(result.stderr).toContain('units: units must be an integer');
  });

  it('simulate rejects units below the minimum', async () => {
    const result = await runCli(['simulate', '--subscribed', '2024-03-15', '--units', '50']);

    expectFailure(result);
    expect(result.stderr).toContain('units: units must be >= 100');
  });

  it('simulate rejects units above the maximum', async () => {
    const result = await runCli(['simulate', '--subscribed', '2024-03-15', '--units', '100001']);

    expectFailure(result);
    expect(result.stderr).toContain('units: units must be <= 100,000');
  });

  it('simulate rejects invalid --irs values', async () => {
    const result = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--irs',
      '1.5',
    ]);

    expectFailure(result);
    expect(result.stderr).toContain('irsRate: irsRate must be <= 1');
  });

  it('simulate rejects --as-of before the subscription date', async () => {
    const result = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--as-of',
      '2024-03-14',
    ]);

    expectFailure(result);
    expect(result.stderr).toContain('asOfDate: asOfDate must be on or after subscriptionDate');
  });

  it('simulate reports matured cohorts as successful output', async () => {
    const parsed = parseJson<JsonObject>(
      await runCli([
        'simulate',
        '--subscribed',
        '2024-03-15',
        '--units',
        '1000',
        '--as-of',
        '2039-03-15',
        '--json',
      ]),
    );

    expect(parsed).toMatchObject({
      matured: true,
      maturityDate: '2039-03-15',
    });
  });

  it('redeem requires --redeem-on', async () => {
    const result = await runCli(['redeem', '--subscribed', '2024-03-15', '--units', '1000']);
    expectFailure(result);
    expect(result.stderr).toContain('--redeem-on is required');
  });

  it('redeem rejects non-finite --redeem-units', async () => {
    const result = await runCli([
      'redeem',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--redeem-on',
      '2024-09-20',
      '--redeem-units',
      'abc',
    ]);
    expectFailure(result);
    expect(result.stderr).toContain('--redeem-units must be a finite number');
  });

  it('redeem rejects units below residual minimum', async () => {
    const result = await runCli([
      'redeem',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--redeem-on',
      '2024-09-20',
      '--redeem-units',
      '901',
    ]);
    expectFailure(result);
    expect(result.stderr).toContain(
      'unitsToRedeem: remaining balance after partial redemption must be 0 or at least 100',
    );
  });
});

describe('aforro CLI — fetch-euribor scope', () => {
  it('fetch-euribor --help exposes forwarding options without running the network/file-writing script', async () => {
    const result = await runCli(['fetch-euribor', '--help']);

    expectSuccess(result);
    expect(result.stdout).toContain('--mode <mode>');
    expect(result.stdout).toContain('seed | incremental | range');
  });
});
