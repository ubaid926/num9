import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { caseStudiesData } from "../data/caseStudiesData";

/* =========================================
   CUSTOMER INTERACTIONS CARD
========================================= */

function CustomerInteractions({ stat = "125K+ Customers", label = "Customer Interactions" }) {
  return (
    <div
      className="
        w-full max-w-[375px]
        bg-[#5A5A5A]
        rounded-[20px]
        px-[24px] sm:px-[28px]
        py-[28px]
        text-white
      "
    >
      <h4
        className="
          font-grift-semibold
          text-center
          text-[20px] sm:text-[25px]
          lg:text-[30px]
          leading-[1.2]
          mb-[25px]
        "
      >
        {stat}
      </h4>

      <div
        className="
          grid grid-cols-5
          gap-x-3 gap-y-5
          justify-items-center
        "
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 28 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.65"
            className="w-[28px] h-[34px] sm:w-[34px] sm:h-[40px]"
            aria-hidden="true"
          >
            <circle cx="14" cy="8" r="5.5" />
            <path
              d="M5 24c0-5.5 4-9 9-9s9 3.5 9 9v5H5v-5z"
              strokeLinejoin="round"
            />
          </svg>
        ))}

        <span
          className="
            text-[38px] sm:text-[44px]
            leading-[34px]
            font-grift-medium
          "
        >
          +
        </span>
      </div>

      <div className="w-full h-px bg-white/60 mt-5 mb-4" />

      <p
        className="
          font-grift-medium
          text-center
          text-[18px] sm:text-[22px]
          lg:text-[25px]
          leading-[1.2]
        "
      >
        {label}
      </p>
    </div>
  );
}

/* =========================================
   GALLERY ROW ITEM (SUPPORTS MULTI-IMAGE CYCLING)
========================================= */

