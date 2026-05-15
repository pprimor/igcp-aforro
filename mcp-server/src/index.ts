import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import {
  HANDLER_VERSION,
  handleGetCurrentRate,
  handleGetRateForCohort,
  handleGetRateTable,
  handleGetTaxYearRollupFromBody,
  handleRollupTaxYears,
  handleRollupTaxYearsFromPortfolio,
  handleSimulate,
  handleSimulatePortfolio,
  handleSimulateRedemption,
  toApiJsonBody,
} from 'igcp-aforro/api/handlers';
import { listSeries, type SafeResult } from 'igcp-aforro';

const TOOL_NOTICE =
  'Not affiliated with IGCP. Calculator-quality estimates only — not financial or tax advice. Verify against official IGCP statements.';

const jsonInput = z.record(z.unknown()).optional();

function toolText(result: SafeResult<unknown>): { content: [{ type: 'text'; text: string }] } {
  return {
    content: [{ type: 'text', text: JSON.stringify(toApiJsonBody(result), null, 2) }],
  };
}

const server = new McpServer({
  name: 'igcp-aforro',
  version: HANDLER_VERSION,
});

server.tool(
  'simulate',
  `Run cohort simulation for IGCP Aforro certificates. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleSimulate(input ?? {})),
);

server.tool(
  'simulate_portfolio',
  `Aggregate multiple subscription cohorts. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleSimulatePortfolio(input ?? {})),
);

server.tool(
  'simulate_redemption',
  `Compute early redemption value. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleSimulateRedemption(input ?? {})),
);

server.tool(
  'get_current_rate',
  `Monthly base rate for a series. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleGetCurrentRate(input ?? {})),
);

server.tool(
  'get_cohort_rate',
  `Annual rate for a cohort at a reference date. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleGetRateForCohort(input ?? {})),
);

server.tool(
  'get_rate_table',
  `Monthly base rates over a month range. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleGetRateTable(input ?? {})),
);

server.tool(
  'rollup_tax_years',
  `Calendar-year interest roll-up from a SimulateResult with schedule. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleRollupTaxYears(input ?? {})),
);

server.tool(
  'rollup_tax_years_portfolio',
  `Calendar-year roll-up from a PortfolioResult. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleRollupTaxYearsFromPortfolio(input ?? {})),
);

server.tool(
  'get_tax_year_rollup',
  `Single tax year from SimulateResult; body { result, taxYear }. ${TOOL_NOTICE}`,
  { input: jsonInput },
  async ({ input }) => toolText(handleGetTaxYearRollupFromBody(input ?? {})),
);

server.tool(
  'list_series',
  `List supported certificate series metadata. ${TOOL_NOTICE}`,
  {},
  async () => ({
    content: [{ type: 'text', text: JSON.stringify(listSeries(), null, 2) }],
  }),
);

const transport = new StdioServerTransport();
await server.connect(transport);
