import React from 'react';

interface GoldStarburstProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const GoldStarburst: React.FC<GoldStarburstProps> = ({
  className = '',
  size = 18,
  glow = true
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${glow ? 'gold-glow' : ''} ${className}`}
    >
      <path
        d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
        fill="url(#goldGrad)"
      />
      <circle cx="12" cy="12" r="1.5" fill="#FFFDF7" />
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4C76E" />
          <stop offset="0.5" stopColor="#E9A33B" />
          <stop offset="1" stopColor="#C97824" />
        </linearGradient>
      </defs>
    </svg>
  );
};
