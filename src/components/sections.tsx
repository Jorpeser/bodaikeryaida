import React from 'react';
import {
  SectionLabel,
  SectionHeading,
  Divider,
  Icon,
  Button,
  LangToggle,
  CountdownUnit,
  TimelineRow,
  InfoCard,
  PhotoFrame,
} from './ds';
import type { Lang, Translation } from '@/content/wedding';

function wrap(extra?: React.CSSProperties): React.CSSProperties {
  return {
    maxWidth: 'var(--page-max)',
    margin: '0 auto',
    padding: '0 var(--page-pad)',
    ...(extra || {}),
  };
}

/* ---------------- Header ---------------- */
export function Header({ t, lang, setLang }: { t: Translation; lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <header style={wrap({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingTop: 'var(--s-7)' })}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{t.place}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-5)' }}>
        <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{t.invite}</span>
        <LangToggle value={lang === 'es' ? 'ES' : 'EN'} onChange={(v) => setLang(v === 'ES' ? 'es' : 'en')} />
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
export function Hero({ t }: { t: Translation }) {
  return (
    <section style={wrap({ paddingTop: '50px' })}>
      <SectionHeading size="hero" as="h1">{t.hero[0]}<br />{t.hero[1]}</SectionHeading>
      <div style={{ marginTop: 'var(--s-7)', display: 'flex', justifyContent: 'flex-end' }}>
        <p style={{ font: 'var(--type-lead)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--ink)', maxWidth: '40ch', textAlign: 'left' }}>
          {t.lead.map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>)}
        </p>
      </div>
      <div style={{ marginTop: 'var(--s-8)' }}><Divider /></div>
    </section>
  );
}

/* ---------------- Names + countdown ---------------- */
export function Names({ t, parts }: { t: Translation; parts: number[] }) {
  return (
    <section style={wrap({ paddingTop: 'var(--s-7)', paddingBottom: 'var(--s-9)' })}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3em', flexWrap: 'wrap' }}>
        <SectionHeading size="hero" as="h2">{t.names[0]}</SectionHeading>
        <SectionHeading size="hero" as="span" accent>&amp;</SectionHeading>
        <SectionHeading size="hero" as="h2">{t.names[1]}</SectionHeading>
      </div>

      <div className="rsvp-cta-bounce" style={{ marginTop: 'var(--s-7)', display: 'flex', justifyContent: 'center' }}>
        <Button variant="link" href="#rsvp" iconRight={<Icon name="chevronDown" size={15} />}>{t.rsvp}</Button>
      </div>

      <div style={{ marginTop: 'var(--s-9)' }}>
        <SectionLabel>{t.countdownLabel}</SectionLabel>
        <div style={{ marginTop: 'var(--s-6)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--col-gap)' }}>
          {parts.map((v, i) => <CountdownUnit key={i} value={v} label={t.units[i]} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Photo strip ---------------- */
export function PhotoStrip({ ratios = ['3 / 4', '3 / 4', '3 / 4', '3 / 4', '3 / 4'] }: { ratios?: string[] }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: `repeat(${ratios.length}, 1fr)`, gap: '2px', padding: '0 2px' }}>
      {ratios.map((r, i) => <PhotoFrame key={i} ratio={r} />)}
    </section>
  );
}


export function Detalles({ t }: { t: Translation }) {
  return (
    <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: '50px' })}>
      <SectionLabel index="01">{t.detailsLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.detailsTitle[0]}<br />{t.detailsTitle[1]}</SectionHeading>
      </div>
      <div style={{ marginTop: 'var(--s-9)', display: 'flex', flexDirection: 'column', gap: 'var(--s-7)' }}>
        {t.venues.map((v, i) => {
          const illustrations: (React.ReactNode | undefined)[] = [
            <img
              key="basilica"
              src="/illustrations/basilica.png"
              alt="Basílica de San Vicente Ferrer"
              style={{ width: '100%', display: 'block', opacity: 1 }}
            />,
            <img
              key="finca"
              src="/illustrations/finca.jpg"
              alt="La Finca del Canónigo"
              style={{ width: '100%', display: 'block', opacity: 1 }}
            />,
          ];
          return (
            <React.Fragment key={i}>
              <Divider />
              <InfoCard
                eyebrow={v.tag}
                illustration={illustrations[i]}
                title={v.name}
                address={v.addr}
                meta={[
                  { icon: 'clock', label: v.time },
                  { icon: 'pin', label: 'Como llegar', href: v.mapsUrl },
                ]}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
export function Timeline({ t }: { t: Translation }) {
  return (
    <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 0 })}>
      <SectionLabel index="02">{t.timelineLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.timelineTitle[0]}<br />{t.timelineTitle[1]}</SectionHeading>
      </div>
      <div style={{ marginTop: 'var(--s-8)', borderTop: '1px solid var(--rule)' }}>
        {t.timeline.map(([time, ev], i) => <TimelineRow key={i} time={time} event={ev} />)}
      </div>
    </section>
  );
}

/* ---------------- Dress code ---------------- */
export function DressCode({ t }: { t: Translation }) {
  return (
    <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 0 })}>
      <SectionLabel index="03">{t.dressLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.dressTitle[0]}<br />{t.dressTitle[1]}</SectionHeading>
      </div>
      <div style={{ marginTop: 'var(--s-8)' }}>
        <div style={{ font: 'var(--type-h1)', fontWeight: 'var(--w-bold)', textTransform: 'uppercase', color: 'var(--ink)', letterSpacing: 'var(--ls-tight)' }}>{t.dressType}</div>
        <p style={{ marginTop: 'var(--s-4)', font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--ink-muted)', maxWidth: '52ch' }}>{t.dressNote}</p>
      </div>
    </section>
  );
}

