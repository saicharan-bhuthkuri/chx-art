import React from 'react';
import logoMark from '../../assets/images/logo-chx-mark.png';

interface ChxLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const ChxLogo: React.FC<ChxLogoProps> = ({
  className = '',
  size = 'md',
  onClick
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center cursor-pointer transition-opacity duration-300 hover:opacity-90 ${className}`}
    >
      <img
        src={logoMark}
        alt="CHX.ARTS Logo"
        className={`${sizeClasses[size]} object-contain mix-blend-multiply`}
      />
    </div>
  );
};
