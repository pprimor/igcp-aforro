import { describe, expect, it } from 'vitest';
import { computeNextVersion } from '../scripts/compute-next-version.js';

/**
 * Tests for the shared CalVer helper.
 *
 * Both release paths depend on this arithmetic — `release.yml` for manual code
 * releases and `data-refresh.yml` for the monthly IGCP rate refresh — so a
 * regression here either blocks a release or, worse, publishes a version that
 * disagrees with the tag the workflow computed. The date is injected rather
 * than read from the clock so the expectations are stable.
 */

const AUG_4_2026 = new Date('2026-08-04T09:00:00Z');

describe('computeNextVersion — today', () => {
  it('derives the date segment from the current UTC date', () => {
    const next = computeNextVersion('2026.527.0', 'today', AUG_4_2026);
    expect(next.version).toBe('2026.804.0');
    expect(next.tag).toBe('v2026.804.0');
    expect(next.npmTag).toBe('latest');
  });

  it('drops the leading zero of single-digit months, matching shipped tags', () => {
    // v2026.503.0 and v2026.429.0 exist on the repo: MMDD is an integer, so
    // May 3rd is `503` and not `0503`.
    expect(
      computeNextVersion('2026.429.0', 'today', new Date('2026-05-03T00:00:00Z')).version,
    ).toBe('2026.503.0');
  });

  it('bumps the patch when the current version already carries today\u2019s date', () => {
    expect(computeNextVersion('2026.804.0', 'today', AUG_4_2026).version).toBe('2026.804.1');
    expect(computeNextVersion('2026.804.7', 'today', AUG_4_2026).version).toBe('2026.804.8');
  });

  it('releases an unpublished same-day prerelease as .0 rather than .1', () => {
    expect(computeNextVersion('2026.804.0-rc.2', 'today', AUG_4_2026).version).toBe('2026.804.0');
  });

  it('uses UTC, not the local timezone, for the date segment', () => {
    // 23:30 UTC on the 4th is already the 5th in Lisbon summer time (WEST).
    expect(
      computeNextVersion('2026.527.0', 'today', new Date('2026-08-04T23:30:00Z')).version,
    ).toBe('2026.804.0');
  });
});

describe('computeNextVersion — patch', () => {
  it('keeps the current date segment and increments the patch', () => {
    const next = computeNextVersion('2026.527.0', 'patch', AUG_4_2026);
    expect(next.version).toBe('2026.527.1');
    expect(next.npmTag).toBe('latest');
  });

  it('ignores an rc suffix when incrementing', () => {
    expect(computeNextVersion('2026.527.3-rc.1', 'patch', AUG_4_2026).version).toBe('2026.527.4');
  });
});

describe('computeNextVersion — prerelease', () => {
  it('starts a new rc series at 0 under the next dist-tag', () => {
    const next = computeNextVersion('2026.527.0', 'prerelease', AUG_4_2026);
    expect(next.version).toBe('2026.804.0-rc.0');
    expect(next.tag).toBe('v2026.804.0-rc.0');
    expect(next.npmTag).toBe('next');
  });

  it('increments an existing rc for the same day', () => {
    expect(computeNextVersion('2026.804.0-rc.0', 'prerelease', AUG_4_2026).version).toBe(
      '2026.804.0-rc.1',
    );
  });

  it('restarts at rc.0 when the existing rc is from an earlier day', () => {
    expect(computeNextVersion('2026.527.0-rc.4', 'prerelease', AUG_4_2026).version).toBe(
      '2026.804.0-rc.0',
    );
  });

  it('keeps counting up when today\u2019s rc sits on a non-zero patch', () => {
    // The inline logic this replaced compared the whole stable version against
    // `<today>.0`, so `2026.804.3-rc.1` restarted at rc.0 — a version already
    // published for that day, which publish-release.yml would then reject.
    // Comparing only the date segment keeps the rc counter monotonic.
    expect(computeNextVersion('2026.804.3-rc.1', 'prerelease', AUG_4_2026).version).toBe(
      '2026.804.0-rc.2',
    );
  });
});

describe('computeNextVersion — malformed input', () => {
  it('throws rather than inventing a version', () => {
    expect(() => computeNextVersion('not-a-version', 'today', AUG_4_2026)).toThrow(
      /Cannot parse CalVer version/,
    );
    expect(() => computeNextVersion('2026.804', 'patch', AUG_4_2026)).toThrow(
      /Cannot parse CalVer version/,
    );
    expect(() => computeNextVersion('2026.804.x', 'patch', AUG_4_2026)).toThrow(
      /Cannot parse patch segment/,
    );
  });
});
