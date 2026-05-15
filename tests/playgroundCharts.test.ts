import { describe, expect, it } from 'vitest';
import { simulate } from '../src/index.js';
import { buildChartSeries } from '../src/playground/charts.js';

describe('buildChartSeries', () => {
  it('returns empty points when schedule is missing', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2024-06-01',
      includeSchedule: false,
    });

    const series = buildChartSeries(result);
    expect(series.points).toEqual([]);
    expect(series.principal).toBe(1000);
    expect(series.asOfDate).toBe('2024-06-01');
  });

  it('converts decimal strings to numbers with cent precision', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2025-06-15',
      includeSchedule: true,
    });

    const { points } = buildChartSeries(result);
    expect(points.length).toBeGreaterThan(0);

    const first = points[0];
    expect(first).toBeDefined();
    const row = result.schedule?.[0];
    expect(row).toBeDefined();
    if (!first || !row) return;

    expect(first.balance).toBe(Number(row.balanceAfter));
    expect(first.interestGross).toBe(Number(row.interestGross));
    expect(first.interestNet).toBe(Number(row.interestNet));
    expect(first.irsWithheld).toBe(Number(row.irsWithheld));
    expect(first.interestGross).toBe(Math.round(first.interestGross * 100) / 100);
  });

  it('expresses annualRatePct as a percent value', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2025-06-15',
      includeSchedule: true,
    });

    const { points } = buildChartSeries(result);
    const row = result.schedule?.[0];
    expect(row).toBeDefined();
    expect(points[0]?.annualRatePct).toBe(Number(row?.annualRate) * 100);
  });

  it('echoes principal from units', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 2500,
      asOfDate: '2025-06-15',
      includeSchedule: true,
    });

    expect(buildChartSeries(result).principal).toBe(2500);
  });

  it('passes through accruedSinceLastCapitalization as accruedGross', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2025-06-15',
      includeSchedule: true,
    });

    const series = buildChartSeries(result);
    expect(series.accruedGross).toBe(Number(result.accruedSinceLastCapitalization));
  });

  it('labels premium tiers as y{from}-{to}', () => {
    const result = simulate({
      series: 'E',
      subscriptionDate: '2018-01-15',
      units: 1000,
      asOfDate: '2026-04-19',
      includeSchedule: true,
    });

    const { points } = buildChartSeries(result);
    const tierRow = points.find((p) => p.premiumTierLabel === 'y2-5');
    expect(tierRow).toBeDefined();
  });
});
