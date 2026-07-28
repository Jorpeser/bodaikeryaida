import React from 'react';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange'> {
  labels?: [string, string];
  value?: string;
  defaultValue?: string;
  onChange?: (next: string) => void;
}

/**
 * LangToggle — the ES/EN pill switch from the page header. A two-label
 * segmented toggle with a sliding knob. Controlled or uncontrolled.
 */
export function LangToggle({
  labels = ['ES', 'EN'],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}: Props) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? labels[0]);
  const current = isControlled ? value : internal;
  const rightActive = current === labels[1];

  const toggle = () => {
    const next = rightActive ? labels[0] : labels[1];
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };

  const label = (text: string, on: boolean) => (
    <span
      style={{
        font: 'var(--type-label)',
        fontWeight: 'var(--w-medium)',
        letterSpacing: 'var(--ls-meta)',
        fontSize: 'var(--fs-label)',
        color: on ? 'var(--ink)' : 'var(--ink-muted)',
        transition: 'color var(--dur-fast) var(--ease)',
        zIndex: 1,
      }}
    >
      {text}
    </span>
  );

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Idioma: ${current}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '6px 12px',
        lineHeight: 1,
        border: '1px solid var(--line-strong)',
        borderRadius: 'var(--r-pill)',
        background: 'var(--paper)',
        cursor: 'pointer',
        position: 'relative',
        ...style,
      }}
      {...rest}
    >
      {label(labels[0], !rightActive)}
      <span
        aria-hidden="true"
        style={{
          position: 'relative',
          width: '40px',
          height: '20px',
          borderRadius: 'var(--r-pill)',
          background: 'var(--paper-3)',
          border: '1px solid var(--line)',
          flex: 'none',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: rightActive ? '20px' : '2px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'var(--ink)',
            transition: 'left var(--dur) var(--ease)',
          }}
        />
      </span>
      {label(labels[1], rightActive)}
    </button>
  );
}
