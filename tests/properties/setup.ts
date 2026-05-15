import fc from 'fast-check';

fc.configureGlobal({
  numRuns: process.env.CI ? 50 : 150,
  seed: process.env.FC_SEED ? Number(process.env.FC_SEED) : undefined,
  verbose: false,
});
