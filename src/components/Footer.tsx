import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ChxLogo } from './Decorative/ChxLogo';
import { navLinks } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onScrollToTop
}) => {
  return (
    <footer className="relative bg-[#F7F3EA] border-t border-[#24211D]/10 pt-10 pb-12 overflow-hidden">
      
      {/* Decorative Upper Subtle Curve */}
      <div className="max-w-360 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Scaled Down CHX ARTS Wordmark */}
        <div className="flex items-center">
          <ChxLogo size="sm" onClick={onScrollToTop} />
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sectionKey);
                }}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#171613] hover:text-[#C97824] transition-colors"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Copyright & Back-to-Top Button */}
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-[11px] text-[#777570] tracking-wider uppercase font-sans">
              © 2024 CHX.ARTS
            </p>
            <p className="text-[10px] text-[#777570]/80 tracking-wide font-sans">
              All rights reserved.
            </p>
          </div>

          {/* Back to Top Control */}
          <button
            onClick={onScrollToTop}
            className="w-10 h-10 rounded-full border border-[#C97824]/60 hover:border-[#C97824] hover:bg-[#C97824]/10 flex items-center justify-center transition-all duration-300 group cursor-pointer"
            aria-label="Back to top of page"
          >
            <ArrowUp
              size={16}
              className="text-[#C97824] group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

      </div>
    </footer>
  );
};
