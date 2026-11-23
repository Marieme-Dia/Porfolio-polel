interface NavaroLogoProps {
  variant?: 'color' | 'black' | 'white';
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export function NavaroSymbol({
  variant = 'color',
  size = 44,
}: {
  variant?: 'color' | 'black' | 'white';
  size?: number;
}) {
  const gradId = `navaro-grad-${size}`;
  const fill =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'black'
        ? '#0D0D0D'
        : `url(#${gradId})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {variant === 'color' && (
        <defs>
          <linearGradient id={gradId} x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E61E6E" />
            <stop offset="55%" stopColor="#9B165B" />
            <stop offset="100%" stopColor="#280934" />
          </linearGradient>
        </defs>
      )}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
        d="M50 8C73.196 8 92 26.804 92 50C92 73.196 73.196 92 50 92C26.804 92 8 73.196 8 50C8 26.804 26.804 8 50 8ZM50 11C47.5 38.5 38.5 47.5 11 50C38.5 52.5 47.5 61.5 50 89C52.5 61.5 61.5 52.5 89 50C61.5 47.5 52.5 38.5 50 11Z"
      />
    </svg>
  );
}

export function NavaroLogo({
  variant = 'color',
  size = 44,
  showWordmark = true,
  className = '',
}: NavaroLogoProps) {
  const textColor =
    variant === 'white'
      ? 'text-white'
      : variant === 'black'
        ? 'text-[#0D0D0D]'
        : 'text-[#280934]';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <NavaroSymbol variant={variant} size={size} />
      {showWordmark && (
        <span
          className={`font-serif-accent text-2xl font-normal tracking-[0.04em] leading-none ${textColor}`}
        >
          NAVARO
        </span>
      )}
    </div>
  );
}
