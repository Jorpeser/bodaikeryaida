import type { Metadata } from 'next';
import './globals.css';

const title = 'Aida & Iker · Invitación';
const description = 'Nos casamos — 17 de Octubre de 2026, Valencia. / We are getting married — 17th October 2026, Valencia.';

export const metadata: Metadata = {
  metadataBase: new URL('https://bodaikeryaida.es'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://bodaikeryaida.es',
    siteName: title,
    images: ['/photos/01.jpg'],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/photos/01.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