/* ---------------- Transport ---------------- */
// export function Transport({ t }: { t: Translation }) {
//   return (
//     <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 'var(--s-9)' })}>
//       <SectionLabel index="04">{t.transportLabel}</SectionLabel>
//       <div style={{ marginTop: 'var(--s-6)' }}>
//         <SectionHeading>{t.transportTitle}</SectionHeading>
//       </div>
//       <div style={{ marginTop: 'var(--s-8)' }}>
//         {t.transport.map((b, i) => (
//           <React.Fragment key={i}>
//             <Divider />
//             <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px,0.32fr) 1fr', gap: 'var(--s-7)', padding: 'var(--s-7) 0', alignItems: 'start' }}>
//               <SectionLabel rule>{b.tag}</SectionLabel>
//               <div>
//                 <h3 style={{ font: 'var(--type-h3)', fontWeight: 'var(--w-bold)', textTransform: 'uppercase', color: 'var(--ink)', letterSpacing: 'var(--ls-tight)' }}>{b.title}</h3>
//                 <p style={{ marginTop: 'var(--s-4)', font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--ink-muted)', maxWidth: '52ch' }}>{b.body}</p>
//               </div>
//             </div>
//           </React.Fragment>
//         ))}
//         <Divider />
//       </div>
//     </section>
//   );
// }

/* ---------------- Accommodation ---------------- */
export function Stay({ t }: { t: Translation }) {
  return (
    <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 0 })}>
      <SectionLabel index="05">{t.stayLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.stayTitle}</SectionHeading>
      </div>
      <div style={{ marginTop: 'var(--s-8)' }}>
        {t.stays.map((s, i) => (
          <React.Fragment key={i}>
            <Divider />
            <div style={{ padding: 'var(--s-6) 0' }}>
              <h3 style={{ font: 'var(--type-h3)', fontWeight: 'var(--w-bold)', textTransform: 'uppercase', color: 'var(--ink)', letterSpacing: 'var(--ls-tight)' }}>{s.name}</h3>
              <p style={{ marginTop: 'var(--s-3)', font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--ink-muted)', maxWidth: '56ch' }}>{s.note}</p>
            </div>
          </React.Fragment>
        ))}
        <Divider />
      </div>
    </section>
  );
}

