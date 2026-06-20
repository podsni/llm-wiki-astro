// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://llm-wiki.pages.dev',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-light',
        wrap: true,
      },
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  vite: {
    server: {
      // Cloudflare Pages will use the default. Local dev allows LAN access.
      host: true,
    },
  },
});
