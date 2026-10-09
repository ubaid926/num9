import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import carImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1.png';
import microsoftImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1 (1).png';
import emiratesImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1 (2).png';

import lexuslogo from '../assets/Logo (2).png';
import msLogo from '../assets/mlogo 1.png';
import emiratesLogo from '../assets/Group 132.png';

import electricCar from '../assets/electric-car 1.png';
import building from '../assets/electric-car 1 (1).png';
import plane from '../assets/electric-car 1 (2).png';

/* =========================================================
   ORIGINAL CASE STUDIES
========================================================= */

const originalCaseStudies = [
  {
    id: '01',
    category: 'AUTOMOTIVE',
    titleLine1: 'Lexus Interactive',
    titleLine2: 'Experience',
    description:
      'An immersive digital platform & configurator that redefines luxury vehicle exploration.',
    icon: (
      <img
        src={electricCar}
        className="w-[36px] h-[36px]"
        alt="car icon"
      />
    ),
    image: carImage,
    logo: lexuslogo,
    logoClass:
      '-ml-[15px] h-[70px] sm:h-[80px] w-[180px] sm:w-[210px]',
  },

  {
    id: '02',
    category: 'ENTERPRISE',
    titleLine1: 'Microsoft Enterprise',
    titleLine2: 'Solutions',
    description:
      'Enterprise-grade solutions and digital transformation for global teams and business units.',
    icon: (
      <img
        src={building}
        className="w-[36px] h-[36px]"
        alt="building icon"
      />
    ),
    image: microsoftImage,
    logo: msLogo,
    logoClass:
      'h-[70px] sm:h-[80px] w-[180px] sm:w-[210px]',
  },

  {
    id: '03',
    category: 'TRAVEL & HOSPITALITY',
    titleLine1: 'Emirates Digital',
    titleLine2: 'Experience Platform',
    description:
      'Digital experience platform enhancing customer engagement across global touchpoints.',
    icon: (
      <img
        src={plane}
        className="w-[36px] h-[36px]"
        alt="plane icon"
      />
    ),
    image: emiratesImage,
    logo: emiratesLogo,
    logoClass:
      'w-[180px] sm:w-[210px] h-[75px] sm:h-[90px]',
  },
];

/* =========================================================
   DUPLICATED CARDS
========================================================= */

const caseStudies = [
  {
    ...originalCaseStudies[0],
    id: '01',
  },
  {
    ...originalCaseStudies[1],
    id: '02',
  },
  {
    ...originalCaseStudies[2],
    id: '03',
  },
  {
    ...originalCaseStudies[0],
    id: '04',
  },
  {
    ...originalCaseStudies[1],
    id: '05',
  },
  {
    ...originalCaseStudies[2],
    id: '06',
  },
  {
    ...originalCaseStudies[0],
    id: '07',
  },
];

