import React from 'react';
import { MetaRow, MetaItem } from './MetaRow';

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: React.ReactNode;
  illustration?: React.ReactNode;
  title?: React.ReactNode;
  address?: React.ReactNode;
  meta?: MetaItem[];
}

/**
 * InfoCard — a venue / detail block: a small mono eyebrow (with rule), an
 * optional hand-drawn illustration, a big uppercase title, an address line,
 * and a MetaRow of links. Flat — paper on paper, separated by hairlines.
 */
export function InfoCard({ eyebrow, illustration, title, address, meta = [], style, ...rest }: Props) {
  const eyebrowEl = eyebrow && (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: 'var(--s-4)',
        font: 'var(--type-label)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-label)',
        color: 'var(--ink-muted)',
      }}
    >
      <span style={{ width: '32px', height: '1px', background: 'var(--rule-strong)' }} />
      {eyebrow}
    </div>
  );

  return (
    <div
      className={`info-card-grid${illustration ? ' info-card-grid--illustration' : ''}`}
      style={style}
      {...rest}
    >
      {illustration && (
        <div className="info-card-illustration" style={{ color: 'var(--ink)' }}>
          {eyebrowEl}
        </div>
      )}

      <div>
        {illustration}
        {!illustration && eyebrowEl}
        <h3
          style={{
            font: 'var(--type-h1)',
            fontWeight: 'var(--w-bold)',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            letterSpacing: 'var(--ls-tight)',
            margin: 0,
          }}
        >
          {title}
        </h3>
        {address && (
          <p
            style={{
              marginTop: 'var(--s-3)',
              font: 'var(--type-meta)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ls-meta)',
              color: 'var(--ink-muted)',
            }}
          >
            {address}
          </p>
        )}
        {meta.length > 0 && (
          <div style={{ marginTop: 'var(--s-5)' }}>
            <MetaRow items={meta} />
          </div>
        )}
      </div>
    </div>
  );
}
