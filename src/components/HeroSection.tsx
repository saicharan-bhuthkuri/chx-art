import React from 'react';
import { ArrowRight, Play, ArrowDown } from 'lucide-react';
import { GoldStarburst } from './Decorative/GoldStarburst';
import { heroData } from '../data/portfolioData';
import heroSurrealScene from '../assets/images/hero-surreal-scene.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
  onWatchReelClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onWatchReelClick
}) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#F7F3EA]"
    >
      {/* 
        Full-Width Master Architectural Artwork (1024x576 aspect ratio)
      */}
      <div className="relative w-full aspect-[16/9.2] sm:aspect-video min-h-130 sm:min-h-145 lg:min-h-160 xl:min-h-180">
        {/* Background Raw Master Painting — Calibrated to 56% on mobile so character sits comfortably in right-center and text stays in clean left sky */}
        <img
          src={heroSurrealScene}
          alt="CHX.ARTS — Surreal Architectural Exhibition"
          className="w-full h-full object-cover object-[56%_center] sm:object-center select-none pointer-events-none"
        />

        {/* Mobile Ambient Soft Ivory Scrim (Ensures crystal-clear typography on mobile without dimming the character or moon) */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F7F3EA]/95 via-[#F7F3EA]/65 via-45% to-transparent sm:hidden pointer-events-none z-10" />

        {/* Floating subtle starburst accents */}
        <div className="absolute top-[8%] right-[26%] pointer-events-none z-10">
          <GoldStarburst size={16} className="animate-sparkle" />
        </div>
        <div className="absolute bottom-[24%] right-[38%] pointer-events-none z-10">
          <GoldStarburst size={13} className="animate-sparkle" />
        </div>
        <div className="absolute top-[32%] left-[8%] pointer-events-none z-10">
          <GoldStarburst size={15} className="animate-sparkle" />
        </div>

        {/* 
          Right Arch Subtle Handwritten Notes (Create, Design, Illustrate, Express)
        */}
        <div className="hidden lg:flex absolute top-[11%] right-[17.5%] xl:right-[18%] z-10 flex-col items-center pointer-events-none select-none text-white/90 font-script text-xl xl:text-2xl leading-tight drop-shadow-sm transform -rotate-12">
          {heroData.rightHandwrittenNotes.map((note, idx) => (
            <span
              key={note}
              style={{
                transform: `translateX(${idx * 3}px) rotate(${idx % 2 === 0 ? '-3deg' : '3deg'})`
              }}
            >
              {note}
            </span>
          ))}
        </div>

        {/* 
          Far Right Vertical Discipline List (IDEAS, SKETCHES, etc.)
        */}
        <div className="hidden lg:flex absolute top-[18%] right-[2.8%] xl:right-[3.2%] z-10 flex-col items-end gap-1.5 pointer-events-none select-none">
          {heroData.rightDisciplines.map((item) => (
            <span
              key={item}
              className="font-serif text-[9px] xl:text-[10px] tracking-[0.28em] uppercase text-white/75 drop-shadow-xs font-normal"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 
          Left Content Layer — Sits in the clean warm ivory sky zone
        */}
        <div className="absolute inset-0 z-20 flex flex-col pt-18 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 pl-4 sm:pl-[6%] pr-3 sm:pr-6 pointer-events-none">
          
          <div className="flex items-start gap-2.5 sm:gap-5 pointer-events-auto">
            {/* Small Introductory Tag (VISUAL / STORIES / BEYOND / WORDS) */}
            <div className="pt-1 sm:pt-2.5">
              <span className="font-serif text-[8px] sm:text-[10px] tracking-[0.28em] text-[#24211D]/85 uppercase block leading-normal max-w-9 sm:max-w-12 select-none">
                {heroData.eyebrow.map((w, i) => (
                  <span key={i} className="block">{w}</span>
                ))}
              </span>
            </div>

            {/* Headline, Script, Paragraph, and CTAs */}
            <div className="flex-1 max-w-67.5 sm:max-w-md lg:max-w-lg">
              {/* Main Headline */}
              <div className="relative">
                <h1 className="font-editorial text-[28px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#080807] leading-[0.92] sm:leading-[0.88] tracking-tight">
                  {heroData.headline.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                {/* Flowing Script Overlay "Without Words." */}
                <div className="mt-[-0.32em] sm:mt-[-0.58em] ml-0.5 sm:ml-2 select-none">
                  <span className="font-script text-[32px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] text-[#C97824] drop-shadow-xs font-normal tracking-wide block">
                    {heroData.scriptPhrase}
                  </span>
                </div>
              </div>

              {/* Supporting Paragraph — Width bounded on mobile to never cross into the character */}
              <p className="mt-2 sm:mt-2.5 text-[11px] sm:text-[13px] text-[#24211D] font-medium leading-relaxed max-w-53.75 sm:max-w-sm font-sans drop-shadow-xs">
                {heroData.paragraph}
              </p>

              {/* Action Buttons — Side-by-side on mobile to preserve vertical space */}
              <div className="mt-3 sm:mt-5 flex flex-row items-center gap-2 sm:gap-4 flex-wrap">
                {/* Primary Explore Pill Button */}
                <button
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#080807] hover:bg-[#171613] text-white px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{heroData.primaryCta}</span>
                  <span className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#E9A33B]/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight size={9} className="text-[#E9A33B]" />
                  </span>
                </button>

                {/* Secondary Watch Reel Button with Frosted Contrast on Mobile */}
                <button
                  onClick={onWatchReelClick}
                  className="group inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-medium text-[#080807] hover:text-[#C97824] transition-colors py-1.5 px-2.5 sm:px-0 rounded-full bg-white/75 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none border border-black/10 sm:border-none shadow-2xs sm:shadow-none cursor-pointer"
                >
                  <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-[#080807]/40 group-hover:border-[#C97824] flex items-center justify-center transition-colors bg-white/80 sm:bg-white/40 shadow-xs">
                    <Play size={8} className="fill-[#080807] text-[#080807] ml-0.5 group-hover:fill-[#C97824] group-hover:text-[#C97824] transition-colors" />
                  </span>
                  <span className="relative pb-0.5 border-b border-[#080807]/50 group-hover:border-[#C97824] transition-colors">
                    {heroData.secondaryCta}
                  </span>
                </button>
              </div>

              {/* SCROLL Indicator — Directly below Explore My Work */}
              <div className="mt-2.5 sm:mt-6 pt-0.5 sm:pt-1">
                <button
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-2 sm:gap-2.5 text-[9px] sm:text-[10px] font-sans tracking-[0.25em] uppercase text-[#24211D] font-semibold hover:text-[#C97824] transition-colors cursor-pointer select-none px-2 sm:px-0 py-0.5 sm:py-0 rounded-full bg-white/60 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none border border-black/5 sm:border-none"
                  aria-label="Scroll to featured works"
                >
                  <span>SCROLL</span>
                  <div className="w-6 sm:w-10 h-px bg-[#C97824]/80 group-hover:w-14 transition-all duration-300" />
                  <ArrowDown size={9} className="text-[#C97824] group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
