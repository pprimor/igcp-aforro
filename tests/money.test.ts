import { describe, expect, it } from 'vitest';
import {
  Big,
  type BigSource,
  ZERO,
  formatCents,
  formatDecimal,
  formatPercent,
  formatRate,
  percentToRate,
  quantize,
  quantizeCents,
  rateToPercent,
  toBig,
} from '../src/core/money.js';

describe('toBig', () => {
  it('returns existing Big instances unchanged', () => {
    const value = new Big('12.34');

    expect(toBig(value)).toBe(value);
  });

  it('parses finite numbers and trimmed decimal strings', () => {
    expect(toBig(12.34).toString()).toBe('12.34');
    expect(toBig('  12.340  ').toString()).toBe('12.34');
  });

  it('rejects non-finite numbers and invalid strings with clear errors', () => {
    expect(() => toBig(Number.NaN)).toThrow('Cannot convert non-finite number to Big: NaN');
    expect(() => toBig('')).toThrow('Cannot convert empty string to Big');
    expect(() => toBig('abc')).toThrow('Invalid decimal string: "abc"');
  });

  it('rejects unsupported inputs', () => {
    expect(() => toBig({} as BigSource)).toThrow('Unsupported value for Big: object');
  });
});

describe('money quantization and formatting', () => {
  it('uses half-even rounding for arbitrary decimals and cents', () => {
    expect(quantize('1.225', 2).toString()).toBe('1.22');
    expect(quantize('1.235', 2).toString()).toBe('1.24');
    expect(quantizeCents('10.005').toString()).toBe('10');
  });

  it('formats fixed-precision decimals while preserving trailing zeros', () => {
    expect(formatDecimal('1.2', 4)).toBe('1.2000');
    expect(formatCents('1234.5')).toBe('1234.50');
    expect(formatPercent('2.5')).toBe('2.500');
    expect(formatPercent('2.5555', 2)).toBe('2.56');
    expect(formatRate('0.0275')).toBe('0.02750');
    expect(formatRate('0.027555', 4)).toBe('0.0276');
  });
});

describe('rate conversions', () => {
  it('converts between percentage and fractional rate values', () => {
    expect(percentToRate('2.5').toString()).toBe('0.025');
    expect(rateToPercent('0.025').toString()).toBe('2.5');
  });

  it('exposes an exact decimal zero', () => {
    expect(ZERO.toString()).toBe('0');
  });
});
