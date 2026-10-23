import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { featuredArtworks } from '../../data/portfolioData';

interface WatchReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchReelModal: React.FC<WatchReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Slideshow auto-advance simulation if playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredArtworks.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentWork = featuredArtworks[activeSlide];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#080807]/95 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#171613] rounded-2xl overflow-hidden shadow-2xl border border-[#C97824]/40 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24211D] bg-[#080807]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E9A33B] animate-ping" />
            <span className="font-editorial text-sm tracking-widest uppercase text-white/90">
              CHX.ARTS — Artist Showreel 2024
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97824] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close showreel"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-[#080807] overflow-hidden flex items-center justify-center">
          <img
            src={currentWork.image}
            alt={currentWork.title}
            className="w-full h-full object-cover transition-all duration-1000 transform scale-105"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-linear-to-t from-[#080807]/90 via-transparent to-[#080807]/30 pointer-events-none" />

          {/* Lower Overlay Info */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
            <div>
              <span className="text-[11px] font-mono text-[#E9A33B] tracking-widest uppercase block mb-1">
                Chapter {currentWork.index} • {currentWork.category.replace('\n', ' ')}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium">
                {currentWork.title}
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-[#080807]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Sparkles size={12} className="text-[#E9A33B]" />
              <span className="text-[10px] text-white/90 tracking-wider uppercase font-sans">
                Curated Showcase
              </span>
            </div>
          </div>

          {/* Center Play/Pause Indicator on Click */}
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="absolute inset-0 flex items-center justify-center bg-transparent group cursor-pointer"
            aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
          >
            <div className={`w-16 h-16 rounded-full bg-[#080807]/60 group-hover:bg-[#C97824] border border-white/20 flex items-center justify-center text-white transition-all transform ${isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100' : 'opacity-100 scale-100'}`}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
            </div>
          </button>
        </div>

        {/* Player Controls Bar */}
        <div className="px-6 py-4 bg-[#080807] flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="text-white/80 hover:text-[#E9A33B] transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              onClick={() => setIsMuted((m) => !m)}
              className="text-white/80 hover:text-[#E9A33B] transition-colors cursor-pointer"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <span className="text-xs text-white/60 font-mono">
              0{activeSlide + 1} / 0{featuredArtworks.length}
            </span>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {featuredArtworks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeSlide ? 'w-6 bg-[#E9A33B]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
