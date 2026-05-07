import { z } from 'zod';
import { shiftMonths } from '../core/dateMath.js';
import { getSeries } from '../core/series.js';
import type { SeriesCode } from './domain.js';

/**
 * Runtime validation schemas for public inputs. These mirror the TypeScript
 * interfaces in `./domain.ts` but enforce constraints at runtime — the static
 * types are inferred via `z.infer<typeof ...>` in callers when needed.
 *
 * String dates are validated as `YYYY-MM-DD`. Lexicographic comparison is sound
 * for ISO-8601 dates, so range checks use plain `>=` rather than parsing.
 *
 * Per-series constraints (subscription window, units range) are resolved at
 * runtime from `SeriesMetadata` via `getSeries()` inside a `.superRefine()`,
 * so adding a new series only requires updating the registry.
 */

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const ISO_MONTH_REGEX = /^\d{4}-\d{2}$/;

export const isoDateSchema = z
  .string()
  .regex(ISO_DATE_REGEX, 'Expected date in YYYY-MM-DD format')
  .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)), {
    message: 'Invalid calendar date',
  });

export const isoMonthSchema = z.string().regex(ISO_MONTH_REGEX, 'Expected month in YYYY-MM format');

export const seriesCodeSchema = z.enum(['D', 'E', 'F']);

/**
 * Adds per-series subscription-window issues to `ctx`. Reads bounds from the
 * series registry so each series carries its own start/end and unit limits
 * without duplicating constants in this file.
 */
function refineSubscriptionWindow(
  ctx: z.RefinementCtx,
  series: SeriesCode,
  subscriptionDate: string,
): void {
  const metadata = getSeries(series);
  if (subscriptionDate < metadata.subscriptionStartDate) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `subscriptionDate must be on or after ${metadata.subscriptionStartDate} (${metadata.name} subscription start)`,
      path: ['subscriptionDate'],
    });
  }
  if (metadata.subscriptionEndDate && subscriptionDate > metadata.subscriptionEndDate) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `subscriptionDate must be on or before ${metadata.subscriptionEndDate} (${metadata.name} subscriptions closed)`,
      path: ['subscriptionDate'],
    });
  }
}

export const simulateInputSchema = z
  .object({
    series: seriesCodeSchema,
    subscriptionDate: isoDateSchema,
    units: z.number().int('units must be an integer'),
    asOfDate: isoDateSchema.optional(),
    includeSchedule: z.boolean().optional(),
    irsRate: z.number().min(0, 'irsRate must be >= 0').max(1, 'irsRate must be <= 1').optional(),
  })
  .superRefine((data, ctx) => {
    refineSubscriptionWindow(ctx, data.series, data.subscriptionDate);
    const metadata = getSeries(data.series);
    if (data.units < metadata.minUnits) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `units must be >= ${metadata.minUnits}`,
        path: ['units'],
      });
    }
    if (data.units > metadata.maxUnits) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `units must be <= ${metadata.maxUnits.toLocaleString('en-US')}`,
        path: ['units'],
      });
    }
  })
  .refine((data) => !data.asOfDate || data.asOfDate >= data.subscriptionDate, {
    message: 'asOfDate must be on or after subscriptionDate',
    path: ['asOfDate'],
  });

export const cohortRateInputSchema = z
  .object({
    series: seriesCodeSchema,
    subscriptionDate: isoDateSchema,
    asOfDate: isoDateSchema.optional(),
  })
  .superRefine((data, ctx) => {
    refineSubscriptionWindow(ctx, data.series, data.subscriptionDate);
  })
  .refine((data) => !data.asOfDate || data.asOfDate >= data.subscriptionDate, {
    message: 'asOfDate must be on or after subscriptionDate',
    path: ['asOfDate'],
  });

export const redemptionInputSchema = z
  .object({
    series: seriesCodeSchema,
    subscriptionDate: isoDateSchema,
    units: z.number().int('units must be an integer'),
    redemptionDate: isoDateSchema,
    unitsToRedeem: z.number().int('unitsToRedeem must be an integer').optional(),
    irsRate: z.number().min(0, 'irsRate must be >= 0').max(1, 'irsRate must be <= 1').optional(),
  })
  .superRefine((data, ctx) => {
    refineSubscriptionWindow(ctx, data.series, data.subscriptionDate);
    const metadata = getSeries(data.series);
    if (data.units < metadata.minUnits) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `units must be >= ${metadata.minUnits}`,
        path: ['units'],
      });
    }
    if (data.units > metadata.maxUnits) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `units must be <= ${metadata.maxUnits.toLocaleString('en-US')}`,
        path: ['units'],
      });
    }
    const unitsToRedeem = data.unitsToRedeem ?? data.units;
    if (unitsToRedeem < 1 || unitsToRedeem > data.units) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `unitsToRedeem must be in [1, ${data.units}]`,
        path: ['unitsToRedeem'],
      });
    }
    const earliestRedemptionDate = shiftMonths(data.subscriptionDate, metadata.minimumHoldingMonths);
    if (data.redemptionDate < earliestRedemptionDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `redemptionDate must be on or after ${earliestRedemptionDate} (${metadata.minimumHoldingMonths}-month minimum holding)`,
        path: ['redemptionDate'],
      });
    }
    const maturityDate = shiftMonths(data.subscriptionDate, metadata.maturityYears * 12);
    if (data.redemptionDate >= maturityDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'redemptionDate is on or after maturity; use simulate() for matured payouts',
        path: ['redemptionDate'],
      });
    }
    const remainingUnits = data.units - unitsToRedeem;
    if (remainingUnits !== 0 && remainingUnits < metadata.minUnits) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `remaining balance after partial redemption must be 0 or at least ${metadata.minUnits}`,
        path: ['unitsToRedeem'],
      });
    }
  });

export const currentRateInputSchema = z.object({
  series: seriesCodeSchema.optional(),
  asOfDate: isoDateSchema.optional(),
});

export const rateTableInputSchema = z
  .object({
    series: seriesCodeSchema.optional(),
    fromMonth: isoMonthSchema,
    toMonth: isoMonthSchema,
  })
  .refine((data) => data.fromMonth <= data.toMonth, {
    message: 'fromMonth must be on or before toMonth',
    path: ['toMonth'],
  });

export type SimulateInputSchema = z.infer<typeof simulateInputSchema>;
export type CohortRateInputSchema = z.infer<typeof cohortRateInputSchema>;
export type CurrentRateInputSchema = z.infer<typeof currentRateInputSchema>;
export type RateTableInputSchema = z.infer<typeof rateTableInputSchema>;
export type RedemptionInputSchema = z.infer<typeof redemptionInputSchema>;
