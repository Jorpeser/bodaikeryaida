import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  active?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Chip — a hairline pill for tags & small choices (dress-code options,
 * category markers). Optional `active` fills it with ink.
 */
export function Chip({ active = false, as = 'span', children, style, ...rest }: Props) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5em',
        padding: '7px 16px',
        font: 'var(--type-label)',
        fontSize: 'var(--fs-micro)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-meta)',
        borderRadius: 'var(--r-pill)',
        border: '1px solid var(--line-strong)',
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? 'var(--paper)' : 'var(--ink)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
