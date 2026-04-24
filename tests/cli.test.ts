import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execa } from 'execa';
import { describe, expect, it } from 'vitest';

/**
 * End-to-end CLI happy-path tests.
 *
 * Each test spawns the real CLI binary via `tsx` (the same loader the
 * `aforro fetch-euribor` subcommand defers to) and asserts on the
 * `--json` output. We invoke the TypeScript entry point directly rather
 * than the built `dist/cli.js`:
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

describe('aforro CLI — happy paths via execa', () => {
  it('current --json prints the IGCP-published rate for the as-of month', async () => {
    const { stdout, exitCode } = await runCli(['current', '--as-of', '2026-04-19', '--json']);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
    expect(parsed).toMatchObject({
      series: 'F',
      month: '2026-04',
      fixingDate: '2026-03-27',
      basePct: '2.138',
    });
  });

  it('rates --from --to --json returns one row per month in range', async () => {
    const { stdout, exitCode } = await runCli([
      'rates',
      '--from',
      '2025-04',
      '--to',
      '2025-07',
      '--json',
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout) as ReadonlyArray<{ month: string; basePct: string }>;
    expect(parsed.map((row) => row.month)).toEqual(['2025-04', '2025-05', '2025-06', '2025-07']);
    expect(parsed[0]?.basePct).toBe('2.415');
  });

  it('cohort --json resolves the annual rate components', async () => {
    const { stdout, exitCode } = await runCli([
      'cohort',
      '--subscribed',
      '2024-03-15',
      '--as-of',
      '2026-03-19',
      '--json',
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
    expect(parsed).toMatchObject({
      series: 'F',
      subscriptionDate: '2024-03-15',
      yearsSinceSubscription: 2,
      premiumTier: { fromYear: 2, toYear: 5, ratePct: '0.25' },
    });
    expect(parsed.annualRatePct).toMatch(/^\d+\.\d{3}$/);
  });

  it('cohort accepts the YYYY-MM shorthand for --subscribed and --as-of', async () => {
    const { stdout, exitCode } = await runCli([
      'cohort',
      '--subscribed',
      '2024-03',
      '--as-of',
      '2026-04',
      '--json',
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
    expect(parsed.subscriptionDate).toBe('2024-03-01');
  });

  it('simulate --json mirrors the calculator output', async () => {
    const { stdout, exitCode } = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '1000',
      '--as-of',
      '2024-09-15',
      '--json',
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
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
    const { stdout, exitCode } = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '5000',
      '--as-of',
      '2025-06-15',
      '--schedule',
      '--json',
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout) as { schedule?: ReadonlyArray<unknown> };
    expect(parsed.schedule).toBeDefined();
    expect(parsed.schedule?.length).toBe(5);
  });

  it('simulate --irs overrides the default IRS rate', async () => {
    const { stdout, exitCode } = await runCli([
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
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
    expect(parsed.irsRate).toBe('0.0000');
    expect(parsed.totalIrsWithheld).toBe('0.00');
    expect(parsed.totalInterestNet).toBe(parsed.totalInterestGross);
  });

  it('current --series E --json prints the Série E rate (E3 + 1pp) for the as-of month', async () => {
    const { stdout, exitCode } = await runCli([
      'current',
      '--series',
      'E',
      '--as-of',
      '2026-04-19',
      '--json',
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
    expect(parsed).toMatchObject({
      series: 'E',
      month: '2026-04',
      fixingDate: '2026-03-27',
      basePct: '3.138',
    });
  });

  it('simulate --series E --json runs against a Série E cohort end-to-end', async () => {
    // 2018-01-15 sits inside Série E's subscription window (2017-11-01 →
    // 2023-06-01) and asOf 2018-04-15 closes exactly one quarter — the
    // smallest sample that still exercises the Série E base-rate +
    // capitalization path through the CLI.
    const { stdout, exitCode } = await runCli([
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
    ]);
    expect(exitCode).toBe(0);
    const parsed = JSON.parse(stdout);
    expect(parsed).toMatchObject({
      series: 'E',
      subscriptionDate: '2018-01-15',
      asOfDate: '2018-04-15',
      units: 1000,
      maturityDate: '2028-01-15',
      matured: false,
    });
    // Net interest, gross interest, and IRS withholding must reconcile at
    // the cents level (gross − IRS = net) regardless of the underlying
    // base rate.
    const gross = Number(parsed.totalInterestGross);
    const irs = Number(parsed.totalIrsWithheld);
    const net = Number(parsed.totalInterestNet);
    expect(Math.abs(gross - irs - net)).toBeLessThan(0.005);
  });

  it('current default (pretty) output prints aligned key-value rows', async () => {
    const { stdout, exitCode } = await runCli(['current', '--as-of', '2026-04-19']);
    expect(exitCode).toBe(0);
    const lines = stdout.trimEnd().split('\n');
    expect(lines).toHaveLength(4);
    // Each line is `<key>  <value>` (two-space gap), with the key column
    // padded to the widest key (`fixingDate` = 10 chars).
    for (const line of lines) {
      expect(line).toMatch(/^\S.*\s{2,}\S/);
    }
  });

  it('--help exits cleanly and prints the global usage', async () => {
    const { stdout, exitCode } = await runCli(['--help']);
    expect(exitCode).toBe(0);
    expect(stdout).toContain('aforro');
    expect(stdout).toMatch(/simulate/);
    expect(stdout).toMatch(/current/);
    expect(stdout).toMatch(/rates/);
    expect(stdout).toMatch(/cohort/);
    expect(stdout).toMatch(/fetch-euribor/);
  });
});

describe('aforro CLI — error paths', () => {
  it('simulate without --subscribed prints a single-line error and exits non-zero', async () => {
    const { stderr, exitCode } = await runCli(['simulate', '--units', '1000']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toMatch(/error: --subscribed is required/);
  });

  it('simulate with units below the minimum surfaces the Zod issue', async () => {
    const { stderr, exitCode } = await runCli([
      'simulate',
      '--subscribed',
      '2024-03-15',
      '--units',
      '50',
    ]);
    expect(exitCode).not.toBe(0);
    expect(stderr).toMatch(/error: invalid input/);
    expect(stderr).toMatch(/units: units must be >= 100/);
  });

  it('rates without --from and --to prints a missing-flag error', async () => {
    const { stderr, exitCode } = await runCli(['rates']);
    expect(exitCode).not.toBe(0);
    expect(stderr).toMatch(/error: --from is required/);
  });
});
