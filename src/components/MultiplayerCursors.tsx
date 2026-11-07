import { useEffect, useRef } from 'react';

type Cursor = {
  name: string;
  color: string;
  dotClass: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  phase: number;
  speed: number;
};

const CURSORS: Cursor[] = [
  { name: 'HR (Reviewing Profile)', color: '#10b981', dotClass: 'bg-emerald-500', x: 0, y: 0, vx: 0, vy: 0, baseX: 0.2, baseY: 0.3, phase: 0, speed: 0.0007 },
  { name: 'Client (Viewing Architecture)', color: '#a855f7', dotClass: 'bg-purple-500', x: 0, y: 0, vx: 0, vy: 0, baseX: 0.75, baseY: 0.25, phase: 1.6, speed: 0.0009 },
  { name: 'Arsene (Author)', color: '#e11d48', dotClass: 'bg-crimson-600', x: 0, y: 0, vx: 0, vy: 0, baseX: 0.5, baseY: 0.6, phase: 3.1, speed: 0.0006 },
  { name: 'JK (Tech Lead)', color: '#3b82f6', dotClass: 'bg-blue-500', x: 0, y: 0, vx: 0, vy: 0, baseX: 0.85, baseY: 0.7, phase: 4.7, speed: 0.0008 },
];

export default function MultiplayerCursors() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const realMouse = useRef({ x: -9999, y: -9999 });
  const stateRef = useRef<Cursor[]>(CURSORS.map((c) => ({ ...c })));

  useEffect(() => {
    const move = (e: MouseEvent) => {
      realMouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    let raf = 0;
    const nodes: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;
    const cursorNodes = Array.from(container.querySelectorAll<HTMLDivElement>('[data-cursor]'));
    cursorNodes.forEach((n) => nodes.push(n));

    const tick = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const state = stateRef.current;

      state.forEach((c, i) => {
        // Target = base path with lissajous motion across viewport
        const targetX = w * (c.baseX + 0.18 * Math.sin(t * c.speed + c.phase));
        const targetY = h * (c.baseY + 0.16 * Math.cos(t * c.speed * 1.3 + c.phase * 0.7));

        // Gentle repulsion from real mouse
        let ax = (targetX - c.x) * 0.02;
        let ay = (targetY - c.y) * 0.02;
        const dx = c.x - realMouse.current.x;
        const dy = c.y - realMouse.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 0.1) {
          const force = (180 - dist) / 180;
          ax += (dx / dist) * force * 1.8;
          ay += (dy / dist) * force * 1.8;
        }

        c.vx = (c.vx + ax) * 0.9;
        c.vy = (c.vy + ay) * 0.9;
        c.x += c.vx;
        c.y += c.vy;

        const node = nodes[i];
        if (node) {
          node.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
        }
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {CURSORS.map((c) => (
        <div
          key={c.name}
          data-cursor
          className="pointer-events-none absolute left-0 top-0 will-change-transform"
          style={{ transform: 'translate3d(-100px,-100px,0)' }}
        >
          {/* SVG pointer */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            <path d="M5 2.5L19 12L12.5 13L9.5 19L5 2.5Z" fill={c.color} stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          {/* Badge */}
          <div
            className="absolute left-[18px] top-[14px] flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold text-white shadow-md"
            style={{ backgroundColor: c.color }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${c.dotClass} ring-2 ring-white/40`} />
            {c.name}
          </div>
        </div>
      ))}
    </div>
  );
}
