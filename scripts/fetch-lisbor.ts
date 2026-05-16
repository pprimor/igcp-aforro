#!/usr/bin/env tsx
/**
 * One-shot refresh of Lisbor-era daily series, TBA history, and Série A admin
 * placeholder rows from Banco de Portugal BPstat.
 *
 * Run: `pnpm fetch:lisbor` (delegates to `scripts/build-aforro-history-data.ts`).
 */
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { exit } from 'node:process';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const r = spawnSync('pnpm', ['exec', 'tsx', 'scripts/build-aforro-history-data.ts'], {
  cwd: REPO_ROOT,
  stdio: 'inherit',
  shell: false,
});
exit(r.status ?? 1);
