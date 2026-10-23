import React, { useState, useEffect } from 'react';
import { GoldStarburst } from './Decorative/GoldStarburst';
import { ChxLogo } from './Decorative/ChxLogo';

interface PreloaderProps {
  isReady: boolean;
  progress: number;
  statusText: string;
}

export const Preloader: React.FC<PreloaderProps> = ({
  isReady,
  progress,
  statusText
}) => {
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  useEffect(() => {
    if (isReady) {
      // Remove preloader from DOM after fade-out transition completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F3EA] transition-all duration-700 ease-out select-none ${
        isReady ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100 pointer-events-auto'
      }`}
      aria-label="Loading portfolio assets and styles"
      role="status"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#E9A33B]/10 blur-3xl pointer-events-none" />

      {/* Decorative Starbursts */}
      <div className="absolute top-[20%] left-[25%] pointer-events-none">
        <GoldStarburst size={16} className="animate-sparkle" />
      </div>
      <div className="absolute bottom-[22%] right-[22%] pointer-events-none">
        <GoldStarburst size={14} className="animate-sparkle" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
        {/* Brand Logo Emblem */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-500">
          <ChxLogo size="lg" />
        </div>

        {/* Brand Tagline */}
        <p className="font-editorial text-sm sm:text-base text-[#171613] tracking-wide mb-6">
          Art That Speaks <span className="font-script text-[#C97824] text-xl sm:text-2xl ml-1">Without Words.</span>
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 h-1 bg-[#080807]/10 rounded-full overflow-hidden relative shadow-inner mb-3">
          <div
            className="h-full bg-linear-to-r from-[#C97824] via-[#E9A33B] to-[#F4C76E] rounded-full transition-all duration-300 ease-out shadow-xs"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage & Status Label */}
        <div className="flex items-center justify-between w-56 sm:w-64 text-xs font-sans text-[#777570]">
          <span className="text-[10px] tracking-[0.2em] uppercase font-serif text-[#24211D]/80 truncate max-w-36">
            {statusText}
          </span>
          <span className="font-editorial font-bold text-sm text-[#080807]">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};
