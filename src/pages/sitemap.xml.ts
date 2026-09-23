import type { APIRoute } from 'astro';
import { PAGES, href } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = PAGES.flatMap((page) =>
    (['bg', 'en'] as const).map((lang) => `  <url>
    <loc>${abs(href(lang, page))}</loc>
    <xhtml:link rel="alternate" hreflang="bg" href="${abs(href('bg', page))}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(href('en', page))}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(href('bg', page))}"/>
  </url>`),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
