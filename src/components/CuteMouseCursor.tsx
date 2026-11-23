import { useEffect, useRef, useState } from 'react';

const SPARK_COLORS = ['#945BA1', '#F08AA1', '#E09FC7', '#F8C1BB', '#945BA1'];

export default function CuteMouseCursor() {
  const [enabled, setEnabled] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<SVGPathElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const sparkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastTargetRef = useRef<HTMLElement | null>(null);
  const stateRef = useRef({
    clientX: -100,
    clientY: -100,
    lastX: -100,
    lastSparkX: 0,
    lastSparkY: 0,
    lastSparkTime: 0,
    sparkPoolIdx: 0,
    sparkGen: 0,
    rafId: 0,
  });

  useEffect(() => {
    const pointerFine = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!pointerFine || reducedMotion) {
      setEnabled(false);
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const triggerSpark = (x: number, y: number) => {
      const s = stateRef.current;
      const el = sparkRefs.current[s.sparkPoolIdx];
      s.sparkPoolIdx = (s.sparkPoolIdx + 1) % SPARK_COLORS.length;
      s.sparkGen += 1;
      if (!el) return;

      el.style.setProperty('--sx', `${x}px`);
      el.style.setProperty('--sy', `${y}px`);
      el.classList.remove('cursor-spark-a', 'cursor-spark-b');
      el.classList.add(s.sparkGen % 2 === 0 ? 'cursor-spark-a' : 'cursor-spark-b');
    };

    const flushFrame = () => {
      const s = stateRef.current;
      s.rafId = 0;

      const dx = s.lastX < -50 ? 0 : s.clientX - s.lastX;
      s.lastX = s.clientX;

      const tilt = Math.max(-10, Math.min(10, dx * 0.4));
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${s.clientX}px, ${s.clientY}px, 0) rotate(${tilt.toFixed(1)}deg)`;
      }

      if (tailRef.current) {
        const wag = Math.max(-12, Math.min(12, -dx * 0.65));
        tailRef.current.style.transform = `rotate(${wag.toFixed(1)}deg)`;
      }

      const now = performance.now();
      const dist = Math.hypot(s.clientX - s.lastSparkX, s.clientY - s.lastSparkY);
      if (dist > 85 && now - s.lastSparkTime > 160) {
        s.lastSparkX = s.clientX;
        s.lastSparkY = s.clientY;
        s.lastSparkTime = now;
        triggerSpark(s.clientX, s.clientY);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const s = stateRef.current;
      s.clientX = e.clientX;
      s.clientY = e.clientY;
      if (!s.rafId) {
        s.rafId = window.requestAnimationFrame(flushFrame);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target
        ? (target.closest('a, button, [role="button"], [data-cursor-label]') as HTMLElement | null)
        : null;

      if (interactive === lastTargetRef.current) return;
      lastTargetRef.current = interactive;

      if (visualRef.current) {
        visualRef.current.classList.toggle('scale-110', Boolean(interactive));
      }

      if (labelRef.current) {
        const nextLabel = interactive?.getAttribute('data-cursor-label') || '';
        labelRef.current.textContent = nextLabel;
        labelRef.current.style.display = nextLabel ? 'inline-block' : 'none';
      }
    };

    const onMouseDown = () => visualRef.current?.classList.add('scale-75');
    const onMouseUp = () => visualRef.current?.classList.remove('scale-75');
    const onMouseLeave = () => {
      const s = stateRef.current;
      if (s.rafId) {
        window.cancelAnimationFrame(s.rafId);
        s.rafId = 0;
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate3d(-100px, -100px, 0)';
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (stateRef.current.rafId) {
        window.cancelAnimationFrame(stateRef.current.rafId);
      }
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Pre-allocated GPU spark pool (zero DOM allocation or GC on mouse move) */}
      <div
        className="pointer-events-none fixed inset-0 z-[998] overflow-hidden"
        aria-hidden="true"
      >
        {SPARK_COLORS.map((color, idx) => (
          <span
            key={idx}
            ref={(el) => {
              sparkRefs.current[idx] = el;
            }}
            style={{ backgroundColor: color, opacity: 0 }}
            className="pointer-events-none fixed left-0 top-0 h-[9px] w-[9px] rounded-tr-full rounded-bl-full will-change-transform"
          />
        ))}
      </div>

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[999] -ml-[22px] -mt-[22px] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          ref={visualRef}
          className="relative flex items-center transition-transform duration-100 ease-out"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wiggling Tail */}
            <path
              ref={tailRef}
              d="M36 33C42 33 45 27 42 22"
              stroke="#945BA1"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transformOrigin: '36px 33px', transition: 'transform 90ms ease-out' }}
            />
            {/* Ears */}
            <circle cx="14" cy="13" r="7" fill="#F08AA1" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="14" cy="13" r="3.6" fill="#F8C1BB" />
            <circle cx="34" cy="13" r="7" fill="#F08AA1" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="34" cy="13" r="3.6" fill="#F8C1BB" />
            {/* Head / Body */}
            <path
              d="M11 24C11 16.5 16.8 12.5 24 12.5C31.2 12.5 37 16.5 37 24C37 31.2 31.8 35.5 24 35.5C16.2 35.5 11 31.2 11 24Z"
              fill="#FFFFFF"
              stroke="#945BA1"
              strokeWidth="1.8"
            />
            {/* Rosy Cheeks */}
            <ellipse cx="15.5" cy="26.5" rx="2.3" ry="1.4" fill="#F8C1BB" opacity="0.9" />
            <ellipse cx="32.5" cy="26.5" rx="2.3" ry="1.4" fill="#F8C1BB" opacity="0.9" />
            {/* Pure CSS Blinking Eyes */}
            <g className="animate-cursor-blink">
              <circle cx="18.5" cy="22.5" r="2.1" fill="#2B2630" />
              <circle cx="17.8" cy="21.7" r="0.65" fill="#FFFFFF" />
              <circle cx="29.5" cy="22.5" r="2.1" fill="#2B2630" />
              <circle cx="28.8" cy="21.7" r="0.65" fill="#FFFFFF" />
            </g>
            {/* Cute Pink Nose */}
            <ellipse cx="24" cy="27.2" rx="2.6" ry="2" fill="#F08AA1" />
            {/* Whiskers */}
            <path d="M7.5 25L12.5 26M7 28.5L12.5 28" stroke="#945BA1" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <path d="M40.5 25L35.5 26M41 28.5L35.5 28" stroke="#945BA1" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          </svg>

          <span
            ref={labelRef}
            style={{ display: 'none' }}
            className="ml-1 whitespace-nowrap rounded-md bg-[#2B2630] px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-white shadow-md"
          />
        </div>
      </div>
    </>
  );
}
