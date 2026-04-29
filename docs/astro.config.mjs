import { fileURLToPath } from 'node:url';
import preact from '@astrojs/preact';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { createStarlightTypeDocPlugin } from 'starlight-typedoc';

const [starlightTypeDoc, typeDocSidebarGroup] = createStarlightTypeDocPlugin();

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const aforroEntry = fileURLToPath(new URL('../src/index.ts', import.meta.url));
const apiSidebarGroup = {
  ...typeDocSidebarGroup,
  label: 'Referência da API',
  translations: { en: 'API reference' },
};

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
    '/en/api': '/en/api/readme/',
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
        'Biblioteca TypeScript e CLI para simular Certificados de Aforro Série E e Série F do IGCP.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-PT',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
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
        { label: 'Início rápido', slug: 'quickstart', translations: { en: 'Quickstart' } },
        { label: 'Simulador', slug: 'playground', translations: { en: 'Playground' } },
        { label: 'Referência da CLI', slug: 'cli', translations: { en: 'CLI reference' } },
        {
          label: 'Esquema rates.json',
          slug: 'rates-json',
          translations: { en: 'rates.json schema' },
        },
        { label: 'Metodologia', slug: 'methodology', translations: { en: 'Methodology' } },
        apiSidebarGroup,
        { label: 'Histórico de alterações', slug: 'changelog', translations: { en: 'Changelog' } },
      ],
    }),
  ],
});
