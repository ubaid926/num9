import React from 'react';
import { ArrowRight } from 'lucide-react';
import tradeShowImage from '../assets/starImage.jpg';
import digitalImage from '../assets/digital-experience.jpg';
import andrasImage from '../assets/andras.jpg';
import dataAnalysisImage from '../assets/data-analysis.jpg';
import interactiveImage from '../assets/Paper-Cut Web Design Workspace.png';
import laptopImage from '../assets/laptopImage.png';

/* =========================================================
   STAR PATHS (for cards 01 & 03)
========================================================= */
const STAR_PATH = `
  M 424.4 50
  Q 432 49 438 59
  L 508.3 194.6
  Q 512 201 522 201
  L 590 199.5
  Q 600 199 598 210
  L 590 295.1
  Q 589 304 580 309
  L 518.2 338
  Q 511 342 510 353
  L 498.4 555
  Q 497 566 489 557
  L 353.7 385.8
  Q 348 379 338 381
  L 155 394.4
  Q 145 395 151 386
  L 247.7 271.9
  Q 252 266 247 259
  L 158.3 127.2
  Q 153 118 164 120
  L 339.4 148.1
  Q 348 149 354 141
  L 414 56
  Q 419 50 424.4 50
  Z
`;

const OUTLINE_PATH = `
  M 425 26
  Q 438 24 446 38
  L 523 179
  Q 527 187 538 187
  L 611 184
  Q 624 184 620 198
  L 611 306
  Q 610 319 599 325
  L 537 354
  Q 529 358 528 370
  L 514 582
  Q 513 596 503 584
  L 348 405
  Q 342 397 331 399
  L 132 414
  Q 117 415 126 403
  L 226 272
  Q 231 265 225 257
  L 134 120
  Q 125 106 142 109
  L 333 137
  Q 343 139 350 129
  L 412 36
  Q 418 27 425 26
  Z
`;
/* =========================================================
   CROSS PATH GENERATOR (for card 02)
   Generates a rounded plus/cross SVG path.
========================================================= */
function crossPath(cx, cy, hw, reach, oR, iR) {
  const V = [
    [cx - hw, cy - reach], [cx + hw, cy - reach],
    [cx + hw, cy - hw], [cx + reach, cy - hw],
    [cx + reach, cy + hw], [cx + hw, cy + hw],
    [cx + hw, cy + reach], [cx - hw, cy + reach],
    [cx - hw, cy + hw], [cx - reach, cy + hw],
    [cx - reach, cy - hw], [cx - hw, cy - hw],
  ];
  const inner = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
  const n = V.length;
  const d = [];
  for (let i = 0; i < n; i++) {
    const pp = V[(i - 1 + n) % n], pc = V[i], pn = V[(i + 1) % n];
    const r = inner[i] ? iR : oR;
    const lpx = pp[0] - pc[0], lpy = pp[1] - pc[1], lp = Math.hypot(lpx, lpy);
    const lnx = pn[0] - pc[0], lny = pn[1] - pc[1], ln = Math.hypot(lnx, lny);
    const sx = pc[0] + lpx / lp * r, sy = pc[1] + lpy / lp * r;
    const ex = pc[0] + lnx / ln * r, ey = pc[1] + lny / ln * r;
    d.push(i === 0
      ? `M${sx.toFixed(1)} ${sy.toFixed(1)}`
      : `L${sx.toFixed(1)} ${sy.toFixed(1)}`
    );
    d.push(`Q${pc[0].toFixed(1)} ${pc[1].toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`);
  }
  return d.join(' ') + 'Z';
}

/* =========================================================
   SERVICES DATA
========================================================= */
const services = [
  {
    id: '01',
    titleLine1: 'TRADE SHOWS /',
    titleLine2: 'BRAND ACTIVATION',
    headingGradient: 'linear-gradient(180deg, #FCFBFB 0%, #E8E1E0 49%, #F2F2F1 100%)',
    description: 'We create the experiences\nthat make brands matter.',
    background: 'radial-gradient(ellipse at 42% 50%, #5B886A 0%, #3A6E4C 100%)',
    image: tradeShowImage,
    dark: true,
    decoration: 'star',
  },

  {
    id: '02',
    titleLine1: 'INTERACTIVE',
    titleLine2: 'DIGITAL EXPERIENCES',
    accentLine2: true,                       // blue second line
    description: 'Engaging, intuitive, and seamless experiences that bring\nyour brand to life online.',
    background: '#E8F4FF',
    topImage: digitalImage,
    mainImage: dataAnalysisImage,
    bottomImage: andrasImage,
    dark: false,
    decoration: 'cross',
  },
  {
    id: '03',
    titleLine1: 'DIGITAL VIDEO',
    titleLine2: 'PRODUCTIONS',
    headingGradient: 'linear-gradient(180deg, #FCFBFB 0%, #E8E1E0 49%, #F2F2F1 100%)',
    description: 'Designing intuitive experiences that\nengage users across digital platforms.',
    background: 'linear-gradient(135deg, #263E50 0%, #527184 100%)',
    image: interactiveImage,
    dark: true,
    decoration: 'circles',
  },
  {
    id: '04',
    titleLine1: 'DIGITAL',
    titleLine2: 'MARKETING',
    description: 'Driving engagement through content,\ncreators, and targeted paid campaigns',
    background: 'linear-gradient(180deg, #E7D2C2 0%, #F1B68F 100%)',
    image: laptopImage,
    dark: false,
    lightBtn: true,
    decoration: 'laptop',
  },
];

