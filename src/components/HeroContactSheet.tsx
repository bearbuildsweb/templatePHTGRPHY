import { useState, useEffect, useMemo, type Key } from 'react';

interface HeroContactSheetProps {
  key?: Key;
  slideIndex: number;
  onComplete?: () => void;
}

const COLS = 8;
const ROWS = 10;
const CELL_W = 50;
const CELL_H = 50;
const VIEW_W = COLS * CELL_W; // 400
const VIEW_H = ROWS * CELL_H; // 500
const FINAL_RADIUS = 38; // Radius exceeds 35.36px (diagonal/2) to overlap and fully reveal photo

interface CircleTile {
  id: number;
  col: number;
  row: number;
  cx: number;
  cy: number;
  delay: number;
}

export default function HeroContactSheet({ slideIndex, onComplete }: HeroContactSheetProps) {
  const [resolved, setResolved] = useState(false);
  const [fullyResolved, setFullyResolved] = useState(false);
  const [fullyUnmounted, setFullyUnmounted] = useState(false);

  // Generate unique mask id per slide
  const maskId = useMemo(() => `contact-sheet-mask-${slideIndex}-${Math.random().toString(36).slice(2, 7)}`, [slideIndex]);

  // Generate 8x10 matrix of circular aperture tiles with staggered wave delays
  const tiles: CircleTile[] = useMemo(() => {
    const list: CircleTile[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const id = r * COLS + c;
        const cx = c * CELL_W + CELL_W / 2;
        const cy = r * CELL_H + CELL_H / 2;

        // Diagonal wave from top-left to bottom-right with organic micro-variation
        const diagonal = (r / ROWS) * 0.55 + (c / COLS) * 0.45;
        const jitter = ((id * 13) % 7) * 0.012;
        const delay = 0.04 + diagonal * 0.65 + jitter;

        list.push({
          id,
          col: c,
          row: r,
          cx,
          cy,
          delay,
        });
      }
    }
    return list;
  }, []);

  useEffect(() => {
    // Initiate circle iris expansion wave
    const startTimer = setTimeout(() => {
      setResolved(true);
    }, 70);

    // Fade out mask layer once all circles have overlapped
    const resolveTimer = setTimeout(() => {
      setFullyResolved(true);
    }, 1300);

    // Unmount overlay after complete reveal
    const completeTimer = setTimeout(() => {
      setFullyUnmounted(true);
      if (onComplete) onComplete();
    }, 1500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(resolveTimer);
      clearTimeout(completeTimer);
    };
  }, [slideIndex, onComplete]);

  if (fullyUnmounted) return null;

  return (
    <div
      className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 ${
        fullyUnmounted ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            {/* White base keeps dark obsidian cover layer visible */}
            <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="white" />

            {/* Black circles expand to punch circular apertures and reveal the photo */}
            {tiles.map((tile) => (
              <g
                key={`hole-${tile.id}`}
                style={{
                  transformOrigin: `${tile.cx}px ${tile.cy}px`,
                  transform: resolved ? 'scale(1)' : 'scale(0.1)',
                  transition: `transform 0.52s cubic-bezier(0.16, 1, 0.3, 1) ${tile.delay}s`,
                }}
              >
                <circle cx={tile.cx} cy={tile.cy} r={FINAL_RADIUS} fill="black" />
              </g>
            ))}
          </mask>
        </defs>

        {/* Dark Obsidian Emulsion Layer cut through by the circular aperture mask */}
        <rect
          x="0"
          y="0"
          width={VIEW_W}
          height={VIEW_H}
          fill="#0B101B"
          mask={`url(#${maskId})`}
          style={{
            opacity: fullyResolved ? 0 : 1,
            transition: 'opacity 0.25s ease-out',
          }}
        />

        {/* Champagne Gold Aperture Halos - delicate expanding lens rings with zero typography */}
        {tiles.map((tile) => (
          <circle
            key={`halo-${tile.id}`}
            cx={tile.cx}
            cy={tile.cy}
            r="18"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.75"
            style={{
              transformOrigin: `${tile.cx}px ${tile.cy}px`,
              transform: resolved ? 'scale(1.7)' : 'scale(0.35)',
              opacity: resolved ? 0 : 0.45,
              transition: `transform 0.52s cubic-bezier(0.16, 1, 0.3, 1) ${tile.delay}s, opacity 0.35s ease-out ${tile.delay + 0.15}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
