import React from 'react';

type Size = 'hero' | 'display' | 'h1';

interface Props extends React.HTMLAttributes<HTMLElement> {
  size?: Size;
  accent?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * SectionHeading — the giant uppercase grotesque title that anchors a section.
 * Pairs with SectionLabel above it.
 */
export function SectionHeading({ children, size = 'display', accent = false, as = 'h2', style, ...rest }: Props) {
  const Tag = as as React.ElementType;
  const fontRole = size === 'hero' ? 'var(--type-hero)' : size === 'h1' ? 'var(--type-h1)' : 'var(--type-display)';
  return (
    <Tag
      style={{
        font: fontRole,
        fontWeight: 'var(--w-extra)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-display)',
        lineHeight: 'var(--lh-display)',
        color: accent ? 'var(--accent)' : 'var(--text-display)',
        textWrap: 'balance',
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
