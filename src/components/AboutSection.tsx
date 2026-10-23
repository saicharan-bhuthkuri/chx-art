import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import studioImg from '../assets/images/about-studio.jpg';
import collagePortraitImg from '../assets/images/about-charan-portrait.jpg';
import { GoldStarburst } from './Decorative/GoldStarburst';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutSectionProps {
  onMoreAboutMeClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onMoreAboutMeClick
}) => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="about" className="relative bg-[#F7F3EA] py-10 sm:py-14 lg:py-20 overflow-hidden border-y border-[#24211D]/8">
      {/* Ambient Warm Golden Aura */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(201,120,36,0.07),transparent_70%)]" />

      <div ref={sectionRef} className="max-w-360 mx-auto px-6 md:px-12 lg:px-16 relative z-10 reveal-group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* Left Column: Creative Studio Sanctuary */}
          <div className="lg:col-span-4 relative group reveal-child reveal-slide-left">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(23,22,19,0.12)] border border-[#24211D]/15 bg-[#171613] artwork-card-transition group-hover:shadow-[0_22px_50px_rgba(23,22,19,0.2)]">
              <img
                src={studioImg}
                alt="Charan's Creative Studio & Workspace — CHX.ARTS"
                className="w-full h-70 sm:h-85 lg:h-100 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle inner dark gradient for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Bottom Atelier Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#FFFDF7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E9A33B] animate-pulse" />
                  Creative Atelier
                </span>
                <span className="text-[10px] font-editorial italic text-white/70">
                  Hyderabad, IN
                </span>
              </div>
            </div>

            {/* Floating Gold Sparkle Accent */}
            <div className="absolute -top-3 -right-3 z-20 pointer-events-none">
              <GoldStarburst size={18} className="animate-sparkle drop-shadow-[0_0_8px_rgba(233,163,59,0.7)]" />
            </div>
            <div className="absolute -bottom-2 -left-2 z-20 pointer-events-none opacity-80">
              <GoldStarburst size={12} className="animate-sparkle drop-shadow-[0_0_6px_rgba(233,163,59,0.5)]" />
            </div>
          </div>

          {/* Center Column: Editorial Narrative & Signature */}
          <div className="lg:col-span-4 flex flex-col justify-center px-0 lg:px-2 reveal-child reveal-delay-2">

            {/* Eyebrow with gold framing lines */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1.5px] bg-[#C97824]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.35em] uppercase text-[#C97824]">
                {aboutData.eyebrow}
              </span>
              <div className="w-12 h-px bg-linear-to-r from-[#C97824] to-transparent" />
            </div>

            {/* Editorial Headline with Italic Display Type */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] text-[#080807] leading-[1.05] tracking-tight">
              <span className="font-editorial italic font-normal block text-[#24211D]/90">
                A Creative Mind
              </span>
              <span className="font-bold block mt-1">
                Behind <span className="text-[#C97824] relative inline-block">CHX.ARTS</span>
              </span>
            </h2>

            {/* Body Copy */}
            <p className="mt-4 text-xs sm:text-[13.5px] text-[#55534E] leading-relaxed font-sans">
              {aboutData.body}
            </p>

            {/* Creative Disciplines Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {['Visual Design', 'Fine Art', 'Sketches', 'Anime', 'Devotional'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/70 text-[#171613]/80 border border-[#24211D]/10 shadow-xs hover:border-[#C97824]/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Signature & Interactive Button Row */}
            <div className="mt-6 flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
              {/* Handwritten Gold Signature */}
              <div className="select-none transition-transform duration-300 hover:scale-105">
                <span className="font-script text-5xl sm:text-6xl text-[#C97824] leading-none block drop-shadow-[0_2px_8px_rgba(201,120,36,0.25)]">
                  {aboutData.signature}
                </span>
              </div>

              {/* Capsule Button */}
              <button
                onClick={onMoreAboutMeClick}
                className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#080807]/30 hover:border-[#C97824] bg-white/80 hover:bg-[#080807] text-[#080807] hover:text-white shadow-xs hover:shadow-lg transition-all duration-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase cursor-pointer backdrop-blur-xs active:scale-95"
              >
                <span>{aboutData.ctaText}</span>
                <ArrowRight size={13} className="text-[#C97824] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Artist Mixed-Media Collage & Handwritten Inspirations */}
          <div className="lg:col-span-4 relative flex items-center justify-between sm:justify-start lg:justify-end gap-5 xl:gap-7 pt-4 lg:pt-0 reveal-child reveal-slide-right reveal-delay-3">

            {/* Mixed-Media Art Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(23,22,19,0.14)] border border-[#C97824]/30 max-w-70 sm:max-w-[320px] lg:max-w-82.5 w-full bg-[#FFFDF7] group artwork-card-transition group-hover:shadow-[0_26px_58px_rgba(23,22,19,0.24)]">
              <img
                src={collagePortraitImg}
                alt="Portrait of Charan — Mixed-Media Fine Art Collage"
                className="w-full h-80 sm:h-90 lg:h-100 object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                loading="lazy"
              />

              {/* Top Right Gold Starburst Sparkle */}
              <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
                <GoldStarburst size={18} className="animate-sparkle drop-shadow-[0_0_8px_rgba(233,163,59,0.8)]" />
              </div>

              {/* Floating Artist Label at Bottom */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white pointer-events-none">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#E9A33B]" />
                  Charan
                </span>
                <span className="text-[9px] font-sans font-medium uppercase tracking-widest text-[#E9A33B]">
                  CHX.ARTS
                </span>
              </div>
            </div>

            {/* Far-Right Vertical Handwritten Inspirations */}
            <div className="hidden sm:flex flex-col items-center gap-1.5 py-2 select-none relative pl-1">
              {/* Top Star */}
              <span className="text-[#C97824] text-xs pb-1 select-none">✦</span>

              {/* Vertical Words */}
              {aboutData.verticalInspirations.map((word, idx) => (
                <span
                  key={idx}
                  className="font-script text-xl sm:text-2xl text-[#171613]/85 hover:text-[#C97824] transition-all duration-300 leading-tight hover:scale-110 cursor-default"
                  style={{
                    transform: `rotate(${idx % 2 === 0 ? '-3deg' : '3deg'}) translateX(${idx % 2 === 0 ? '-2px' : '2px'})`
                  }}
                >
                  {word}
                </span>
              ))}

              {/* Bottom Star */}
              <span className="text-[#C97824] text-xs pt-1 select-none">✦</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
