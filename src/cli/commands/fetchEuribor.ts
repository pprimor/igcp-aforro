import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { platform } from 'node:process';
import { fileURLToPath } from 'node:url';

import { runCommand } from '../output.js';

/** Options accepted by the `fetch-euribor` CLI command. */
export interface FetchEuriborCliOptions {
  /**
   * Forwarded as `--mode <mode>` to `scripts/fetch-euribor.ts`. Defaults
   * to whatever the script picks (currently `incremental`).
   */
  readonly mode?: string;
}

/**
 * Walks up from `from` looking for a directory that contains
 * `scripts/fetch-euribor.ts`. Returns the package root on hit, `null`
 * otherwise. Used so `aforro fetch-euribor` works from any cwd inside a
 * developer checkout while staying silent for npm-installed users (whose
 * tarball deliberately excludes `scripts/`).
 */
function findPackageRoot(from: string): string | null {
  let current = from;
  while (true) {
    if (existsSync(resolve(current, 'scripts/fetch-euribor.ts'))) {
      return current;
    }
    const parent = dirname(current);
    if (parent === current) {
      return null;
    }
    current = parent;
  }
}

/**
 * Resolves the local `tsx` binary inside `<packageRoot>/node_modules/.bin`.
 * Returns `null` when `tsx` is not installed (e.g. someone ran the CLI in a
 * checkout with no `node_modules/`). Resolved this way rather than via
 * `pnpm exec tsx` so the command works on any package manager — including
 * npm, yarn, and bun — without requiring pnpm on the user's `PATH`.
 */
function findTsxBinary(packageRoot: string): string | null {
  const binName = platform === 'win32' ? 'tsx.cmd' : 'tsx';
  const candidate = resolve(packageRoot, 'node_modules/.bin', binName);
  return existsSync(candidate) ? candidate : null;
}

/**
 * Entry point invoked by `cac` when the user runs `aforro fetch-euribor`.
 *
 * Delegates to `tsx scripts/fetch-euribor.ts` (the same script the cron
 * job calls) so the CLI and CI exercise the exact same code path. The
 * script lives outside `src/` and is intentionally **not** shipped in the
 * npm tarball; users who installed via npm will see an actionable error.
 *
 * Exit code from the spawned process is forwarded verbatim.
 */
export function runFetchEuribor(options: FetchEuriborCliOptions): Promise<void> {
  return runCommand(async () => {
    const here = dirname(fileURLToPath(import.meta.url));
    const packageRoot = findPackageRoot(here) ?? findPackageRoot(process.cwd());
    if (!packageRoot) {
      throw new Error(
        'fetch-euribor requires the developer checkout (scripts/fetch-euribor.ts not found). ' +
          'Run this command from a clone of igcp-aforro, or use the bundled `src/data/euribor3m.json` directly.',
      );
    }

    const tsxBin = findTsxBinary(packageRoot);
    if (!tsxBin) {
      throw new Error(
        `tsx is not installed in ${packageRoot}. Run \`pnpm install\` (or your package manager's equivalent) inside the checkout first.`,
      );
    }

    const args = ['scripts/fetch-euribor.ts'];
    if (options.mode) {
      args.push('--mode', options.mode);
    }

    const exitCode = await new Promise<number>((resolvePromise, rejectPromise) => {
      const child = spawn(tsxBin, args, {
        cwd: packageRoot,
        stdio: 'inherit',
      });
      child.on('error', rejectPromise);
      child.on('close', (code) => resolvePromise(code ?? 0));
    });

    if (exitCode !== 0) {
      process.exitCode = exitCode;
    }
  });
}
