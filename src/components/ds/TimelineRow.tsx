import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  time: string;
  event: string;
  illustration?: React.ReactNode;
}

/**
 * TimelineRow — one line of the day's schedule: a bold time, the event name,
 * and an optional decorative illustration slot at the right. Hairline beneath.
 */
export function TimelineRow({ time, event, illustration, style, ...rest }: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(80px, 0.18fr) 1fr auto',
        alignItems: 'center',
        gap: 'var(--s-6)',
        padding: 'var(--s-6) 0',
        borderBottom: '1px solid var(--rule)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          font: 'var(--type-h1)',
          fontWeight: 'var(--w-bold)',
          color: 'var(--ink)',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: 'var(--ls-tight)',
        }}
      >
        {time}
      </div>
      <div
        style={{
          font: 'var(--type-h1)',
          fontWeight: 'var(--w-bold)',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          letterSpacing: 'var(--ls-tight)',
        }}
      >
        {event}
      </div>
      <div style={{ width: '64px', display: 'flex', justifyContent: 'flex-end', color: 'var(--clay)' }}>
        {illustration}
      </div>
    </div>
  );
}
