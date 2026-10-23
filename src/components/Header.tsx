import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { ChxLogo } from './Decorative/ChxLogo';
import { InstagramIcon } from './Decorative/InstagramIcon';
import { navLinks, contactData } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenMobileMenu
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EA]/95 backdrop-blur-md shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo & Title-Case Navigation in Ivory Sky Area */}
        <div className="flex items-center gap-6 lg:gap-10">
          <ChxLogo
            size="md"
            onClick={() => onNavigate('home')}
          />

          {/* Desktop Navigation Links (Title Case matching reference) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 pl-1">
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
                  }}
                  className={`relative text-xs sm:text-[13px] font-sans font-medium transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#C97824] font-semibold'
                      : 'text-[#171613] hover:text-[#C97824]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-[#C97824] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: Instagram handle & Menu Toggle — White on Dark Arch, Dark on scroll */}
        <div className="flex items-center gap-4 sm:gap-5 pr-1 sm:pr-4">
          <a
            href={contactData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-xs font-medium transition-colors group ${
              isScrolled
                ? 'text-[#171613] hover:text-[#C97824]'
                : 'text-white hover:text-[#E9A33B]'
            }`}
            aria-label="Instagram Profile"
          >
            <span
              className={`p-1.5 rounded-full border transition-colors ${
                isScrolled
                  ? 'border-[#171613]/25 group-hover:border-[#C97824]'
                  : 'border-white/50 group-hover:border-[#E9A33B] bg-black/20'
              }`}
            >
              <InstagramIcon
                size={14}
                className={
                  isScrolled
                    ? 'text-[#171613] group-hover:text-[#C97824]'
                    : 'text-white group-hover:text-[#E9A33B]'
                }
              />
            </span>
            <span className="hidden sm:inline tracking-wider font-sans font-normal drop-shadow-xs">
              {contactData.instagramHandle}
            </span>
          </a>

          {/* Hamburger Menu button */}
          <button
            onClick={onOpenMobileMenu}
            className={`p-2 transition-colors focus:outline-hidden cursor-pointer ${
              isScrolled
                ? 'text-[#171613] hover:text-[#C97824]'
                : 'text-white hover:text-[#E9A33B]'
            }`}
            aria-label="Toggle navigation menu"
          >
            <Menu size={22} strokeWidth={1.8} className="drop-shadow-xs" />
          </button>
        </div>

      </div>
    </header>
  );
};
