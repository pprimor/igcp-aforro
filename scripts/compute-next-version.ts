#!/usr/bin/env tsx
/**
 * Compute (and optionally apply) the next CalVer version for `igcp-aforro`.
 *
 * The version lives in two places that must never disagree — `publish-release.yml`
 * refuses to publish when they do:
 *   - `package.json` `"version"`
 *   - `src/index.ts` `export const VERSION`
 *
 * The script is invoked by:
 *   - `release.yml` (`--bump <today|patch|prerelease> --write`) for manual
 *     code releases and hot-fixes
 *   - `data-refresh.yml` (`--bump today --write`) so the monthly IGCP refresh
 *     PR carries its own version bump and publishes on merge
 *   - developers running `pnpm version:next --bump today` to preview
 *
 * Both workflows share this module rather than inlining the arithmetic: a
 * divergence between them is what let npm sit three months behind `main`.
 *
 * `--bump` semantics (CalVer `YYYY.MMDD.PATCH`, dates in UTC):
 *
 *   - `today`      -> `<year>.<MMDD-as-int>.0`, e.g. 2026-08-04 -> `2026.804.0`.
 *                     Bumps the patch instead when the current version already
 *                     carries today's date segment, so two releases on one day
 *                     don't collide (`2026.804.0` -> `2026.804.1`).
 *   - `patch`      -> Keeps the current date segment, patch + 1. For same-day
 *                     hot-fixes when the date segment is deliberately frozen.
 *   - `prerelease` -> `<today>.0-rc.<N>`, published under the npm `next`
 *                     dist-tag so consumers don't pick it up by default.
 *
 * `--write` edits both files with a targeted replace of the single version
 * line, which keeps Biome's formatting intact. That is deliberate: the older
 * `pnpm version` approach rewrote `package.json` with multi-line arrays that
 * `pnpm lint` then rejected, forcing a follow-up formatter step.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { argv, env, exit } from 'node:process';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const PACKAGE_FILE = resolve(REPO_ROOT, 'package.json');
const INDEX_FILE = resolve(REPO_ROOT, 'src/index.ts');

const BUMP_KINDS = ['today', 'patch', 'prerelease'] as const;
type BumpKind = (typeof BUMP_KINDS)[number];

/** npm dist-tag a version is published under. Prereleases stay off `latest`. */
type NpmTag = 'latest' | 'next';

interface CliArgs {
  readonly bump: BumpKind;
  readonly write: boolean;
  readonly quiet: boolean;
}

export interface NextVersion {
  readonly current: string;
  readonly version: string;
  readonly tag: string;
  readonly npmTag: NpmTag;
}

const HELP_TEXT = `Usage: tsx scripts/compute-next-version.ts --bump <kind> [options]

Options:
  --bump <kind>   Required. One of:
                    today       <UTC year>.<MMDD>.0 (patch+1 if already today)
                    patch       Current date segment, patch + 1
                    prerelease  <today>.0-rc.<N>, npm dist-tag "next"
  --write         Apply the bump to package.json and src/index.ts.
                  Without it, the script only reports the computed version.
  --quiet         Suppress informational logs.
  -h, --help      Show this help.

Output:
  Prints "version=", "tag=", and "npmTag=" lines to stdout. When GITHUB_OUTPUT
  is set, the same lines are appended there for use as workflow step outputs.
`;

function parseArgs(rawArgs: readonly string[]): CliArgs {
  if (rawArgs.includes('-h') || rawArgs.includes('--help')) {
    process.stdout.write(HELP_TEXT);
    exit(0);
  }

  let bump: BumpKind | undefined;
  let write = false;
  let quiet = false;

  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    switch (arg) {
      case '--bump': {
        const value = rawArgs[++i];
        if (value === undefined || value.startsWith('--')) {
          throw new Error('--bump requires a value');
        }
        if (!BUMP_KINDS.includes(value as BumpKind)) {
          throw new Error(`Invalid --bump: "${value}"; expected ${BUMP_KINDS.join(' | ')}`);
        }
        bump = value as BumpKind;
        break;
      }
      case '--write':
        write = true;
        break;
      case '--quiet':
        quiet = true;
        break;
      default:
        throw new Error(`Unknown argument: "${arg}". Run with --help for usage.`);
    }
  }

  if (bump === undefined) {
    throw new Error(`--bump is required (${BUMP_KINDS.join(' | ')}). Run with --help for usage.`);
  }

  return { bump, write, quiet };
}

