import React, { useState, useEffect, useRef } from "react";
import { caseStudiesData } from "../data/caseStudiesData";

/* ==========================================
   STATISTIC CIRCLE
========================================== */

function StatisticCircle({ value, subtext, label }) {
  const isLong = String(value).length > 4;
  return (
    <div className="flex flex-col items-center min-w-0">
      <div
        className="
          relative
          w-[130px] h-[130px]
          sm:w-[170px] sm:h-[170px]
          md:w-[200px] md:h-[200px]
          lg:w-[230px] lg:h-[230px]
          xl:w-[245px] xl:h-[245px]

          rounded-full
          border-[2px] border-dashed
          border-[#D5D5D5] dark:border-[#2D362F]

          flex flex-col items-center justify-center
        "
      >
        {/* INNER DASHED CIRCLE */}
        <div
          className="
            absolute
            inset-[8px]
            sm:inset-[10px]
            md:inset-[12px]
            lg:inset-[14px]

            rounded-full
            border-[2px] border-dashed
            border-[#D5D5D5] dark:border-[#2D362F]

            pointer-events-none
          "
        />

        {/* NUMBER & SUBTEXT CENTERED AS A UNIT */}
        <div className="relative z-10 flex flex-col items-center justify-center -mt-0.5 sm:-mt-1 px-1 text-center">
          <span
            className={`
              font-grift-semibold
              ${isLong ? 'text-[24px] sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[54px]' : 'text-[40px] sm:text-[50px] md:text-[58px] lg:text-[68px] xl:text-[80px]'}
              leading-none
              tracking-[-0.035em]
              text-[#25C800]
            `}
          >
            {value}
          </span>

          {subtext && (
            <span
              className="
                font-grift-light
                text-[12px]
                sm:text-[14px]
                md:text-[16px]
                lg:text-[30px]
                leading-none
                text-[#444444] dark:text-[#D1D5DB]
                mt-1.5 sm:mt-2
                tracking-[-0.01em]
              "
            >
              {subtext}
            </span>
          )}
        </div>
      </div>

      {/* LABEL */}
      <h3
        className="
          mt-4 sm:mt-5 lg:mt-6
          font-grift-extrabold
          text-[15px]
          sm:text-[18px]
          md:text-[21px]
          lg:text-[24px]
          xl:text-[35px]
          leading-[1.2]
          tracking-[-0.02em]
          text-[#2D343E] dark:text-white
          text-center
          whitespace-nowrap
        "
      >
        {label}
      </h3>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function CaseStudyOverviewSections({
  caseStudy = caseStudiesData.lexus,
}) {
  const overview = caseStudy?.overviewSection || caseStudiesData.lexus.overviewSection;
  const stat1Data = overview.stats?.[0] || { targetValue: 10, suffix: "+", label: "Team size" };
  const stat2Data = overview.stats?.[1] || { targetValue: 3, suffix: "", subtext: "months", label: "Engagement length" };

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const statsSectionRef = useRef(null);
  const animatedRef = useRef(false);
  const hasUserScrolledRef = useRef(false);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const el = statsSectionRef.current;
    if (!el) return;

    const target1 = stat1Data.targetValue || 10;
    const target2 = stat2Data.targetValue || 3;
    const start1 = stat1Data.startValue !== undefined ? stat1Data.startValue : (target1 > 1000 ? Math.floor(target1 * 0.7) : 1);
    const start2 = stat2Data.startValue !== undefined ? stat2Data.startValue : (target2 > 1000 ? Math.floor(target2 * 0.98) : 1);

    // Reset when case study changes
    animatedRef.current = false;
    hasUserScrolledRef.current = false;
    setCount1(start1);
    setCount2(start2);

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1200;
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);

        const val1 = Math.round(start1 + ease * (target1 - start1));
        const val2 = Math.round(start2 + ease * (target2 - start2));

        setCount1(val1);
        setCount2(val2);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount1(target1);
          setCount2(target2);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isIntersectingRef.current = entry.isIntersecting;

        // Only trigger if user has scrolled down into the page
        if (entry.isIntersecting && (hasUserScrolledRef.current || window.scrollY > 40)) {
          startAnimation();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        hasUserScrolledRef.current = true;
        if (isIntersectingRef.current && !animatedRef.current) {
          startAnimation();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stat1Data.targetValue, stat2Data.targetValue]);

  const projectTags = overview.projectTags || [];
  const quoteSection = overview.quoteSection || {};

  return (
    <div className="w-full bg-white dark:bg-[#0B0D0C] transition-colors duration-300">
      {/* ======================================
          SECTION 01 — PROJECT SUMMARY
      ====================================== */}
      <section className="w-full bg-white dark:bg-[#0B0D0C] transition-colors duration-300">
        <div
          className="
            w-full
            max-w-[1920px]
            mx-auto

            px-5
            sm:px-8
            md:px-12
            lg:px-16
            xl:px-[6.25%]

            pt-12
            sm:pt-16
            lg:pt-[100px]

            pb-14
            sm:pb-16
            lg:pb-[145px]
          "
        >
          <div
            className="
              w-full
              max-w-[1260px]
              xl:max-w-[1320px]
              mx-auto
            "
          >
            {/* SUMMARY + LOGO */}
            <div
              className="
                w-full
                max-w-[1260px]
                xl:max-w-[1320px]
                mx-auto

                px-4 sm:px-6
                lg:px-0

                grid grid-cols-1
                md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]

                gap-8 md:gap-[50px] lg:gap-[65px]
                items-start md:items-center

                py-[36px] sm:py-[50px]
                md:py-[65px] lg:py-[80px]
              "
            >
              {/* LEFT CONTENT */}
              <div className="w-full min-w-0 flex flex-col justify-start">
                {/* HEADING */}
                <h2
                  className="
                    font-grift-extrabold
                    text-[50px] sm:text-[42px]
                    md:text-[44px] lg:text-[60px]

                    leading-[1.13]
                    tracking-[-0.035em]
                    text-[#414A55] dark:text-white

                    max-w-[210px]
                    sm:max-w-none

                    mb-[18px] sm:mb-[22px]
                    lg:mb-[27px]
                  "
                >
                  <span className="md:hidden">
                    {overview.summaryHeading || "The summary"}
                  </span>

                  <span className="hidden md:inline">
                    {overview.summaryHeading || "The summary"}
                  </span>

                  <span className="text-[#29C812]">
                    {overview.summaryAccentDot || "."}
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    font-grift-medium

                    text-[28px] sm:text-[20px]
                    md:text-[22px] lg:text-[30px]

                    leading-[1.34]
                    sm:leading-[1.4]
                    lg:leading-[1.37]

                    tracking-[-0.015em]
                    text-[#555555] dark:text-[#D1D5DB]

                    max-w-[570px]
                    m-0
                  "
                >
                  {overview.summaryText}
                </p>
              </div>

              {/* RIGHT LOGO / SHOWCASE (RECTANGLE: WIDER WIDTH, LESSER HEIGHT) */}
              <div
                className="
                  w-full min-w-0
                  flex items-center justify-center
                  bg-white dark:bg-[#171A18] overflow-hidden

                  mt-[30px] sm:mt-[36px] md:mt-0
                  w-full max-w-[560px]
                  aspect-[1.48/1]
                  self-center
                  mx-auto md:mx-0 md:ml-auto

                  border border-[#D0D0D0] dark:border-[#27302A]
                  md:border-[#BDBDBD] md:dark:border-[#27302A]
                  rounded-[20px] md:rounded-[28px] lg:rounded-[36px]
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                  p-6 sm:p-8 lg:p-12
                "
              >
                {overview.logo && (
                  <img
                    src={overview.logo}
                    alt={overview.logoAlt || `${caseStudy.name || "Brand"} logo`}
                    loading="lazy"
                    decoding="async"
                    className={`
                      block
                      w-[68%] sm:w-[62%]
                      h-auto
                      max-w-[280px]
                      sm:max-w-[320px]
                      lg:max-w-[360px]
                      max-h-[120px]
                      sm:max-h-[140px]
                      md:max-h-[160px]
                      lg:max-h-[180px]

                      object-contain
                      object-center
                      ${caseStudy?.slug === 'lexus' || overview.logoAlt === 'Lexus' || caseStudy?.slug === 'delta-light' || caseStudy?.slug === 'dreo' ? 'dark:invert' : ''}
                    `}
                  />
                )}
              </div>
            </div>

            {/* ==================================
                SHOWCASE FEATURE IMAGE (REPLACES STATS - WIDE & EXPANSIVE)
            ================================== */}
            <div
              className="
                w-full
                mt-8 sm:mt-12 md:mt-14 lg:mt-16
                overflow-hidden
                rounded-[14px] sm:rounded-[18px] md:rounded-[22px]
                border border-[#D0D0D0] dark:border-[#27302A]
                bg-[#F8F9FA] dark:bg-[#151816]
                shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              "
              style={{ aspectRatio: "2.65 / 1" }}
            >
              <img
                src={overview.showcaseImage || caseStudy.hero?.bgImage}
                alt={overview.showcaseAlt || `${caseStudy.name || 'Brand'} showcase`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center block"
              />
            </div>

            {/* OPTIONAL STATS (IF SPECIFICALLY CONFIGURED) */}
            {overview.showStats && (
              <div
                ref={statsSectionRef}
                className="
                  flex flex-row
                  items-start
                  justify-center
                  gap-8 sm:gap-14 md:gap-20 lg:gap-[130px] xl:gap-[150px]
                  mt-[30px] sm:mt-[50px] lg:mt-[60px]
                "
              >
                <StatisticCircle
                  value={
                    stat1Data.suffix && count1 >= stat1Data.targetValue
                      ? `${count1 >= 1000 ? count1.toLocaleString() : count1}${stat1Data.suffix}`
                      : (count1 >= 1000 ? count1.toLocaleString() : count1)
                  }
                  label={stat1Data.label}
                />

                <StatisticCircle
                  value={
                    stat2Data.noComma || (stat2Data.targetValue > 1000 && stat2Data.targetValue < 2100)
                      ? count2
                      : (count2 >= 1000 ? count2.toLocaleString() : count2)
                  }
                  subtext={stat2Data.subtext}
                  label={stat2Data.label}
                />
              </div>
            )}

            {/* ==================================
                PROJECT TAGS
            ================================== */}
            <div
              className="
                flex flex-wrap
                justify-center
                items-center

                gap-x-7
                sm:gap-x-10
                lg:gap-x-12
                xl:gap-x-14
                gap-y-3

                mt-8
                sm:mt-10
                lg:mt-12
              "
            >
              {projectTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    font-grift-medium

                    text-[12px]
                    sm:text-[14px]
                    lg:text-[20px]

                    leading-[1.4]
                    text-[#4A5568] dark:text-[#D1D5DB]
                    whitespace-nowrap
                    tracking-[-0.01em]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          SECTION 02 — BRAND EXPERIENCE / QUOTE
      ====================================== */}
      <section
        className="
          relative
          w-full
          bg-[#D9D9D9] dark:bg-[#171A18]
          transition-colors duration-300
        "
      >
        <div
          className="
            w-full max-w-[1920px] mx-auto

            px-5 sm:px-8 md:px-12
            lg:px-16 xl:px-[6.25%]
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[1030px]
              mx-auto

              flex flex-col
              md:flex-row

              items-center
              md:items-start

              gap-6 sm:gap-8
              md:gap-[50px]
              lg:gap-[70px]
            "
          >
            {/* LEFT — GRAPHIC */}
            <div
              className="
                relative
                w-full
                md:w-[32%]

                shrink-0

                flex
                items-center
                justify-center

                -mt-[28px]
                sm:-mt-[35px]
                lg:-mt-[18px]

                z-10
              "
            >
              {quoteSection.graphicImage && (
                <img
                  src={quoteSection.graphicImage}
                  alt={quoteSection.graphicAlt || `${caseStudy.name || "Brand"} experience`}
                  loading="lazy"
                  decoding="async"
                  className="
                    block
                    w-full
                    h-auto
                    max-w-[320px]
                    object-contain
                  "
                />
              )}
            </div>

            {/* RIGHT — QUOTE */}
            <div
              className="
                w-full
                md:flex-1
                min-w-0

                pt-0
                md:pt-[27px]
                lg:pt-[30px]

                pb-8
                sm:pb-10
                lg:pb-[45px]
              "
            >
              <blockquote
                className="
                  font-grift-regular

                  text-[15px]
                  sm:text-[18px]
                  md:text-[19px]
                  lg:text-[25px]

                  leading-[1.35]
                  tracking-[-0.01em]
                  text-[#4A4A4A] dark:text-[#F3F4F6]

                  m-0
                "
              >
                {quoteSection.quote}
              </blockquote>

              {/* ATTRIBUTION */}
              {(quoteSection.attributionTitle || quoteSection.attributionCompany) && (
                <p
                  className="
                    mt-[18px]
                    font-grift-medium

                    text-[12px]
                    sm:text-[14px]
                    lg:text-[20px]

                    leading-[1.4]
                    text-[#929292] dark:text-[#9CA3AF]
                  "
                >
                  {quoteSection.attributionTitle}
                  {quoteSection.attributionTitle && quoteSection.attributionCompany && <br />}
                  {quoteSection.attributionCompany}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
