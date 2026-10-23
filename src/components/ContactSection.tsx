import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Decorative/InstagramIcon';
import { contactData } from '../data/portfolioData';
import contactBannerImg from '../assets/images/contact-gallery-banner.jpg';
import { GoldStarburst } from './Decorative/GoldStarburst';
import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ContactSection: React.FC = () => {
  const { ref: parallaxRef, offsetY } = useParallax(0.1);
  const desktopRevealRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const mobileRevealRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="contact" className="relative w-full bg-[#F7F3EA] pt-4 pb-12 overflow-hidden">
      
      {/* 
        ========================================================================
        DESKTOP PANORAMA VIEW (lg:block)
        Pixel-perfect zone alignment with the 2172x724 architectural master banner:
        - Zone 1 (x: 0% to ~22%): Dark stone arch & canopy -> "LET'S CREATE..."
        - Zone 2 (x: ~61.5% to ~84%): Sunlit ivory opening -> "GET IN TOUCH" & buttons
        - Zone 3 (x: ~87% to ~98%): Dark cliff face -> White cursive quote
        ========================================================================
      */}
      <div
        ref={(el) => {
          parallaxRef.current = el;
          if (desktopRevealRef.current !== el) {
            (desktopRevealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }
        }}
        className="hidden lg:block relative w-full aspect-3/1 min-h-115 xl:min-h-125 overflow-hidden select-none reveal-group"
      >
        {/* Background Image Banner with Subtle Cinematic Parallax */}
        <img
          src={contactBannerImg}
          alt="CHX Arts Exhibition & Gallery Portal"
          style={{ transform: `translate3d(0, ${offsetY * 0.28}px, 0) scale(1.08)` }}
          className="w-full h-full object-cover object-center select-none pointer-events-none transition-transform duration-75 ease-out will-change-transform"
        />

        {/* --- ZONE 1: Left Dark Arch Text --- */}
        <div className="absolute left-[3.8%] xl:left-[4.8%] top-[25%] xl:top-[28%] max-w-45 xl:max-w-55 pointer-events-none select-none z-20 reveal-child reveal-slide-left">
          <p className="font-editorial text-sm xl:text-base tracking-[0.28em] text-white/95 uppercase leading-[1.38] font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            LET'S CREATE<br />
            SOMETHING<br />
            AMAZING<br />
            TOGETHER.
          </p>
        </div>

        {/* Decorative Sparkle in dark canopy */}
        <div className="absolute top-[18%] left-[14%] pointer-events-none z-20">
          <GoldStarburst size={16} className="animate-sparkle drop-shadow-[0_0_8px_rgba(233,163,59,0.7)]" />
        </div>

        {/* --- ZONE 2: Center Sunlit Ivory Portal --- */}
        <div className="absolute left-[59.5%] xl:left-[60.5%] max-w-80 xl:max-w-85 top-1/2 -translate-y-1/2 z-20 flex flex-col justify-center reveal-child reveal-delay-2">
          {/* Section Heading */}
          <h2 className="font-editorial text-2xl xl:text-3xl font-bold text-[#080807] leading-[1.05] tracking-tight">
            {contactData.heading}
          </h2>

          {/* Subheading */}
          <p className="mt-1.5 xl:mt-2 text-[10.5px] xl:text-[11.5px] text-[#55534E] leading-relaxed font-sans max-w-[320px]">
            {contactData.subheading}
          </p>

          {/* Contact Action Pills — Stacked for spacious, premium layout */}
          <div className="mt-3.5 xl:mt-4 flex flex-col gap-2 xl:gap-2.5 w-full">
            {/* Email Action */}
            <a
              href={`mailto:${contactData.email}`}
              className="group flex items-center justify-between px-3 py-2 xl:py-2.5 rounded-xl bg-[#080807] hover:bg-[#171613] text-white transition-all duration-300 shadow-md hover:shadow-lg border border-[#24211D]"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-[#24211D] border border-[#C97824]/40 flex items-center justify-center shrink-0">
                  <Mail size={13} className="text-[#E9A33B]" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-tight font-mono text-white/95 truncate">
                    {contactData.email}
                  </span>
                  <span className="text-[8.5px] text-[#E9A33B] tracking-wider uppercase block">
                    Send a mail
                  </span>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#E9A33B] flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowRight size={10} className="text-white group-hover:text-[#080807] transition-colors" />
              </div>
            </a>

            {/* Instagram Action */}
            <a
              href={contactData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-3 py-2 xl:py-2.5 rounded-xl bg-[#080807] hover:bg-[#171613] text-white transition-all duration-300 shadow-md hover:shadow-lg border border-[#24211D]"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-[#24211D] border border-[#C97824]/40 flex items-center justify-center shrink-0">
                  <InstagramIcon size={13} className="text-[#E9A33B]" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-wider font-sans text-white/95 truncate">
                    {contactData.instagramHandle}
                  </span>
                  <span className="text-[8.5px] text-[#E9A33B] tracking-wider uppercase block">
                    Follow
                  </span>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#E9A33B] flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowRight size={10} className="text-white group-hover:text-[#080807] transition-colors" />
              </div>
            </a>
          </div>
        </div>

        {/* --- ZONE 3: Far-Right Dark Cliff Quote (Placed high up where cliff is wide and solid dark) --- */}
        <div className="absolute right-[2.5%] xl:right-[3.5%] top-[18%] xl:top-[20%] flex flex-col items-end text-right select-none pointer-events-none z-20 reveal-child reveal-slide-right reveal-delay-3">
          <p className="font-script text-base sm:text-lg xl:text-xl text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] leading-tight -rotate-2">
            Good Art<br />
            Takes Feeling<br />
            Into Something<br />
            Real.
          </p>
          <div className="w-8 h-px bg-[#E9A33B] mt-1.5 mr-0.5 drop-shadow-sm" />
        </div>
      </div>

      {/* 
        ========================================================================
        MOBILE & TABLET VIEW (< lg)
        Clean, beautifully stacked layout with full touch ergonomics:
        ========================================================================
      */}
      <div ref={mobileRevealRef} className="lg:hidden px-4 sm:px-6 max-w-xl mx-auto space-y-6 reveal-group">
        {/* Visual Artwork Banner Card */}
        <div className="relative aspect-16/7 w-full rounded-2xl overflow-hidden shadow-lg border border-[#24211D]/15 reveal-child">
          <img
            src={contactBannerImg}
            alt="CHX Arts Exhibition & Gallery Portal"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#E9A33B] block mb-1">
              CHX.ARTS • EXHIBITION
            </span>
            <p className="font-editorial text-base sm:text-lg tracking-[0.2em] text-white font-medium uppercase leading-tight">
              LET'S CREATE SOMETHING AMAZING TOGETHER.
            </p>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#24211D]/10 shadow-md reveal-child reveal-delay-2 artwork-card-transition">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#080807] leading-tight">
            {contactData.heading}
          </h2>
          <p className="mt-2 text-xs text-[#55534E] leading-relaxed font-sans">
            {contactData.subheading}
          </p>

          {/* Action Pills */}
          <div className="mt-5 space-y-3">
            {/* Email */}
            <a
              href={`mailto:${contactData.email}`}
              className="group flex items-center justify-between p-3 rounded-xl bg-[#080807] text-white shadow-sm border border-[#24211D]"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#24211D] border border-[#C97824]/40 flex items-center justify-center">
                  <Mail size={16} className="text-[#E9A33B]" />
                </span>
                <div>
                  <span className="block text-xs font-semibold font-mono text-white">
                    {contactData.email}
                  </span>
                  <span className="text-[10px] text-[#E9A33B] uppercase tracking-wider">
                    Send a mail
                  </span>
                </div>
              </div>
              <ArrowRight size={14} className="text-white/60 group-hover:text-white transition-colors" />
            </a>

            {/* Instagram */}
            <a
              href={contactData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl bg-[#080807] text-white shadow-sm border border-[#24211D]"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#24211D] border border-[#C97824]/40 flex items-center justify-center">
                  <InstagramIcon size={16} className="text-[#E9A33B]" />
                </span>
                <div>
                  <span className="block text-xs font-semibold font-sans text-white">
                    {contactData.instagramHandle}
                  </span>
                  <span className="text-[10px] text-[#E9A33B] uppercase tracking-wider">
                    Follow on Instagram
                  </span>
                </div>
              </div>
              <ArrowRight size={14} className="text-white/60 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Calligraphic Quote Footer on Mobile */}
          <div className="mt-6 pt-4 border-t border-[#24211D]/10 text-center">
            <p className="font-script text-xl text-[#080807]/90 leading-tight">
              Good Art Takes Feeling Into Something Real.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
