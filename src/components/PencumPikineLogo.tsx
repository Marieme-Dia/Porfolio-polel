interface PencumSymbolProps {
  size?: number;
  monochrome?: 'white' | 'dark' | 'none';
  className?: string;
}

/**
 * Official Pencum Pikine symbol (used when monochrome is needed)
 */
export function PencumSymbol({ size = 56, monochrome = 'none', className = '' }: PencumSymbolProps) {
  const outerColor = monochrome === 'white' ? '#FFFFFF' : monochrome === 'dark' ? '#020518' : '#F29100';
  const centerColor = monochrome === 'white' ? '#FFFFFF' : monochrome === 'dark' ? '#020518' : '#1E7A3A';
  const bridgeColor = monochrome === 'white' ? '#FFFFFF' : monochrome === 'dark' ? '#020518' : '#2B3990';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="15" fill={centerColor} />
      <circle cx="60" cy="14" r="11" fill={outerColor} />
      <circle cx="106" cy="60" r="11" fill={outerColor} />
      <circle cx="60" cy="106" r="11" fill={outerColor} />
      <circle cx="14" cy="60" r="11" fill={outerColor} />
      <path d="M 73 20 Q 82 38 100 47 L 85 52 Q 74 44 68 35 Z" fill={bridgeColor} />
      <path d="M 100 73 Q 82 82 73 100 L 68 85 Q 76 74 85 68 Z" fill={bridgeColor} />
      <path d="M 47 100 Q 38 82 20 73 L 35 68 Q 46 76 52 85 Z" fill={bridgeColor} />
      <path d="M 20 47 Q 38 38 47 20 L 52 35 Q 44 46 35 52 Z" fill={bridgeColor} />
    </svg>
  );
}

export function PencumPikineLogo({
  theme = 'light',
  symbolSize = 54,
  className = '',
}: {
  theme?: 'light' | 'primary' | 'dark';
  symbolSize?: number;
  className?: string;
}) {
  if (theme === 'light') {
    return (
      <img
        src="/assets/opt/pencum_logo.webp"
        alt="Logo officiel Pencum Pikine"
        decoding="async"
        referrerPolicy="no-referrer"
        style={{ height: `${symbolSize}px`, width: 'auto' }}
        className={`object-contain shrink-0 ${className}`}
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <PencumSymbol size={symbolSize} monochrome="white" />
      <div className="leading-[0.95]">
        <p className="font-display text-2xl font-bold tracking-tight text-white">Pencum</p>
        <p className="font-display text-2xl font-normal tracking-tight text-white">Pikine</p>
      </div>
    </div>
  );
}
