# Contributing to igcp-aforro

Thanks for helping improve `igcp-aforro`. This project is an independent,
decimal-safe TypeScript library and CLI for simulating Portuguese IGCP Aforro
Série D, Série E, and Série F Treasury Certificates.

This is not an official IGCP project and does not provide financial advice. The
bundled Euribor 3M observations are redistributed from Deutsche Bundesbank under
non-commercial terms; commercial users should review EMMI's licensing terms
before relying on the bundled data or derived artifacts.

For package usage and methodology details, start with [`README.md`](./README.md).
Most contributors only need the prerequisites, local development, testing,
docs, and PR checklist sections below.

The data refresh, `rates.json`, release, and operational troubleshooting
sections are maintainer runbooks. They document how the project is operated, but
they are not expected steps for a normal contribution unless a maintainer asks
you to work on one of those areas.

## Prerequisites

- Node.js `>=20` for the library and CLI.
- `pnpm@10.28.1`, as declared by `packageManager` in [`package.json`](./package.json).
- For docs work, a Node runtime compatible with Astro. The docs deploy workflow
  currently uses Node 22 because Astro requires it.

Install root dependencies with:

```bash
pnpm install
```

For docs-only work, also install the docs workspace dependencies:

```bash
cd docs
pnpm install
```

## Repository Layout

- [`src/core`](./src/core) contains the calculator, date math, rate lookup,
  series metadata, and decimal helpers.
- [`src/cli`](./src/cli) contains the `aforro` CLI commands and output helpers.
- [`src/data`](./src/data) contains the bundled Euribor observations and refresh
  metadata.
- [`scripts`](./scripts) contains data-fetching and artifact-generation commands.
- [`tests`](./tests) contains Vitest coverage and data-source fixtures.
- [`compare`](./compare) contains the manual IGCP parity harness.
- [`docs`](./docs) contains the Astro Starlight documentation site.
- [`raw`](./raw) stores auditable upstream data snapshots when data refreshes
  intentionally update them.
- [`.github/workflows`](./.github/workflows) contains CI, data refresh, release,
  and docs deployment workflows.

## Local Development

Use the same checks that CI runs:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

The PR gate in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs
those four commands on pull requests and pushes to `main`.

Style expectations:

- Keep public API behavior covered by focused Vitest tests.
- Use strict TypeScript and named exports.
- Preserve decimal strings for money and rate values at public boundaries.
- Let Biome handle formatting and linting through `pnpm lint` or
  `pnpm lint:fix`.
- Keep generated outputs out of commits unless the change is intentionally a
  data refresh or release artifact update.

## Testing Expectations

- Core calculator, date, series, and rate changes should include focused tests
  near the affected behavior.
- CLI changes should update [`tests/cli.test.ts`](./tests/cli.test.ts).
- Data-source parser changes should update the relevant fetcher tests and
  fixtures.
- Public behavior changes should update the README or docs when users need to
  know about them.
- Maintainers can run `pnpm compare:igcp` for a live parity check against IGCP's
  public simulator. This command depends on the live IGCP endpoint, so it is a
  manual confidence check rather than a normal PR requirement.

### Live IGCP Compare Runbook

Maintainers use `pnpm compare:igcp` when calculator, rate, data, or methodology
changes need extra parity confidence against IGCP's public simulator. It is also
useful before releases or when investigating suspected parity drift. Prefer a
small targeted smoke run first so local development does not hit IGCP's live
endpoint more than needed.

```bash
# Fast Série F smoke across a few 2024 cohorts.
pnpm compare:igcp -- --series F --filter '^F:2024-' --limit 3 --verbose

# Focused Série E smoke for one subscription month.
pnpm compare:igcp -- --series E --filter '^E:2023-03' --verbose

# Full local sweep across all supported series.
pnpm compare:igcp -- --verbose

# Machine-readable report outside the repository.
pnpm compare:igcp -- --json --out /tmp/igcp-compare.json
```

Useful flags:

- `--series D|E|F|all` narrows the scenario matrix; the default is `all`.
- `--filter <regex>` keeps scenario IDs matching the regex, such as
  `^F:2024-`.
- `--limit <n>` caps the run after filtering.
- `--verbose` prints PASS rows as well as FAIL and ERROR rows.
- `--delay <ms>` changes the pause between IGCP requests; keep a non-zero delay
  for broad sweeps.
- `--tolerance <eur-per-unit>` adjusts the maximum absolute per-unit EUR diff
  that still counts as PASS.
- `--json` emits the report JSON to stdout instead of the table.
- `--out <file>` also writes a JSON report to a file. Prefer `/tmp` or another
  disposable path unless the repository later adds an ignored report directory.

Failure triage:

- Rerun the smallest matching case with `--limit 1 --verbose` so the failing
  scenario and error details are easy to inspect.
- Treat `ERROR` rows, HTTP failures, empty arrays, or non-array payload messages
  as endpoint or transport problems first. Check IGCP availability, whether the
  simulator endpoint or payload shape changed, and whether the scenario is asking
  for a month IGCP no longer serves.
- Treat `FAIL` rows with numeric per-unit diffs as possible formula or data drift.
  Compare the scenario against local `simulate()` output, recent Euribor or IGCP
  fixture changes, and the specific methodology rule touched by the change.
- Remember that `pnpm test` is deterministic and should remain the normal PR
  signal. `pnpm compare:igcp` is live, externally dependent, and its failures are
  investigation input rather than automatic proof of a local regression.

## Docs Workflow

The docs site lives in [`docs`](./docs). See [`docs/README.md`](./docs/README.md)
and [`docs/astro.config.mjs`](./docs/astro.config.mjs) for the executable
configuration.

```bash
cd docs
pnpm install
pnpm dev
pnpm build
```

