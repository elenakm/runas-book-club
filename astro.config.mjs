import { defineConfig } from 'astro/config';

// Hosted on Vercel at runasbookclub.com. SITE_URL / BASE_PATH are optional overrides for other hosts.
export default defineConfig({
  site: process.env.SITE_URL || 'https://runasbookclub.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