const CaseStudies = () => {
  /*
   * Start Microsoft in center
   */
  const [activeIndex, setActiveIndex] = useState(1);

  // Touch swipe tracking
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only treat as horizontal swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  };

  /* =========================================================
     NEXT
  ========================================================= */

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
  };

  /* =========================================================
     INFINITE CAROUSEL POSITION
  ========================================================= */

  const getCardPosition = (index) => {
    let position = index - activeIndex;

    const totalCards = caseStudies.length;

    if (position > totalCards / 2) {
      position -= totalCards;
    }

    if (position < -totalCards / 2) {
      position += totalCards;
    }

    return position;
  };

  return (
    <section
      className="
        w-full
        bg-white
        overflow-hidden
        py-12
        sm:py-16
        lg:py-20
        xl:py-0
      "
    >
      {/* =====================================================
          TOP CONTENT
      ===================================================== */}

      <div className="w-full">
        {/* =================================================
            WE ARE MOMENTUM
        ================================================= */}

        <div
          className="
            px-4
            sm:px-20
            mb-14
            sm:mb-16
            lg:mb-24
            xl:mb-[clamp(60px,5vw,110px)]
          "
        >
          <h1
            className="
              text-[38px]
              sm:text-[48px]
              md:text-[58px]
              lg:text-[64px]
              xl:text-[clamp(64px,3.8vw,92px)]
              font-bold
              
              tracking-tight
              leading-[0.95]
              mb-4
            "
          >
            We are Momentum
          </h1>

          <p
            className="
              text-[18px]
              sm:text-[21px]
              md:text-[24px]
              lg:text-[28px]
              xl:text-[clamp(28px,2.36vw,59px)]
              font-normal
              leading-tight
            "
          >
            The modern-day experiential agency.
          </p>
        </div>

        {/* =================================================
            LATEST + NAVIGATION
        ================================================= */}

        <div
          className="
            px-4
            sm:px-20
            flex
            items-end
            justify-between
            gap-6
            mb-8
            sm:mb-10
            lg:mb-12
          "
        >
          <h2
            className="
              text-[40px]
              sm:text-[48px]
              md:text-[58px]
              lg:text-[68px]
              xl:text-[clamp(68px,3.7vw,92px)]
              font-bold
              tracking-tight
              leading-none
            "
          >
            Latest
          </h2>

        </div>
      </div>

      {/* =====================================================
          CAROUSEL

          Desktop / Laptop:
          ONLY 3 cards visible

          LEFT    CENTER    RIGHT
      ===================================================== */}

      <div
        className="
          relative
          w-full

          min-h-[580px]
          sm:h-[640px]
          md:h-[670px]
          lg:h-[720px]
          xl:h-[clamp(740px,calc(560px+13vw),900px)]

          overflow-hidden
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {caseStudies.map((study, index) => {
          const position = getCardPosition(index);

          /*
           * ONLY positions:
           *
           * -1 = left card
           *  0 = active center card
           * +1 = right card
           *
           * Everything else completely hidden.
           */
          const isVisible = Math.abs(position) <= 1;
          const isActive = position === 0;

          return (
            <div
              key={`${study.id}-${index}`}
              onClick={() => {
                if (isVisible) {
                  setActiveIndex(index);
                }
              }}
              className={`
                absolute
                left-1/2
                top-4
                sm:top-5
                lg:top-6

                transition-all
                duration-[700ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                w-[85vw]
                max-w-[420px]

                sm:w-[380px]
                sm:max-w-none
                md:w-[360px]
                lg:w-[31vw]
                lg:max-w-[480px]
                xl:w-[30vw]
                xl:max-w-[520px]
                2xl:w-[29vw]
                2xl:max-w-[640px]

                ${isVisible
                  ? 'pointer-events-auto cursor-pointer'
                  : 'pointer-events-none'
                }

                ${isActive
                  ? 'z-30'
                  : 'z-10'
                }
              `}
              style={{
                /*
                 * On desktop:
                 *
                 * -1 = left
                 *  0 = center
                 * +1 = right
                 */
                transform: `
                  translateX(
                    calc(
                      -50% +
                      ${position * 114}%
                    )
                  )
                  scale(${isActive ? 1 : 0.94})
                `,

                /*
                 * EXACTLY 3 visible:
                 */
                opacity: !isVisible
                  ? 0
                  : isActive
                    ? 1
                    : 0.36,

                visibility: isVisible
                  ? 'visible'
                  : 'hidden',
              }}
            >
              {/* =================================================
                  CARD
              ================================================= */}

              <div
                className={`
                  rounded-[34px]
                  overflow-hidden

                  bg-white

                  border
                  border-gray-100

                  flex
                  flex-col

                  transition-all
                  duration-500

                  ${isActive
                    ? `
                        shadow-[0_22px_60px_rgba(0,0,0,0.14)]
                      `
                    : `
                        shadow-[0_6px_25px_rgba(0,0,0,0.07)]
                      `
                  }
                `}
                style={{
                  minHeight: isActive
                    ? 'clamp(520px, calc(460px + 13.6vw), 800px)'
                    : 'clamp(490px, calc(440px + 12.8vw), 760px)',
                }}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    shrink-0
                  "
                  style={{
                    height: isActive
                      ? 'clamp(240px, calc(210px + 8.4vw), 420px)'
                      : 'clamp(220px, calc(195px + 7.8vw), 390px)',
                  }}
                >
                  <img
                    src={study.image}
                    alt={`${study.titleLine1} ${study.titleLine2}`}
                    className="
                      w-full
                      h-full
                      object-cover

                      transition-transform
                      duration-700
                    "
                  />

                  {/* =================================================
                      NUMBER + LOGO
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-4
                      left-5

                      sm:top-5
                      sm:left-6

                      flex
                      flex-col

                      items-start
                      gap-2

                      z-10
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        justify-center

                        border
                        border-[#28B023]

                        text-[#28B023]

                        rounded-[7px]

                        text-[13px]
                        sm:text-[14px]

                        font-medium

                        bg-black/20
                        backdrop-blur-sm

                        px-2
                        py-[3px]
                      "
                    >
                      {study.id}
                    </span>

                    <img
                      src={study.logo}
                      alt="Brand Logo"
                      className={`
                        object-left
                        object-contain
                        drop-shadow-lg
                        ${study.logoClass}
                      `}
                    />
                  </div>

                  {/* =================================================
                      TOP IMAGE ARROW
                  ================================================= */}

                  <div
                    className={`
                      absolute

                      bottom-4
                      right-4

                      w-[44px]
                      h-[44px]

                      rounded-full

                      bg-white

                      flex
                      items-center
                      justify-center

                      shadow-lg

                      transition-all
                      duration-500

                      ${isActive
                        ? `
                            opacity-100
                            translate-y-0
                          `
                        : `
                            opacity-100
                            translate-y-0
                          `
                      }
                    `}
                  >
                    <ArrowRight
                      className="
                        text-[#17A229]
                        w-5
                        h-5
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className="
                    p-5
                    sm:p-6
                    lg:p-7
                    xl:p-[clamp(24px,1.4vw,34px)]

                    flex
                    flex-col
                    justify-between
                    flex-1

                    gap-4
                    sm:gap-5
                    xl:gap-[clamp(18px,1.1vw,26px)]
                  "
                >
                  {/* Top content group */}
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      sm:gap-5
                      xl:gap-[clamp(16px,1vw,22px)]
                    "
                  >
                    {/* =================================================
                        CATEGORY
                    ================================================= */}

                    <span
                      className="
                        self-start
                        inline-flex
                        items-center

                        text-[12px]
                        sm:text-[13px]
                        md:text-[14px]
                        xl:text-[clamp(14px,0.76vw,17px)]

                        px-3.5
                        py-[5px]
                        sm:px-4
                        sm:py-[6px]

                        rounded-full

                        border
                        border-[#28B023]

                        text-[#28B023]

                        font-medium

                        transition-colors
                        duration-300
                      "
                    >
                      {study.category}
                    </span>

                    {/* =================================================
                        TITLE + ICON
                    ================================================= */}

                    <div
                      className="
                        flex
                        justify-between
                        items-start
                        gap-4
                      "
                    >
                      <h3
                        className="
                          leading-[1.18]
                          flex-1
                        "
                      >
                        <span
                          className="
                            block

                            text-[22px]
                            sm:text-[24px]
                            lg:text-[26px]
                            xl:text-[clamp(26px,1.72vw,40px)]

                            font-semibold

                            tracking-[-0.02em]

                            text-gray-900

                            transition-colors
                            duration-300
                          "
                        >
                          {study.titleLine1}
                        </span>

                        <span
                          className="
                            block

                            text-[22px]
                            sm:text-[24px]
                            lg:text-[26px]
                            xl:text-[clamp(26px,1.72vw,40px)]

                            font-semibold

                            tracking-[-0.02em]

                            text-[#1DC16A]

                            transition-colors
                            duration-300
                          "
                        >
                          {study.titleLine2}
                        </span>
                      </h3>

                      {/* Icon */}

                      <div
                        className="
                          flex-shrink-0

                          w-[50px]
                          h-[50px]
                          p-3

                          sm:w-[58px]
                          sm:h-[58px]
                          sm:p-3.5

                          xl:w-[clamp(60px,3.1vw,76px)]
                          xl:h-[clamp(60px,3.1vw,76px)]
                          xl:p-[clamp(14px,0.85vw,20px)]

                          rounded-full

                          flex
                          items-center
                          justify-center

                          bg-[#E1F5ED]
                        "
                      >
                        {study.icon}
                      </div>
                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p
                      className="
                        text-[14px]
                        sm:text-[15px]
                        lg:text-[16px]
                        xl:text-[clamp(16px,0.92vw,21px)]

                        leading-[1.65]

                        text-gray-600
                      "
                    >
                      {study.description}
                    </p>
                  </div>

                  {/* =================================================
                      VIEW CASE STUDY
                  ================================================= */}

                  <div
                    className="
                      pt-4
                      sm:pt-5

                      border-t
                      border-gray-100

                      mt-auto
                    "
                  >
                    <a
                      href="#"
                      onClick={(event) => event.stopPropagation()}
                      className="
                        flex
                        items-center
                        justify-between

                        group/link
                      "
                    >
                      <span
                        className="
                          text-[15px]
                          sm:text-[16px]
                          lg:text-[17px]
                          xl:text-[clamp(17px,0.88vw,21px)]

                          font-semibold

                          text-gray-900
                        "
                      >
                        View Case Study
                      </span>

                      <div
                        className="
                          border
                          border-[#1DC16A]

                          rounded-full

                          w-[44px]
                          h-[44px]
                          sm:w-[48px]
                          sm:h-[48px]
                          xl:w-[clamp(48px,2.2vw,54px)]
                          xl:h-[clamp(48px,2.2vw,54px)]

                          flex
                          items-center
                          justify-center

                          shrink-0

                          text-[#17A229]

                          transition-transform
                          duration-300

                          group-hover/link:translate-x-1
                        "
                      >
                        <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* =================================================
            PREV BUTTON — floats over the left card
        ================================================= */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous case study"
          className="
            hidden
            sm:flex
            absolute
            left-[calc(70%-50vw+2vw)]
            top-1/2
            -translate-y-1/2
            z-40

            w-[44px]
            h-[44px]

            lg:w-[clamp(48px,2.48vw,62px)]
            lg:h-[clamp(48px,2.48vw,62px)]

            rounded-full

            border-3
            border-[#000000]

            bg-white

            items-center
            justify-center

            text-[#000000]

            transition-all
            duration-300

            hover:bg-[#28B023]

            active:scale-95
          "
        >
          <ArrowLeft className="w-[20px] h-[20px] lg:w-[clamp(22px,1.12vw,28px)] lg:h-[clamp(22px,1.12vw,28px)]" />
        </button>

        {/* =================================================
            NEXT BUTTON — floats over the right card
        ================================================= */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next case study"
          className="
            hidden
            sm:flex
            absolute
            right-[calc(70%-50vw+2vw)]
            top-1/2
            -translate-y-1/2
            z-40

            w-[44px]
            h-[44px]

            lg:w-[clamp(48px,2.48vw,62px)]
            lg:h-[clamp(48px,2.48vw,62px)]

            rounded-full

               border-3
            border-[#000000]

            bg-white

            items-center
            justify-center

            text-[#000000]

            transition-all
            duration-300

            hover:bg-[#28B023]

            active:scale-95
          "
        >
          <ArrowRight className="w-[20px] h-[20px] lg:w-[clamp(22px,1.12vw,28px)] lg:h-[clamp(22px,1.12vw,28px)]" />
        </button>
      </div>

      {/* =================================================
          DOTS — below the carousel
      ================================================= */}
      <div className="flex items-center justify-center gap-[7px] mt-8">
        {[0, 1, 2].map((index) => {
          const isActiveDot = index === activeIndex % 3;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-500
                ${isActiveDot
                  ? 'w-[20px] h-[7px] bg-[#28B023]'
                  : 'w-[7px] h-[7px] bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;