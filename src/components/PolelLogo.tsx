interface PolelSymbolProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

/**
 * Exact 4-petal POLEL emblem from POLEL_Charte_Graphique_1e467fdc.pdf:
 * - Top-Left: Prune (#945BA1), diagonal lens (0 100% 0 100%)
 * - Top-Right: Rose Magenta (#F08AA1), diagonal lens (100% 0 100% 0)
 * - Bottom-Left: Orchidée (#E09FC7), diagonal lens (100% 0 100% 0)
 * - Bottom-Right: Rose Poudré (#F8C1BB), diagonal lens (0 100% 0 100%)
 */
export function PolelSymbol({ size = 48, animated = true, className = '' }: PolelSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 overflow-visible ${animated ? 'polel-symbol-animated' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Top-Left Petal: Prune #945BA1 */}
      <path
        d="M 4 4 A 46 46 0 0 1 50 50 A 46 46 0 0 1 4 4 Z"
        fill="#945BA1"
        className={animated ? 'polel-petal polel-petal-1' : undefined}
      />
      {/* Top-Right Petal: Rose Magenta #F08AA1 */}
      <path
        d="M 96 4 A 46 46 0 0 1 50 50 A 46 46 0 0 1 96 4 Z"
        fill="#F08AA1"
        className={animated ? 'polel-petal polel-petal-2' : undefined}
      />
      {/* Bottom-Left Petal: Orchidée #E09FC7 */}
      <path
        d="M 4 96 A 46 46 0 0 1 50 50 A 46 46 0 0 1 4 96 Z"
        fill="#E09FC7"
        className={animated ? 'polel-petal polel-petal-3' : undefined}
      />
      {/* Bottom-Right Petal: Rose Poudré #F8C1BB */}
      <path
        d="M 96 96 A 46 46 0 0 1 50 50 A 46 46 0 0 1 96 96 Z"
        fill="#F8C1BB"
        className={animated ? 'polel-petal polel-petal-4' : undefined}
      />
    </svg>
  );
}

/**
 * Large thin-stroke outline of the exact 4-petal POLEL emblem for the Manifesto backdrop.
 */
export function PolelOutlineFlower({ size = 420, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Exact 4 POLEL petals meeting cleanly at (50, 50), no center dot/circle */}
      <path
        d="M 4 4 A 46 46 0 0 1 50 50 A 46 46 0 0 1 4 4 Z"
        stroke="#945BA1"
        strokeOpacity="0.32"
        strokeWidth="0.65"
      />
      <path
        d="M 96 4 A 46 46 0 0 1 50 50 A 46 46 0 0 1 96 4 Z"
        stroke="#F08AA1"
        strokeOpacity="0.28"
        strokeWidth="0.65"
      />
      <path
        d="M 4 96 A 46 46 0 0 1 50 50 A 46 46 0 0 1 4 96 Z"
        stroke="#E09FC7"
        strokeOpacity="0.28"
        strokeWidth="0.65"
      />
      <path
        d="M 96 96 A 46 46 0 0 1 50 50 A 46 46 0 0 1 96 96 Z"
        stroke="#F8C1BB"
        strokeOpacity="0.26"
        strokeWidth="0.65"
      />
    </svg>
  );
}

interface PolelWordmarkProps {
  theme?: 'light' | 'dark';
  height?: number;
  className?: string;
}

/**
 * Custom vector POLEL wordmark matching POLEL_Charte_Graphique_1e467fdc.pdf:
 * Charbon (#1D1D1B) on light background, Blanc (#FFFFFF) on dark background.
 */
export function PolelWordmark({ theme = 'light', height = 28, className = '' }: PolelWordmarkProps) {
  const strokeColor = theme === 'dark' ? '#FFFFFF' : '#1D1D1B';
  const width = Math.round((height / 36) * 166);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 166 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="POLEL"
    >
      {/* P (open top-left, continuous curve into stem) */}
      <path
        d="M 8 5 H 20.5 A 6.75 6.75 0 0 1 20.5 18.5 H 14 C 9.5 18.5 7 20.8 7 25 V 31"
        stroke={strokeColor}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* O */}
      <circle
        cx="48.5"
        cy="18"
        r="12.5"
        stroke={strokeColor}
        strokeWidth="3.1"
      />
      {/* L */}
      <path
        d="M 74 5.5 V 25.5 C 74 28.8 76.2 31 79.5 31 H 91"
        stroke={strokeColor}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* E */}
      <path
        d="M 122 5.5 H 109.5 C 106.2 5.5 104 7.7 104 11 V 25.5 C 104 28.8 106.2 31 109.5 31 H 122"
        stroke={strokeColor}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 109.5 18 H 120"
        stroke={strokeColor}
        strokeWidth="3.1"
        strokeLinecap="round"
      />
      {/* L */}
      <path
        d="M 135 5.5 V 25.5 C 135 28.8 137.2 31 140.5 31 H 152"
        stroke={strokeColor}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PolelLogoProps {
  layout?: 'horizontal' | 'vertical';
  theme?: 'light' | 'dark';
  symbolSize?: number;
  wordmarkHeight?: number;
  className?: string;
}

export function PolelLogo({
  layout = 'vertical',
  theme = 'light',
  symbolSize = 72,
  wordmarkHeight = 26,
  className = '',
}: PolelLogoProps) {
  if (layout === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-4 ${className}`}>
        <PolelSymbol size={symbolSize} />
        <PolelWordmark theme={theme} height={wordmarkHeight} />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center gap-4 ${className}`}>
      <PolelSymbol size={symbolSize} />
      <PolelWordmark theme={theme} height={wordmarkHeight} />
    </div>
  );
}

/**
 * Repeating "motif pétales" bandeau from POLEL_Charte_Graphique_1e467fdc.pdf page 10.
 * Cropped by container edges, available in light or dark mode.
 */
export function PolelPetalBand({
  theme = 'dark',
  height = 44,
  className = '',
}: {
  theme?: 'light' | 'dark';
  height?: number;
  className?: string;
}) {
  const opacity = theme === 'dark' ? 0.34 : 0.45;
  const bg = theme === 'dark' ? '#2B2630' : '#F7F5F6';

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden ${className}`}
      style={{ height, backgroundColor: bg }}
    >
      <div
        className="h-full w-full"
        style={{
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 A50 50 0 0 1 50 50 A50 50 0 0 1 0 0 Z' fill='%23945BA1'/%3E%3Cpath d='M100 0 A50 50 0 0 1 50 50 A50 50 0 0 1 100 0 Z' fill='%23F08AA1'/%3E%3Cpath d='M0 100 A50 50 0 0 1 50 50 A50 50 0 0 1 0 100 Z' fill='%23E09FC7'/%3E%3Cpath d='M100 100 A50 50 0 0 1 50 50 A50 50 0 0 1 100 100 Z' fill='%23F8C1BB'/%3E%3C/svg%3E")`,
          backgroundSize: '44px 44px',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
