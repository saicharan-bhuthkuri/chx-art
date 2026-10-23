import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { type Artwork, featuredArtworks } from '../../data/portfolioData';

interface ArtworkLightboxModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const ArtworkLightboxModal: React.FC<ArtworkLightboxModalProps> = ({
  artwork,
  onClose,
  onSelectArtwork
}) => {
  const currentIndex = artwork ? featuredArtworks.findIndex((a) => a.id === artwork.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + featuredArtworks.length) % featuredArtworks.length;
    onSelectArtwork(featuredArtworks[prevIdx]);
  }, [currentIndex, onSelectArtwork]);

  const handleNext = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % featuredArtworks.length;
    onSelectArtwork(featuredArtworks[nextIdx]);
  }, [currentIndex, onSelectArtwork]);

  useEffect(() => {
    if (!artwork) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, onClose, handlePrev, handleNext]);

  if (!artwork) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="artwork-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#080807]/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#F7F3EA] rounded-2xl overflow-hidden shadow-2xl border border-[#C97824]/30 flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#080807]/80 hover:bg-[#C97824] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close artwork details"
        >
          <X size={18} />
        </button>

        {/* Left: Artwork Large View with Prev/Next Controls */}
        <div className="lg:w-3/5 bg-[#171613] relative flex items-center justify-center min-h-75 sm:min-h-105 lg:min-h-135 p-4 sm:p-8">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
          />

          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080807]/70 hover:bg-[#C97824] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080807]/70 hover:bg-[#C97824] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next artwork"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right: Artwork Metadata & Concept Story */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[85vh]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-editorial text-2xl font-bold text-[#C97824]">
                {artwork.index}
              </span>
              <div className="w-8 h-px bg-[#C97824]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#777570] font-sans font-semibold">
                {artwork.category.replace('\n', ' ')}
              </span>
            </div>

            <h3 id="artwork-modal-title" className="font-editorial text-2xl sm:text-3xl font-semibold text-[#080807] leading-tight">
              {artwork.title}
            </h3>

            <div className="mt-5 space-y-2 border-y border-[#24211D]/15 py-4 text-xs font-sans">
              <div className="flex justify-between">
                <span className="text-[#777570]">Medium</span>
                <span className="font-medium text-[#080807]">{artwork.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777570]">Year</span>
                <span className="font-medium text-[#080807]">{artwork.year}</span>
              </div>
              {artwork.dimensions && (
                <div className="flex justify-between">
                  <span className="text-[#777570]">Dimensions</span>
                  <span className="font-medium text-[#080807]">{artwork.dimensions}</span>
                </div>
              )}
            </div>

            <div className="mt-5">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#080807] font-sans mb-1">
                Visual Description
              </h4>
              <p className="text-xs text-[#777570] leading-relaxed font-sans">
                {artwork.description}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#080807] font-sans mb-1">
                Artistic Concept
              </h4>
              <p className="text-xs text-[#777570] leading-relaxed font-sans">
                {artwork.concept}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#24211D]/10 flex items-center justify-between text-xs text-[#777570]">
            <span>Press Esc to close</span>
            <span className="font-mono">{currentIndex + 1} of {featuredArtworks.length}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
