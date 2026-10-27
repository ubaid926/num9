import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";

import heroVideo from "../assets/videos/JamSpread15Sec.webm";

import lexusHeroImg from "../assets/Metallic Blue Lexus in a Warehouse 1.webp";
import citibankHeroImg from "../assets/Fintech Dashboard at Sunset 1.webp";
import safewayHeroImg from "../assets/Fintech Dashboard at Sunset 1 (1).webp";

import empireHeroImg from "../assets/homeHeroSectionImages/Empire Cinemas Grand Lobby 1 (1).webp";
import lifegiveHeroImg from "../assets/homeHeroSectionImages/LifeGive Mediterranean Supplement Showcase 1.webp";
import pwcHeroImg from "../assets/homeHeroSectionImages/PwC_Enterprise_Dashboard_in_Executive_Office 1.webp";
import sentralHeroImg from "../assets/homeHeroSectionImages/Sunlit Sentral Education Workspace 1.webp";
import zee5HeroImg from "../assets/homeHeroSectionImages/composite (50)0 1.webp";
import fairviewHeroImg from "../assets/homeHeroSectionImages/hf_20261016_161338_d8b119f9-4b93-4517-95ad-49bb6319981e 1.webp";
import shanHeroImg from "../assets/homeHeroSectionImages/hf_20261016_161454_e8b7b674-bce5-43a9-a4be-c7776fa74607 1.webp";
import snacksHeroImg from "../assets/homeHeroSectionImages/hf_20261016_162448_549b8ec4-b231-4ab6-8341-ad5a5b8ffe63 1.webp";
import almazaHeroImg from "../assets/homeHeroSectionImages/PwC_Enterprise_Dashboard_in_Executive_Office 1 (1).webp";

import lexusLogo from "../assets/Logos/Layer 7.png";
import citibankLogo from "../assets/Logos/Layer 6.png";
import safewayLogo from "../assets/Logos/Layer 12.png";
import lifegiveLogo from "../assets/Logos/ClientsGrid_Logos/Logos/LifeGive Oval Leaf Logo_trimmed.png";
import snacksLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Snack.com_trimmed.png";
import almazaLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Almaza Gem Crest Logo_trimmed.png";

import empireLogo from "../assets/homeHeroSectionImages/hero_Logos/empire.png";
import pwcLogo from "../assets/homeHeroSectionImages/hero_Logos/PwC.png";
import sentralLogo from "../assets/homeHeroSectionImages/hero_Logos/sentral.png";
import zee5Logo from "../assets/homeHeroSectionImages/hero_Logos/Zee5.png";
import fairviewLogo from "../assets/homeHeroSectionImages/hero_Logos/fairview.png";
import shanLogo from "../assets/homeHeroSectionImages/hero_Logos/shan.png";

// Rule:
// - Colored logos: Logos appearing in original colors (homeHeroSectionImages, snacks, almaza)
// - White logos: All other logos used in the hero section appear white.
const COLORED_LOGOS = new Set([
  empireLogo,
  pwcLogo,
  sentralLogo,
  zee5Logo,
  fairviewLogo,
  shanLogo,
  snacksLogo,
  almazaLogo,
]);

const isColoredLogo = (logoUrl) => {
  if (!logoUrl) return false;
  if (COLORED_LOGOS.has(logoUrl)) return true;
  if (typeof logoUrl === "string") {
    return (
      logoUrl.includes("homeHeroSectionImages") ||
      logoUrl.includes("hero_Logos") ||
      logoUrl.includes("Snack") ||
      logoUrl.includes("Almaza")
    );
  }
  return false;
};


// Preload and decode hero images immediately in memory to eliminate loading delay
const HERO_PRELOAD_IMAGES = [
  lexusHeroImg,
  citibankHeroImg,
  safewayHeroImg,
  empireHeroImg,
  lifegiveHeroImg,
  pwcHeroImg,
  sentralHeroImg,
  zee5HeroImg,
  fairviewHeroImg,
  shanHeroImg,
  snacksHeroImg,
  almazaHeroImg,
  lexusLogo,
  citibankLogo,
  safewayLogo,
  empireLogo,
  lifegiveLogo,
  pwcLogo,
  sentralLogo,
  zee5Logo,
  fairviewLogo,
  shanLogo,
  snacksLogo,
  almazaLogo,
];
if (typeof window !== "undefined") {
  HERO_PRELOAD_IMAGES.forEach((src) => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    if (img.decode) {
      img.decode().catch(() => {});
    }
  });
}

