import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AppNav from '../components/nav';
import AccelerateBusinessSection from '../components/AccelerateBusinessSection';
import Footer from '../components/footer';

/**
 * Generic Case Study page template.
 * Props:
 *   caseStudy: { name, logo, logoClass, heroImg, category, tagline, overview, challenge, solution, results[] }
 *   onNavigate, activeDropdown, setActiveDropdown
 */
export default function CaseStudyPage({ caseStudy, onNavigate, activeDropdown, setActiveDropdown }) {
  const cs = caseStudy;

  return (
    <div className="bg-white min-h-screen text-[#141414] font-outfit antialiased overflow-x-hidden">
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
      />

      {/* ── Hero banner ── */}
      {cs.renderHero ? (
        cs.renderHero({ onNavigate, caseStudy: cs })
      ) : (
        <section className="w-full bg-[#f4f4f4]">
        <div className="max-w-[1640px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">

          {/* Back link */}
          <button
            onClick={() => onNavigate('our-work')}
            className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-grift-medium text-[#555] hover:text-[#15B83E] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Our Work
          </button>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

            {/* LEFT */}
            <div className="w-full lg:w-[44%] shrink-0">
              {/* Category tag */}
              <span className="inline-block font-grift-semibold text-[11px] tracking-[0.24em] uppercase text-[#15B83E] mb-5">
                {cs.category}
              </span>

              {/* Logo */}
              <div className="mb-6">
                <img src={cs.logo} alt={cs.name} className={`object-contain object-left ${cs.logoClass}`} />
              </div>

              {/* Tagline */}
              <h1 className="font-grift-semibold text-[32px] sm:text-[40px] lg:text-[50px] xl:text-[58px] leading-[1.08] tracking-[-0.03em] text-[#111] mb-5">
                {cs.tagline}
              </h1>

              <p className="font-grift-medium text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7] text-[#555] max-w-[480px]">
                {cs.overview}
              </p>
            </div>

            {/* RIGHT — hero image */}
            {cs.heroImg && (
              <div className="w-full lg:flex-1 overflow-hidden rounded-[18px] sm:rounded-[22px]">
                <img
                  src={cs.heroImg}
                  alt={cs.name}
                  className="w-full h-[220px] sm:h-[320px] lg:h-[420px] xl:h-[480px] object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {/* ── After-hero slot (e.g. case study specific sections) ── */}
      {cs.renderAfterHero && cs.renderAfterHero()}

 

      <AccelerateBusinessSection />
      <Footer />
    </div>
  );
}