/* =========================================================
   CROSS DECORATION — three plus shapes (card 02 only)
========================================================= */
const crossPath2 = (
  cx,
  cy,
  halfArm,
  halfSize,
  outerRadius = 18,
  innerRadius = 22
) => {
  const l = cx - halfSize;
  const r = cx + halfSize;
  const t = cy - halfSize;
  const b = cy + halfSize;

  const il = cx - halfArm;
  const ir = cx + halfArm;
  const it = cy - halfArm;
  const ib = cy + halfArm;

  return `
    M ${il + outerRadius} ${t}

    L ${ir - outerRadius} ${t}
    Q ${ir} ${t} ${ir} ${t + outerRadius}

    L ${ir} ${it - innerRadius}
    Q ${ir} ${it} ${ir + innerRadius} ${it}

    L ${r - outerRadius} ${it}
    Q ${r} ${it} ${r} ${it + outerRadius}

    L ${r} ${ib - outerRadius}
    Q ${r} ${ib} ${r - outerRadius} ${ib}

    L ${ir + innerRadius} ${ib}
    Q ${ir} ${ib} ${ir} ${ib + innerRadius}

    L ${ir} ${b - outerRadius}
    Q ${ir} ${b} ${ir - outerRadius} ${b}

    L ${il + outerRadius} ${b}
    Q ${il} ${b} ${il} ${b - outerRadius}

    L ${il} ${ib + innerRadius}
    Q ${il} ${ib} ${il - innerRadius} ${ib}

    L ${l + outerRadius} ${ib}
    Q ${l} ${ib} ${l} ${ib - outerRadius}

    L ${l} ${it + outerRadius}
    Q ${l} ${it} ${l + outerRadius} ${it}

    L ${il - innerRadius} ${it}
    Q ${il} ${it} ${il} ${it - innerRadius}

    L ${il} ${t + outerRadius}
    Q ${il} ${t} ${il + outerRadius} ${t}

    Z
  `;
};

