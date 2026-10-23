import React, { useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { InstagramIcon } from '../Decorative/InstagramIcon';
import { navLinks, contactData } from '../../data/portfolioData';
import { ChxLogo } from '../Decorative/ChxLogo';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate
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
      className="fixed inset-0 z-50 flex justify-end bg-[#080807]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs sm:max-w-sm h-full bg-[#F7F3EA] shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-l border-[#C97824]/20 animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#24211D]/10">
          <ChxLogo size="sm" onClick={() => { onNavigate('home'); onClose(); }} />
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#080807]/10 hover:bg-[#080807] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-6 py-8">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sectionKey);
                  onClose();
                }}
                className={`font-editorial text-2xl tracking-wider transition-colors flex items-center justify-between ${
                  isActive ? 'text-[#C97824] font-semibold' : 'text-[#080807] hover:text-[#C97824]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-[#C97824]" />}
              </a>
            );
          })}
        </nav>

        {/* Bottom Socials & Quick Contact */}
        <div className="pt-6 border-t border-[#24211D]/10 space-y-4">
          <a
            href={contactData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xs font-medium text-[#171613] hover:text-[#C97824] transition-colors"
          >
            <span className="p-2 rounded-full bg-[#24211D]/10">
              <InstagramIcon size={14} className="text-[#C97824]" />
            </span>
            <span>{contactData.instagramHandle}</span>
          </a>

          <a
            href={`mailto:${contactData.email}`}
            className="flex items-center gap-3 text-xs font-medium text-[#171613] hover:text-[#C97824] transition-colors"
          >
            <span className="p-2 rounded-full bg-[#24211D]/10">
              <Mail size={14} className="text-[#C97824]" />
            </span>
            <span>{contactData.email}</span>
          </a>

          <p className="text-[10px] text-[#777570] font-sans pt-2">
            © 2024 CHX.ARTS • All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
