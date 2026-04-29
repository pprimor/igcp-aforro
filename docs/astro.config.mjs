import { fileURLToPath } from 'node:url';
import preact from '@astrojs/preact';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';

const [starlightTypeDoc, typeDocSidebarGroup] = createStarlightTypeDocPlugin();

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const aforroEntry = fileURLToPath(new URL('../src/index.ts', import.meta.url));

export default defineConfig({
  site: 'https://igcp-aforro.primor.me',
  base: '/',
  redirects: {
    // `starlight-typedoc` only emits leaf pages (`/api/functions/...`,
    // `/api/interfaces/...`) plus an auto-generated module overview at
    // `/api/readme/`. Redirect the bare `/api` URL — which we link from the
    // landing-page hero and the in-page "API reference" callouts — onto that
    // overview so URL pruning doesn't dead-end on a 404. Astro normalizes
    // `/api` and `/api/` to the same route, so only one entry is needed.
    '/api': '/api/readme/',
  },
  vite: {
    resolve: {
      alias: {
        'igcp-aforro': aforroEntry,
      },
    },
  },
  integrations: [
    preact(),
    starlight({
      title: 'igcp-aforro',
      description:
        'TypeScript library and CLI for simulating Portuguese IGCP Aforro Série E and Série F Treasury Certificates.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/igcp.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/pprimor/igcp-aforro',
        },
        {
          icon: 'npm',
          label: 'npm',
          href: 'https://www.npmjs.com/package/igcp-aforro',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/pprimor/igcp-aforro/edit/main/docs/',
      },
      lastUpdated: true,
      plugins: [
        starlightTypeDoc({
          entryPoints: [`${repoRoot}src/index.ts`],
          tsconfig: `${repoRoot}tsconfig.json`,
          output: 'api',
          sidebar: {
            label: 'API reference',
            collapsed: false,
          },
          typeDoc: {
            // Resolve the bundled `.js` re-exports back to their source files
            // so links land on real TypeScript symbols rather than 404s.
            excludeExternals: true,
            excludePrivate: true,
            excludeInternal: true,
            readme: 'none',
            useCodeBlocks: true,
            expandObjects: true,
            parametersFormat: 'table',
          },
        }),
      ],
      sidebar: [
        { label: 'Quickstart', slug: 'quickstart' },
        { label: 'Playground', slug: 'playground' },
        { label: 'CLI reference', slug: 'cli' },
        { label: 'rates.json schema', slug: 'rates-json' },
        { label: 'Methodology (PT)', slug: 'methodology' },
        typeDocSidebarGroup,
        { label: 'Changelog', slug: 'changelog' },
      ],
    }),
  ],
});
