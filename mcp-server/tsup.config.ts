import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  platform: 'node',
  target: 'node20',
  splitting: false,
  clean: true,
  dts: false,
  noExternal: ['igcp-aforro'],
  banner: { js: '#!/usr/bin/env node' },
});
