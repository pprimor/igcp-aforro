import type { SimulateResult } from 'igcp-aforro';
import { useMemo } from 'preact/hooks';
import { buildChartSeries, type ChartPoint } from '@igcp/playground-charts';
import { type PlaygroundLocale, formatEur, formatRatePct } from '@igcp/playground-format';

const VIEW_W = 800;
const VIEW_H = 240;
const MARGIN = { top: 18, right: 14, bottom: 34, left: 54 };
const PLOT_W = VIEW_W - MARGIN.left - MARGIN.right;
const PLOT_H = VIEW_H - MARGIN.top - MARGIN.bottom;
const POINT_R = 4;
const ACCENT = 'var(--sl-color-accent)';
const TEXT = 'var(--sl-color-text)';
const HAIRLINE = 'var(--sl-color-hairline, var(--sl-color-gray-5))';
const ACCENT_FILL = 'color-mix(in srgb, var(--sl-color-accent) 14%, transparent)';
const IRS_FILL = 'color-mix(in srgb, var(--sl-color-accent) 38%, transparent)';

export interface ChartsCopy {
  chartsHeading: string;
  chartRateTitle: string;
  chartBalanceTitle: string;
  chartCashFlowTitle: string;
  chartPrincipalLabel: string;
  chartGrossLabel: string;
  chartNetLabel: string;
  chartIrsLabel: string;
  chartAccruedLabel: string;
  chartEmptyState: string;
  chartAccruedTitle: string;
}

interface ChartsProps {
  result: SimulateResult;
  locale: PlaygroundLocale;
  copy: ChartsCopy;
}

function linearScale(
  domain: readonly [number, number],
  range: readonly [number, number],
): (value: number) => number {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const span = d1 - d0 || 1;
  return (value: number) => r0 + ((value - d0) / span) * (r1 - r0);
}

function niceNum(range: number, round: boolean): number {
  const exponent = Math.floor(Math.log10(range));
  const fraction = range / 10 ** exponent;
  let niceFraction: number;
  if (round) {
    if (fraction < 1.5) niceFraction = 1;
    else if (fraction < 3) niceFraction = 2;
    else if (fraction < 7) niceFraction = 5;
    else niceFraction = 10;
  } else if (fraction <= 1) niceFraction = 1;
  else if (fraction <= 2) niceFraction = 2;
  else if (fraction <= 5) niceFraction = 5;
  else niceFraction = 10;
  return niceFraction * 10 ** exponent;
}

export function niceTicks(min: number, max: number, count: number): number[] {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [0];
  if (min === max) {
    const pad = min === 0 ? 1 : Math.abs(min) * 0.1;
    return niceTicks(min - pad, max + pad, count);
  }
  const range = niceNum(max - min, false);
  const step = niceNum(range / Math.max(count - 1, 1), true);
  const niceMin = Math.floor(min / step) * step;
  const niceMax = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let t = niceMin; t <= niceMax + step * 0.001; t += step) {
    ticks.push(Math.round(t * 1e8) / 1e8);
  }
  return ticks;
}

function tickStride(length: number, maxTicks = 6): number {
  if (length <= 1) return 1;
  return Math.max(1, Math.ceil(length / maxTicks));
}

function formatPctTick(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return `${rounded}%`;
}

