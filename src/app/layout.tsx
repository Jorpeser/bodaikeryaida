import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aida & Iker · Invitación',
  description: 'Nos casamos — 23 de julio de 2026, Tarragona. / We are getting married — 23rd July 2026, Tarragona.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
