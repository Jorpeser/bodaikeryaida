import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHRElement> {
  weight?: 'hair' | 'rule' | 'bold' | 'faint';
  inset?: boolean;
  color?: string;
}

/**
 * Divider — the hairline rule used throughout the layout.
 * Variants control weight and an optional inset on the left (editorial tick).
 */
export function Divider({ weight = 'hair', inset = false, color, style, ...rest }: Props) {
  const top =
    weight === 'bold' ? 'var(--bw-bold)' : weight === 'rule' ? 'var(--bw-rule)' : 'var(--bw-hair)';
  const stroke = color || (weight === 'faint' ? 'var(--rule-faint)' : 'var(--rule)');
  return (
    <hr
      style={{
        border: 0,
        borderTop: `${weight === 'faint' ? 'var(--bw-hair)' : top} solid ${stroke}`,
        margin: 0,
        marginLeft: inset ? 'var(--s-8)' : 0,
        ...style,
      }}
      {...rest}
    />
  );
}
