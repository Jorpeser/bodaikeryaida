import React from 'react';

/* Line-icon set — Lucide geometry (ISC-licensed), redrawn inline so the system
   stays dependency-free and works offline. 1.75px stroke to sit beside mono meta. */
const PATHS: Record<string, React.ReactNode> = {
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  pin: <><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>,
  calendar: <><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowDown: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  plus: <><path d="M5 12h14" /><path d="M12 5v14" /></>,
  volume: <><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></>,
  bus: <><path d="M8 6v6" /><path d="M15 6v6" /><path d="M2 12h19.6" /><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" /><circle cx="7" cy="18" r="2" /><path d="M9 18h5" /><circle cx="16" cy="18" r="2" /></>,
  bed: <><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></>,
  utensils: <><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></>,
  parking: <><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></>,
};

interface Props extends Omit<React.SVGProps<SVGSVGElement>, 'name' | 'stroke'> {
  name: keyof typeof PATHS | string;
  size?: number;
  stroke?: number;
  color?: string;
}

export function Icon({ name, size = 18, stroke = 1.75, color = 'currentColor', style, ...rest }: Props) {
  const glyph = PATHS[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flex: 'none', display: 'block', ...style }}
      {...rest}
    >
      {glyph}
    </svg>
  );
}
