import { useEffect, useRef, useMemo } from 'react';

/*
 * Floating neon chicken silhouettes — DVD-screensaver style.
 * Each chicken bounces off viewport edges and slowly rotates.
 * Driven by requestAnimationFrame for smooth, continuous motion.
 */

const COLORS = [
  'rgba(255,215,0,VAR)',   // gold
  'rgba(255,140,0,VAR)',   // orange
  'rgba(0,255,136,VAR)',   // green
  'rgba(0,212,255,VAR)',   // blue
  'rgba(255,20,147,VAR)',  // pink
  'rgba(168,85,247,VAR)',  // purple
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function ChickenBackground() {
  const containerRef = useRef(null);
  const chickensRef = useRef([]);
  const rafRef = useRef(null);

  const initial = useMemo(() => {
    const rng = seededRandom(42);
    return Array.from({ length: 14 }, (_, i) => {
      const size = 50 + rng() * 80;              // 50–130px
      const opacity = 0.08 + rng() * 0.10;       // 0.08–0.18
      const color = COLORS[i % COLORS.length].replace('VAR', String(opacity));
      const glowColor = COLORS[i % COLORS.length].replace('VAR', String(opacity * 2.5));
      // Random starting position (fraction 0–1)
      const x = rng();
      const y = rng();
      // Random velocity — slow: 10–30 px/s in each axis
      const speed = 10 + rng() * 20;
      const angle = rng() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      // Slow spin: 3–12 deg/s, random direction
      const spinSpeed = (3 + rng() * 9) * (rng() > 0.5 ? 1 : -1);
      const rot = rng() * 360;
      const flip = rng() > 0.5 ? -1 : 1;

      return { size, color, glowColor, x, y, vx, vy, rot, spinSpeed, flip };
    });
  }, []);

  useEffect(() => {
    // Initialize mutable state from the seed data
    chickensRef.current = initial.map(c => ({ ...c }));
    const els = containerRef.current?.children;
    if (!els) return;

    let lastTime = performance.now();

    function tick(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.1); // seconds, cap at 100ms
      lastTime = now;

      const container = containerRef.current;
      if (!container) return;
      const W = container.offsetWidth;
      const H = container.offsetHeight;

      chickensRef.current.forEach((c, i) => {
        // Update position
        c.x += c.vx * dt;
        c.y += c.vy * dt;

        // Bounce off edges
        if (c.x < 0) { c.x = 0; c.vx = Math.abs(c.vx); }
        else if (c.x + c.size > W) { c.x = W - c.size; c.vx = -Math.abs(c.vx); }
        if (c.y < 0) { c.y = 0; c.vy = Math.abs(c.vy); }
        else if (c.y + c.size > H) { c.y = H - c.size; c.vy = -Math.abs(c.vy); }

        // Rotate
        c.rot += c.spinSpeed * dt;

        // Apply to DOM
        const el = els[i];
        if (el) {
          el.style.transform = `translate(${c.x}px, ${c.y}px) scaleX(${c.flip}) rotate(${c.rot}deg)`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    // Set initial positions based on container size
    function initPositions() {
      const W = containerRef.current?.offsetWidth || 1;
      const H = containerRef.current?.offsetHeight || 1;
      chickensRef.current.forEach(c => {
        c.x = c.x * (W - c.size);
        c.y = c.y * (H - c.size);
      });
    }

    initPositions();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initial]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {initial.map((c, i) => (
        <div
          key={i}
          className="absolute top-0 left-0"
          style={{ width: c.size, height: c.size, willChange: 'transform' }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundColor: c.color,
              WebkitMaskImage: 'url(/chicken-silhouette.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/chicken-silhouette.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              filter: `drop-shadow(0 0 ${c.size / 5}px ${c.glowColor})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
