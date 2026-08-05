'use client';

import React from 'react';
import { Button, Icon } from './ds';

const INTERACTION_EVENTS = ['pointerdown', 'keydown', 'touchstart'] as const;

export default function MusicPlayer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = React.useState(true);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let cancelled = false;

    const unmuteOnInteraction = () => {
      if (cancelled) return;
      audio.muted = false;
      setMuted(false);
      audio.play().catch(() => {});
    };

    audio.muted = false;
    audio.play()
      .then(() => { if (!cancelled) setMuted(false); })
      .catch(() => {
        if (cancelled) return;
        audio.muted = true;
        setMuted(true);
        audio.play().catch(() => {});
        INTERACTION_EVENTS.forEach((ev) =>
          document.addEventListener(ev, unmuteOnInteraction, { once: true })
        );
      });

    return () => {
      cancelled = true;
      INTERACTION_EVENTS.forEach((ev) =>
        document.removeEventListener(ev, unmuteOnInteraction)
      );
    };
  }, []);

  const toggleMuted = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
    if (!next && audio.paused) audio.play().catch(() => {});
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/music.mp3" loop preload="auto" />
      <Button
        variant="solid"
        onClick={toggleMuted}
        aria-label={muted ? 'Activar música' : 'Silenciar música'}
        aria-pressed={!muted}
        style={{
          position: 'fixed',
          right: 'var(--s-5)',
          bottom: 'calc(var(--s-5) + env(safe-area-inset-bottom, 0px))',
          zIndex: 1000,
          width: 48,
          height: 48,
          padding: 0,
          justifyContent: 'center',
        }}
      >
        <Icon name={muted ? 'volumeOff' : 'volume'} size={20} color="var(--paper)" />
      </Button>
    </>
  );
}
