import { memo, useId } from 'react';

interface ToolIconProps {
  name: string;
  size?: number;
}

export const ToolIcon = memo(function ToolIcon({ name, size = 26 }: ToolIconProps) {
  const canvaGradId = useId();

  switch (name) {
    case 'Figma':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8.5 3H12V9H8.5C6.84 9 5.5 7.66 5.5 6C5.5 4.34 6.84 3 8.5 3Z" fill="#F24E1E" />
          <path d="M12 3H15.5C17.16 3 18.5 4.34 18.5 6C18.5 7.66 17.16 9 15.5 9H12V3Z" fill="#FF7262" />
          <path d="M12 9H15.5C17.16 9 18.5 10.34 18.5 12C18.5 13.66 17.16 15 15.5 15C13.84 15 12 13.66 12 12V9Z" fill="#1ABCFE" />
          <path d="M5.5 12C5.5 10.34 6.84 9 8.5 9H12V15H8.5C6.84 15 5.5 13.66 5.5 12Z" fill="#A259FF" />
          <path d="M8.5 15H12V18C12 19.66 10.66 21 9 21C7.34 21 6 19.66 6 18C6 16.34 7.12 15 8.5 15Z" fill="#0ACF83" />
        </svg>
      );

    case 'Illustrator':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#330000" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="#FF9A00"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            Ai
          </text>
        </svg>
      );

    case 'Photoshop':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#001E36" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="#31A8FF"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            Ps
          </text>
        </svg>
      );

    case 'InDesign':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#49021F" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="#FF3366"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            Id
          </text>
        </svg>
      );

    case 'Canva':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id={canvaGradId} x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill={`url(#${canvaGradId})`} />
          <path
            d="M15.1 14.3C14.3 15.2 13.1 15.8 11.8 15.8C9.6 15.8 8 14.2 8 12C8 9.8 9.6 8.2 11.8 8.2C13.1 8.2 14.2 8.8 14.9 9.7"
            stroke="#FFFFFF"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'CapCut':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#18181B" />
          <path
            d="M7 8.5L17 15.5M17 8.5L7 15.5"
            stroke="#FFFFFF"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <rect
            x="6.2"
            y="7.2"
            width="11.6"
            height="9.6"
            rx="2.2"
            stroke="#FFFFFF"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
        </svg>
      );

    case 'HTML':
    case 'HTML / CSS':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 3L5.4 18.6L12 21L18.6 18.6L20 3H4Z" fill="#E34F26" />
          <path d="M12 4.3V19.6L17.4 17.7L18.6 4.3H12Z" fill="#EF652A" />
          <path
            d="M7.5 7.5H16.5L16.2 10H10L10.2 12H16L15.5 16.5L12 17.5L8.5 16.5L8.3 14H10.5L10.6 15.2L12 15.6L13.5 15.2L13.7 13.7H8.1L7.5 7.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'CSS':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 3L5.4 18.6L12 21L18.6 18.6L20 3H4Z" fill="#1572B6" />
          <path d="M12 4.3V19.6L17.4 17.7L18.6 4.3H12Z" fill="#33A9DC" />
          <path
            d="M7.5 7.5H16.5L16.1 10H11.5L11.7 12H15.9L15.4 16.5L12 17.5L8.6 16.5L8.4 14H10.6L10.7 15.2L12 15.6L13.4 15.2L13.6 13.7H8.2L8 12H11.8L12 10H7.8L7.5 7.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
          <text
            x="14.5"
            y="17.5"
            textAnchor="middle"
            fill="#1D1D1B"
            fontSize="10.5"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            JS
          </text>
        </svg>
      );

    case 'React':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="#087EA4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#087EA4" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" stroke="#087EA4" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" stroke="#087EA4" strokeWidth="1.5" />
        </svg>
      );

    case 'WordPress':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#21759B" />
          <path
            d="M6.3 8.8L9.3 17L11.8 10.5L14.4 17L17.4 8.8"
            stroke="#FFFFFF"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
});