const CrossDecoration = ({
  topImage,
  mainImage,
  bottomImage,
  serviceId,
}) => {
  const crosses = [
    {
      id: 'top',
      cx: 390,
      cy: 48,
      halfArm: 21,
      halfSize: 58,
      outerRadius: 13,
      innerRadius: 15,
      imageScale: 1.18,
      image: topImage,
    },

    {
      id: 'main',
      cx: 468,
      cy: 248,
      halfArm: 48,
      halfSize: 132,
      outerRadius: 22,
      innerRadius: 28,
      imageScale: 1.12,
      image: mainImage,
    },

    {
      id: 'bottom',
      cx: 355,
      cy: 412,
      halfArm: 20,
      halfSize: 55,
      outerRadius: 13,
      innerRadius: 16,
      imageScale: 1.2,
      image: bottomImage,
    },
  ];

  // Mobile cross positions — matches the reference image layout:
  // large main cross centered at bottom overflowing, small ones at corners
  const mobileCrosses = [
    {
      id: 'top',     // small purple cross — top-right, partially outside card
      cx: 350,
      cy: 290,
      halfArm: 21,
      halfSize: 58,
      outerRadius: 13,
      innerRadius: 15,
      imageScale: 1.18,
      image: topImage,
    },
    {
      id: 'main',    // large cross with VR person — bottom-center, overflowing below
      cx: 110,
      cy: 400,
      halfArm: 48,
      halfSize: 102,
      outerRadius: 20,
      innerRadius: 25,
      imageScale: 1.14,
      image: mainImage,
    },

  ];

  const renderCrosses = (crossList, idSuffix) => (
    <>
      <defs>
        {crossList.map((cross, index) => (
          <clipPath
            key={`clip-${cross.id}-${idSuffix}`}
            id={`crossClip-${serviceId}-${idSuffix}-${index}`}
          >
            <path
              d={crossPath2(
                cross.cx, cross.cy,
                cross.halfArm, cross.halfSize,
                cross.outerRadius, cross.innerRadius
              )}
            />
          </clipPath>
        ))}
      </defs>

      {crossList.map((cross, index) => {
        const imageSize = cross.halfSize * 2 * cross.imageScale;
        return (
          <image
            key={`image-${cross.id}-${idSuffix}`}
            href={cross.image}
            x={cross.cx - imageSize / 2}
            y={cross.cy - imageSize / 2}
            width={imageSize}
            height={imageSize}
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#crossClip-${serviceId}-${idSuffix}-${index})`}
          />
        );
      })}

      {crossList.map((cross) => (
        <path
          key={`outline-${cross.id}-${idSuffix}`}
          d={crossPath2(
            cross.cx, cross.cy,
            cross.halfArm, cross.halfSize,
            cross.outerRadius, cross.innerRadius
          )}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </>
  );

  return (
    <>
      {/* ── Mobile SVG (hidden at md+) ── */}
      <svg
        viewBox="0 0 360 400"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
        className="
          absolute
          pointer-events-none
          overflow-visible
          z-10
          md:hidden

          w-full
          h-full
          inset-0
        "
      >
        {renderCrosses(mobileCrosses, 'mob')}
      </svg>

      {/* ── Desktop SVG (hidden below md) ── */}
      <svg
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
        className="
          hidden
          md:block
          absolute
          pointer-events-none
          overflow-visible
          z-10
          inset-auto
          right-0
          top-0
          w-[58%]
          h-full
        "
      >
        {renderCrosses(crosses, 'desk')}
      </svg>
    </>
  );
};
/* =========================================================
   CIRCLE DECORATION — four overlapping circles (card 03 only)
========================================================= */
const CircleDecoration = ({
  image,
}) => {
  return (
    <img
      src={image}
      alt=""
      draggable={false}
      className="
        absolute
        z-10
        pointer-events-none
        select-none
        -right-10
        bottom-[-70px]
        top-auto
        h-[320px]
        w-auto
        max-w-[85%]
        md:top-[-40px]
        md:bottom-0
        md:h-full
        md:max-w-none
        object-contain
        object-right
      "
    />
  );
};
/* =========================================================
   SERVICE CARD
========================================================= */
const ServiceCard = ({ service }) => {
  const { dark, decoration, accentLine2 } = service;
  const isCross = decoration === 'cross';

  return (
    <div
      className={`
        relative
        w-full
        flex
        flex-col
        min-h-0
        md:min-h-[520px]
        lg:min-h-[600px]
        xl:min-h-[685px]
        rounded-[18px]
        overflow-visible
        md:overflow-visible
        ${decoration === 'star' ? 'pb-[140px] sm:pb-[170px] md:pb-0' : ''}
        ${decoration === 'cross' ? 'pb-[200px] sm:pb-[220px] md:pb-0' : ''}
        ${decoration === 'circles' ? 'pb-[220px] sm:pb-[240px] md:pb-0' : ''}
        ${decoration === 'laptop' ? 'pb-[180px] sm:pb-[200px] md:pb-0' : ''}
      `}
      style={{ background: service.background }}
    >
      {/* ── Text Content ── */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-full
          md:max-w-[60%]
          lg:max-w-[55%]
          md:min-h-[520px]
          lg:min-h-[600px]
          xl:min-h-[685px]
          px-5
          py-7
          sm:px-8
          sm:py-9
          md:px-10
          md:py-12
          lg:px-14
          lg:py-14
          xl:px-16
          xl:py-16
          flex
          flex-col
          justify-start
          md:justify-center
          items-start
        "
      >
        {/* Accent line */}
        <div
          className={`w-[28px] sm:w-[34px] md:w-[38px] h-[3px] mb-5 sm:mb-6 md:mb-7 rounded-full ${dark ? 'bg-white' : 'bg-gray-900'
            }`}
        />

        {/* Heading */}
        <h3
          className={`
            text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[72px]
            2xl:text-[93px]
            font-bold
            leading-[1.02]
            md:leading-[0.95]
            tracking-[-0.04em]
            ${service.headingGradient ? 'bg-clip-text text-transparent inline-block' : ''}
          `}
          style={
            service.headingGradient
              ? {
                backgroundImage: service.headingGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }
              : undefined
          }
        >
          <span
            className={`block ${service.headingGradient
              ? ''
              : dark
                ? 'text-white'
                : 'text-gray-900'
              }`}
          >
            {service.titleLine1}
          </span>
          <span
            className={`block ${service.headingGradient
              ? ''
              : dark
                ? 'text-white'
                : accentLine2
                  ? 'text-[#2563EB]'
                  : 'text-gray-900'
              }`}
          >
            {service.titleLine2}
          </span>
        </h3>

        {/* Description */}
        <p
          className={`
            whitespace-normal
            lg:whitespace-pre-line
            mt-4
            sm:mt-5
            md:mt-6
            text-[18px]
            sm:text-[16px]
            md:text-[18px]
            lg:text-[24px]
            xl:text-[28px]
            2xl:text-[33px]
            leading-[1.45]
            md:leading-[1.35]
            max-w-[42rem]
            2xl:max-w-[880px]
            ${dark ? 'text-white/85' : 'text-gray-600'}
          `}
        >
          {service.description}
        </p>

        {/* Learn More button */}
        <a
          href="#"
          className={`
            mt-6
            sm:mt-8
            md:mt-9
            inline-flex
            items-center
            gap-3
            sm:gap-4
            pl-4
            sm:pl-5
            pr-3
            h-[40px]
            sm:h-[42px]
            lg:h-[52px]
            rounded-full
            text-[13px]
            sm:text-[14px]
            md:text-[16px]
            lg:text-[20px]
            xl:text-[25px]
            font-medium
            transition-all
            duration-300
            group
            ${dark || service.lightBtn
              ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm'
              : 'bg-gray-900 text-white hover:bg-black shadow-sm'
            }
          `}
        >
          <span>Learn More</span>
          <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>

      <div className="contents pointer-events-none">
        {/* ── Decoration: STAR (card 01 only) ── */}
        {decoration === 'star' && (
          <svg
            viewBox="0 0 640 640"
            className="
        absolute
        pointer-events-none
        overflow-visible
        z-10

        w-[300px]
        h-[300px]
        right-[-20px]
        bottom-[-100px]
        top-auto

        sm:w-[340px]
        sm:h-[340px]
        sm:right-[-40px]
        sm:bottom-[-170px]

        md:w-[480px]
        md:h-[480px]
        md:right-[-120px]
        md:bottom-auto
        md:top-[-90px]

        lg:w-[590px]
        lg:h-[590px]
        lg:right-[-150px]
        lg:top-[-110px]

        xl:w-[650px]
        xl:h-[650px]
        xl:right-[-155px]
        xl:top-[-125px]

        2xl:w-[890px]
        2xl:h-[890px]
        2xl:right-[-165px]
        2xl:top-[-135px]
      "
          >
            <defs>
              <clipPath id={`starClip-${service.id}`}>
                <path d={STAR_PATH} />
              </clipPath>
            </defs>

            {/* Star image */}
            <image
              href={service.image}
              x="115"
              y="40"
              width="525"
              height="525"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#starClip-${service.id})`}
            />

            {/* Thin outline */}
            <path
              d={OUTLINE_PATH}
              fill="none"
              stroke={
                dark
                  ? 'rgba(255,255,255,0.48)'
                  : 'rgba(255,255,255,0.50)'
              }
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}

        {/* ── Decoration: CROSS (card 02) ── */}
        {isCross && (
          <CrossDecoration
            topImage={digitalImage}
            mainImage={dataAnalysisImage}
            bottomImage={andrasImage}
            serviceId={service.id}
          />
        )}

        {/* ── Decoration: CIRCLES (card 03) ── */}
        {decoration === 'circles' && (
          <CircleDecoration image={service.image} />
        )}

        {/* ── Decoration: LAPTOP (card 04) ── */}
        {decoration === 'laptop' && (
          <div
            className="
            absolute
            right-[-8%]
            sm:right-[-6%]
            md:-right-10
            lg:-right-12
            xl:-right-1
            bottom-[-10px]
            sm:bottom-[-100px]
            md:bottom-auto
            md:-top-12
            lg:-top-14
            xl:top-33
            w-[95%]
            max-w-[360px]
            sm:max-w-[400px]
            md:w-[540px]
            md:max-w-none
            lg:w-[660px]
            xl:w-[760px]
            2xl:w-[1020px]
            pointer-events-none
            z-10
            flex
            items-center
            justify-center
          "
          >
            <img
              src={service.image}
              alt="Digital Marketing Dashboard"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================
   SECTION
========================================================= */
const WhatWeDo = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="w-full px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-bold tracking-[-0.035em] leading-none text-black">
            What We Do
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center justify-between shrink-0 pb-1 border-b border-black text-[16px] lg:text-[22px] text-black group gap-3"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col gap-[110px] sm:gap-12 lg:gap-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobile / tablet explore button */}
        <a
          href="#"
          className="md:hidden mt-8 inline-flex items-center gap-3 pb-1 border-b border-black text-[14px] sm:text-[16px] text-black"
        >
          Explore All Services
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
};

export default WhatWeDo;
