import { z } from 'zod';

/**
 * Runtime validation schemas for public inputs. These mirror the TypeScript
 * interfaces in `./domain.ts` but enforce constraints at runtime — the static
 * types are inferred via `z.infer<typeof ...>` in callers when needed.
 *
 * String dates are validated as `YYYY-MM-DD`. Lexicographic comparison is sound
 * for ISO-8601 dates, so range checks use plain `>=` rather than parsing.
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

export const seriesCodeSchema = z.enum(['F']);

/**
 * Inputs accepted by `simulate()`. `units` is constrained to Série F's
 * [100, 100_000] range; if/when other series ship with different limits, this
 * schema will be derived per-series from `SeriesMetadata`.
 */
export const simulateInputSchema = z
  .object({
    series: seriesCodeSchema,
    subscriptionDate: isoDateSchema,
    units: z
      .number()
      .int('units must be an integer')
      .min(100, 'units must be >= 100')
      .max(100_000, 'units must be <= 100,000'),
    asOfDate: isoDateSchema.optional(),
    includeSchedule: z.boolean().optional(),
    irsRate: z.number().min(0, 'irsRate must be >= 0').max(1, 'irsRate must be <= 1').optional(),
  })
  .refine((data) => data.subscriptionDate >= '2023-06-01', {
    message: 'subscriptionDate must be on or after 2023-06-01 (Série F open date)',
    path: ['subscriptionDate'],
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
  .refine((data) => data.subscriptionDate >= '2023-06-01', {
    message: 'subscriptionDate must be on or after 2023-06-01 (Série F open date)',
    path: ['subscriptionDate'],
  })
  .refine((data) => !data.asOfDate || data.asOfDate >= data.subscriptionDate, {
    message: 'asOfDate must be on or after subscriptionDate',
    path: ['asOfDate'],
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
