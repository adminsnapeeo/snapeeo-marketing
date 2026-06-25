import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

export function TypewriterText({
  text,
  className = '',
  speed = 42,
  startDelay = 500,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(text);
      setShowCursor(false);
      return;
    }

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (index >= text.length) {
        window.setTimeout(() => setShowCursor(false), 1200);
        return;
      }

      index += 1;
      setDisplayed(text.slice(0, index));

      const char = text[index - 1];
      const delay = char === '·' || char === ' ' ? speed * 2.5 : speed;
      timeoutId = window.setTimeout(typeNext, delay);
    };

    const startId = window.setTimeout(typeNext, startDelay);

    return () => {
      window.clearTimeout(startId);
      window.clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && (
        <span
          className="typewriter-cursor ml-px inline-block align-middle"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