function formatEurTick(value: number): string {
  if (Math.abs(value) >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}M`;
  if (Math.abs(value) >= 10_000) return `€${Math.round(value / 1000)}k`;
  return `€${Math.round(value)}`;
}

function shortDate(iso: string): string {
  const [, month, day] = iso.split('-');
  return `${month}/${day}`;
}

function xIndex(index: number, totalSlots: number, xScale: (value: number) => number): number {
  return xScale(totalSlots <= 1 ? 0 : index / (totalSlots - 1));
}

interface AxisProps {
  yTicks: number[];
  yScale: (value: number) => number;
  formatY: (value: number) => string;
  xLabels: { x: number; label: string }[];
}

function ChartAxes({ yTicks, yScale, formatY, xLabels }: AxisProps) {
  return (
    <>
      {yTicks.map((tick) => (
        <g key={tick}>
          <line
            x1={MARGIN.left}
            x2={MARGIN.left + PLOT_W}
            y1={yScale(tick)}
            y2={yScale(tick)}
            stroke={HAIRLINE}
            stroke-width="1"
            opacity="0.55"
          />
          <text
            x={MARGIN.left - 6}
            y={yScale(tick)}
            text-anchor="end"
            dominant-baseline="middle"
            fill={TEXT}
            font-size="10"
            opacity="0.75"
          >
            {formatY(tick)}
          </text>
        </g>
      ))}
      {xLabels.map(({ x, label }) => (
        <text
          key={label}
          x={x}
          y={VIEW_H - 8}
          text-anchor="middle"
          fill={TEXT}
          font-size="10"
          opacity="0.75"
        >
          {label}
        </text>
      ))}
    </>
  );
}

function polylinePoints(points: { x: number; y: number }[]): string {
  return points.map((p) => `${p.x},${p.y}`).join(' ');
}

function rateAriaLabel(points: ChartPoint[], locale: PlaygroundLocale, title: string): string {
  if (points.length === 0) return title;
  const rates = points.map((p) => p.annualRatePct);
  const min = Math.min(...rates);
  const max = Math.max(...rates);
  const from = points[0]?.quarterEndDate ?? '';
  const to = points[points.length - 1]?.quarterEndDate ?? '';
  const range =
    locale === 'pt-PT'
      ? `entre ${formatRatePct(String(min), locale)} e ${formatRatePct(String(max), locale)}`
      : `from ${formatRatePct(String(min), locale)} to ${formatRatePct(String(max), locale)}`;
  return `${title}: ${from} – ${to}, ${range}`;
}

function balanceAriaLabel(
  points: ChartPoint[],
  principal: number,
  locale: PlaygroundLocale,
  title: string,
): string {
  if (points.length === 0) return title;
  const balances = points.map((p) => p.balance);
  const min = Math.min(principal, ...balances);
  const max = Math.max(principal, ...balances);
  const from = points[0]?.quarterEndDate ?? '';
  const to = points[points.length - 1]?.quarterEndDate ?? '';
  return `${title}: ${from} – ${to}, ${formatEur(String(min), locale)} – ${formatEur(String(max), locale)}`;
}

function cashFlowAriaLabel(points: ChartPoint[], locale: PlaygroundLocale, title: string): string {
  if (points.length === 0) return title;
  const gross = points.map((p) => p.interestGross);
  const min = Math.min(...gross);
  const max = Math.max(...gross);
  const from = points[0]?.quarterEndDate ?? '';
  const to = points[points.length - 1]?.quarterEndDate ?? '';
  return `${title}: ${from} – ${to}, ${formatEur(String(min), locale)} – ${formatEur(String(max), locale)} gross per quarter`;
}

function RateChart({
  points,
  accruedGross,
  asOfDate,
  locale,
  copy,
}: {
  points: ChartPoint[];
  accruedGross: number;
  asOfDate: string;
  locale: PlaygroundLocale;
  copy: ChartsCopy;
}) {
  const hasAccrued = accruedGross > 0;
  const slotCount = points.length + (hasAccrued ? 1 : 0);
  const xScale = linearScale([0, 1], [MARGIN.left, MARGIN.left + PLOT_W]);
  const rates = points.map((p) => p.annualRatePct);
  const yMin = rates.length ? Math.min(...rates) : 0;
  const yMax = rates.length ? Math.max(...rates) : 1;
  const yTicks = niceTicks(yMin, yMax, 4);
  const yScale = linearScale(
    [yTicks[0] ?? yMin, yTicks[yTicks.length - 1] ?? yMax],
    [MARGIN.top + PLOT_H, MARGIN.top],
  );
  const stride = tickStride(points.length);
  const xLabels = points
    .filter((_, i) => i % stride === 0 || i === points.length - 1)
    .map((p) => ({
      x: xIndex(p.quarterIndex - 1, slotCount, xScale),
      label: shortDate(p.quarterEndDate),
    }));
  if (hasAccrued) {
    xLabels.push({
      x: xIndex(slotCount - 1, slotCount, xScale),
      label: shortDate(asOfDate),
    });
  }

  const linePts = points.map((p, i) => ({
    x: xIndex(i, slotCount, xScale),
    y: yScale(p.annualRatePct),
  }));
  const lastRate = points[points.length - 1]?.annualRatePct ?? 0;

  return (
    <figure class="aforro-pg-chart">
      <figcaption class="aforro-pg-chart-title">{copy.chartRateTitle}</figcaption>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="auto"
        role="img"
        aria-label={rateAriaLabel(points, locale, copy.chartRateTitle)}
      >
        <desc>
          {points
            .map(
              (p) =>
                `Q${p.quarterIndex} ${p.quarterEndDate}: ${formatRatePct(String(p.annualRatePct), locale)}, tier ${p.premiumTierLabel}`,
            )
            .join('; ')}
        </desc>
        <ChartAxes yTicks={yTicks} yScale={yScale} formatY={formatPctTick} xLabels={xLabels} />
        {linePts.length > 1 && (
          <polyline
            points={polylinePoints(linePts)}
            fill="none"
            stroke={ACCENT}
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        )}
        {points.map((p, i) => {
          const x = xIndex(i, slotCount, xScale);
          const y = yScale(p.annualRatePct);
          const tip = `Q${p.quarterIndex} ${p.quarterEndDate}: ${formatRatePct(String(p.annualRatePct), locale)}, tier ${p.premiumTierLabel}`;
          return (
            <circle key={p.quarterEndDate} cx={x} cy={y} r={POINT_R} fill={ACCENT}>
              <title>{tip}</title>
            </circle>
          );
        })}
        {hasAccrued && (
          <circle
            cx={xIndex(slotCount - 1, slotCount, xScale)}
            cy={yScale(lastRate)}
            r={POINT_R}
            fill="var(--sl-color-bg)"
            stroke={ACCENT}
            stroke-width="2"
          >
            <title>
              {copy.chartAccruedTitle}: {formatEur(String(accruedGross), locale)} (
              {copy.chartAccruedLabel})
            </title>
          </circle>
        )}
      </svg>
    </figure>
  );
}

function BalanceChart({
  points,
  principal,
  locale,
  copy,
}: {
  points: ChartPoint[];
  principal: number;
  locale: PlaygroundLocale;
  copy: ChartsCopy;
}) {
  const slotCount = points.length;
  const xScale = linearScale([0, 1], [MARGIN.left, MARGIN.left + PLOT_W]);
  const balances = points.map((p) => p.balance);
  const yMin = Math.min(principal, ...(balances.length ? balances : [principal]));
  const yMax = Math.max(principal, ...(balances.length ? balances : [principal]));
  const yTicks = niceTicks(yMin, yMax, 4);
  const yScale = linearScale(
    [yTicks[0] ?? yMin, yTicks[yTicks.length - 1] ?? yMax],
    [MARGIN.top + PLOT_H, MARGIN.top],
  );
  const stride = tickStride(points.length);
  const xLabels = points
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i % stride === 0 || i === points.length - 1)
    .map(({ p, i }) => ({
      x: xIndex(i, slotCount, xScale),
      label: shortDate(p.quarterEndDate),
    }));

  const linePts = points.map((p, i) => ({
    x: xIndex(i, slotCount, xScale),
    y: yScale(p.balance),
  }));
  const principalY = yScale(principal);
  const areaPath =
    linePts.length > 0
      ? [
          `M ${linePts[0]?.x ?? 0} ${principalY}`,
          ...linePts.map((p) => `L ${p.x} ${p.y}`),
          `L ${linePts[linePts.length - 1]?.x ?? 0} ${principalY}`,
          'Z',
        ].join(' ')
      : '';

  return (
    <figure class="aforro-pg-chart">
      <figcaption class="aforro-pg-chart-title">{copy.chartBalanceTitle}</figcaption>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="auto"
        role="img"
        aria-label={balanceAriaLabel(points, principal, locale, copy.chartBalanceTitle)}
      >
        <desc>
          {copy.chartPrincipalLabel}: {formatEur(String(principal), locale)}.{' '}
          {points
            .map((p) => `${p.quarterEndDate}: ${formatEur(String(p.balance), locale)}`)
            .join('; ')}
        </desc>
        <ChartAxes yTicks={yTicks} yScale={yScale} formatY={formatEurTick} xLabels={xLabels} />
        {areaPath && <path d={areaPath} fill={ACCENT_FILL} stroke="none" />}
        <line
          x1={MARGIN.left}
          x2={MARGIN.left + PLOT_W}
          y1={principalY}
          y2={principalY}
          stroke={TEXT}
          stroke-width="1"
          stroke-dasharray="5 4"
          opacity="0.45"
        />
        <text
          x={MARGIN.left + PLOT_W - 4}
          y={principalY - 6}
          text-anchor="end"
          fill={TEXT}
          font-size="10"
          opacity="0.65"
        >
          {copy.chartPrincipalLabel}
        </text>
        {linePts.length > 1 && (
          <polyline
            points={polylinePoints(linePts)}
            fill="none"
            stroke={ACCENT}
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        )}
        {points.map((p, i) => {
          const x = xIndex(i, slotCount, xScale);
          const y = yScale(p.balance);
          return (
            <circle key={p.quarterEndDate} cx={x} cy={y} r={POINT_R} fill={ACCENT}>
              <title>
                {p.quarterEndDate}: {formatEur(String(p.balance), locale)}
              </title>
            </circle>
          );
        })}
      </svg>
    </figure>
  );
}

function CashFlowChart({
  points,
  accruedGross,
  asOfDate,
  locale,
  copy,
}: {
  points: ChartPoint[];
  accruedGross: number;
  asOfDate: string;
  locale: PlaygroundLocale;
  copy: ChartsCopy;
}) {
  const hasAccrued = accruedGross > 0;
  const slotCount = points.length + (hasAccrued ? 1 : 0);
  const xScale = linearScale([0, 1], [MARGIN.left, MARGIN.left + PLOT_W]);
  const grossValues = [
    ...points.map((p) => p.interestGross),
    ...(hasAccrued ? [accruedGross] : []),
  ];
  const yMax = grossValues.length ? Math.max(...grossValues) : 1;
  const yTicks = niceTicks(0, yMax, 4);
  const yScale = linearScale(
    [0, yTicks[yTicks.length - 1] ?? yMax],
    [MARGIN.top + PLOT_H, MARGIN.top],
  );
  const barGap = slotCount > 0 ? PLOT_W / slotCount : PLOT_W;
  const barW = Math.min(28, Math.max(6, barGap * 0.62));
  const stride = tickStride(points.length + (hasAccrued ? 1 : 0));
  const xLabels: { x: number; label: string }[] = [];
  for (let i = 0; i < points.length; i++) {
    if (i % stride !== 0 && i !== points.length - 1) continue;
    const p = points[i];
    if (!p) continue;
    xLabels.push({
      x: xIndex(i, slotCount, xScale),
      label: shortDate(p.quarterEndDate),
    });
  }
  if (hasAccrued) {
    xLabels.push({
      x: xIndex(slotCount - 1, slotCount, xScale),
      label: shortDate(asOfDate),
    });
  }

  return (
    <figure class="aforro-pg-chart">
      <figcaption class="aforro-pg-chart-title">{copy.chartCashFlowTitle}</figcaption>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="auto"
        role="img"
        aria-label={cashFlowAriaLabel(points, locale, copy.chartCashFlowTitle)}
      >
        <desc>
          {points
            .map(
              (p) =>
                `${p.quarterEndDate}: ${copy.chartNetLabel} ${formatEur(String(p.interestNet), locale)}, ${copy.chartIrsLabel} ${formatEur(String(p.irsWithheld), locale)}`,
            )
            .join('; ')}
        </desc>
        <ChartAxes yTicks={yTicks} yScale={yScale} formatY={formatEurTick} xLabels={xLabels} />
        {points.map((p, i) => {
          const cx = xIndex(i, slotCount, xScale);
          const netH = yScale(0) - yScale(p.interestNet);
          const irsH = yScale(p.interestNet) - yScale(p.interestGross);
          const netY = yScale(p.interestNet);
          const irsY = yScale(p.interestGross);
          return (
            <g key={p.quarterEndDate}>
              <rect
                x={cx - barW / 2}
                y={netY}
                width={barW}
                height={Math.max(0, netH)}
                fill={ACCENT}
                rx="1"
              >
                <title>
                  {p.quarterEndDate} — {copy.chartNetLabel}:{' '}
                  {formatEur(String(p.interestNet), locale)}
                </title>
              </rect>
              <rect
                x={cx - barW / 2}
                y={irsY}
                width={barW}
                height={Math.max(0, irsH)}
                fill={IRS_FILL}
                rx="1"
              >
                <title>
                  {p.quarterEndDate} — {copy.chartIrsLabel}:{' '}
                  {formatEur(String(p.irsWithheld), locale)} ({copy.chartGrossLabel}:{' '}
                  {formatEur(String(p.interestGross), locale)})
                </title>
              </rect>
            </g>
          );
        })}
        {hasAccrued && (
          <rect
            x={xIndex(slotCount - 1, slotCount, xScale) - barW / 2}
            y={yScale(accruedGross)}
            width={barW}
            height={Math.max(0, yScale(0) - yScale(accruedGross))}
            fill="none"
            stroke={ACCENT}
            stroke-width="2"
            rx="1"
          >
            <title>
              {copy.chartAccruedTitle}: {formatEur(String(accruedGross), locale)} (
              {copy.chartAccruedLabel})
            </title>
          </rect>
        )}
      </svg>
    </figure>
  );
}

export function Charts({ result, locale, copy }: ChartsProps) {
  const series = useMemo(() => buildChartSeries(result), [result]);
  const { points, principal, accruedGross, asOfDate } = series;

  if (points.length === 0) {
    return <p class="aforro-pg-note">{copy.chartEmptyState}</p>;
  }

  return (
    <div class="aforro-pg-charts">
      <h4 class="aforro-pg-charts-heading">{copy.chartsHeading}</h4>
      <RateChart
        points={points}
        accruedGross={accruedGross}
        asOfDate={asOfDate}
        locale={locale}
        copy={copy}
      />
      <BalanceChart points={points} principal={principal} locale={locale} copy={copy} />
      <CashFlowChart
        points={points}
        accruedGross={accruedGross}
        asOfDate={asOfDate}
        locale={locale}
        copy={copy}
      />
      <style>{CHART_STYLES}</style>
    </div>
  );
}

const CHART_STYLES = `
.aforro-pg-charts {
  margin: 0.75rem 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.aforro-pg-charts-heading {
  margin: 0 0 0.15rem;
  font-size: 0.92rem;
  font-weight: 600;
}
.aforro-pg-chart {
  margin: 0;
}
.aforro-pg-chart-title {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 500;
  opacity: 0.88;
}
.aforro-pg-charts svg {
  display: block;
  max-height: 240px;
}
@media (max-width: 540px) {
  .aforro-pg-charts svg {
    max-height: 200px;
  }
}
`;
