import React, { useLayoutEffect } from "react";
import AppNav from "../components/nav";
import CaseStudyHeroSection from "../components/CaseStudyHeroSection";
import CaseStudyOverviewSections from "../components/CaseStudyOverviewSections";
import CaseStudyStorySections from "../components/CaseStudyStorySections";
import AccelerateBusinessSection from "../components/AccelerateBusinessSection";
import Footer from "../components/footer";
import { getCaseStudy, caseStudiesData } from "../data/caseStudiesData";

export default function CaseStudyTemplate({
  slug = "lexus",
  caseStudy: caseStudyProp,
  onNavigate,
  activeDropdown,
  setActiveDropdown,
}) {
  const caseStudy = caseStudyProp || getCaseStudy(slug) || caseStudiesData.lexus;

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [slug]);

  return (
    <div className="bg-white min-h-screen text-[#141414] font-grift antialiased overflow-x-hidden">
      {/* Global Navigation */}
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <CaseStudyHeroSection
        caseStudy={caseStudy}
        onNavigate={onNavigate}
      />

      {/* Overview Sections (Summary + Animated Stats + Quote) */}
      <CaseStudyOverviewSections
        caseStudy={caseStudy}
      />

      {/* Story Sections (Synchronized SVG Timeline + About + Challenge + Solution + Key Services + Outcome) */}
      <CaseStudyStorySections
        caseStudy={caseStudy}
      />

      {/* Pre-footer Call to Action */}
      <AccelerateBusinessSection onScheduleClick={() => onNavigate && onNavigate('contact')} />

      {/* Global Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
