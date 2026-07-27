import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aida & Iker · Invitación',
  description: 'Nos casamos — 17 de Octubre de 2026, Valencia. / We are getting married — 17th October 2026, Valencia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
