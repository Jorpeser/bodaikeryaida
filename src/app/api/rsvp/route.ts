import { NextRequest, NextResponse } from 'next/server';

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
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  // If the integration isn't configured, no-op (the form still succeeds and we
  // log it). This lets the site run before the Google Sheet is set up.
  if (!url) {
    console.log('[rsvp] Google Sheets not configured — submission not stored:', row);
    return;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ row }),
  });
  if (!res.ok) throw new Error(`Apps Script webhook returned ${res.status}`);
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
