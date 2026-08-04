import { describe, expect, it } from 'vitest';
import { cents } from './helpers/simulateInvariants.js';

/**
 * The invariant helper parses decimal strings into integer cents, and every
 * assertion in the golden and property suites is arithmetic on its output. A
 * parser that is wrong about a sign therefore does not fail loudly — it makes
 * comparisons pass or fail for reasons unrelated to the code under test. Worth
 * its own test for that reason alone.
 */
describe('cents', () => {
  it('parses positive amounts', () => {
    expect(cents('0.00')).toBe(0);
    expect(cents('0.01')).toBe(1);
    expect(cents('1.25')).toBe(125);
    expect(cents('5451.25')).toBe(545125);
  });

  it('parses negative amounts', () => {
    expect(cents('-0.01')).toBe(-1);
    expect(cents('-1.25')).toBe(-125);
    expect(cents('-5451.25')).toBe(-545125);
  });
});
