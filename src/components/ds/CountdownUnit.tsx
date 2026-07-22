import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label: string;
  rule?: boolean;
}

/**
 * CountdownUnit — one big numeral over a mono caption, sitting under a hairline.
 * Compose four of these for the DÍAS / HORAS / MINUTOS / SEGUNDOS counter.
 */
export function CountdownUnit({ value, label, rule = true, style, ...rest }: Props) {
  const display = String(value).padStart(2, '0');
  return (
    <div style={{ minWidth: 0, ...style }} {...rest}>
      {rule && (
        <div style={{ height: '1px', background: 'var(--rule)', marginBottom: 'var(--s-5)' }} />
      )}
      <div
        style={{
          font: 'var(--type-numeral)',
          fontWeight: 'var(--w-bold)',
          color: 'var(--ink)',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {display}
      </div>
      <div
        style={{
          marginTop: 'var(--s-3)',
          font: 'var(--type-label)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--ls-label)',
          color: 'var(--ink-muted)',
        }}
      >
        {label}
      </div>
    </div>
  );
}
