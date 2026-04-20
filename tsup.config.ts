import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    target: 'node20',
    splitting: false,
    treeshake: true,
    outDir: 'dist',
  },
  {
    entry: { cli: 'src/cli.ts' },
    format: ['esm'],
    dts: false,
    sourcemap: true,
    clean: false,
    target: 'node20',
    splitting: false,
    treeshake: true,
    outDir: 'dist',
    banner: {
      js: '#!/usr/bin/env node',
    },
  },
]);
