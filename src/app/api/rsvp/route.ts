import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export const runtime = 'nodejs';

interface RsvpPayload {
  name: string;
  email: string;
  attend: string;
  guests: string;
  diet: string;
  message: string;
}

function sanitize(value: unknown, max = 2000): string {
  if (value == null) return '';
  return String(value).slice(0, max).trim();
}

async function appendToSheet(row: string[]): Promise<void> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TAB || 'RSVP';

  // If the integration isn't configured, no-op (the form still succeeds and we
  // log it). This lets the site run before the Google Sheet is set up.
  if (!email || !key || !sheetId) {
    console.log('[rsvp] Google Sheets not configured — submission not stored:', row);
    return;
  }

  const auth = new google.auth.JWT({
    email,
    key: key.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tab}!A1`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [row] },
  });
}

export async function POST(req: NextRequest) {
  let body: Partial<RsvpPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const name = sanitize(body.name, 200);
  if (!name) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    name,
    sanitize(body.email, 200),
    sanitize(body.attend, 10),
    sanitize(body.guests, 10),
    sanitize(body.diet, 1000),
    sanitize(body.message, 2000),
  ];

  try {
    await appendToSheet(row);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[rsvp] Failed to append to sheet:', err);
    return NextResponse.json({ ok: false, error: 'Storage failed' }, { status: 500 });
  }
}
