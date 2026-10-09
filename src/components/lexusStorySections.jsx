
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import image1 from '../assets/lexus/1stimg.webp'
import image2 from '../assets/lexus/2ndimg.webp'
import image3 from '../assets/lexus/3rdimg.webp'
const services = [
  "Brand Activation",
  "Experiential Marketing",
  "Customer Experience",
  "Retail Marketing",
];

const outcomes = [
  "Executed premium brand activations across multiple North American markets.",
  "Designed and delivered luxury customer experience programs aligned with Lexus brand standards.",
  "Increased customer engagement through experiential marketing and interactive brand touchpoints.",
  "Integrated digital and physical experiences to create a seamless customer journey.",
];

/* =========================================
   CUSTOMER INTERACTIONS CARD
========================================= */

function CustomerInteractions() {
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
        125K+ Customers
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
        Customer Interactions
      </p>
    </div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function LexusStorySections({
  images = [],
  onSubmit,
}) {
  const sectionRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const servicesRef = useRef(null);
  const outcomeRef = useRef(null);
  const ctaRef = useRef(null);
  const pathRef = useRef(null);
  const frameRef = useRef(null);

  const [email, setEmail] = useState("");
  const [progress, setProgress] = useState(0);
  const [geometry, setGeometry] = useState({
    path: "",
    width: 1,
    height: 1,
    endX: 0,
    endY: 0,
  });
  const [pathLength, setPathLength] = useState(0);

  /* =========================================
     RESPONSIVE SVG PATH
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
      const servicesRect = serviceSection.getBoundingClientRect();
      const ctaRect = cta.getBoundingClientRect();

      const width = root.offsetWidth;
      const height = root.offsetHeight;

      const mobile = width < 768;
      const radius = mobile ? 16 : 42;

      // Reference layout is based on a centered 1200px area.
      const contentWidth = Math.min(width, 1200);
      const contentLeft = (width - contentWidth) / 2;

      const leftX = mobile
        ? 12
        : contentLeft + 24;

      const rightX = mobile
        ? width - 12
        : contentLeft + contentWidth - 66;

      const startY =
        challengeRect.top - rootRect.top +
        (mobile ? 42 : 48);

      // Bottom corner after the solution.
      const turnY =
        solutionRect.bottom - rootRect.top -
        (mobile ? 18 : 35);

      // End point aligned with the CTA.
      const endY =
        ctaRect.top - rootRect.top +
        ctaRect.height / 2;

      const endX = mobile
        ? Math.max(35, rightX - 35)
        : rightX - 85;

      const safeTurnY = Math.max(
        startY + radius * 3,
        turnY
      );

      const safeEndY = Math.max(
        safeTurnY + radius * 3,
        endY
      );

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

    window.addEventListener("resize", scheduleMeasure);

    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleMeasure);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleMeasure);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  /* =========================================
     SCROLL ANIMATION
  ========================================= */

  useEffect(() => {
    const root = sectionRef.current;
    const cta = ctaRef.current;

    if (!root || !cta) return;

    let frame = null;

    const update = () => {
      const rootRect = root.getBoundingClientRect();
      const ctaRect = cta.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Begin only when the Challenge area approaches view.
      const start = viewportHeight * 0.65;

      // Finish as the final CTA approaches the viewport.
      const finishPosition =
        ctaRect.top - rootRect.top +
        ctaRect.height * 0.5;

      const distance = Math.max(
        1,
        finishPosition - start
      );

      const traveled = start - rootRect.top;

      const next = Math.min(
        1,
        Math.max(0, traveled / distance)
      );

      setProgress(next);
      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) return;

      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  /* =========================================
     SVG PATH LENGTH
  ========================================= */

  useLayoutEffect(() => {
    if (!pathRef.current || !geometry.path) return;

    setPathLength(pathRef.current.getTotalLength());
  }, [geometry.path]);

  const showLine = progress > 0 && pathLength > 0;
  const showDot = progress >= 0.999 && pathLength > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="
        relative
        w-full
        bg-white
        font-grift-medium
      "
    >
      {/* =====================================
          ANIMATED BLUE LINE
      ===================================== */}
      <svg
        className="
          absolute inset-0
          z-30
          w-full h-full
          pointer-events-none
          overflow-hidden
        "
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d={geometry.path}
          stroke="#49B1EA"
          strokeWidth="5"
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
            r="16"
            fill="#49B1EA"
          />
        )}
      </svg>

      {/* =====================================
          SECTION 01 — ABOUT LEXUS
      ===================================== */}
      <section
        className="
          relative w-full bg-white
          pt-[60px] sm:pt-[100px]
          lg:pt-[130px]
          pb-[55px] lg:pb-[70px]
        "
      >
        <div
          className="
            w-full max-w-[1200px] mx-auto
            px-[42px] sm:px-[65px] lg:px-[100px]
            grid grid-cols-1
            md:grid-cols-[120px_minmax(0,1fr)]
            gap-6 md:gap-[40px]
          "
        >
          {/* ABOUT TITLE */}
          <div>
            <span
              className="
                block
                font-grift-medium
                text-[24px] lg:text-[30px]
                leading-[1.3]
                text-[#4A4A4A]
              "
            >
              About
            </span>

            <h2
              className="
                font-grift-semibold
                text-[24px] lg:text-[36px]
                leading-[1.15]
                text-[#4A4A4A]
              "
            >
              Lexus
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-[850px]
              font-grift-medium
              text-[14px] sm:text-[16px]
              lg:text-[18px]
              leading-[1.45]
              text-[#575757]
            "
          >
            Lexus is one of the world's leading luxury
            automotive brands, renowned for exceptional
            craftsmanship, innovative technology, and a
            commitment to seamless customer experiences.
            Through strategic brand activations, experiential
            marketing, and customer engagement initiatives,
            Number9 helped Lexus strengthen brand connections,
            elevate customer interactions, and deliver
            memorable experiences across key North American
            markets.
          </p>
        </div>
      </section>

      {/* =====================================
          SECTION 02 — THE CHALLENGE
      ===================================== */}
      <section
        ref={challengeRef}
        className="
          relative w-full bg-white
          pt-[20px] lg:pt-[35px]
          pb-[115px] sm:pb-[160px]
          lg:pb-[250px]
        "
      >
        <div
          className="
            w-full max-w-[1200px] mx-auto
            pl-[55px] pr-[30px]
            sm:pl-[75px] sm:pr-[60px]
            lg:pl-[100px] lg:pr-[85px]
          "
        >
          {/* CHALLENGE HEADING */}
          <h2
            className="
              font-grift-semibold
              text-[32px] sm:text-[42px]
              lg:text-[50px]
              leading-[1.12]
              tracking-[-0.03em]
              text-[#4A4A4A]
              mb-[50px] sm:mb-[70px] lg:mb-[110px]
            "
          >
            The challenge
            <span className="text-[#F2693A]">.</span>
          </h2>

          {/* TWO COLUMNS */}
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
                space-y-[30px] lg:space-y-[38px]
                font-grift-medium
                text-[14px] sm:text-[16px]
                lg:text-[18px]
                leading-[1.35]
                text-[#626262]
              "
            >
              <p>
                Lexus wanted to empower its dealerships with
                an interactive platform that would allow
                customers to build and customize their
                vehicles from scratch while exploring
                available accessories and premium features.
              </p>

              <p>
                The platform also needed to serve as a central
                multimedia hub, providing access to Lexus
                International content including promotional
                videos, product showcases, and TV commercials.
              </p>

              <p>
                Because the solution was intended for daily
                use across dealerships, it needed to remain
                intuitive, accessible, and easy to navigate
                for users with varying levels of technical
                experience.
              </p>
            </div>

            {/* RIGHT PARAGRAPH */}
            <p
              className="
                w-full
                font-grift-medium
                text-[20px] sm:text-[25px]
                lg:text-[28px]
                leading-[1.25]
                tracking-[-0.018em]
                text-[#4A4A4A]
                md:-mt-[75px]
                lg:-mt-[80px]
              "
            >
              Lexus required an interactive dealership
              platform that combined vehicle customization,
              accessory selection, and multimedia content
              into a seamless user experience. The challenge
              was to create an intuitive interface that
              remained accessible for all users while
              maintaining the premium visual standards and
              customer experience expected from the Lexus
              brand.
            </p>
          </div>
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
            w-full max-w-[1200px] mx-auto
            pl-[55px] pr-[30px]
            sm:pl-[75px] sm:pr-[60px]
            lg:pl-[105px] lg:pr-[85px]

            grid grid-cols-1 md:grid-cols-2
            gap-12 md:gap-[80px] lg:gap-[140px]
            items-start
          "
        >
          {/* LEFT — SOLUTION CONTENT */}
          <div>
            <h2
              className="
                font-grift-semibold
                text-[34px] sm:text-[43px]
                lg:text-[50px]
                leading-[1.1]
                tracking-[-0.03em]
                text-white
                mb-[22px]
              "
            >
              The solution.
            </h2>

            <p
              className="
                font-grift-medium
                text-[19px] sm:text-[24px]
                lg:text-[30px]
                leading-[1.35]
                tracking-[-0.02em]
                text-white
              "
            >
              We created an interactive Lexus dealership
              platform that allows customers to build and
              customize vehicles, explore accessories, and
              engage with premium multimedia content.
              Designed with intuitive navigation, high
              readability, and a luxury-focused user
              experience, the solution simplifies customer
              interactions while supporting dealerships with
              a powerful sales and presentation tool.
            </p>
          </div>

          {/* RIGHT — CUSTOMER INTERACTIONS */}
          <div className="flex justify-start md:justify-center md:pt-[10px]">
            <CustomerInteractions />
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
            Key Services Delivered.
          </h2>

          {/* SERVICE PILLS */}
          <div
            className="
              flex flex-wrap
              items-center justify-center
              gap-[10px] lg:gap-[12px]
            "
          >
            {services.map((service) => (
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
            md:grid-cols-[34%_66%]
            min-h-[650px]
            lg:min-h-[800px]
          "
        >
          {/* LEFT — IMAGE GALLERY */}
          <div
            className="
              w-full
              grid grid-rows-3
              h-[470px] sm:h-[580px]
              md:h-full
              overflow-hidden
            "
          >
            {[
              {
                src: image1,
                title: "This is a video title",
                subtitle: "LEXUS SHORT FILMS",
              },
              {
                src: image2,
                title: "This is a video title",
                subtitle: "CONCEPT VEHICLES",
              },
              {
                src: image3,
                title: "This is a video title",
                subtitle: "CONCEPT VEHICLES",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  relative w-full min-h-0
                  overflow-hidden bg-[#20242A]
                "
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.subtitle || "Lexus experience"}
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                    "
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#252B30]" />
                )}

                {/* CAPTION OVERLAY */}
                {(item.title || item.subtitle) && (
                  <>
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/70 via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute bottom-[18px] left-[24px]
                        text-white
                      "
                    >
                      <h4
                        className="
                          font-grift-semibold
                          text-[15px] sm:text-[19px]
                          lg:text-[22px]
                          leading-[1.2]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          font-grift-medium
                          text-[10px] sm:text-[13px]
                          lg:text-[15px]
                          uppercase tracking-[0.08em]
                          text-white/80
                        "
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT — OUTCOME CONTENT */}
          <div
            className="
              relative w-full
              px-[45px] sm:px-[65px]
              md:px-[75px] lg:px-[145px]
              xl:pl-[150px] xl:pr-[160px]

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
              The outcome
              <span className="text-[#F2693A]">.</span>
            </h2>

            <p
              className="
                font-grift-medium
                text-[17px] sm:text-[21px]
                lg:text-[25px]
                text-white
                mb-[25px]
              "
            >
              Our teams:
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
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>

            {/* DOWNLOAD CASE STUDY CTA */}
            <form
              ref={ctaRef}
              onSubmit={handleSubmit}
              className="
                relative z-40
                w-full max-w-[475px]
                mt-[65px] lg:mt-[95px]

                bg-white
                rounded-[22px]
                p-[25px] sm:p-[30px]
              "
            >
              <label
                htmlFor="lexus-email"
                className="
                  block
                  font-grift-medium
                  text-[14px] sm:text-[17px]
                  lg:text-[18px]
                  leading-[1.4]
                  text-[#333]
                  mb-[18px]
                "
              >
                Get this case study in PDF to your inbox.
              </label>

              <div className="flex items-center gap-[18px]">
                <input
                  id="lexus-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="
                    min-w-0 flex-1
                    h-[54px]
                    rounded-[10px]
                    border border-[#A0A0A0]
                    px-[16px]

                    font-grift-medium
                    text-[16px]
                    text-[#333]
                    placeholder:text-[#999]

                    outline-none
                    focus:border-[#49B1EA]
                  "
                />

                <button
                  type="submit"
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
                  "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
