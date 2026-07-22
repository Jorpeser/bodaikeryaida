import React from 'react';

type Variant = 'link' | 'outline' | 'solid';

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: Variant;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

/**
 * Button — three editorial treatments:
 *  - "link"    : ink text with an underline that thickens on hover (default).
 *  - "outline" : hairline pill, used for choices (PARA ELLAS / PARA ELLOS).
 *  - "solid"   : ink fill, terracotta on hover — for the single primary CTA.
 * Hover states live in globals.css (.ds-btn--*).
 */
export function Button({
  variant = 'link',
  href,
  iconLeft,
  iconRight,
  size = 'md',
  children,
  style,
  ...rest
}: Props) {
  const pad = size === 'sm' ? '8px 14px' : '12px 20px';
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6em',
    font: 'var(--type-label)',
    fontWeight: 'var(--w-medium)',
    fontSize: size === 'sm' ? 'var(--fs-micro)' : 'var(--fs-label)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--ls-meta)',
    cursor: 'pointer',
    border: 0,
    background: 'transparent',
    color: 'var(--ink)',
    transition: 'color var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease), border-color var(--dur-fast) var(--ease)',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const variants: Record<Variant, React.CSSProperties> = {
    link: {
      padding: 0,
      paddingBottom: '2px',
      borderBottom: '1.5px solid var(--ink)',
      borderRadius: 0,
    },
    outline: {
      padding: pad,
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--r-pill)',
      color: 'var(--ink)',
    },
    solid: {
      padding: pad,
      background: 'var(--ink)',
      color: 'var(--paper)',
      borderRadius: 'var(--r-pill)',
    },
  };

  const className = `ds-btn ds-btn--${variant}`;
  const mergedStyle = { ...base, ...variants[variant], ...style };

  if (href) {
    return (
      <a href={href} className={className} style={mergedStyle} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }

  return (
    <button className={className} style={mergedStyle} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
