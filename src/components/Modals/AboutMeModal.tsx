import React, { useEffect } from 'react';
import { X, CheckCircle, Palette, Monitor, Heart } from 'lucide-react';
import { aboutData } from '../../data/portfolioData';
import collagePortraitImg from '../../assets/images/about-charan-collage.jpg';

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutMeModal: React.FC<AboutMeModalProps> = ({
  isOpen,
  onClose,
  onContactClick
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#080807]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-[#F7F3EA] rounded-2xl overflow-hidden shadow-2xl border border-[#C97824]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24211D]/10 bg-[#FFFDF7]">
          <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#C97824] font-semibold">
            Artist Profile & Philosophy
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#080807]/10 hover:bg-[#080807] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Header Bio */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={collagePortraitImg}
              alt="Charan"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#C97824] shadow-lg ring-4 ring-[#C97824]/20"
            />
            <div>
              <h2 className="font-editorial text-3xl font-bold text-[#080807]">
                Charan
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#C97824] font-semibold mt-1">
                Visual Artist & Graphic Designer • CHX.ARTS
              </p>
              <p className="text-xs text-[#777570] mt-2 font-sans leading-relaxed">
                {aboutData.body}
              </p>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="bg-[#FFFDF7] p-6 rounded-xl border border-[#24211D]/10 shadow-xs">
            <h3 className="font-editorial text-lg font-semibold text-[#080807] mb-2 flex items-center gap-2">
              <Heart size={16} className="text-[#C97824]" />
              Artistic Statement
            </h3>
            <p className="text-xs text-[#777570] leading-relaxed font-sans italic">
              "{aboutData.expandedBio.statement}"
            </p>
          </div>

          {/* Mediums & Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#24211D]/10">
              <h4 className="font-editorial text-sm font-semibold text-[#080807] mb-3 flex items-center gap-2">
                <Palette size={15} className="text-[#C97824]" />
                Creative Disciplines
              </h4>
              <ul className="space-y-2 text-xs text-[#777570]">
                {aboutData.expandedBio.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-sans">
                    <CheckCircle size={12} className="text-[#C97824]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#24211D]/10">
              <h4 className="font-editorial text-sm font-semibold text-[#080807] mb-3 flex items-center gap-2">
                <Monitor size={15} className="text-[#C97824]" />
                Tools & Mediums
              </h4>
              <ul className="space-y-2 text-xs text-[#777570]">
                {aboutData.expandedBio.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-sans">
                    <CheckCircle size={12} className="text-[#C97824]" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Footer inside Modal */}
          <div className="pt-4 flex items-center justify-between border-t border-[#24211D]/10">
            <span className="font-script text-3xl text-[#C97824]">
              Charan
            </span>

            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="bg-[#080807] hover:bg-[#171613] text-white px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