The local dev server runs at <http://localhost:4321>. The API reference under
`docs/src/content/docs/api/` is generated by `starlight-typedoc` from
`src/index.ts` during docs builds and is ignored by git. Do not commit generated
API docs.

Production docs deployment is handled by
[`.github/workflows/deploy-docs.yml`](./.github/workflows/deploy-docs.yml), not
by manual commits to built docs output.

## Maintainer Runbook: Data Refresh

Maintainer-only. Normal feature, docs, and bug-fix PRs do not need to run the
data refresh workflow. The scheduled data refresh is defined in
[`.github/workflows/data-refresh.yml`](./.github/workflows/data-refresh.yml).
It runs daily, refreshes the bundled Euribor data and the current IGCP Série F
base-rate fixture, and checks Euribor freshness. Scheduled runs open or update a
data-refresh PR only after the current month's official IGCP publication has
been fetched. Euribor-only diffs are logged in the workflow history and discarded
with the runner workspace rather than kept open as partial PRs.

Clean data-refresh PRs auto-merge only when the current month's official IGCP
rate has been published and fetched, the golden tests pass, and the workflow's
guard checks confirm the PR only contains expected refresh files. Maintainers can
still use the manual `forcePr` dispatch input for debugging, but the normal
cadence is one meaningful monthly PR tied to IGCP's base-rate publication rather
than daily Euribor observations.

Maintainers can use local dry-run checks before investigating or forcing a
refresh:

```bash
pnpm fetch:euribor --mode incremental --dry-run
pnpm fetch:igcp-base-rates --month current --dry-run
```

A data refresh may intentionally touch:

- `src/data/euribor3m.json`
- `src/data/_meta.json`
- `raw/euribor/<YYYY-MM>.csv`
- `tests/fixtures/igcpPublishedBaseRates.json`
- `raw/igcp/<YYYY-MM>.html`

If an automated data-refresh PR has the `needs-review` label, the workflow's
golden tests failed against the refreshed data. This usually means IGCP's
published base rate disagrees with the value derived from the Euribor formula,
or upstream markup/data changed. Inspect the PR diff and workflow logs before
merging.

## Maintainer Runbook: rates.json

Maintainer-only. `rates.json` is the precomputed static artifact for non-JS
consumers; contributors should not commit generated root `public` output as part
of ordinary PRs.

```bash
pnpm build:rates-json
```

By default this writes the ignored root file `public/rates.json`. Do not commit
that generated root `public` output. The docs deployment workflow rebuilds
`rates.json` from the release tag and stages both:

- `https://igcp-aforro.primor.me/rates.json`
- `https://igcp-aforro.primor.me/v/<calver>/rates.json`

Data-refresh PRs update source data and fixtures; they should not imply that
`public/rates.json` is committed on every refresh.

## Maintainer Runbook: Release

Maintainer-only. Releases are manually dispatched through
[`.github/workflows/release.yml`](./.github/workflows/release.yml).

The release workflow:

1. Runs lint, typecheck, tests, and build.
2. Computes the next CalVer version.
3. Syncs `package.json` and the `VERSION` export in `src/index.ts`.
4. Publishes to npm with provenance.
5. Creates a GitHub release.
6. Calls the docs deployment workflow for the release tag.

Release versions use `YYYY.<MMDD-as-int>.PATCH`; for example, 29 April 2026
starts at `2026.429.0`.

`bumpKind` values:

- `today` creates or advances today's `YYYY.<MMDD-as-int>.PATCH` release and
  is the normal choice for scheduled data/library releases.
- `patch` increments the patch segment for the current date segment and is used
  for same-day hotfixes.
- `prerelease` creates an `-rc.N` version and publishes it with the npm `next`
  dist-tag.

Use `dryRun` when you want the workflow to run the checks and versioning logic
without publishing, pushing tags, or deploying docs.

## PR Checklist

Before opening or requesting review:

- Run the relevant local checks, at minimum the commands affected by your
  change.
- Update tests for behavior changes.
- Update docs or changelog entries for public behavior changes.
- Avoid committing `dist`, root `public`, generated docs API output, `.tgz`
  packages, or raw data artifacts unless the change intentionally refreshes
  data.
- For data refreshes, review the source-data diff and confirm any workflow
  `needs-review` signal has been resolved.

## Troubleshooting

### Stale Euribor Freshness Gate

The data-refresh workflow fails when the latest Euribor observation is more
than five calendar days behind the current UTC date. Check whether the
Bundesbank source has published a newer value, whether a holiday explains the
delay, and whether `src/data/_meta.json` reflects the expected latest
observation.

### IGCP Markup Or Parser Drift

`pnpm fetch:igcp-base-rates --month current --dry-run` should fail loudly when
the IGCP notice cannot be fetched or parsed. If it fails, inspect the current
IGCP notice URL, update parser tests and fixtures as needed, then rerun the
fetcher.

### Golden Test Mismatch After Refresh

When refreshed IGCP fixture data disagrees with `computeBaseRate()`, do not
silently overwrite existing fixture values. Compare the IGCP-published rate, the
Euribor input window, and the formula implementation before merging a
data-refresh PR.

### Docs Redeploy From A Tag

Use the manual `workflow_dispatch` trigger in
[`.github/workflows/deploy-docs.yml`](./.github/workflows/deploy-docs.yml) with
the release tag, for example `v2026.428.0`. The workflow checks out that tag,
builds the library, rebuilds `rates.json`, builds the docs site, and deploys the
result to Cloudflare Pages.

### Release Hotfix

Use the release workflow with `bumpKind: patch` when a same-date hotfix is
needed. The workflow increments the patch segment for the current package
version's date segment, publishes the package, tags the release, and deploys the
matching docs snapshot.
