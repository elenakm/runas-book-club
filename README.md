# Runa's Book Club website

Bilingual (Bulgarian default, English) static site for Runa's Book Club, a volunteer-run charity book club in Burgas. Built with Astro, hosted on Vercel at https://runasbookclub.com. Every push to `main` rebuilds and deploys the site automatically.

## Pages

| Page | BG | EN |
|---|---|---|
| Home | `/` | `/en/` |
| Story | `/story/` | `/en/story/` |
| Reports | `/otchet/` | `/en/reports/` |
| FAQ | `/faq/` | `/en/faq/` |
| Contact | `/kontakt/` | `/en/contact/` |

Page content lives in `src/components/` (one file per page, both languages side by side). Shared strings, page titles and meta descriptions are in `src/i18n.ts`.

## Adding a new edition to Reports

1. Put the donation certificate image in `public/certificates/`, named by date, e.g. `2026-11-15.jpg`.
2. Add an entry to `src/data/editions.json` (copy the existing one and change the values). Order doesn't matter; the page sorts newest first.
3. Commit and push to `main`. The site updates in about a minute.

## Run locally

```
npm install
npm run dev
```

## Domain

`runasbookclub.com` is registered on Vercel and attached to the Vercel project (Settings → Domains), with `www` redirecting to the bare domain. The site URL used for canonical links, hreflang and the sitemap is set in `astro.config.mjs`.
