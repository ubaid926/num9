import React, { useState, useRef } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';



import carImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1.png';

import microsoftImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1 (1).png';

import emiratesImage from '../assets/ChatGPT Image Jun 19, 2026, 07_52_28 PM 1 (2).png';



import lexuslogo from '../assets/Logo (2).png';

import msLogo from '../assets/mlogo 1.png';

import emiratesLogo from '../assets/Logos/ClientsGrid_Logos/emirates.png';



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
    route: 'case-study/lexus',

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
    route: 'case-study/microsoft',

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
    route: 'case-study/emirates',

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

  // {

  //   ...originalCaseStudies[0],

  //   id: '07',

  // },

];



const CaseStudies = ({ onNavigate }) => {
  const handleNavigateClick = (e, targetPage) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    if (!targetPage) return;
    if (onNavigate) {
      onNavigate(targetPage);
    } else if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (targetPage === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', targetPage);
      }
      window.location.href = url.toString();
    }
  };

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

        max-w-[1920px]

        mx-auto

        bg-white

        overflow-x-clip

        pt-8

        sm:pt-12

        lg:pt-12

        xl:pt-12

        2xl:pt-20

        pb-8

        sm:pb-0
        lg:pb-12
        xl:pb-14
        2xl:pb-0

      "

    >

      {/* =====================================================

          TOP CONTENT

      ===================================================== */}



      <div className="w-full">

        {/* =================================================

            WE ARE MOMENTUM

        ================================================= */}



        {/* <div

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

            We are No 9

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

        </div> */}



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

            mb-[14px]

            sm:mb-[16px]

            lg:mb-[18px]

            xl:mb-[18px]

            2xl:mb-[24px]

          "

        >

          <h2

            className="

              text-[36px]

              sm:text-[44px]

              md:text-[52px]

              lg:text-[56px]

              xl:text-[60px]

              2xl:text-[clamp(68px,3.7vw,92px)]

              font-bold

              tracking-tight

              leading-none

            "

          >

            Latest

          </h2>

          {/* Top-right Navigation Controls: Dots + Prev/Next buttons (as in reference image) */}
          {/* <div className="hidden sm:flex items-center gap-5 lg:gap-7">
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    dotIdx === (activeIndex % 3)
                      ? 'w-2.5 h-2.5 bg-[#17A229]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous case study"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#17A229] flex items-center justify-center text-[#17A229] bg-white hover:bg-[#17A229] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next case study"
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#17A229] flex items-center justify-center text-[#17A229] bg-white hover:bg-[#17A229] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div> */}

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



          h-[560px]
          sm:h-[580px]
          md:h-[600px]
          lg:h-[530px]
          xl:h-[535px]
          2xl:h-[741px]
          case-studies-carousel-container
          overflow-visible

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
                if (!isActive && isVisible) {
                  setActiveIndex(index);
                } else if (isActive && study.route) {
                  handleNavigateClick(null, study.route);
                }
              }}

              className={`

                absolute
                left-1/2
                top-1/2
                h-full

                transition-all
                duration-[700ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                w-[85vw]
                max-w-[420px]
                sm:w-[380px]
                sm:max-w-none
                md:w-[380px]
                lg:w-[30%]
                lg:max-w-[340px]
                xl:w-[28.5%]
                xl:max-w-[390px]
                2xl:w-[33%]
                2xl:max-w-[580px]

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
                 * -1 = left
                 *  0 = center
                 * +1 = right
                 */
                transform: `
                  translate(
                    calc(
                      -50% +
                      ${position * 110}%
                    ),
                    -50%
                  )
                  scale(${isActive ? 1 : 0.83})
                `,



                /*

                 * EXACTLY 3 visible:

                 */

                opacity: !isVisible

                  ? 0

                  : isActive

                    ? 1

                    : 0.72,



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

                  h-full

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
                    ? `shadow-[0_10px_14px_-6px_rgba(0,0,0,0.18),0_24px_34px_-12px_rgba(0,0,0,0.16),0_4px_12px_rgba(0,0,0,0.05)]`
                    : `shadow-[0_8px_16px_-8px_rgba(0,0,0,0.10),0_15px_25px_-12px_rgba(0,0,0,0.09)]`
                  }


                `}

                style={{
                  height: '100%',
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
                    case-studies-card-img
                    h-[245px]
                    sm:h-[255px]
                    lg:h-[220px]
                    xl:h-[225px]
                    2xl:h-[375px]
                  "
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




                  <button
                    type="button"
                    aria-label={`View ${study.titleLine1} Case Study`}
                    onClick={(e) => handleNavigateClick(e, study.route)}
                    className="
    absolute bottom-4 right-4
    w-[44px] h-[44px]
    lg:w-[62px] lg:h-[62px]
    rounded-full bg-white
    flex items-center justify-center
    shadow-lg
    transition-all duration-300
    hover:scale-110 active:scale-95
    cursor-pointer z-20
    opacity-100 translate-y-0
  "
                  >
                    <ArrowRight
                      className="
      text-[#17A229]
      w-5 h-5
      lg:w-8 lg:h-8
    "
                    />
                  </button>


                </div>



                {/* =================================================

                    CONTENT

                ================================================= */}



                <div
                  className={`p-5 sm:p-6 ${isActive ? 'lg:p-4.5 xl:p-5 2xl:p-8' : 'lg:p-4 xl:p-4.5 2xl:p-7'
                    } flex flex-col justify-between flex-1 transition-all duration-300`}
                >
                  {/* 1. CATEGORY BADGE (Top) */}
                  <span
                    className={`self-start inline-flex items-center rounded-full border border-[#28B023] text-[#28B023] font-medium transition-all duration-300 text-[12px] sm:text-[13px] ${isActive
                        ? 'lg:text-[13px] xl:text-[13.5px] 2xl:text-[18px] px-3.5 xl:px-3.5 2xl:px-5 py-0.5 xl:py-1 2xl:py-2'
                        : 'lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px] px-3 xl:px-3 2xl:px-4 py-[4px] 2xl:py-[6px]'
                      }`}
                  >
                    {study.category}
                  </span>

                  {/* 2. MIDDLE GROUP: TITLE + ICON + DESCRIPTION (Centered) */}
                  <div
                    className={`flex flex-col ${isActive ? 'gap-1.5 sm:gap-2.5 lg:gap-2 xl:gap-2 2xl:gap-3.5' : 'gap-1.5 sm:gap-2.5 lg:gap-2 xl:gap-2 2xl:gap-4'
                      } my-auto py-1 sm:py-1.5 xl:py-1.5 2xl:py-3`}
                  >
                    {/* TITLE + ICON */}
                    <div className="flex justify-between items-start gap-3 xl:gap-4">
                      <h3 className="leading-[1.12] flex-1">
                        <span
                          className={`block whitespace-nowrap text-[22px] sm:text-[24px] ${isActive ? 'lg:text-[24px] xl:text-[26px] 2xl:text-[42px]' : 'lg:text-[20px] xl:text-[22px] 2xl:text-[34px]'
                            } font-semibold tracking-[-0.02em] text-gray-900 transition-all duration-300`}
                        >
                          {study.titleLine1}
                        </span>

                        <span
                          className={`block text-[22px] sm:text-[24px] ${isActive ? 'lg:text-[24px] xl:text-[26px] 2xl:text-[42px]' : 'lg:text-[20px] xl:text-[22px] 2xl:text-[34px]'
                            } font-semibold tracking-[-0.02em] text-[#1DC16A] transition-all duration-300`}
                        >
                          {study.titleLine2}
                        </span>
                      </h3>

                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 ${isActive
                            ? 'w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[44px] lg:h-[44px] xl:w-[46px] xl:h-[46px] 2xl:w-[68px] 2xl:h-[68px] p-2 xl:p-2.5 2xl:p-3.5'
                            : 'w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[38px] lg:h-[38px] xl:w-[40px] xl:h-[40px] 2xl:w-[52px] 2xl:h-[52px] p-2 xl:p-2 2xl:p-3'
                          } rounded-full flex items-center justify-center bg-[#E1F5ED] transition-all duration-300`}
                      >
                        {study.icon}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-[14px] sm:text-[15px] ${isActive
                          ? 'lg:text-[13px] xl:text-[13.5px] 2xl:text-[20px] leading-[1.38] 2xl:leading-[1.45] text-gray-800'
                          : 'lg:text-[12px] xl:text-[12.5px] 2xl:text-[16px] leading-[1.38] 2xl:leading-[1.55] text-gray-600'
                        } transition-all duration-300`}
                    >
                      {study.description}
                    </p>
                  </div>

                  {/* 3. VIEW CASE STUDY (Bottom) */}
                  <div className="pt-1.5 sm:pt-2 xl:pt-2 2xl:pt-3">
                    <a
                      href={study.route ? `?page=${study.route}` : '#'}
                      onClick={(e) => handleNavigateClick(e, study.route)}
                      className="flex items-center justify-between group/link"
                    >
                      <span
                        className={`text-[15px] sm:text-[16px] ${isActive
                            ? 'lg:text-[15px] xl:text-[16px] 2xl:text-[21px] font-semibold text-gray-900'
                            : 'lg:text-[13px] xl:text-[14px] 2xl:text-[17px] font-medium text-gray-600'
                          } transition-all duration-300`}
                      >
                        View Case Study
                      </span>

                      <div
                        className={`border border-[#1DC16A] rounded-full ${isActive
                            ? 'w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[40px] lg:h-[40px] xl:w-[42px] xl:h-[42px] 2xl:w-[58px] 2xl:h-[58px]'
                            : 'w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] lg:w-[34px] lg:h-[34px] xl:w-[36px] xl:h-[36px] 2xl:w-[44px] 2xl:h-[44px]'
                          } flex items-center justify-center shrink-0 text-[#17A229] transition-all duration-300 group-hover/link:translate-x-1`}
                      >
                        <ArrowRight className={`${isActive ? 'w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7' : 'w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5'} transition-all duration-300`} />
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

        {/* <button

          type="button"

          onClick={handlePrev}

          aria-label="Previous case study"

          className="

            hidden

            sm:flex

            absolute

            left-[3%] lg:left-[5%]

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

        </button> */}



        {/* =================================================

            NEXT BUTTON — floats over the right card

        ================================================= */}

        {/* <button

          type="button"

          onClick={handleNext}

          aria-label="Next case study"

          className="

            hidden

            sm:flex

            absolute

            right-[3%] lg:right-[5%]

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

        </button> */}

      </div>



      {/* =================================================

          DOTS — below the carousel

      ================================================= */}

      <div className="flex sm:hidden items-center justify-center gap-[7px] mt-8">

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