import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedWorksSection } from './components/FeaturedWorksSection';
import { AboutSection } from './components/AboutSection';
import { CreativeProcessSection } from './components/CreativeProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ArtworkLightboxModal } from './components/Modals/ArtworkLightboxModal';
import { WatchReelModal } from './components/Modals/WatchReelModal';
import { AboutMeModal } from './components/Modals/AboutMeModal';
import { MobileNavDrawer } from './components/Modals/MobileNavDrawer';
import type { Artwork } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isWatchReelOpen, setIsWatchReelOpen] = useState<boolean>(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'work', 'about', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#080807] flex flex-col relative selection:bg-[#E9A33B]/20">
      
      {/* Global Subtle Paper Grain Effect */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-[0.035] bg-repeat bg-[radial-gradient(#080807_1px,transparent_1px)] bg-size-[16px_16px]" />

      {/* Main Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreClick={() => handleNavigate('work')}
          onWatchReelClick={() => setIsWatchReelOpen(true)}
        />

        <FeaturedWorksSection
          onSelectArtwork={(art) => setSelectedArtwork(art)}
        />

        <AboutSection
          onMoreAboutMeClick={() => setIsAboutMeOpen(true)}
        />

        <CreativeProcessSection />

        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onScrollToTop={handleScrollToTop}
      />

      {/* Modals & Drawers */}
      <ArtworkLightboxModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
      />

      <WatchReelModal
        isOpen={isWatchReelOpen}
        onClose={() => setIsWatchReelOpen(false)}
      />

      <AboutMeModal
        isOpen={isAboutMeOpen}
        onClose={() => setIsAboutMeOpen(false)}
        onContactClick={() => handleNavigate('contact')}
      />

      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

    </div>
  );
};

export default App;
