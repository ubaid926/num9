import React from "react";
import { ArrowRight } from "lucide-react";
import tradeShowImage from "../assets/Star-Cut Exhibition Booth Scene.webp";
import dialImage from "../assets/whatWeDoImages/Finger pressing a brushed silver dial 1.webp";
import suvConfiguratorImage from "../assets/whatWeDoImages/Touchscreen SUV configurator 1.webp";
import beigeFabricImage from "../assets/whatWeDoImages/Hand Lifting Textured Beige Fabric 1.webp";
import cinematicCollageImage from "../assets/whatWeDoImages/Cinematic Filmmaking Blob Collage.webp";
import mobileImageDigitalVideo from "../assets/mobileImageDigitalVideo.png";
import laptopImage from "../assets/laptopImage.webp";

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

const STAR_BORDER_PATH = `
  M 260 -40
  C 255 -20 265 0 280 20
  L 400 145
  Q 420 165 443 160
  L 545 145
  Q 570 140 583 160

  M 635 20
  L 700 160

  M 685 295
  L 540 375
  Q 520 390 535 412
  L 680 620

  M 395 665
  L 315 505
  Q 305 485 285 488
  L 100 505
  Q 65 510 50 490
  Q 42 475 60 455
  L 220 292
  Q 237 275 222 255
  L 105 115
`;
/* =========================================================
   CROSS PATH GENERATOR (for card 02)
   Generates a rounded plus/cross SVG path.
========================================================= */
function crossPath(cx, cy, hw, reach, oR, iR) {
  const V = [
    [cx - hw, cy - reach],
    [cx + hw, cy - reach],
    [cx + hw, cy - hw],
    [cx + reach, cy - hw],
    [cx + reach, cy + hw],
    [cx + hw, cy + hw],
    [cx + hw, cy + reach],
    [cx - hw, cy + reach],
    [cx - hw, cy + hw],
    [cx - reach, cy + hw],
    [cx - reach, cy - hw],
    [cx - hw, cy - hw],
  ];
  const inner = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
  const n = V.length;
  const d = [];
  for (let i = 0; i < n; i++) {
    const pp = V[(i - 1 + n) % n],
      pc = V[i],
      pn = V[(i + 1) % n];
    const r = inner[i] ? iR : oR;
    const lpx = pp[0] - pc[0],
      lpy = pp[1] - pc[1],
      lp = Math.hypot(lpx, lpy);
    const lnx = pn[0] - pc[0],
      lny = pn[1] - pc[1],
      ln = Math.hypot(lnx, lny);
    const sx = pc[0] + (lpx / lp) * r,
      sy = pc[1] + (lpy / lp) * r;
    const ex = pc[0] + (lnx / ln) * r,
      ey = pc[1] + (lny / ln) * r;
    d.push(
      i === 0
        ? `M${sx.toFixed(1)} ${sy.toFixed(1)}`
        : `L${sx.toFixed(1)} ${sy.toFixed(1)}`,
    );
    d.push(
      `Q${pc[0].toFixed(1)} ${pc[1].toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
    );
  }
  return d.join(" ") + "Z";
}

/* =========================================================
   SERVICES DATA
========================================================= */
const services = [
  {
    id: "01",
    titleLine1: "TRADE SHOWS /",
    titleLine2: "EXPERIENTIAL MARKETING",
    route: "service/trade-shows-experiential-marketing",
    headingGradient:
      "linear-gradient(180deg, #FCFBFB 0%, #E8E1E0 49%, #F2F2F1 100%)",
    description:
      "We design custom trade show booths and immersive experiences that drive measurable brand engagement.",
    background: "radial-gradient(ellipse at 42% 50%, #5B886A 0%, #3A6E4C 100%)",
    image: tradeShowImage,
    dark: true,
    decoration: "star",
  },
  {
    id: "02",
    titleLine1: "INTERACTIVE",
    titleLine1Gradient:
      "linear-gradient(90deg, #000000 0%, #3D3D3D 49%, #000000 100%)",
    titleLine2: "DIGITAL EXPERIENCES",
    route: "service/interactive-digital-experiences",
    accentLine2: true,
    headingLine2Gradient:
      "linear-gradient(90deg, #3967FA 0%, #287CFC 45%, #1FD4FF 100%)",
    description:
      "We design immersive AR/VR, touchscreens, and gamified experiences that transform observers into active participants.",

    background: "#DCEEFF",

    topImage: dialImage,
    mainImage: suvConfiguratorImage,
    bottomImage: beigeFabricImage,

    dark: false,
    decoration: "cross",
  },
  {
    id: "03",
    titleLine1: "DIGITAL VIDEO",
    titleLine2: "PRODUCTIONS",
    route: "service/digital-video-productions",
    headingGradient:
      "linear-gradient(180deg, #FCFBFB 0%, #E8E1E0 49%, #F2F2F1 100%)",
    description:
      "We produce high-impact video commercials and digital content that elevate your brand's storytelling.",
    background: "linear-gradient(135deg, #2A3E50 0%, #455E71 100%)",
    image: cinematicCollageImage,
    mobileImage: mobileImageDigitalVideo,
    dark: true,
    decoration: "circles",
  },
  {
    id: "04",
    titleLine1: "DIGITAL MARKETING /",
    titleLine2: "SPECIALTY DISTRIBUTION",
    route: "service/digital-marketing",
    description:
      "Amplify your reach with strategic marketing campaigns and targeted specialty distribution to niche markets.",
    background: "linear-gradient(180deg, #E7D2C2 0%, #F1B68F 100%)",
    image: laptopImage,
    dark: false,
    lightBtn: true,
    decoration: "laptop",
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
  innerRadius = 22,
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

/* =========================================================
   SINGLE CROSS COMPONENT (SVG with cross clipPath & outline)
========================================================= */
const SingleCross = ({
  id,
  image,
  className = "",
  stroke = "rgba(0, 0, 0, 0.08)",
}) => {
  // 120 x 120 box, cx=60, cy=60, halfArm=22, halfSize=56, outerRadius=8, innerRadius=10
  const path = crossPath2(60, 60, 22, 56, 8, 10);
  const clipId = `crossClip-${id}`;

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={path} />
          </clipPath>
        </defs>
        <image
          href={image}
          x="0"
          y="0"
          width="120"
          height="120"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />
        <path
          d={path}
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

/* =========================================================
   CROSS DECORATION — three plus shapes (card 02 only)
   Matches reference layout:
   - Top Cross: top arm overflows above top card border, positioned at top-right
   - Main Cross: vertically centered, right arm overflows past right card border
   - Bottom Cross: bottom arm overflows below bottom card border, positioned directly under main cross's left arm
========================================================= */
const CrossDecoration = ({ topImage, mainImage, bottomImage, serviceId }) => {
  return (
    <>
      {/* ── Mobile Cross Cluster (< md) — matches reference layout ── */}
      <div className="md:hidden absolute left-0 right-0 bottom-0 h-[280px] min-[390px]:h-[300px] sm:h-[330px] pointer-events-none overflow-visible">
        {/* Upper Small Cross (Dial) - Upper Right */}
        <SingleCross
          id={`${serviceId}-mob-top`}
          image={topImage}
          className="
            absolute
            z-10
            bottom-[190px] min-[390px]:bottom-[205px] sm:bottom-[230px]
            right-[6%] min-[390px]:right-[8%] sm:right-[12%]
            w-[72px] h-[72px]
            min-[390px]:w-[78px] min-[390px]:h-[78px]
            sm:w-[86px] sm:h-[86px]
          "
        />

        {/* Main Big Cross (SUV Configurator) - Center Right */}
        <SingleCross
          id={`${serviceId}-mob-main`}
          image={mainImage}
          className="
            absolute
            z-10
            bottom-[30px] min-[390px]:bottom-[35px] sm:bottom-[40px]
            right-[-12px] min-[390px]:right-[-8px] sm:right-[0px]
            w-[220px] h-[220px]
            min-[390px]:w-[245px] min-[390px]:h-[245px]
            sm:w-[270px] sm:h-[270px]
          "
        />

        {/* Lower Small Cross (Beige Fabric) - Bottom Right / Under Main */}
        <SingleCross
          id={`${serviceId}-mob-bottom`}
          image={bottomImage}
          className="
            absolute
            z-10
            bottom-[-14px] min-[390px]:bottom-[-16px] sm:bottom-[-20px]
            right-[20%] min-[390px]:right-[22%] sm:right-[24%]
            w-[68px] h-[68px]
            min-[390px]:w-[74px] min-[390px]:h-[74px]
            sm:w-[82px] sm:h-[82px]
          "
        />
      </div>

      {/* ── Desktop Cross Cluster (md+) — matches exact reference ── */}
      <div className="hidden md:block pointer-events-none">
        {/* Top Cross (Dial) - Top arm overflows card top edge */}
        <SingleCross
          id={`${serviceId}-desk-top`}
          image={topImage}
          className="
            absolute
            z-10
            -top-3 md:-top-4 lg:-top-5 xl:-top-6
            right-[21%] md:right-[22%] lg:right-[22%] xl:right-[22%] 2xl:right-[21%]
            w-[90px] h-[90px]
            md:w-[110px] md:h-[110px]
            lg:w-[120px] lg:h-[120px]
            xl:w-[130px] xl:h-[130px]
            2xl:w-[140px] 2xl:h-[140px]
          "
        />

        {/* Main Cross (SUV Configurator) - Vertically centered, sits inside right edge with clean margin */}
        <SingleCross
          id={`${serviceId}-desk-main`}
          image={mainImage}
          className="
            absolute
            z-10
            top-1/2 -translate-y-1/2
            right-3 sm:right-5 md:right-7 lg:right-9 xl:right-12
            w-[260px] h-[260px]
            md:w-[310px] md:h-[310px]
            lg:w-[350px] lg:h-[350px]
            xl:w-[400px] xl:h-[400px]
            2xl:w-[440px] 2xl:h-[440px]
          "
        />

        {/* Bottom Cross (Beige Fabric) - Bottom arm touches card bottom edge, sits under main cross's left arm */}
        <SingleCross
          id={`${serviceId}-desk-bottom`}
          image={bottomImage}
          className="
            absolute
            z-10
            -bottom-2 md:-bottom-3 lg:-bottom-4 xl:-bottom-5
            right-[25%] md:right-[26%] lg:right-[26%] xl:right-[26%] 2xl:right-[25%]
            w-[90px] h-[90px]
            md:w-[105px] md:h-[105px]
            lg:w-[115px] lg:h-[115px]
            xl:w-[130px] xl:h-[130px]
            2xl:w-[140px] 2xl:h-[140px]
          "
        />
      </div>
    </>
  );
};
/* =========================================================
   CIRCLE DECORATION — overlapping circles (card 03 only)
========================================================= */
const CircleDecoration = ({ image }) => {
  return (
    <div
      className="
        absolute
        z-10
        pointer-events-none
        select-none
        right-[-6px] min-[390px]:right-[-10px]
        bottom-[-10px] min-[390px]:bottom-[-15px]
        h-[240px] min-[390px]:h-[260px] sm:h-[290px]
        md:right-0
        md:bottom-0
        md:h-[calc(100%+16px)]
        lg:h-[calc(100%+20px)]
        xl:h-[calc(100%+24px)]
        w-auto
        max-w-[85%]
        md:max-w-[46%]
        lg:max-w-[44%]
        xl:max-w-[42%]
        2xl:max-w-[40%]
        flex
        items-end
        justify-end
      "
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-auto max-w-none object-contain object-bottom-right"
      />
    </div>
  );
};
/* =========================================================
   SERVICE CARD
========================================================= */
const ServiceCard = ({ service, onNavigate }) => {
  const { dark, decoration, accentLine2 } = service;
  const isCross = decoration === "cross";

  return (
    <div
      data-wwd-card="true"
      className={`
        relative
        w-full
        max-w-full
        flex
        flex-col
        rounded-[18px]
        min-[390px]:rounded-[20px]
        md:rounded-[18px]
        ${decoration === "star"
          ? "overflow-hidden md:overflow-visible"
          : "overflow-visible"
        }
${decoration === "star"
  ? "min-h-[445px] min-[360px]:min-h-[455px] min-[390px]:min-h-[465px] sm:min-h-[490px] md:min-h-[420px]"
  : "min-h-[415px] min-[360px]:min-h-[425px] min-[390px]:min-h-[435px] sm:min-h-[460px] md:min-h-[420px]"
}
        lg:min-h-[460px]
        xl:min-h-[500px]
        2xl:min-h-[530px]
      `}

      style={{
        background: service.background,
        borderColor:
          service.id === "04"
            ? "#686565"
            : decoration === "cross"
              ? "#76A9FF"
              : "transparent",
        borderWidth:
          service.id === "04" || decoration === "cross"
            ? "1px"
            : "0px",
        borderStyle: "solid",
        borderRadius: "18px",
      }}

    >
      {/* ── Text Content ── */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-full
          md:max-w-[54%]
          lg:max-w-[52%]
          xl:max-w-[50%]
          2xl:max-w-[52%]
          md:min-h-[420px]
          lg:min-h-[460px]
          xl:min-h-[500px]
          2xl:min-h-[530px]
          px-4
          pt-5
          pb-0
          min-[360px]:px-5
          min-[360px]:pt-5
          min-[390px]:px-6
          min-[390px]:pt-6
          sm:px-8
          sm:pt-8
          sm:pb-0
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
          xl:gap-8
          items-start
        "
      >
        {/* Accent line - hidden on mobile */}
        <div
          className={`hidden md:block w-[24px] sm:w-[30px] md:w-[38px] h-[2.5px] md:h-[3px] mb-3.5 sm:mb-4 md:mb-6 rounded-full ${dark ? "bg-white" : "bg-[#171717]"
            }`}
        />

        {/* Heading */}
        <h3
          className={`
            text-[20px]
            min-[360px]:text-[22px]
            min-[390px]:text-[24px]
            sm:text-[28px]
            md:text-[34px]
            lg:text-[42px]
            xl:text-[54px]
            2xl:text-[66px]
            font-bold
            leading-[1.08]
            min-[390px]:leading-[1.06]
            sm:leading-[1.05]
            md:leading-[0.98]
            lg:leading-[1.0]
            xl:leading-[1.02]
            tracking-[-0.035em]
            ${service.headingGradient ? "bg-clip-text text-transparent inline-block" : ""}
          `}
          style={
            service.headingGradient
              ? {
                backgroundImage: service.headingGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
              : undefined
          }
        >
          <span
            className={`block ${service.headingGradient
              ? ""
              : service.titleLine1Gradient
                ? "bg-clip-text text-transparent"
                : dark
                  ? "text-white"
                  : "text-gray-900"
              }`}
            style={
              service.titleLine1Gradient
                ? {
                  backgroundImage: service.titleLine1Gradient,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
                : undefined
            }
          >
            {service.id === "04" ? (
              <>
                <span className="block md:inline">DIGITAL</span>{" "}
                <span className="block md:inline">MARKETING /</span>
              </>
            ) : (
              service.titleLine1
            )}
          </span>

          <span
            className={`block whitespace-normal md:whitespace-nowrap ${service.headingGradient
              ? ""
              : dark
                ? "text-white"
                : accentLine2
                  ? "bg-clip-text text-transparent"
                  : "text-gray-900"
              }`}
            style={
              service.headingLine2Gradient
                ? {
                  backgroundImage: service.headingLine2Gradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
                : undefined
            }
          >
            {(() => {
              const words = service.titleLine2.split(" ");
              if (words.length === 2) {
                return (
                  <>
                    <span className="block md:inline">{words[0]}</span>{" "}
                    <span className="block md:inline">{words[1]}</span>
                  </>
                );
              }
              return service.titleLine2;
            })()}
          </span>
        </h3>

        {/* Description */}
        <p
          className={`
            whitespace-normal
            lg:whitespace-pre-line
            mt-2.5
            min-[360px]:mt-3
            min-[390px]:mt-3.5
            sm:mt-5
            md:mt-6
            lg:mt-7
            xl:mt-8
            text-[12px]
            min-[360px]:text-[12.5px]
            min-[390px]:text-[13px]
            sm:text-[15px]
            md:text-[17px]
            lg:text-[20px]
            xl:text-[24px]
            2xl:text-[26px]
            font-normal
            leading-[1.32]
            min-[390px]:leading-[1.35]
            md:leading-[1.35]
            max-w-[94%]
            min-[390px]:max-w-[90%]
            md:max-w-[440px]
            lg:max-w-[480px]
            xl:max-w-[540px]
            2xl:max-w-[600px]
            ${dark ? "text-white/90" : "text-[#171717]"}
          `}
        >
          {service.description}
        </p>

        {/* Learn More button */}

        <a
          href={`/${service.route || "services"}`}
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate(service.route || "services");
          }}
          className={`
            mt-3.5
            min-[360px]:mt-3.5
            min-[390px]:mt-4
            sm:mt-5
            md:mt-8
            lg:mt-10
            xl:mt-12
            inline-flex
            w-fit
            items-center
            justify-between
            gap-2.5
            min-[360px]:gap-3
            min-[390px]:gap-3.5
            sm:gap-6
            lg:gap-10
            pl-3.5
            pr-2.5
            min-[360px]:pl-4
            min-[360px]:pr-3
            min-[390px]:pl-4
            min-[390px]:pr-3
            sm:pl-6
            sm:pr-5
            h-[29px]
            min-[360px]:h-[31px]
            min-[390px]:h-[33px]
            sm:h-[40px]
            lg:h-[54px]
            rounded-full
            text-[11.5px]
            min-[360px]:text-[12px]
            min-[390px]:text-[12.5px]
            sm:text-[15px]
            lg:text-[20px]
            xl:text-[25px]
            font-medium
            whitespace-nowrap
            transition-all
            duration-300
            group
            cursor-pointer
            ${dark || service.lightBtn
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-black text-white hover:bg-gray-900"
            }
          `}
        >
          <span className="leading-none">Learn More</span>

          <svg
            width="55"
            height="24"
            viewBox="0 0 55 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              w-[20px]
              min-[360px]:w-[22px]
              min-[390px]:w-[24px]
              sm:w-[35px]
              lg:w-[55px]
              h-auto
              shrink-0
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            aria-hidden="true"
          >
            <path
              d="M1 12H53M43 2L53 12L43 22"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </a>
      </div>

      {/* ── Mobile-only Graphic Containers (< md): exact mockup alignment ── */}
      {decoration === "star" && (
        <div
          className="
            md:hidden
            absolute
            z-10
            pointer-events-none
            right-[-25px]
            top-[195px]
            w-[360px] h-[360px]
            min-[360px]:top-[200px]
            min-[390px]:top-[210px]
            sm:top-[220px]
            min-[360px]:right-[-28px]
            min-[360px]:w-[380px]
            min-[360px]:h-[380px]
            min-[390px]:right-[-30px]
            min-[390px]:w-[410px]
            min-[390px]:h-[410px]
            sm:right-[-35px]
            sm:w-[450px]
            sm:h-[450px]
          "
        >
          <svg
            viewBox="0 0 640 640"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/* White outline - vector based, clean rounded corners */}
            <g
              transform="
                translate(396 238)
                scale(1.27)
                translate(-376 -308)
                translate(-14 38)
              "
            >
              <path
                d={STAR_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </g>

            {/* Star Image */}
            <image
              href={service.image}
              x="140"
              y="0"
              width="600"
              height="500"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>
      )}

      {decoration === "cross" && (
        <div className="md:hidden absolute inset-0 pointer-events-none overflow-visible">
          {/* Main Big Cross (SUV Configurator) - Center Left, left arm overflows left card border, bottom arm overflows bottom */}
          <SingleCross
            id={`${service.id}-mob-main`}
            image={service.mainImage}
            className="
              absolute
              z-10
              bottom-[-26px] min-[360px]:bottom-[-30px] min-[390px]:bottom-[-36px] sm:bottom-[-40px]
              -left-2 min-[360px]:-left-2.5 min-[390px]:-left-3 sm:-left-4
              w-[205px] h-[205px]
              min-[360px]:w-[225px] min-[360px]:h-[225px]
              min-[390px]:w-[245px] min-[390px]:h-[245px]
              sm:w-[280px] sm:h-[280px]
            "
          />

          {/* Upper Small Cross (Dial) - Upper Center-Right, sits directly beside the 'Learn More' button */}
          <SingleCross
            id={`${service.id}-mob-top`}
            image={service.topImage}
            className="
              absolute
              z-20
              bottom-[122px] min-[360px]:bottom-[128px] min-[390px]:bottom-[136px] sm:bottom-[150px]
              right-[15%] min-[360px]:right-[17%] min-[390px]:right-[19%] sm:right-[22%]
              w-[76px] h-[76px]
              min-[360px]:w-[86px] min-[360px]:h-[86px]
              min-[390px]:w-[96px] min-[390px]:h-[96px]
              sm:w-[110px] sm:h-[110px]
            "
          />

          {/* Lower Small Cross (Beige Fabric) - Overflowing right edge, in the middle of lower half */}
          <SingleCross
            id={`${service.id}-mob-bottom`}
            image={service.bottomImage}
            className="
              absolute
              z-10
              bottom-[68px] min-[360px]:bottom-[74px] min-[390px]:bottom-[80px] sm:bottom-[92px]
              -right-2.5 min-[360px]:-right-3 min-[390px]:-right-3.5 sm:-right-4
              w-[68px] h-[68px]
              min-[360px]:w-[76px] min-[360px]:h-[76px]
              min-[390px]:w-[86px] min-[390px]:h-[86px]
              sm:w-[98px] sm:h-[98px]
            "
          />
        </div>
      )}


{decoration === "circles" && (
  <div
    className="
      md:hidden
      absolute
      pointer-events-none
      overflow-visible
      z-10

      bottom-[-5px]
      right-[-3%]

      w-[88%]
      min-[360px]:w-[89%]
      min-[390px]:w-[90%]
      sm:w-[88%]

      flex
      items-end
      justify-end
    "
  >
    <img
      src={service.mobileImage || service.image}
      alt="Digital Video Productions"
      loading="lazy"
      decoding="async"
      draggable={false}
      className="
        block
        w-full
        h-auto
        object-contain
        object-bottom-right
      "
    />
  </div>
)}


{decoration === "laptop" && (
  <div
    className="
      md:hidden
      absolute
      pointer-events-none
      overflow-visible
      z-10

  bottom-[-16px]
right-[-2%]

w-[100%]
min-[360px]:w-[102%]
min-[390px]:w-[105%]
sm:w-[100%]

      flex
      items-end
      justify-end
    "
  >
    <img
      src={service.image}
      alt="Digital Marketing Dashboard"
      loading="lazy"
      decoding="async"
      draggable={false}
      className="
        block
        w-full
        h-auto
        object-contain
        object-bottom-right
        drop-shadow-xl
      "
    />
  </div>
)}

      {/* ── Desktop-only decorations (md+) — perfectly preserved as original ── */}
      <div className="hidden md:block pointer-events-none">
        {/* Decoration: CROSSES - Card 02 */}
        {decoration === "cross" && (
          <CrossDecoration
            topImage={service.topImage}
            mainImage={service.mainImage}
            bottomImage={service.bottomImage}
            serviceId={service.id}
          />
        )}

        {/* Decoration: STAR (card 01 only) */}
        {decoration === "star" && (
          <svg
            viewBox="0 0 640 640"
            preserveAspectRatio="xMidYMid meet"
            className="
              absolute
              pointer-events-none
              overflow-visible
              z-10
              md:w-[460px] md:h-[460px]
              md:right-[-40px] md:top-[-20px]
              lg:w-[540px] lg:h-[540px]
              lg:right-[-50px] lg:top-[-30px]
              xl:w-[620px] xl:h-[620px]
              xl:right-[-60px] xl:top-[-30px]
              2xl:w-[780px] 2xl:h-[780px]
              2xl:right-[-80px] 2xl:top-[-40px]
            "
            aria-hidden="true"
          >
            {/* White outline - vector based, cleaner corners */}
            <g
              transform="
                translate(396 238)
                scale(1.37)
                translate(-376 -308)
                translate(-14 38)
              "
            >
              <path
                d={STAR_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.42)"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </g>

            {/* Existing star image */}
            <image
              href={service.image}
              x="140"
              y="0"
              width="600"
              height="500"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        )}

        {/* ── Decoration: CIRCLES (card 03) ── */}
        {decoration === "circles" && <CircleDecoration image={service.image} />}


        {/* Decoration: LAPTOP (card 04) */}
        {decoration === "laptop" && (
          <div
            className="
      absolute
      bottom-0

      md:right-2
      lg:right-2
      xl:right-4
      2xl:right-4

      md:w-[48%]
      lg:w-[49%]
      xl:w-[56%]
      2xl:w-[60%]

      md:max-w-[520px]
      lg:max-w-[620px]
      xl:max-w-[850px]
      2xl:max-w-[1000px]

      pointer-events-none
      z-10
      flex
      items-end
      justify-end
    "
          >
            <img
              src={service.image}
              alt="Digital Marketing Dashboard"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain object-bottom drop-shadow-xl"
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
const WhatWeDo = ({ onNavigate }) => {
  const handleNavigateClick = (e, targetPage) => {
    e?.preventDefault?.();
    if (!targetPage) return;
    if (onNavigate) {
      onNavigate(targetPage);
    } else if (typeof window !== "undefined") {
      window.location.href = targetPage === "home" ? "/" : `/${targetPage}`;
    }
  };
  return (
    <section className="w-full bg-white dark:bg-[#0B0D0C] pt-7 sm:pt-[54px] lg:pt-[58px] xl:pt-[60px] pb-12 sm:pb-16 lg:pb-20 xl:pb-24 xl:pb-40 transition-colors duration-300">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Section header */}
        <div className="flex items-end justify-between gap-4 sm:gap-6 mb-5 min-[390px]:mb-6 sm:mb-10 md:mb-16 lg:mb-20">
          <h2 className="text-[28px] min-[360px]:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-bold tracking-[-0.035em] leading-none text-black dark:text-white transition-colors">
            What We Do
          </h2>

          <a
            href="/services"
            onClick={(e) => handleNavigateClick(e, "services")}
            className="hidden md:flex items-center justify-between shrink-0 pb-3 border-b-2 border-black dark:border-white text-[16px] lg:text-[22px] text-black dark:text-white group gap-14 cursor-pointer"
          >
            <span>Explore All Services</span>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M1 12H22M14 4L22 12L14 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
        </div>

        {/* Service Cards */}
     <div className="flex flex-col gap-8 min-[360px]:gap-10 min-[390px]:gap-12 sm:gap-14 md:gap-[54px] lg:gap-[54px] xl:gap-[54px]">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onNavigate={onNavigate || handleNavigateClick} />
          ))}
        </div>

        {/* Mobile / tablet explore button */}
        <a
          href="/services"
          onClick={(e) => handleNavigateClick(e, "services")}
          className="md:hidden mt-8 inline-flex items-center gap-3 pb-1 border-b border-black dark:border-white text-[14px] sm:text-[16px] text-black dark:text-white cursor-pointer"
        >
          Explore All Services
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default WhatWeDo;