function GalleryRowItem({ item, index, caseStudyName, fit = "contain" }) {
  const images = Array.isArray(item.images) && item.images.length > 0
    ? item.images
    : [{ src: item.src, title: item.title, subtitle: item.subtitle }];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 4500 + index * 700);
    return () => clearInterval(timer);
  }, [images.length, index]);

  const current = images[activeIdx] || images[0];
  const currentTitle = current.title || item.title;
  const currentSubtitle = current.subtitle || item.subtitle;

  return (
    <div className="relative w-full min-h-0 overflow-hidden bg-[#20242A]">
      {images.map((imgObj, i) => {
        const src = imgObj.src || imgObj;
        const isActive = i === activeIdx;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
          >
            {src && fit === "cover" ? (
              // Fill the whole row (no side gaps); focal point keeps faces in frame
              <img
                src={src}
                alt={currentSubtitle || `${caseStudyName || "Project"} outcome visual`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                style={{ objectPosition: imgObj.position || "center 30%" }}
              />
            ) : src ? (
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Ambient blur fill so edges blend seamlessly with the image's own color palette */}
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 pointer-events-none"
                />
                {/* Full uncropped image - heads, people, and details stay completely intact */}
                <img
                  src={src}
                  alt={currentSubtitle || `${caseStudyName || "Project"} outcome visual`}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-[#252B30]" />
            )}
          </div>
        );
      })}

      {/* CAPTION OVERLAY */}
      {(currentTitle || currentSubtitle) && (
        <>
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-transparent" />

          <div className="absolute bottom-[18px] left-[24px] right-[24px] z-30 text-white flex items-end justify-between gap-3">
            <div className="min-w-0 flex-1">
              {currentTitle && (
                <h4 className="font-grift-semibold text-[15px] sm:text-[19px] lg:text-[22px] leading-[1.2] truncate">
                  {currentTitle}
                </h4>
              )}

              {currentSubtitle && (
                <p className="mt-1 font-grift-medium text-[10px] sm:text-[13px] lg:text-[15px] uppercase tracking-[0.08em] text-white/80 truncate">
                  {currentSubtitle}
                </p>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex items-center gap-1.5 shrink-0 pb-1">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeIdx
                        ? "w-6 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/75"
                      }`}
                    aria-label={`View photo ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function CaseStudyStorySections({
  caseStudy = caseStudiesData.lexus,
  onNavigate,
  onSubmit,
}) {
  const story = caseStudy?.storySection || caseStudiesData.lexus.storySection;

  const sectionRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const servicesRef = useRef(null);
  const outcomeRef = useRef(null);
  const ctaRef = useRef(null);
  const pathRef = useRef(null);
  const frameRef = useRef(null);

  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [geometry, setGeometry] = useState({
    path: "",
    width: 1,
    height: 1,
    endX: 0,
    endY: 0,
    strokeWidth: 6,
    dotRadius: 15,
  });
  const [pathLength, setPathLength] = useState(0);

  /* =========================================
     RESPONSIVE SVG PATH MEASUREMENT
  ========================================= */

  useLayoutEffect(() => {
    const root = sectionRef.current;
    const challenge = challengeRef.current;
    const solution = solutionRef.current;
    const serviceSection = servicesRef.current;
    const outcome = outcomeRef.current;
    const cta = ctaRef.current;

    if (
      !root ||
      !challenge ||
      !solution ||
      !serviceSection ||
      !outcome ||
      !cta
    ) {
      return;
    }

    const measure = () => {
      const rootRect = root.getBoundingClientRect();
      const challengeRect = challenge.getBoundingClientRect();
      const solutionRect = solution.getBoundingClientRect();
      const serviceRect = serviceSection.getBoundingClientRect();
      const ctaRect = cta.getBoundingClientRect();

      const width = root.offsetWidth;
      const height = root.offsetHeight;

      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      const radius = mobile ? 16 : (tablet ? 28 : 38);
      const strokeWidth = mobile ? 4.5 : 6;
      const dotRadius = mobile ? 11 : 15;

      // 1. START POINT & LEFT VERTICAL LINE
      // Anchor dynamically to the challenge heading element for exact alignment
      const challengeHeading = challenge.querySelector("h2");
      const headingRect = challengeHeading
        ? challengeHeading.getBoundingClientRect()
        : challengeRect;
      const headingLeft = headingRect.left - rootRect.left;
      const headingTop = headingRect.top - rootRect.top;

      // Vertical line runs in the left margin, safely clear of heading and paragraphs
      const targetLeftX = mobile
        ? 14
        : Math.max(20, headingLeft - (radius + 12));
      const leftX = Math.round(targetLeftX);

      // Hook starts above/level with the heading and curves down
      const startY = Math.round(
        headingTop + (mobile ? 8 : (tablet ? 10 : 12))
      );

      // 2. HORIZONTAL TURN BETWEEN "THE SOLUTION" AND "KEY SERVICES"
      // Find the bottom of solution content (text & image)
      const solutionInner = solution.firstElementChild || solution;
      const solutionInnerRect = solutionInner.getBoundingClientRect();
      const solutionContentBottom = solutionInnerRect.bottom - rootRect.top;

      // Find the top of services content (heading)
      const servicesHeading = serviceSection.querySelector("h2");
      const servicesHeadingRect = servicesHeading
        ? servicesHeading.getBoundingClientRect()
        : serviceRect;
      const servicesContentTop = servicesHeadingRect.top - rootRect.top;

      // Sits cleanly in the clear vertical gap between Section 03 and Section 04
      const rawTurnY = (solutionContentBottom + servicesContentTop) / 2;
      const safeTurnY = Math.round(
        Math.max(startY + radius * 3, rawTurnY)
      );

      // 3. RIGHT VERTICAL LINE
      // Find the rightmost boundary of services content (pills)
      const servicesInner = serviceSection.firstElementChild || serviceSection;
      const servicesInnerRect = servicesInner.getBoundingClientRect();
      const servicesRight = servicesInnerRect.right - rootRect.left;

      // Find the rightmost boundary of outcome text elements and CTA card
      const cardRight = ctaRect.right - rootRect.left;
      let maxOutcomeTextRight = cardRight;
      const outcomeTexts = outcome.querySelectorAll("h2, p, ul");
      outcomeTexts.forEach((el) => {
        const r = el.getBoundingClientRect().right - rootRect.left;
        if (r > maxOutcomeTextRight) maxOutcomeTextRight = r;
      });

      const maxContentRight = Math.max(
        servicesRight,
        maxOutcomeTextRight,
        cardRight
      );

      // rightX must be safely to the right of all content, within the right margin
      let rightX;
      if (mobile) {
        rightX = Math.round(width - 12);
      } else if (tablet) {
        rightX = Math.round(Math.min(width - 16, Math.max(maxContentRight + 28, width - 28)));
      } else {
        const preferredRightX = width >= 1530
          ? Math.max(maxContentRight + 55, width - 100)
          : Math.max(maxContentRight + 45, width - 45);
        rightX = Math.round(Math.min(width - 24, preferredRightX));
      }

      // Ensure rightX is strictly to the right of leftX + radius * 2
      rightX = Math.max(leftX + radius * 2 + 20, rightX);

      // 4. END POINT AT THE CTA CARD
      const endY = Math.round(
        ctaRect.top - rootRect.top + ctaRect.height * 0.5
      );
      const safeEndY = Math.round(
        Math.max(safeTurnY + radius * 2, endY)
      );

      // Target endX: touching the right edge of the CTA card
      const targetEndX = Math.round(cardRight + dotRadius + (mobile ? 5 : 8));
      const endX = Math.min(rightX - radius, targetEndX);

      // Build the path with smooth rounded corners
      const path = `
        M ${leftX + radius} ${startY}
        Q ${leftX} ${startY} ${leftX} ${startY + radius}

        V ${safeTurnY - radius}
        Q ${leftX} ${safeTurnY} ${leftX + radius} ${safeTurnY}

        H ${rightX - radius}
        Q ${rightX} ${safeTurnY} ${rightX} ${safeTurnY + radius}

        V ${safeEndY - radius}
        Q ${rightX} ${safeEndY} ${rightX - radius} ${safeEndY}

        H ${endX}
      `;

      setGeometry({
        path,
        width,
        height,
        endX,
        endY: safeEndY,
        strokeWidth,
        dotRadius,
      });
    };

    const scheduleMeasure = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(measure);
    };

    measure();

    const observer = new ResizeObserver(scheduleMeasure);

    [
      root,
      challenge,
      solution,
      serviceSection,
      outcome,
      cta,
    ].forEach((element) => observer.observe(element));

    const images = root.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", scheduleMeasure);
      }
    });

    window.addEventListener("resize", scheduleMeasure);

    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleMeasure);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      images.forEach((img) => img.removeEventListener("load", scheduleMeasure));

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [caseStudy?.slug]);

  /* =========================================
     SVG PATH LENGTH
  ========================================= */

  useLayoutEffect(() => {
    if (!pathRef.current || !geometry.path) return;

    setPathLength(pathRef.current.getTotalLength());
  }, [geometry.path]);

  /* =========================================
     SYNCHRONIZED SCROLL ANIMATION
  ========================================= */

  useEffect(() => {
    const root = sectionRef.current;
    const challenge = challengeRef.current;
    const cta = ctaRef.current;

    if (!root || !challenge || !cta) return;

    let rafId = null;
    let lastProgress = -1;

    const updateProgress = () => {
      const challengeHeading = challenge.querySelector("h2");
      const headingRect = challengeHeading
        ? challengeHeading.getBoundingClientRect()
        : challenge.getBoundingClientRect();
      const ctaRect = cta.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const lineStartTop = headingRect.top;
      const lineEndTop = ctaRect.top + ctaRect.height * 0.5;

      const focalY = viewportHeight * 0.6;
      const totalDistance = lineEndTop - lineStartTop;

      if (totalDistance <= 0) return;

      const scrollDistance = focalY - lineStartTop;
      const rawProgress = scrollDistance / totalDistance;
      const target = Math.min(1, Math.max(0, rawProgress));

      if (Math.abs(target - lastProgress) > 0.0001) {
        lastProgress = target;
        setProgress(target);
      }
    };

    const handleScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateProgress();
      });
    };

    updateProgress();

    window.addEventListener("scroll", handleScrollOrResize, {
      passive: true,
    });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [geometry.path]);

  const showLine = progress > 0 && pathLength > 0;
  const showDot = progress >= 0.995 && pathLength > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSent) return;

    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setIsSent(true);
      setEmail("");
      setTimeout(() => setIsSent(false), 3500);
    } catch (error) {
      console.error("Story submission failed:", error);
    }
  };

  const about = story.about || {};
  const challenge = story.challenge || {};
  const solution = story.solution || {};
  const services = story.services || { items: [] };
  const outcome = story.outcome || { bullets: [], galleryImages: [] };

  return (
    <div
      ref={sectionRef}
      className="
        relative
        w-full
        bg-white dark:bg-[#0B0D0C]
        text-[#141414] dark:text-[#F3F4F6]
        font-grift-medium
        overflow-x-clip
        transition-colors duration-300
      "
    >
      {/* =====================================
          ANIMATED BLUE LINE (SYNCHRONIZED ON SCROLL)
      ===================================== */}
      <svg
        className="
          absolute inset-0
          z-30
          w-full h-full
          pointer-events-none
          overflow-visible
        "
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <path
          ref={pathRef}
          d={geometry.path}
          stroke="#49B1EA"
          strokeWidth={geometry.strokeWidth || 6}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray={`${pathLength} ${pathLength}`}
          strokeDashoffset={pathLength * (1 - progress)}
          opacity={showLine ? 1 : 0}
        />

        {showDot && (
          <circle
            cx={geometry.endX}
            cy={geometry.endY}
            r={geometry.dotRadius || 15}
            fill="#49B1EA"
          />
        )}
      </svg>

      {/* =====================================
          SECTION 01 — ABOUT
      ===================================== */}
      <section
        className="
          relative w-full bg-white dark:bg-[#0B0D0C]
          pt-[60px] sm:pt-[100px]
          lg:pt-[130px]
          pb-[55px] lg:pb-[70px]
          transition-colors duration-300
        "
      >
        <div
          className="
            w-full max-w-[1200px] mx-auto
            px-[42px] sm:px-[65px] lg:px-[100px]
            grid grid-cols-1
            md:grid-cols-[minmax(120px,max-content)_minmax(0,1fr)]
            gap-6 md:gap-[40px]
          "
        >
          {/* ABOUT TITLE */}

          {/* ABOUT TITLE */}
          <div className="flex items-center gap-[7px] md:block min-w-0">

            <span
              className="
      inline-block md:block
      font-grift-medium
      text-[24px] lg:text-[30px]
      leading-[1.3]
      tracking-[-0.01em]
      text-[#4A4A4A] dark:text-white
      whitespace-nowrap
    "
            >
              {about.title || "About"}
            </span>

            <h2
              className="
      inline-block md:block
      font-grift-semibold
      text-[24px] lg:text-[36px]
      leading-[1.15]
      tracking-[-0.02em]
      text-[#4A4A4A] dark:text-white
      whitespace-nowrap
    "
            >
              {about.clientName || caseStudy.name}
            </h2>

          </div>


          {/* DESCRIPTION */}
          <p
            className="
              max-w-[850px]
              font-grift-medium
              text-[16px] sm:text-[16px]
              lg:text-[18px]
              leading-[1.45]
              text-[#575757] dark:text-[#D1D5DB]
            "
          >
            {about.description}
          </p>
        </div>
      </section>

      {/* =====================================
          SECTION 02 — THE CHALLENGE
      ===================================== */}
      <section
        ref={challengeRef}
        className="
          relative w-full bg-white dark:bg-[#0B0D0C]
          pt-[20px] lg:pt-[35px]
          pb-[115px] sm:pb-[160px]
          lg:pb-[250px]
          transition-colors duration-300
        "
      >
        <div
          className="
   max-w-[1530px] mx-auto
pl-[55px] pr-[30px]
sm:pl-[75px] sm:pr-[50px]
lg:pl-[85px] lg:pr-[55px]
2xl:pl-[50px] 2xl:pr-[50px]
          "
        >
          {/* CHALLENGE HEADING */}
          <h2
            className="
              font-grift-semibold
              text-[32px] sm:text-[40px]
              lg:text-[48px]
              leading-[1.12]
              tracking-[-0.03em]
              text-[#333333] dark:text-white
            mb-[28px] sm:mb-[36px] lg:mb-[60px] 2xl:mb-[85px]
            "
          >
            {challenge.heading || "The challenge"}
            <span className="text-[#F2693A]">.</span>
          </h2>

          {/* CHALLENGE COLUMNS (3-col when image present, 2-col fallback) */}
          {challenge.image || challenge.centerImage ? (

            <div
              className="
    grid grid-cols-1

    lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.15fr)]

    2xl:grid-cols-[minmax(0,420px)_minmax(0,382px)_minmax(0,490px)]

    gap-y-10
    lg:gap-x-[30px]
    xl:gap-x-[45px]
    2xl:gap-x-[65px]

    items-center
    2xl:justify-between
  "
            >
              {/* LEFT PARAGRAPHS */}
              <div
                className="
      w-full min-w-0
      space-y-[26px] lg:space-y-[36px]
      font-grift-regular
      font-normal
      text-[16px] lg:text-[18px]
      leading-[1.4]
      text-[#555555] dark:text-[#C5CAD1]
    "
              >
                {challenge.leftParagraphs?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* CENTER IMAGE */}
              <div className="w-full min-w-0 flex justify-center items-center">
                <div className="w-full min-w-0 flex justify-center items-center">
                  <div
                    className="
      w-full
      max-w-[382px]
      aspect-[382/452]
      overflow-hidden
      rounded-[18px]
      border border-[#2F2F2F]
      bg-white
    "
                  >
                    <img
                      src={challenge.image || challenge.centerImage}
                      alt={challenge.imageAlt || `${caseStudy.name} challenge`}
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT PARAGRAPH */}
              {challenge.rightParagraph && (
                <div className="w-full min-w-0 flex items-center">
                  <p
                    className="
          w-full
          font-grift-semibold
          font-semibold
          text-[22px] lg:text-[26px] 2xl:text-[30px]
          leading-[1.25]
          tracking-[-0.015em]
          text-[#4A4A4A] dark:text-white
        "
                  >
                    {challenge.rightParagraph}
                  </p>
                </div>
              )}
            </div>

          ) : (
            <div
              className="
                grid grid-cols-1 md:grid-cols-2
                gap-[45px] md:gap-[95px]
                lg:gap-[150px]
                items-start
              "
            >
              {/* LEFT PARAGRAPHS */}
              <div
                className="
                  w-full
                  order-2 md:order-1
                  space-y-[30px] lg:space-y-[38px]
                  font-grift-medium
                  text-[16px] sm:text-[16px]
                  lg:text-[18px]
                  leading-[1.35]
                  text-[#626262] dark:text-[#D1D5DB]
                "
              >
                {challenge.leftParagraphs?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* RIGHT PARAGRAPH */}
              {challenge.rightParagraph && (
                <p
                  className="
                    w-full
                    order-1 md:order-2
                    font-grift-medium
                    text-[20px] sm:text-[25px]
                    lg:text-[28px]
                    leading-[1.25]
                    tracking-[-0.018em]
                    text-[#4A4A4A] dark:text-white
                    md:-mt-[75px]
                    lg:-mt-[80px]
                  "
                >
                  {challenge.rightParagraph}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          SECTION 03 — THE SOLUTION
      ===================================== */}
      <section
        ref={solutionRef}
        className="
          relative w-full bg-[#201F1F]
          pt-[80px] sm:pt-[90px]
          lg:pt-[90px]
          pb-[110px] sm:pb-[150px]
          lg:pb-[155px]
        "
      >
 <div
  className="
    w-full max-w-[1600px] mx-auto
    pl-[55px] pr-[30px]
    sm:pl-[75px] sm:pr-[50px]
    lg:pl-[105px] lg:pr-[65px]
    xl:pl-[110px] xl:pr-[30px]

    grid grid-cols-1
    lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]
    gap-[45px] lg:gap-[80px] xl:gap-[90px]
    items-start
  "
>
  {/* LEFT — SOLUTION CONTENT */}
  <div className="min-w-0">
    <h2
      className="
        font-grift-semibold
        text-[34px] sm:text-[43px] lg:text-[50px]
        leading-[1.1]
        tracking-[-0.03em]
        text-white
        mb-[22px]
      "
    >
      {solution.heading || "The solution."}
    </h2>

    <p
      className="
        font-grift-medium
        text-[19px] sm:text-[24px] lg:text-[30px]
        leading-[1.25]
        tracking-[-0.02em]
        text-white
        whitespace-pre-line
      "
    >
      {solution.description}
    </p>
  </div>

  {/* RIGHT — IMAGE */}
  <div className="w-full min-w-0 flex justify-center lg:justify-end">
    {solution.image ? (
      <div
        className="
          w-full max-w-[760px]
          aspect-[760/450]
          overflow-hidden
          rounded-[20px]
          border border-white/10
        "
      >
        <img
          src={solution.image}
          alt={solution.imageAlt || `${caseStudy.name || "Brand"} solution`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
    ) : (
      <CustomerInteractions
        stat={solution.customerInteractions?.stat}
        label={solution.customerInteractions?.label}
      />
    )}
  </div>
</div>
      </section>

      {/* =====================================
          SECTION 04 — KEY SERVICES
      ===================================== */}
      <section
        ref={servicesRef}
        className="
          relative w-full bg-[#201F1F]
          pt-[125px] sm:pt-[160px]
          lg:pt-[165px]
          pb-[115px] sm:pb-[135px]
          lg:pb-[110px]
        "
      >
        <div
          className="
            w-full max-w-[1200px] mx-auto
            px-[45px] sm:px-[70px]
            lg:px-[100px]
            flex flex-col items-center text-center
          "
        >
          <h2
            className="
              font-grift-semibold
              text-[34px] sm:text-[48px]
              lg:text-[70px]
              leading-[1.12]
              tracking-[-0.035em]
              text-white
              mb-[35px] lg:mb-[38px]
            "
          >
            {services.heading || "Key Services Delivered."}
          </h2>

          {/* SERVICE PILLS — display only, non-clickable */}
          <div
            className="
              flex flex-wrap
              items-center justify-center
              gap-[10px] lg:gap-[12px]
            "
          >
            {services.items?.map((service) => (
              <span
                key={service}
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  border border-[#A9A9A9]
                  px-4 lg:px-[17px]
                  py-[8px]
                  font-grift-medium
                  text-[12px] sm:text-[17px]
                  lg:text-[23px]
                  leading-[1.25]
                  text-white
                  whitespace-nowrap
                  cursor-default
                  select-none
                "
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 05 — THE OUTCOME
      ===================================== */}
      <section
        ref={outcomeRef}
        className="
          relative w-full
          bg-[#414A54]
        "
      >
        <div
          className="
            w-full
            grid grid-cols-1
            md:grid-cols-[45%_55%] lg:grid-cols-[44%_56%] xl:grid-cols-[42%_58%]
            min-h-[650px]
            lg:min-h-[800px]
          "
        >
          {/* LEFT — IMAGE GALLERY */}
          <div
            className={`
              w-full
              grid grid-rows-3
              ${outcome.galleryFit === "cover"
                ? "h-[900px] sm:h-[1080px]"
                : "h-[470px] sm:h-[580px]"}
              md:h-full
              overflow-hidden
            `}
          >
            {outcome.galleryImages?.map((item, index) => (
              <GalleryRowItem
                key={index}
                item={item}
                index={index}
                caseStudyName={caseStudy.name}
                fit={outcome.galleryFit}
              />
            ))}
          </div>

          {/* RIGHT — OUTCOME CONTENT */}
          <div
            className="
              relative w-full
              pl-[35px] pr-[45px] sm:px-[50px]
              md:px-[50px] lg:px-[80px]
              xl:pl-[90px] xl:pr-[100px]

              pt-[65px] sm:pt-[80px]
              lg:pt-[80px]
              pb-[120px] lg:pb-[110px]
            "
          >
            {/* HEADING */}
            <h2
              className="
                font-grift-semibold
                text-[38px] sm:text-[52px]
                lg:text-[70px]
                leading-[1.1]
                tracking-[-0.035em]
                text-white
                mb-[25px]
              "
            >
              {outcome.heading || "The outcome"}
              <span className="text-[#F2693A]">.</span>
            </h2>

            <p
              className="
                max-w-[620px]
                font-grift-medium
                text-[17px] sm:text-[21px]
                lg:text-[25px]
                text-white
                whitespace-pre-line
                mb-[25px]
              "
            >
              {outcome.intro || "Our teams:"}
            </p>

            {/* OUTCOME BULLETS */}
            <ul
              className="
                max-w-[590px]
                space-y-[4px]
                font-grift-medium
                text-[15px] sm:text-[19px]
                lg:text-[23px]
                leading-[1.35]
                text-white
              "
            >
              {outcome.bullets?.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {outcome.closing && (
              <p
                className="
                  max-w-[590px]
                  mt-6 sm:mt-8
                  font-grift-medium
                  text-[15px] sm:text-[19px]
                  lg:text-[21px]
                  leading-[1.4]
                  text-white/90
                "
              >
                {outcome.closing}
              </p>
            )}

            {/* DOWNLOAD CASE STUDY CTA */}
            <form
              ref={ctaRef}
              onSubmit={handleSubmit}
              className="
                relative z-40
                w-full max-w-[475px]
                mt-[65px] lg:mt-[95px]
                ml-0 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-20

                bg-white dark:bg-[#171A18]
                border border-transparent dark:border-[#27302A]
                rounded-[22px]
                p-[25px] sm:p-[30px]
              "
            >
              <label
                htmlFor={`${caseStudy.id || "cs"}-email`}
                className="
                  block
                  font-grift-medium
                  text-[14px] sm:text-[17px]
                  lg:text-[18px]
                  leading-[1.4]
                  text-[#333] dark:text-[#F3F4F6]
                  mb-[18px]
                "
              >
                {outcome.pdfCardText || "Get this case study in PDF to your inbox."}
              </label>

              <div className="flex items-center gap-[18px]">
                <input
                  id={`${caseStudy.id || "cs"}-email`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="
                    min-w-0 flex-1
                    h-[54px]
                    rounded-[10px]
                    border border-[#A0A0A0] dark:border-[#323D35]
                    px-[16px]

                    font-grift-medium
                    text-[16px]
                    text-[#333] dark:text-white
                    bg-white dark:bg-[#151816]
                    placeholder:text-[#999] dark:placeholder:text-[#6B7280]

                    outline-none
                    focus:border-[#49B1EA]
                  "
                />

                <button
                  type="submit"
                  disabled={isSent}
                  className="
                    h-[54px]
                    px-[25px]
                    rounded-[10px]
                    bg-[#29C900]

                    font-grift-medium
                    text-[18px]
                    text-white

                    hover:bg-[#25B500]
                    transition-colors duration-200
                    disabled:opacity-60
                  "
                >
                  {isSent ? "Sent" : "Get"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
