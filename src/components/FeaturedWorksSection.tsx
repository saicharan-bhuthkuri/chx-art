import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredArtworks, type Artwork } from '../data/portfolioData';

interface FeaturedWorksSectionProps {
  onSelectArtwork: (artwork: Artwork) => void;
}

export const FeaturedWorksSection: React.FC<FeaturedWorksSectionProps> = ({
  onSelectArtwork
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Active index for the 3-second auto pop up sequence (defaults to 0 or 3)
  const [activeIndex, setActiveIndex] = useState<number>(3);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle: pops up each card sequentially every 3 seconds, then pops down
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredArtworks.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Smoothly scroll active card into view if overflowing on smaller viewports
  const scrollActiveCardIntoView = useCallback((index: number) => {
    const cardEl = cardRefs.current[index];
    const container = scrollContainerRef.current;
    if (cardEl && container) {
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.clientWidth;
      const scrollTarget = cardLeft - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: Math.max(0, scrollTarget),
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    scrollActiveCardIntoView(activeIndex);
  }, [activeIndex, scrollActiveCardIntoView]);

  // Manual navigation handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredArtworks.length) % featuredArtworks.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredArtworks.length);
  };

  return (
    <section id="work" className="relative bg-[#F7F3EA] pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Decorative Upper Soft Curved Transition Divider */}
      <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 24" fill="none" className="w-full h-full preserve-3d">
          <path
            d="M0 0 C400 24, 1040 24, 1440 0 L1440 24 L0 24 Z"
            fill="#F7F3EA"
          />
        </svg>
      </div>

      <div className="max-w-360 mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Controls, Description (Matching Reference Image 1) */}
          <div className="lg:col-span-3 flex flex-col justify-between pt-1">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#080807] leading-[0.95]">
                FEATURED<br />WORKS
              </h2>

              {/* Navigation Arrow Controls with Thin Gold Outlines */}
              <div className="flex items-center gap-2.5 mt-4 sm:mt-5">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#C97824]/70 bg-white/70 hover:bg-[#E9A33B] text-[#080807] hover:text-black hover:scale-105 active:scale-90 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs group"
                  aria-label="Previous artwork"
                  title="Previous artwork"
                >
                  <ArrowLeft size={14} className="text-[#080807] group-hover:text-black group-hover:-translate-x-0.5 transition-all" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#C97824]/70 bg-white/70 hover:bg-[#E9A33B] text-[#080807] hover:text-black hover:scale-105 active:scale-90 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs group"
                  aria-label="Next artwork"
                  title="Next artwork"
                >
                  <ArrowRight size={14} className="text-[#080807] group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </button>

                {/* Subtle auto-cycle pulse */}
                <span className="ml-1.5 flex items-center gap-1.5 text-[10px] text-[#777570] font-sans opacity-70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E9A33B] animate-ping" />
                  <span>3s auto</span>
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 sm:mt-5 text-xs text-[#777570] leading-relaxed max-w-52.5 font-sans">
                A collection of my recent works across different art forms and styles.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Narrow Cinematic Artwork Cards in 1 Row (Reference Image 1) */}
          <div className="lg:col-span-9 relative">
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 overflow-x-auto pt-6 pb-8 px-1 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredArtworks.map((artwork, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={artwork.id}
                    ref={(el) => { cardRefs.current[idx] = el; }}
                    onMouseEnter={() => {
                      setActiveIndex(idx);
                      setIsPaused(true);
                    }}
                    onClick={() => {
                      setActiveIndex(idx);
                      onSelectArtwork(artwork);
                    }}
                    className={`group shrink-0 w-30.5 sm:w-33 md:w-35 lg:w-30 xl:w-34 aspect-[1/1.62] rounded-xl overflow-hidden relative cursor-pointer snap-start bg-[#0e0e0c] select-none ${
                      isActive
                        ? 'border-2 border-[#E9A33B] shadow-[0_20px_38px_-4px_rgba(201,120,36,0.45),0_6px_16px_rgba(0,0,0,0.18)] -translate-y-3.5 sm:-translate-y-4 scale-[1.03] z-20 opacity-100 ring-2 ring-[#E9A33B]/25'
                        : 'border border-black/30 shadow-md translate-y-0 scale-100 z-10 opacity-90 hover:opacity-100 hover:-translate-y-1.5 hover:border-[#E9A33B]/60 hover:shadow-lg'
                    }`}
                    style={{
                      transition: 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.55s ease, border-color 0.4s ease, opacity 0.4s ease'
                    }}
                  >
                    {/* Authentic Artwork Master Image */}
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? 'scale-108' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                    />

                    {/* Charcoal Cinematic Vignette Tint (Reference Image 1) */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />

                    {/* Deep Bottom Gradient for Readable White Typography */}
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-black via-black/80 via-45% to-transparent pointer-events-none" />

                    {/* Top Golden Accent Shimmer when popped up */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#F4C76E] via-[#E9A33B] to-[#C97824] animate-pulse z-10" />
                    )}

                    {/* Card Footer Content: Category Name, 01-06 Number, Circular Gold Action Pill */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex items-end justify-between gap-1 z-10">
                      {/* Left Side: Category Title & Index Number */}
                      <div className="flex-1 min-w-0 pr-1">
                        <h3 className="text-white font-medium text-[11px] sm:text-xs leading-[1.15] font-sans tracking-tight whitespace-pre-line drop-shadow-sm">
                          {artwork.category}
                        </h3>
                        <span className="text-white/60 text-[9px] sm:text-[10px] font-mono tracking-wider mt-1 block">
                          {artwork.index}
                        </span>
                      </div>

                      {/* Right Side: Small Circular Button with Thin Gold Outline */}
                      <div
                        className={`w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive
                            ? 'border-[#E9A33B] bg-[#E9A33B] text-black shadow-xs scale-105'
                            : 'border-[#E9A33B]/80 bg-black/60 text-[#E9A33B] group-hover:bg-[#E9A33B] group-hover:text-black group-hover:scale-110'
                        }`}
                        title={`View ${artwork.title}`}
                      >
                        <ArrowRight size={10} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
