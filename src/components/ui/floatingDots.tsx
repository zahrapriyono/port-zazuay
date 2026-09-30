import type { CSSProperties } from 'react';

type DotColor = 'pink' | 'red';

interface Dot {
  top: number; // % of the whole page height
  left: number; // % of page width (kept 5-88 so a dot is never cut by the edge)
  size: number; // rem at desktop; scales down on small screens
  color: DotColor;
  dx: number; // drift distance (px)
  dy: number;
  dur: number; // drift duration (s)
  delay: number; // negative = already mid-drift on load
}

// Spread across the whole page so they float behind every section.
const DOTS: Dot[] = [
  {
    top: 2,
    left: 14,
    size: 3.2,
    color: 'red',
    dx: 26,
    dy: 34,
    dur: 19,
    delay: -3,
  },
  {
    top: 6,
    left: 47,
    size: 2.6,
    color: 'pink',
    dx: -30,
    dy: 28,
    dur: 23,
    delay: -9,
  },
  {
    top: 11,
    left: 84,
    size: 3,
    color: 'pink',
    dx: -22,
    dy: 40,
    dur: 21,
    delay: -5,
  },
  {
    top: 17,
    left: 6,
    size: 2.4,
    color: 'red',
    dx: 30,
    dy: -26,
    dur: 17,
    delay: -12,
  },
  {
    top: 24,
    left: 62,
    size: 3.4,
    color: 'pink',
    dx: 24,
    dy: 32,
    dur: 25,
    delay: -2,
  },
  {
    top: 30,
    left: 86,
    size: 2.6,
    color: 'red',
    dx: -26,
    dy: -30,
    dur: 20,
    delay: -7,
  },
  {
    top: 37,
    left: 20,
    size: 3,
    color: 'pink',
    dx: 32,
    dy: 26,
    dur: 22,
    delay: -14,
  },
  {
    top: 44,
    left: 72,
    size: 2.4,
    color: 'red',
    dx: -24,
    dy: 36,
    dur: 18,
    delay: -4,
  },
  {
    top: 51,
    left: 8,
    size: 3.4,
    color: 'red',
    dx: 22,
    dy: -34,
    dur: 24,
    delay: -10,
  },
  {
    top: 57,
    left: 55,
    size: 2.8,
    color: 'pink',
    dx: -32,
    dy: 24,
    dur: 19,
    delay: -1,
  },
  {
    top: 63,
    left: 86,
    size: 3.2,
    color: 'pink',
    dx: -20,
    dy: -28,
    dur: 26,
    delay: -8,
  },
  {
    top: 69,
    left: 26,
    size: 2.6,
    color: 'pink',
    dx: 28,
    dy: 30,
    dur: 21,
    delay: -13,
  },
  {
    top: 75,
    left: 68,
    size: 3,
    color: 'red',
    dx: -30,
    dy: -24,
    dur: 17,
    delay: -6,
  },
  {
    top: 81,
    left: 12,
    size: 3.2,
    color: 'red',
    dx: 24,
    dy: 38,
    dur: 23,
    delay: -11,
  },
  {
    top: 87,
    left: 80,
    size: 2.6,
    color: 'pink',
    dx: -26,
    dy: 30,
    dur: 20,
    delay: -3,
  },
  {
    top: 93,
    left: 40,
    size: 3,
    color: 'pink',
    dx: 30,
    dy: -32,
    dur: 25,
    delay: -9,
  },
];

/**
 * A single decorative layer that spans the full page and sits behind all content,
 * so the dots flow across section boundaries instead of being clipped by them.
 * The parent must be `relative isolate`.
 */
export function FloatingDots() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {DOTS.map((d) => (
        <span
          key={`${d.top}-${d.left}`}
          className="animate-dot-drift absolute rounded-full"
          style={
            {
              top: `${d.top}%`,
              left: `${d.left}%`,
              width: `clamp(${d.size * 0.6}rem, ${d.size * 1.1}vw, ${d.size}rem)`,
              aspectRatio: '1',
              backgroundColor:
                d.color === 'pink' ? 'var(--dot-soft)' : 'var(--dot-red)',
              '--dx': `${d.dx}px`,
              '--dy': `${d.dy}px`,
              '--dur': `${d.dur}s`,
              '--delay': `${d.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
