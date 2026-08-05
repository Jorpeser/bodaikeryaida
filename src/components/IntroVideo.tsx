'use client';

import React from 'react';

export default function IntroVideo({ label, onStart, onDone }: { label: string; onStart: () => void; onDone: () => void }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  const start = () => {
    if (playing) return;
    setPlaying(true);
    const video = videoRef.current;
    if (video) {
      // The clip has no audio track, so muting costs nothing — it also
      // sidesteps autoplay-with-sound heuristics that can otherwise stall playback.
      video.muted = true;
      video.play().catch(() => {});
    }
    onStart();
  };

  const handleEnded = () => {
    setClosing(true);
    window.setTimeout(onDone, 300);
  };

  return (
    <div
      onClick={start}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        cursor: playing ? 'default' : 'pointer',
        opacity: closing ? 0 : 1,
        pointerEvents: closing ? 'none' : 'auto',
        transition: 'opacity 300ms var(--ease)',
      }}
    >
      <video
        ref={videoRef}
        src="/video/intro.mp4"
        poster="/video/intro-poster.jpg"
        playsInline
        muted
        onEnded={handleEnded}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {!playing && (
        <span
          className="rsvp-cta-bounce"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '14%',
            transform: 'translateX(-50%)',
            font: 'var(--type-lead)',
            fontWeight: 'var(--w-medium)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--ls-meta)',
            color: '#fff',
            textShadow: '0 1px 16px rgba(0, 0, 0, 0.45)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
