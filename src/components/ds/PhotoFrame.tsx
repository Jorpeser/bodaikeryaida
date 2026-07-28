import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  ratio?: string;
  bw?: boolean;
  caption?: React.ReactNode;
  placeholder?: string;
}

/**
 * PhotoFrame — a sharp-cornered image in the brand's black-and-white treatment.
 * When no `src` is given it renders a labelled paper placeholder (for layout /
 * handoff before real photography arrives).
 */
export function PhotoFrame({
  src,
  alt = '',
  ratio = '3 / 4',
  bw = true,
  caption,
  placeholder = 'Foto',
  style,
  ...rest
}: Props) {
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div
        style={{
          position: 'relative',
          aspectRatio: ratio,
          background: 'var(--surface-photo)',
          overflow: 'hidden',
        }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: bw ? 'grayscale(1) contrast(1.02)' : 'none',
            }}
          />
        ) : (
          <span
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              font: 'var(--type-label)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ls-label)',
              color: 'var(--ink-faint)',
              border: '1px solid var(--line-faint)',
            }}
          >
            {placeholder}
          </span>
        )}
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: 'var(--s-3)',
            font: 'var(--type-meta)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--ls-meta)',
            color: 'var(--ink-muted)',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
