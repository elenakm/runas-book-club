import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow (from actions/configure-pages),
// so the build is correct both on the default github.io URL and on a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://runas.bookclub',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
