import React from 'react';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CreativeProcessSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const delayClasses = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

  return (
    <section id="process" className="relative bg-[#F7F3EA] py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div ref={sectionRef} className="max-w-360 mx-auto px-6 md:px-12 reveal-group">
        
        {/* Section Heading with Dual Flanking Gold Rules */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 reveal-child">
          <div className="flex-1 max-w-45 sm:max-w-70 h-px bg-linear-to-r from-transparent to-[#C97824]" />
          <h2 className="font-editorial text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#080807] font-semibold whitespace-nowrap text-center">
            MY CREATIVE PROCESS
          </h2>
          <div className="flex-1 max-w-45 sm:max-w-70 h-px bg-linear-to-l from-transparent to-[#C97824]" />
        </div>

        {/* 4-Stage Horizontal Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className={`relative flex flex-col group reveal-child ${delayClasses[idx] || 'reveal-delay-1'}`}
            >
              
              {/* Thumbnail Container */}
              <div className="w-full aspect-[2.1/1] rounded-md overflow-hidden bg-[#171613] shadow-xs border border-[#24211D]/10 relative artwork-card-transition group-hover:shadow-md group-hover:border-[#C97824]/40">
                <img
                  src={step.image}
                  alt={`Process ${step.step} - ${step.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />
              </div>

              {/* Connecting Arrow between steps on Desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-[28%] -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowRight size={15} className="text-[#C97824] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </div>
              )}

              {/* Step Meta: Large Gold Numeral & Title */}
              <div className="mt-3.5 flex items-baseline gap-2.5">
                <span className="font-editorial text-2xl sm:text-3xl font-normal text-[#C97824] leading-none transition-transform duration-300 group-hover:scale-110">
                  {step.step}
                </span>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#080807] font-sans group-hover:text-[#C97824] transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-1 text-[11px] sm:text-xs text-[#777570] leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
