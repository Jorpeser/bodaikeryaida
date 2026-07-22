import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  index?: string;
  rule?: boolean;
  align?: 'left' | 'right';
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * SectionLabel — the monospace eyebrow that opens every section:
 * a short rule, an index number, a dot, and the label.
 *   ——  01 · DETALLES
 */
export function SectionLabel({ index, children, rule = true, align = 'left', as = 'div', style, ...rest }: Props) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        font: 'var(--type-label)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-label)',
        color: 'var(--text-label)',
        flexDirection: align === 'right' ? 'row-reverse' : 'row',
        ...style,
      }}
      {...rest}
    >
      {rule && (
        <span
          aria-hidden="true"
          style={{ width: '48px', height: '1px', background: 'var(--rule-strong)', flex: 'none' }}
        />
      )}
      <span style={{ whiteSpace: 'nowrap' }}>
        {index != null && (
          <>
            <span style={{ color: 'var(--text-label)' }}>{index}</span>
            <span style={{ margin: '0 0.6em', opacity: 0.7 }}>·</span>
          </>
        )}
        {children}
      </span>
    </Tag>
  );
}
