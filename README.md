# Aida & Iker — Wedding Site

Bilingual (ES/EN) one-page wedding invitation for **Aida & Iker** — 23 July 2026, Valencia.
Built with **Next.js (App Router) + TypeScript + React**, faithfully recreating the editorial
"paper" design system from the handoff bundle.

## Stack

- **Next.js 15** (App Router), **React 19**, **TypeScript**
- No CSS framework — the design system tokens live in `src/app/globals.css` and components
  use inline styles referencing those CSS variables (ported verbatim from the design bundle).
- RSVP submissions are appended to a **Google Sheet** via an Apps Script Web App.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run start` (serve the build),
`npm run lint`.

## Project structure

```
src/
  app/
    layout.tsx            Root layout + <html>/<body>, metadata
    page.tsx              Renders <WeddingSite/>
    globals.css           Design tokens (colors, type, spacing) + base reset
    api/rsvp/route.ts     POST endpoint — appends an RSVP row to Google Sheets
  components/
    WeddingSite.tsx       Client root: language state + live countdown, composes sections
    sections.tsx          All page sections (Header, Hero, Names, Detalles, … , Footer, Rsvp)
    ds/                   Design-system components (Button, SectionHeading, Icon, …)
  content/
    wedding.ts            All bilingual copy + the wedding date (single source of truth)
```

To edit wording, dates, venues, bank details, etc., change **`src/content/wedding.ts`**.

## Photos

The photo strips currently render labelled placeholders (the "Foto" frames from the design).
`PhotoFrame` already supports real images — pass a `src` and it renders the brand's
black-and-white treatment. When photos are ready, wire them into `PhotoStrip` /
`Footer` in `src/components/sections.tsx`.

## RSVP → Google Sheets setup

The RSVP form posts to `/api/rsvp`, which forwards each submission to a Google Apps Script
Web App bound to a Sheet. Until it's configured the form still works — submissions are
logged to the server console and not stored. No Google Cloud project, service account, or
API key needed.

To enable storage:

1. Create a **Google Sheet**.
2. **Extensions ▸ Apps Script**, and replace the default code with:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP')
       || SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');
     if (sheet.getLastRow() === 0) {
       sheet.appendRow(['Timestamp', 'Nombre', 'Email', 'Asiste', 'Invitados', 'Dieta', 'Mensaje']);
     }
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow(data.row);
     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. **Deploy ▸ New deployment** ▸ type **Web app** ▸ Execute as **Me** ▸ Who has access
   **Anyone**. Deploy, authorize the permissions it asks for, and copy the Web app URL
   (ends in `/exec`).
4. Copy `.env.local.example` to `.env.local` and set `GOOGLE_SHEETS_WEBHOOK_URL` to that URL.

Rows are appended in this column order:
`timestamp, name, email, attend, guests, diet, message`.

## Deploying (Vercel)

1. Push this repo to GitHub.
2. Import it in **Vercel** (it auto-detects Next.js).
3. Add `GOOGLE_SHEETS_WEBHOOK_URL` in the Vercel project settings.
4. Deploy.

## Notes

- `npm audit` reports 0 vulnerabilities. Next.js is pinned to 15.5.22 (patched), and `sharp`/
  `postcss` — pulled in transitively by Next with vulnerable version ranges — are pinned to
  patched versions via `overrides` in `package.json`.
- The original design handoff lives in `aida-iker-wedding-design-system/` (git-ignored) for
  reference; it is not part of the app build.
