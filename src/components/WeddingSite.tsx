'use client';

import React from 'react';
import { WEDDING, WEDDING_DATE, type Lang } from '@/content/wedding';
import {
  Header,
  Hero,
  Names,
  PhotoStrip,
  Detalles,
  Timeline,
  DressCode,
 //Transport,
  Stay,
  Restaurants,
  Regalos,
  Rsvp,
  Footer,
} from './sections';

function diffParts(target: Date): [number, number, number, number] {
  const now = new Date();
  let ms = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(ms / 86400000); ms -= d * 86400000;
  const h = Math.floor(ms / 3600000); ms -= h * 3600000;
  const m = Math.floor(ms / 60000); ms -= m * 60000;
  const s = Math.floor(ms / 1000);
  return [d, h, m, s];
}

export default function WeddingSite() {
  const [lang, setLang] = React.useState<Lang>('es');
  // Start at zeros so SSR and the first client render agree, then tick on mount.
  const [parts, setParts] = React.useState<[number, number, number, number]>([0, 0, 0, 0]);

  React.useEffect(() => {
    setParts(diffParts(WEDDING_DATE));
    const id = setInterval(() => setParts(diffParts(WEDDING_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const t = WEDDING[lang];

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Names t={t} parts={parts} />
      <PhotoStrip />
      <Detalles t={t} />
      <Timeline t={t} />
      <DressCode t={t} />
      {/* <Transport t={t} /> */}
      
      <Stay t={t} />
      <Restaurants t={t} />
      <Regalos t={t} />
      <Rsvp t={t} />
      <Footer t={t} />
    </>
  );
}
