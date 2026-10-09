import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import lexusHeroBg from '../assets/lexus/lexusHeroImg.webp';

export default function LexusHeroSection({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setEmail('');
    }, 3500);
  };

  const handleCaseStudiesClick = () => {
    if (onNavigate) {
      onNavigate('our-work');
    }
  };

  return (
    <section className="relative w-full bg-[#080808] text-white overflow-hidden">
      {/* Background car image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={lexusHeroBg}
          alt="Lexus Luxury Automotive"
          className="w-full h-full object-cover object-center lg:object-[center_35%]"
        />
        {/* Subtle dark gradient overlay to ensure perfect contrast across all devices */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 lg:pb-20">
        
        {/* Breadcrumb: > Case Studies > Lexus */}
        <nav className="flex items-center gap-2 text-[13px] sm:text-[16px] text-white/90 font-grift-medium mb-10 sm:mb-14 lg:mb-16">
          <ChevronRight className="w-3.5 h-3.5 text-white/80 shrink-0 stroke-[2.5]" />
          <button
            type="button"
            onClick={handleCaseStudiesClick}
            className="text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Case Studies
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-white/80 shrink-0 stroke-[2.5]" />
          <span className="text-white font-grift-medium">Lexus</span>
        </nav>

        {/* Hero grid / layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left column: Title & tags */}
          <div className="w-full lg:max-w-[720px] xl:max-w-[820px]">
            {/* Eyebrow */}
            <p className="font-grift-semibold text-[10px] sm:text-[12px] lg:text-[13px] tracking-[0.16em] sm:tracking-[0.24em] text-[#b0b0b0] uppercase mb-4 sm:mb-5">
              LEXUS CASE STUDY - LUXURY AUTOMOTIVE
            </p>

            {/* Title */}
            <h1 className="font-grift-semibold text-[34px] sm:text-[50px] md:text-[62px] lg:text-[70px] xl:text-[80px] leading-[1.04] tracking-[-0.03em] text-white mb-6 sm:mb-7">
              Digital Experience<br />Redefined
            </h1>

            {/* Green horizontal accent bar */}
            <div className="w-[48px] h-[3.5px] bg-[#3fc000] rounded-[1px] mb-8 sm:mb-9" />

            {/* Tags / Pills in 2 rows matching reference */}
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/70 text-white font-grift-medium text-[13px] sm:text-[14px] lg:text-[20px] bg-black/25 backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-colors select-none">
                  UI/UX Design
                </span>
                <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/70 text-white font-grift-medium text-[13px] sm:text-[14px] lg:text-[20px] bg-black/25 backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-colors select-none">
                  Interactive Experience
                </span>
                <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/70 text-white font-grift-medium text-[13px] sm:text-[14px] lg:text-[20px] bg-black/25 backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-colors select-none">
                  Vehicle Customization
                </span>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/70 text-white font-grift-medium text-[13px] sm:text-[14px] lg:text-[20px] bg-black/25 backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-colors select-none">
                  Digital Experience
                </span>
                <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/70 text-white font-grift-medium text-[13px] sm:text-[14px] lg:text-[20px] bg-black/25 backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-colors select-none">
                  Mutimedia Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right column: Floating PDF Subscription Card */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end pt-2 lg:pt-0 lg:pr-4 xl:pr-10">
            <div className="w-full sm:w-[380px] lg:w-[390px] xl:w-[410px] bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 shadow-[0_22px_60px_rgba(0,0,0,0.45)] text-[#1a1a1a]">
              <p className="font-grift-medium text-[14px] sm:text-[16px] text-[#222222] mb-3.5 sm:mb-4 leading-snug">
                Get this case study in PDF to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="flex items-center gap-2 sm:gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full min-w-0 flex-1 h-[42px] sm:h-[46px] px-3.5 sm:px-4 rounded-[10px] border border-[#cfd4dc] text-[13px] sm:text-[15px] text-[#111] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#3fc000] focus:ring-1 focus:ring-[#3fc000] transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSent}
                  className="h-[42px] sm:h-[46px] px-5 sm:px-7 rounded-[10px] bg-[#3fc000] hover:bg-[#36a800] active:scale-95 text-white font-grift-semibold text-[13px] sm:text-[15px] transition-all cursor-pointer shrink-0 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  {isSent ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Sent</span>
                    </>
                  ) : (
                    'Send'
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