/** `YYYY.MMDD` for the given instant in UTC, e.g. 2026-08-04 -> `2026.804`. */
function todayBase(now: Date): string {
  const year = now.getUTCFullYear();
  const mmdd = (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
  return `${year}.${mmdd}`;
}

/**
 * Splits a CalVer string into its date segment and patch number, discarding
 * any `-rc.N` suffix so a prerelease and its eventual stable release compare
 * on the same footing.
 */
function splitVersion(version: string): { base: string; patch: number } {
  const stable = version.split('-')[0] ?? version;
  const parts = stable.split('.');
  const [year, mmdd, patch] = parts;
  if (year === undefined || mmdd === undefined || patch === undefined) {
    throw new Error(`Cannot parse CalVer version "${version}"; expected YYYY.MMDD.PATCH`);
  }
  const patchNumber = Number(patch);
  if (!Number.isInteger(patchNumber)) {
    throw new Error(`Cannot parse patch segment of version "${version}"`);
  }
  return { base: `${year}.${mmdd}`, patch: patchNumber };
}

export function computeNextVersion(
  current: string,
  bump: BumpKind,
  now: Date = new Date(),
): NextVersion {
  const today = todayBase(now);
  const { base: currentBase, patch: currentPatch } = splitVersion(current);
  const isPrerelease = current.includes('-');

  let version: string;
  let npmTag: NpmTag = 'latest';

  if (bump === 'today') {
    // Only treat today's date segment as "already taken" when the current
    // version is stable; an unpublished `-rc` for today still releases as `.0`.
    version =
      currentBase === today && !isPrerelease ? `${today}.${currentPatch + 1}` : `${today}.0`;
  } else if (bump === 'patch') {
    version = `${currentBase}.${currentPatch + 1}`;
  } else {
    const match = current.match(/-rc\.(\d+)$/);
    const rc = match?.[1] !== undefined && currentBase === today ? Number(match[1]) + 1 : 0;
    version = `${today}.0-rc.${rc}`;
    npmTag = 'next';
  }

  return { current, version, tag: `v${version}`, npmTag };
}

async function readCurrentVersion(): Promise<string> {
  const pkg = JSON.parse(await readFile(PACKAGE_FILE, 'utf8')) as { version?: unknown };
  if (typeof pkg.version !== 'string') {
    throw new Error(`package.json has no string "version" field`);
  }
  return pkg.version;
}

/**
 * Replaces exactly one occurrence of `pattern` in the file at `path`, failing
 * loudly when the pattern no longer matches. A silent no-op here would ship a
 * release whose `package.json` and `VERSION` disagree.
 */
async function replaceInFile(path: string, pattern: RegExp, replacement: string): Promise<void> {
  const before = await readFile(path, 'utf8');
  const after = before.replace(pattern, replacement);
  if (before === after) {
    throw new Error(`Failed to update the version in ${path}; pattern ${pattern} did not match.`);
  }
  await writeFile(path, after, 'utf8');
}

export async function applyVersion(version: string): Promise<void> {
  await replaceInFile(PACKAGE_FILE, /"version": "[^"]+"/, `"version": "${version}"`);
  await replaceInFile(
    INDEX_FILE,
    /export const VERSION = '[^']+';/,
    `export const VERSION = '${version}';`,
  );
}

type Logger = (message: string) => void;

async function reportVersion(next: NextVersion, log: Logger): Promise<void> {
  const lines = [`version=${next.version}`, `tag=${next.tag}`, `npmTag=${next.npmTag}`];
  process.stdout.write(`${lines.join('\n')}\n`);

  const githubOutput = env.GITHUB_OUTPUT;
  if (githubOutput) {
    await writeFile(githubOutput, `${lines.join('\n')}\n`, { encoding: 'utf8', flag: 'a' });
    log('[compute-next-version] appended step outputs to GITHUB_OUTPUT');
  }
}

async function main(): Promise<void> {
  const args = parseArgs(argv.slice(2));
  const log: Logger = args.quiet ? () => {} : (msg) => process.stderr.write(`${msg}\n`);

  const current = await readCurrentVersion();
  const next = computeNextVersion(current, args.bump);
  log(
    `[compute-next-version] ${current} -> ${next.version} ` +
      `(bump=${args.bump}, tag=${next.tag}, npm=${next.npmTag})`,
  );

  await reportVersion(next, log);

  if (!args.write) {
    log('[compute-next-version] no --write: package.json and src/index.ts left untouched');
    return;
  }

  await applyVersion(next.version);
  log(`[compute-next-version] wrote ${next.version} to package.json and src/index.ts`);
}

const isEntryPoint = (() => {
  const entry = argv[1];
  if (!entry) return false;
  return resolve(entry) === fileURLToPath(import.meta.url);
})();

if (isEntryPoint) {
  main().catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`compute-next-version failed: ${message}\n`);
    exit(1);
  });
}
