# Aida & Iker — Wedding Site

Bilingual (ES/EN) one-page wedding invitation for **Aida & Iker** — 23 July 2026, Tarragona.
Built with **Next.js (App Router) + TypeScript + React**, faithfully recreating the editorial
"paper" design system from the handoff bundle.

## Stack

- **Next.js 15** (App Router), **React 19**, **TypeScript**
- No CSS framework — the design system tokens live in `src/app/globals.css` and components
  use inline styles referencing those CSS variables (ported verbatim from the design bundle).
- RSVP submissions are appended to a **Google Sheet** via a service account.

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

The RSVP form posts to `/api/rsvp`, which appends a row to a Google Sheet. Until the
integration is configured the form still works — submissions are logged to the server
console and not stored.

To enable storage:

1. In **Google Cloud Console**, create a project and enable the **Google Sheets API**.
2. Create a **Service Account**, then create a **JSON key** for it.
3. Create a **Google Sheet**. Add a header row in a tab named `RSVP`, e.g.:
   `Timestamp | Name | Email | Attending | Guests | Dietary | Bus | Message`
4. **Share** the sheet (Editor) with the service account's email.
5. Copy `.env.local.example` to `.env.local` and fill in:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — the service account email
   - `GOOGLE_PRIVATE_KEY` — the `private_key` from the JSON (keep the quotes and `\n` escapes)
   - `GOOGLE_SHEET_ID` — the long id from the sheet URL
   - `GOOGLE_SHEET_TAB` — optional tab name (defaults to `RSVP`)

Rows are appended in this column order:
`timestamp, name, email, attend, guests, diet, bus, message`.

## Deploying (Vercel)

1. Push this repo to GitHub.
2. Import it in **Vercel** (it auto-detects Next.js).
3. Add the four `GOOGLE_*` environment variables in the Vercel project settings.
4. Deploy.

## Notes

- `npm audit` reports 6 **moderate** advisories from `googleapis`' transitive `uuid`/`gaxios`
  dependencies (server-side only). They have no non-breaking fix yet; revisit on `googleapis`
  upgrades. The previously-flagged critical Next.js advisory is resolved (pinned to 15.5.19).
- The original design handoff lives in `aida-iker-wedding-design-system/` (git-ignored) for
  reference; it is not part of the app build.
```
