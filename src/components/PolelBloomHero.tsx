import { useRef, useState } from 'react';
import { Monitor, Lightbulb, Heart } from 'lucide-react';
import { playSoftChime } from '../utils/sound';

interface PetalPillar {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  freq: number;
  path: string;
  hoverOffset: { x: number; y: number };
}

// Exact petal orientation & official POLEL colors
const PILLARS: PetalPillar[] = [
  {
    id: 0,
    title: 'UI / UX Design',
    subtitle: 'Parcours clairs & humains',
    color: '#945BA1',
    freq: 440,
    path: 'M 8 8 A 112 112 0 0 1 120 120 A 112 112 0 0 1 8 8 Z',
    hoverOffset: { x: -6, y: -6 },
  },
  {
    id: 1,
    title: 'Idées & Recherche',
    subtitle: 'Comprendre avant de créer',
    color: '#F08AA1',
    freq: 523.25,
    path: 'M 232 8 A 112 112 0 0 1 120 120 A 112 112 0 0 1 232 8 Z',
    hoverOffset: { x: 6, y: -6 },
  },
  {
    id: 2,
    title: 'Identité & Graphisme',
    subtitle: 'Logos, chartes & visuels',
    color: '#E09FC7',
    freq: 587.33,
    path: 'M 8 232 A 112 112 0 0 1 120 120 A 112 112 0 0 1 8 232 Z',
    hoverOffset: { x: -6, y: 6 },
  },
  {
    id: 3,
    title: 'Développement Web',
    subtitle: 'Interfaces vivantes & animées',
    color: '#F8C1BB',
    freq: 659.25,
    path: 'M 232 232 A 112 112 0 0 1 120 120 A 112 112 0 0 1 232 232 Z',
    hoverOffset: { x: 6, y: 6 },
  },
];

interface PolelBloomHeroProps {
  soundEnabled: boolean;
}

