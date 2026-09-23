import type { APIRoute } from 'astro';
import { pub } from '../i18n';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(pub('sitemap.xml'), site).href}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
