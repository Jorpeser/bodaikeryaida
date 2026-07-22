import React from 'react';
import { Icon } from './Icon';

export interface MetaItem {
  icon?: string;
  label: React.ReactNode;
  href?: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  items?: MetaItem[];
  gap?: string;
}

/**
 * MetaRow — a monospace row of small facts, each optionally with a line icon
 * and a link. The "16:00H · MAPS · CALENDARIO" row under a venue.
 */
export function MetaRow({ items = [], gap = 'var(--s-6)', style, ...rest }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap,
        font: 'var(--type-meta)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-meta)',
        color: 'var(--ink-muted)',
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => {
        const inner = (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55em' }}>
            {it.icon && <Icon name={it.icon} size={15} color="var(--ink-muted)" />}
            <span
              style={{
                color: it.href ? 'var(--ink)' : 'inherit',
                borderBottom: it.href ? '1.5px solid var(--ink)' : 'none',
                paddingBottom: it.href ? '1px' : 0,
              }}
            >
              {it.label}
            </span>
          </span>
        );
        return it.href ? (
          <a key={i} href={it.href} style={{ color: 'var(--ink)', textDecoration: 'none' }}>
            {inner}
          </a>
        ) : (
          <span key={i}>{inner}</span>
        );
      })}
    </div>
  );
}