export default function PolelBloomHero({ soundEnabled }: PolelBloomHeroProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const orbitRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number>(0);
  const coordsRef = useRef({ nx: 0, ny: 0 });

  const active = PILLARS[activeIndex];

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current || e.currentTarget.getBoundingClientRect();
    rectRef.current = rect;
    coordsRef.current.nx = (e.clientX - rect.left) / rect.width - 0.5;
    coordsRef.current.ny = (e.clientY - rect.top) / rect.height - 0.5;

    if (!rafRef.current) {
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        const { nx, ny } = coordsRef.current;
        if (orbitRef.current) {
          orbitRef.current.style.transform = `translate3d(${(nx * -4.2).toFixed(1)}px, ${(ny * -4.2).toFixed(1)}px, 0) rotate(-22deg)`;
        }
        if (emblemRef.current) {
          emblemRef.current.style.transform = `translate3d(${(nx * 6).toFixed(1)}px, ${(ny * 6).toFixed(1)}px, 0)`;
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    rectRef.current = null;
    if (orbitRef.current) {
      orbitRef.current.style.transform = 'translate3d(0px, 0px, 0) rotate(-22deg)';
    }
    if (emblemRef.current) {
      emblemRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    }
  };

  const selectPillar = (idx: number) => {
    setActiveIndex(idx);
    playSoftChime(PILLARS[idx].freq, soundEnabled, 0.2);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[340px] w-full flex-col items-center justify-center pt-4 sm:min-h-[400px] sm:pt-0 lg:min-h-[440px]"
    >
      {/* Lightweight radial POLEL aura without GPU blur-3xl pass */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[260px] w-[260px] rounded-full opacity-55 sm:h-[340px] sm:w-[340px]"
        style={{
          background: 'radial-gradient(circle, rgba(240,138,161,0.34) 0%, rgba(148,91,161,0.22) 45%, transparent 72%)',
        }}
      />

      {/* Tilted Orbit Ring */}
      <div
        ref={orbitRef}
        aria-hidden="true"
        style={{ transform: 'translate3d(0px, 0px, 0) rotate(-22deg)', transition: 'transform 180ms ease-out' }}
        className="pointer-events-none absolute h-[135px] w-[275px] rounded-full border border-[#F08AA1]/40 sm:h-[170px] sm:w-[390px] lg:w-[410px]"
      />

      {/* Floating interactive tags positioned cleanly around the POLEL emblem */}
      <button
        type="button"
        onClick={() => selectPillar(0)}
        data-cursor-label="UI / UX"
        className={`absolute left-1 top-2 z-20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wider transition-colors whitespace-nowrap sm:left-4 sm:top-6 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs ${
          activeIndex === 0
            ? 'border-[#F08AA1] bg-[#3B2E42] text-white'
            : 'border-white/20 bg-[#2B2630]/90 text-[#E5DCE7] hover:border-[#F08AA1]/70'
        }`}
      >
        <Monitor className="h-3.5 w-3.5 text-[#E09FC7]" />
        <span>UI / UX</span>
      </button>

      <button
        type="button"
        onClick={() => selectPillar(1)}
        data-cursor-label="Idées"
        className={`absolute right-1 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wider transition-colors whitespace-nowrap sm:right-2 sm:top-12 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs ${
          activeIndex === 1
            ? 'border-[#F08AA1] bg-[#3B2E42] text-white'
            : 'border-white/20 bg-[#2B2630]/90 text-[#E5DCE7] hover:border-[#F08AA1]/70'
        }`}
      >
        <Lightbulb className="h-3.5 w-3.5 text-[#F8C1BB]" />
        <span>IDEAS</span>
      </button>

      <button
        type="button"
        onClick={() => selectPillar(2)}
        data-cursor-label="Soin"
        className={`absolute bottom-10 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wider transition-colors whitespace-nowrap sm:gap-2 sm:px-4 sm:py-2 sm:text-xs ${
          activeIndex === 2 || activeIndex === 3
            ? 'border-[#F08AA1] bg-[#3B2E42] text-white'
            : 'border-white/20 bg-[#2B2630]/90 text-[#E5DCE7] hover:border-[#F08AA1]/70'
        }`}
      >
        <Heart className="h-3.5 w-3.5 fill-[#F08AA1] text-[#F08AA1]" />
        <span>CREATE WITH CARE</span>
      </button>

      {/* Authentic 4-Petal POLEL Emblem (exact orientation & colors) */}
      <svg
        ref={emblemRef}
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate3d(0px, 0px, 0)', transition: 'transform 160ms ease-out' }}
        className="relative z-10 h-[185px] w-[185px] overflow-visible sm:h-[235px] sm:w-[235px]"
      >
        {PILLARS.map((pillar, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <path
              key={pillar.id}
              d={pillar.path}
              fill={pillar.color}
              role="button"
              tabIndex={0}
              aria-label={`${pillar.title} : ${pillar.subtitle}`}
              data-cursor-label={`Pétale 0${idx + 1}`}
              onClick={() => selectPillar(idx)}
              onMouseEnter={() => selectPillar(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  selectPillar(idx);
                }
              }}
              style={{
                transform: isSelected
                  ? `translate3d(${pillar.hoverOffset.x}px, ${pillar.hoverOffset.y}px, 0)`
                  : 'translate3d(0px, 0px, 0)',
                opacity: isSelected ? 1 : 0.9,
                transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 180ms ease-out',
              }}
              className="cursor-pointer outline-none focus-visible:stroke-white focus-visible:stroke-2"
            />
          );
        })}
      </svg>

      {/* Subtle live descriptor line */}
      <p className="mt-12 text-center text-xs text-[#D7CEDB] sm:mt-10">
        <span className="font-semibold text-white">{active.title}</span>
        <span className="mx-2 text-[#F08AA1]" aria-hidden="true">·</span>
        <span>{active.subtitle}</span>
      </p>
    </div>
  );
}
