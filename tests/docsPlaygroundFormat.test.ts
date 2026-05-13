import { describe, expect, it } from 'vitest';
import { formatDuration } from '../src/playground/format.js';

describe('formatDuration (playground)', () => {
  it('uses locale-specific zero', () => {
    expect(formatDuration(0, 'en')).toBe('0d');
    expect(formatDuration(-1, 'en')).toBe('0d');
    expect(formatDuration(Number.NaN, 'en')).toBe('0d');
    expect(formatDuration(0, 'pt-PT')).toBe('0 d');
    expect(formatDuration(-5, 'pt-PT')).toBe('0 d');
  });

  it('formats a non-zero duration per locale', () => {
    const days = 400;
    expect(formatDuration(days, 'en')).toMatch(/^1y/);
    expect(formatDuration(days, 'pt-PT')).toMatch(/^1a/);
  });
});
