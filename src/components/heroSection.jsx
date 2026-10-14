import React, { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";



import heroVideo from "../assets/videos/JamSpread15Sec.webm";

import heroImg1 from "../assets/Fintech Dashboard at Sunset 1 (1).webp";

import heroImg2 from "../assets/Fintech Dashboard at Sunset 1.webp";

import heroImg3 from "../assets/Metallic Blue Lexus in a Warehouse 1.webp";
import citibankLogo from "../assets/Logos/Layer 6.png";
import lexusLogo from "../assets/Logos/Layer 7.png";
import safewayLogo from "../assets/Logos/Layer 12.png";

// Preload and decode hero images immediately in memory to eliminate loading delay
const HERO_PRELOAD_IMAGES = [heroImg1, heroImg2, heroImg3, safewayLogo, citibankLogo, lexusLogo];
if (typeof window !== "undefined") {
  HERO_PRELOAD_IMAGES.forEach((src) => {
    const img = new Image();
    img.src = src;
    if (img.decode) {
      img.decode().catch(() => {});
    }
  });
}

// Edit slide data here. Replace imageUrl/logoUrl with your final project assets.

// No case-study URL is assumed: use onCaseStudyClick or supply a real href.

const slides = [

  {

    id: 1,

    imageUrl: heroImg1,

    brand: "citibank",

    logoUrl: safewayLogo, // e.g. imported CitiBank logo PNG/SVG


    categories: ["Web & Mobile", "User Experience"],

    description:

      "A comprehensive web and mobile platform designed to enhance the grocery shopping experience and drive customer loyalty.",

    href: null,

  },

  {

    id: 2,

    imageUrl: heroImg2,

    brand: "Featured Project",

    logoUrl: citibankLogo,

    categories: ["Data Visualization", "Digital Experience"],

    // description: "Explore our latest work and the experiences behind the project.",

    description:

      "A comprehensive data visualization dashboard to capture the full landscape and enable internal collaboration across teams at CitiBack.",
    href: null,

  },

  {

    id: 3,

    imageUrl: heroImg3,

    brand: "Featured Project",

    logoUrl: lexusLogo,

    categories: ["3D Configurator", "Interactive Experience"],

    description: "An interactive dealership experience for vehicle customization and multimedia.",

    href: null,

  },

  {

    id: 4,

    imageUrl: heroImg1,

    brand: "Featured Project",

    logoUrl: safewayLogo,

    categories: ["Web & Mobile", "User Experience"],

    description:

      "A comprehensive web and mobile platform designed to enhance the grocery shopping experience and drive customer loyalty.",

    href: null,

  },

  {

    id: 5,

    imageUrl: heroImg2,

    brand: "Featured Project",

    logoUrl: citibankLogo,

    categories: ["Data Visualization", "Digital Experience"],


    description:

      "A comprehensive data visualization dashboard to capture the full landscape and enable internal collaboration across teams at CitiBack.",

    href: null,

  },

];



export default function HeroSection({

  isDarkened = false,

  onCaseStudyClick,

}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isShowreelOpen, setIsShowreelOpen] = useState(false);



  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
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
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
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
        className={`relative w-full overflow-hidden bg-white pt-2 sm:pt-3.5 pb-6 sm:pb-18 transition-all duration-300 ${isDarkened ? "brightness-50 pointer-events-none blur-[1px]" : ""
          }`}
      >
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative mx-auto w-full max-w-[1920px] overflow-hidden h-[calc(71.2vw+8px)] min-h-[260px] max-h-[520px] sm:min-h-0 sm:h-[calc(44.3vw+16px)] sm:max-h-[855px]"
        >
          {slides.map((slide, index) => {
            let offset = index - currentIndex;
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length;
            if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
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
              } else {
                shiftPercent = offset < 0 ? -11.2 : 11.2;
                scale = 0.88;
                opacity = 0.95;
                brightness = 0.70;
              }
            } else if (distance === 2) {
              shiftPercent = offset < 0 ? -20.8 : 20.8;
              scale = 0.77;
              opacity = 0.65;
              brightness = 0.52;
            }

            return (
              <article
                key={slide.id}
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) setCurrentIndex(index);
                }}
                className={`absolute left-1/2 top-1/2 w-[84%] sm:w-[81.5%] max-w-[1520px] overflow-hidden rounded-[26px] sm:rounded-[22px] border border-white/40 sm:border-white/50  transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] aspect-[1.18] sm:aspect-[1.84] select-none ${isActive ? "z-30" : distance === 1 ? "z-20 cursor-pointer" : "z-10 cursor-pointer"
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {isActive && (
                  <>
                    {/* Top-left brand mark — all screen sizes */}
                    <div className="absolute z-40 left-[5%] sm:left-[5.5%] top-[5%] sm:top-[5.5%]">
                      {slide.logoUrl ? (
                        <img
                          src={slide.logoUrl}
                          alt={slide.brand}
                          className="h-6 sm:h-9 md:h-12 lg:h-16 max-w-[110px] sm:max-w-[180px] lg:max-w-[220px] object-contain object-left brightness-0 invert"
                          loading="eager"
                          decoding="async"
                        />
                      ) : (
                        <span className="font-grift-semibold text-white text-[18px] sm:text-[28px] md:text-[36px] lg:text-[51px] leading-none tracking-[-0.045em]">
                          {slide.brand}
                        </span>
                      )}
                    </div>

                    {/* Top-right outlined labels — hidden on mobile to match reference */}
                    <div className="hidden sm:flex absolute z-40 right-[4.5%] sm:right-[5.5%] top-[5%] sm:top-[6.5%] max-w-[48%] flex-wrap justify-end gap-1.5 sm:gap-2 lg:gap-3">
                      {slide.categories.map((category) => (
                        <span
                          key={category}
                          style={{fontWeight:'500'}}
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
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" strokeWidth={2.4} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next project"
                      onClick={handleNext}
                      className="absolute z-50 right-3 sm:right-[2.5%] lg:right-[3%] top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-11 sm:w-11 md:h-13 md:w-13 lg:h-[70px] lg:w-[70px] items-center justify-center rounded-full border border-white/40 sm:border-white/80 bg-black/45 sm:bg-black/30 text-white backdrop-blur-[3px] transition-colors hover:bg-black/60 active:scale-95"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" strokeWidth={2.4} />
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
                    {slide.href || onCaseStudyClick ? (
                      slide.href ? (
                        <a
                          href={slide.href}
                          onClick={(event) => event.stopPropagation()}
                          className="flex absolute z-40 bottom-[5%] sm:bottom-[6%] right-[3.5%] sm:right-[4%] items-center gap-2 sm:gap-5 lg:gap-8 rounded-full bg-[#22aa00] hover:bg-[#1c9000] px-3 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 text-white font-grift-medium text-[11px] sm:text-[15px] lg:text-[20px] transition-colors"
                        >
                          Case Study <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            onCaseStudyClick(slide, index);
                          }}
                          className="flex absolute z-40 bottom-[5%] sm:bottom-[6%] right-[3.5%] sm:right-[4%] items-center gap-2 sm:gap-5 lg:gap-8 rounded-full bg-[#22aa00] hover:bg-[#1c9000] px-3 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 text-white font-grift-medium text-[11px] sm:text-[15px] lg:text-[18px] transition-colors"
                        >
                          Case Study <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                        </button>
                      )
                    ) : (
                      <span className="flex absolute z-40 bottom-[5%] sm:bottom-[6%] right-[3.5%] sm:right-[4%] items-center gap-2 sm:gap-5 lg:gap-8 rounded-full bg-[#22aa00] px-3 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 text-white font-grift-medium text-[11px] sm:text-[15px] lg:text-[18px] opacity-80" aria-label="Case Study link not configured">
                        Case Study <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      </span>
                    )}
                  </>
                )}
              </article>
            );
          })}
        </div>

        {/* Dot indicator — 3 dots matching reference image */}
        <div className="mt-6 flex justify-center items-center gap-2.5 sm:hidden">
          {[0, 1, 2].map((dotIndex) => {
            const isActiveDot = (currentIndex % 3) === dotIndex;
            return (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setCurrentIndex(dotIndex)}
                aria-label={`Go to project ${dotIndex + 1}`}
                aria-current={isActiveDot ? "true" : undefined}
                className={`h-[10px] rounded-full transition-all duration-300 ${
                  isActiveDot ? "w-7 bg-[#333333]" : "w-[10px] bg-[#CCCCCC]"
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

            <button type="button" onClick={() => setIsShowreelOpen(false)} aria-label="Close showreel" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white">

              <X className="h-6 w-6" />

            </button>

            <video src={heroVideo} className="h-full w-full object-cover" controls autoPlay playsInline />

          </div>

        </div>

      )}

    </>

  );

}