/* ---------------- Restaurants ---------------- */
export function Restaurants({ t }: { t: Translation }) {
  return (
    <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 0 })}>
      <SectionLabel index="06">{t.restLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.restTitle[0]}<br />{t.restTitle[1]}</SectionHeading>
      </div>
      <div style={{ marginTop: 'var(--s-8)', borderTop: '1px solid var(--rule)' }}>
        {t.rest.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-5)', padding: 'var(--s-5) 0', borderBottom: '1px solid var(--rule)' }}>
            <Icon name="utensils" size={18} color="var(--clay)" />
            <span style={{ font: 'var(--type-h3)', fontWeight: 'var(--w-bold)', textTransform: 'uppercase', color: 'var(--ink)', letterSpacing: 'var(--ls-tight)' }}>{r}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Regalos ---------------- */
export function Regalos({ t }: { t: Translation }) {
  const [open, setOpen] = React.useState(false);
  return (
    <section style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 0 })}>
      <SectionLabel index="07">{t.giftLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.giftTitle}</SectionHeading>
      </div>
      <div style={{ marginTop: 'var(--s-8)' }}><Divider /></div>
      <p style={{ marginTop: 'var(--s-8)', font: 'var(--type-h2)', fontWeight: 'var(--w-bold)', textTransform: 'uppercase', color: 'var(--ink)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-tight)', maxWidth: '24ch', textWrap: 'balance' }}>{t.giftStatement}</p>
      <div style={{ marginTop: 'var(--s-9)' }}>
        <SectionLabel rule>{t.giftSubLabel}</SectionLabel>
        <p style={{ marginTop: 'var(--s-5)', font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--ink-muted)', maxWidth: '54ch' }}>{t.giftNote}</p>
        <div style={{ marginTop: 'var(--s-6)' }}>
          {!open ? (
            <Button variant="outline" onClick={() => setOpen(true)}>{t.giftButton}</Button>
          ) : (
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 'var(--s-3)', border: '1px solid var(--line-strong)', padding: 'var(--s-6)' }}>
              {t.giftBank.map(([k, v], i) => (
                <div key={i} style={{ display: 'flex', gap: 'var(--s-5)', justifyContent: 'space-between', font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)' }}>
                  <span style={{ color: 'var(--ink-muted)' }}>{k}</span>
                  <span style={{ color: 'var(--ink)' }}>{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RSVP form ---------------- */
function FieldLabel({ index, htmlFor, children, required }: { index: string; htmlFor?: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="rsvp-label" htmlFor={htmlFor}>
      <span className="rsvp-index">{index}</span>
      <span>{children}{required && <span style={{ color: 'var(--clay)' }}> *</span>}</span>
    </label>
  );
}

function RadioOption({ name, label, checked, onChange }: { name: string; label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="rsvp-choice" data-checked={checked}>
      <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid var(--line-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        {checked && <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--ink)' }} />}
      </span>
      <input type="radio" name={name} checked={checked} onChange={onChange} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label}
    </label>
  );
}

export function Rsvp({ t }: { t: Translation }) {
  const f = t.rsvpFields;
  const [attend, setAttend] = React.useState<'yes' | 'no'>('yes');
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      attend,
      guests: String(data.get('guests') || ''),
      diet: String(data.get('diet') || ''),
      message: String(data.get('message') || ''),
    };

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setSent(true);
    } catch {
      setError(
        t.detailsLabel === 'Detalles'
          ? 'No se pudo enviar. Inténtalo de nuevo.'
          : 'Could not send. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp" style={wrap({ paddingTop: 'var(--section-y)', paddingBottom: 'var(--s-9)' })}>
      <SectionLabel index="08">{t.rsvpLabel}</SectionLabel>
      <div style={{ marginTop: 'var(--s-6)' }}>
        <SectionHeading>{t.rsvpTitle}</SectionHeading>
      </div>
      <p style={{ marginTop: 'var(--s-4)', font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--ink-muted)' }}>{t.rsvpSubtitle}</p>

      {sent ? (
        <p style={{ marginTop: 'var(--s-9)', font: 'var(--type-h3)', fontWeight: 'var(--w-bold)', textTransform: 'uppercase', color: 'var(--ink)', letterSpacing: 'var(--ls-tight)' }}>{f.thanks}</p>
      ) : (
        <form onSubmit={onSubmit} className="rsvp-form" style={{ marginTop: 'var(--s-8)' }}>
          <div className="rsvp-form-row">
            <div>
              <FieldLabel index="01" htmlFor="rsvp-name" required>{f.name}</FieldLabel>
              <input id="rsvp-name" name="name" className="rsvp-field" placeholder={f.namePh} required />
            </div>
            <div>
              <FieldLabel index="02" htmlFor="rsvp-email">{f.email}</FieldLabel>
              <input id="rsvp-email" name="email" type="email" className="rsvp-field" placeholder={f.emailPh} />
            </div>
          </div>
          <div>
            <FieldLabel index="03" required>{f.attend}</FieldLabel>
            <div style={{ display: 'flex', gap: 'var(--s-4)', flexWrap: 'wrap', marginTop: 'var(--s-2)' }}>
              <RadioOption name="attend" label={f.attendYes} checked={attend === 'yes'} onChange={() => setAttend('yes')} />
              <RadioOption name="attend" label={f.attendNo} checked={attend === 'no'} onChange={() => setAttend('no')} />
            </div>
          </div>
          <div className="rsvp-form-row">
            <div>
              <FieldLabel index="04" htmlFor="rsvp-guests">{f.guests}</FieldLabel>
              <input id="rsvp-guests" name="guests" type="number" min="1" defaultValue="1" className="rsvp-field" style={{ maxWidth: '200px' }} />
            </div>
            <div>
              <FieldLabel index="05" htmlFor="rsvp-diet">{f.diet}</FieldLabel>
              <input id="rsvp-diet" name="diet" className="rsvp-field" placeholder={f.dietPh} />
            </div>
          </div>
          <div>
            <FieldLabel index="06" htmlFor="rsvp-message">{f.message}</FieldLabel>
            <textarea id="rsvp-message" name="message" rows={4} className="rsvp-field" style={{ resize: 'vertical' }} placeholder={f.messagePh} />
          </div>
          <div className="rsvp-form-actions">
            {error && (
              <p style={{ font: 'var(--type-meta)', textTransform: 'uppercase', letterSpacing: 'var(--ls-meta)', color: 'var(--clay)' }}>{error}</p>
            )}
            <button
              type="submit"
              className="rsvp-submit"
              disabled={submitting}
              style={{
                width: '100%', padding: 'var(--s-5)', color: 'var(--paper)', border: 0,
                borderRadius: 'var(--r-sm)',
                cursor: submitting ? 'default' : 'pointer', opacity: submitting ? 0.7 : 1,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6em',
                font: 'var(--type-label)', fontWeight: 'var(--w-medium)', textTransform: 'uppercase',
                letterSpacing: 'var(--ls-meta)', transition: 'background var(--dur-fast) var(--ease)',
              }}
            >
              <Icon name="arrowRight" size={16} color="var(--paper)" />{f.submit}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer({ t }: { t: Translation }) {
  return (
    <footer>
      <PhotoStrip ratios={['16 / 10', '16 / 10', '16 / 10', '16 / 10']} />
      <div style={wrap({ paddingTop: 'var(--s-8)', paddingBottom: 'var(--s-9)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--s-5)' })}>
        <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{t.footer}</span>
        <span style={{ font: 'var(--type-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>València · 17.10.26</span>
      </div>
    </footer>
  );
}