const slides = [
  {
    id: 1,
    imageUrl: lexusHeroImg,
    brand: "Lexus",
    logoUrl: lexusLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["3D Configurator", "Interactive Experience"],
    description:
      "An interactive dealership experience for vehicle customization and multimedia.",
    route: "case-study/lexus",
  },
  {
    id: 2,
    imageUrl: citibankHeroImg,
    brand: "CitiBank",
    logoUrl: citibankLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Data Visualization", "Digital Experience"],
    description:
      "A comprehensive data visualization dashboard to capture the full landscape and enable internal collaboration across teams at CitiBank.",
    route: "case-study/citibank",
  },
  {
    id: 3,
    imageUrl: safewayHeroImg,
    brand: "Safeway",
    logoUrl: safewayLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Web & Mobile", "User Experience"],
    description:
      "A comprehensive web and mobile platform designed to enhance the grocery shopping experience and drive customer loyalty.",
    route: "case-study/safeway",
  },
  {
    id: 4,
    imageUrl: empireHeroImg,
    brand: "Empire Cinemas",
    logoUrl: empireLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[74px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Web Design", "Ticket Reservation"],
    description:
      "A cinema website design bringing movie listings, trailers, showtimes, and seat selection into a connected booking experience.",
    route: "case-study/empire",
  },
  {
    id: 5,
    imageUrl: pwcHeroImg,
    brand: "PwC",
    logoUrl: pwcLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[74px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Enterprise UX", "Dashboard Design"],
    description:
      "Specialized internal B2B dashboards streamlining tax policy tracking, active engagements, and resource allocation across multidisciplinary teams.",
    route: "case-study/pwc",
  },
  {
    id: 6,
    imageUrl: sentralHeroImg,
    brand: "Sentral Education",
    logoUrl: sentralLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[84px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["EdTech", "Web & Mobile App"],
    description:
      "An all-in-one parent portal app designed for real-time push notifications, tracking student homework, and handling instant school fee payments.",
    route: "case-study/sentral",
  },
  {
    id: 7,
    imageUrl: lifegiveHeroImg,
    brand: "LifeGive",
    logoUrl: lifegiveLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["D2C E-Commerce", "Health & Wellness"],
    description:
      "A direct-to-consumer e-commerce platform and supplement catalog helping health conscious consumers easily discover plant derived vitamins and minerals.",
    route: "case-study/lifegive",
  },
  {
    id: 8,
    imageUrl: snacksHeroImg,
    brand: "Snacks.com",
    logoUrl: snacksLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["E-commerce", "Digital Marketing"],
    description:
      "A direct-to-consumer platform for Frito-Lay /PepsiCo, combining customizable snack boxes, flexible ordering, and integrated digital marketing.",
    route: "case-study/snacks",
  },
  {
    id: 9,
    imageUrl: zee5HeroImg,
    brand: "ZEE5",
    logoUrl: zee5Logo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[74px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Retail Activation", "Affiliate Marketing"],
    description:
      "A branded retail screen initiative showcasing ZEE5 content to South Asian audiences in North American grocery stores.",
    route: "case-study/zee5",
  },
  {
    id: 10,
    imageUrl: fairviewHeroImg,
    brand: "Fairview",
    logoUrl: fairviewLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[74px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Web & Mobile", "UI/UX Design"],
    description:
      "A website design showcasing architectural products, project galleries, and sample requests across desktop and mobile layouts.",
    route: "case-study/fairview",
  },
  {
    id: 11,
    imageUrl: shanHeroImg,
    brand: "Shan Foods",
    logoUrl: shanLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px] ",
    categories: ["Retail Marketing", "Brand Activation"],
    description:
      "A comprehensive retail activation campaign across North American big-box retailers, featuring branded sampling stations and trained brand ambassadors.",
    route: "case-study/shan",
  },
  {
    id: 12,
    imageUrl: almazaHeroImg,
    brand: "Almaza",
    logoUrl: almazaLogo,
    logoClass:
      "h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] w-[110px] sm:w-[145px] md:w-[170px] lg:w-[200px]",
    categories: ["Digital Storytelling", "Brand Website"],
    description:
      "An engaging digital brand experience blending rich heritage storytelling, transparent brewing process breakdowns, and user-generated social moments.",
    route: "case-study/almaza",
  },
];

export default function HeroSection({
  isDarkened = false,
  onCaseStudyClick,
  onNavigate,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true,
  );

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minSwipeDistance = 45;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentIndex((index) => (index + 1) % slides.length);
    } else if (isRightSwipe) {
      setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
    }
  };

  const handlePrev = (event) => {
    event?.stopPropagation();
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const handleNext = (event) => {
    event?.stopPropagation();
    setCurrentIndex((index) => (index + 1) % slides.length);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (isShowreelOpen) {
        if (event.key === "Escape") setIsShowreelOpen(false);
        return;
      }
      // Don't intercept arrows while typing in a form field.
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          document.activeElement?.tagName,
        )
      )
        return;
      if (event.key === "ArrowLeft")
        setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
      if (event.key === "ArrowRight")
        setCurrentIndex((index) => (index + 1) % slides.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isShowreelOpen]);

  return (
    <>
      <section
        aria-label="Featured projects"
        className={`relative w-full overflow-hidden bg-white pt-2 sm:pt-2.5 lg:pt-0 pb-6 sm:pb-8 lg:pb-10 transition-all duration-300 ${
          isDarkened ? "brightness-50 pointer-events-none blur-[1px]" : ""
        }`}
      >
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="hero-slider-container relative mx-auto w-full max-w-[1920px] overflow-hidden"
        >
          {slides.map((slide, index) => {
            let offset = index - currentIndex;
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length;
            if (offset < -Math.floor(slides.length / 2))
              offset += slides.length;
            const isActive = offset === 0;
            const distance = Math.abs(offset);
            const isVisible = distance <= 2;

            // Compute exact scale, shift, brightness, and opacity matching reference layout
            let shiftPercent = 0;
            let scale = 1;
            let opacity = 1;
            let brightness = 1;

            if (isActive) {
              shiftPercent = 0;
              scale = 1;
              opacity = 1;
              brightness = 1;
            } else if (distance === 1) {
              if (isMobile) {
                shiftPercent = offset < 0 ? -17 : 17;
                scale = 0.82;
                opacity = 0.95;
                brightness = 0.55;
              } else if (isDesktop) {
                shiftPercent = offset < 0 ? -14.2 : 14.2;
                scale = 0.80;
                opacity = 0.95;
                brightness = 0.62;
              } else {
                shiftPercent = offset < 0 ? -11.8 : 11.8;
                scale = 0.86;
                opacity = 0.95;
                brightness = 0.7;
              }
            } else if (distance === 2) {
              if (isDesktop) {
                shiftPercent = offset < 0 ? -23.5 : 23.5;
                scale = 0.68;
                opacity = 0.72;
                brightness = 0.45;
              } else {
                shiftPercent = offset < 0 ? -20.8 : 20.8;
                scale = 0.77;
                opacity = 0.65;
                brightness = 0.52;
              }
            }

            return (
              <article
                key={slide.id}
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) setCurrentIndex(index);
                }}
                className={`hero-slide-card absolute left-1/2 top-1/2 overflow-hidden rounded-[26px] sm:rounded-[22px] border border-white/40 sm:border-white/50 transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] select-none ${
                  isActive
                    ? "z-30"
                    : distance === 1
                      ? "z-20 cursor-pointer"
                      : "z-10 cursor-pointer"
                } ${distance === 2 ? "hidden sm:block" : ""} ${isVisible ? "visible" : "invisible pointer-events-none"}`}
                style={{
                  transform: `translate(calc(-50% + ${shiftPercent}%), -50%) scale(${scale})`,
                  opacity: isActive ? 1 : opacity,
                  filter: isActive ? "none" : `brightness(${brightness})`,
                }}
              >
                <img
                  src={slide.imageUrl}
                  alt={`${slide.brand} project visual`}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                  loading="eager"
                  fetchPriority={isActive ? "high" : "auto"}
                  decoding="async"
                />
                {/* Smooth black fade on the top and bottom edges of each hero image */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.76) 12%, rgba(0,0,0,0.37) 27%, transparent 44%, transparent 56%, rgba(0,0,0,0.40) 73%, rgba(0,0,0,0.79) 88%, rgba(0,0,0,0.98) 100%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {isActive && (
                  <>
                    {/* Top-left brand mark — all screen sizes, aligned with bottom-left glass box */}
                    <div className="absolute z-40 left-[5%] sm:left-[3.3%] top-[7%] sm:top-[5.5%] flex items-center">
                      {slide.logoUrl ? (
                        <img
                          src={slide.logoUrl}
                          alt={slide.brand}
                          className={`object-contain object-left shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] ${
                            isColoredLogo(slide.logoUrl)
                              ? ""
                              : "brightness-0 invert"
                          } ${
                            slide.logoClass ||
                            "h-6 sm:h-9 md:h-12 lg:h-16 max-w-[110px] sm:max-w-[180px] lg:max-w-[220px]"
                          }`}
                          loading="eager"
                          decoding="async"
                        />
                      ) : (
                        <span className="font-grift-semibold text-white text-[18px] sm:text-[28px] md:text-[36px] lg:text-[51px] leading-none tracking-[-0.045em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                          {slide.brand}
                        </span>
                      )}
                    </div>

                    {/* Top-right outlined labels — hidden on mobile to match reference */}
                    <div className="hidden sm:flex absolute z-40 right-[4.5%] sm:right-[5.5%] top-[5%] sm:top-[6.5%] max-w-[48%] flex-wrap justify-end gap-1.5 sm:gap-2 lg:gap-3">
                      {slide.categories.map((category) => (
                        <span
                          key={category}
                          style={{ fontWeight: "500" }}
                          className="whitespace-nowrap rounded-full border-[2px] border-[#0D9D0D] bg-black/85 px-2.5 py-1 sm:px-3.5 sm:py-[5px] lg:px-5 lg:py-[10px] text-[9px] sm:text-[11px] lg:text-[16px]  leading-none text-white"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {/* Centered vertical navigation arrows */}
                    <button
                      type="button"
                      aria-label="Previous project"
                      onClick={handlePrev}
                      className="absolute z-50 left-3 sm:left-[2.5%] lg:left-[3%] top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-[70px] lg:w-[70px] items-center justify-center rounded-full border border-white/40 sm:border-white/80 bg-black/45 sm:bg-black/30 text-white backdrop-blur-[3px] transition-colors hover:bg-black/60 active:scale-95"
                    >
                      <ChevronLeft
                        className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                        strokeWidth={2.4}
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Next project"
                      onClick={handleNext}
                      className="absolute z-50 right-3 sm:right-[2.5%] lg:right-[3%] top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-[70px] lg:w-[70px] items-center justify-center rounded-full border border-white/40 sm:border-white/80 bg-black/45 sm:bg-black/30 text-white backdrop-blur-[3px] transition-colors hover:bg-black/60 active:scale-95"
                    >
                      <ChevronRight
                        className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                        strokeWidth={2.4}
                      />
                    </button>

                    {/* Bottom-left glass project details — hidden on mobile to match reference */}
                    <div className="hidden sm:block absolute z-40 bottom-[5%] sm:bottom-[6%] lg:bottom-[7%] left-[3%] sm:left-[3.3%] w-[38%] md:w-[35%] lg:w-[32%] max-w-[460px] rounded-[14px] lg:rounded-[18px] border border-white/65 bg-[#303030]/65 px-4 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-6 backdrop-blur-[12px] shadow-[0_12px_30px_rgba(0,0,0,.15)] text-white">
                      <div className="font-grift-medium text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.27em] uppercase text-white/85">
                        Featured Project
                      </div>
                      <div className="my-1.5 sm:my-2.5 lg:my-4 h-[2px] lg:h-[3px] w-[30px] sm:w-[40px] lg:w-[52px] bg-[#35d20a]" />
                      <p className="font-grift-medium text-[11px] sm:text-[13px] md:text-[15px] lg:text-[20px] leading-[1.3] lg:leading-[1.36] line-clamp-3 lg:line-clamp-none">
                        {slide.description}
                      </p>
                    </div>

                    {/* Bottom-right green action button — all screen sizes */}
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (onCaseStudyClick) {
                          onCaseStudyClick(slide, index);
                        } else if (onNavigate && slide.route) {
                          onNavigate(slide.route);
                        } else if (
                          typeof window !== "undefined" &&
                          slide.route
                        ) {
                          const url = new URL(window.location.href);
                          url.searchParams.set("page", slide.route);
                          window.location.href = url.toString();
                        }
                      }}
                      className="flex absolute z-40 bottom-[5%] sm:bottom-[6%] right-[3.5%] sm:right-[4%] items-center gap-2 sm:gap-5 lg:gap-8 rounded-full bg-[#22aa00] hover:bg-[#1c9000] px-3 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 text-white font-grift-medium text-[11px] sm:text-[15px] lg:text-[20px] transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(34,170,0,0.4)] hover:shadow-[0_6px_20px_rgba(34,170,0,0.6)] active:scale-95"
                    >
                      Case Study{" "}
                      <ChevronRight
                        className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                        strokeWidth={2.4}
                      />
                    </button>
                  </>
                )}
              </article>
            );
          })}
        </div>

        {/* Dot indicator — responsive dot indicators for all hero cards */}
        <div className="mt-6 flex justify-center items-center gap-1.5 sm:hidden px-4 flex-wrap max-w-full">
          {slides.map((slide, dotIndex) => {
            const isActiveDot = currentIndex === dotIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(dotIndex)}
                aria-label={`Go to ${slide.brand}`}
                aria-current={isActiveDot ? "true" : undefined}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  isActiveDot ? "w-6 bg-[#333333]" : "w-[8px] bg-[#CCCCCC]"
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* Existing optional showreel modal retained for later use */}

      {isShowreelOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg sm:p-8"
          onClick={() => setIsShowreelOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsShowreelOpen(false)}
              aria-label="Close showreel"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <video
              src={heroVideo}
              className="h-full w-full object-cover"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
