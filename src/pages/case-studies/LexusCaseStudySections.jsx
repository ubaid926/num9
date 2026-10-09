
import React from "react";

import lexusLogo from "../../assets/lexus/lexus_PNG22 1.jpg";
import lexusCar from "../../assets/lexus/Blue Lexus Coupe in Architectural Triptych.webp";

const projectTags = [
  "Vehicle Configurator",
  "Accessories",
  "Multimedia Hub",
  "Navigation",
  "Search",
];

/* ==========================================
   STATISTIC CIRCLE
========================================== */

function StatisticCircle({ value, subtext, label }) {
  return (
    <div className="flex flex-col items-center min-w-0">
      <div
        className="
          relative
          w-[125px] h-[125px]
          sm:w-[175px] sm:h-[175px]
          md:w-[200px] md:h-[200px]
          lg:w-[250px] lg:h-[250px]

          rounded-full
          border-[2px] border-dashed
          border-[#D8D3D3]

          flex flex-col items-center justify-center
        "
      >
        {/* INNER DASHED CIRCLE */}
        <div
          className="
            absolute
            inset-[7px]
            sm:inset-[9px]
            lg:inset-[12px]

            rounded-full
            border-[2px] border-dashed
            border-[#D8D3D3]

            pointer-events-none
          "
        />

        {/* NUMBER */}
        <span
          className="
            relative z-10
            font-grift-semibold

            text-[38px]
            sm:text-[48px]
            md:text-[55px]
            lg:text-[80px]

            leading-none
            tracking-[-0.04em]
            text-[#29C812]
          "
        >
          {value}
        </span>

        {subtext && (
          <span
            className="
              relative z-10
              font-grift-medium

              text-[13px]
              sm:text-[17px]
              lg:text-[23px]

              leading-[1.2]
              text-black
              mt-[4px]
            "
          >
            {subtext}
          </span>
        )}
      </div>

      {/* LABEL */}
      <h3
        className="
          mt-[14px] sm:mt-[18px]
          font-grift-semibold

          text-[13px]
          sm:text-[19px]
          md:text-[23px]
          lg:text-[35px]

          leading-[1.2]
          tracking-[-0.025em]
          text-[#414A55]
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

export default function LexusCaseStudySections() {
  return (
    <div className="w-full bg-white">

      {/* ======================================
          SECTION 01 — PROJECT SUMMARY
      ====================================== */}

      <section className="w-full bg-white">
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
              max-w-[1030px]
              mx-auto
            "
          >
            {/* SUMMARY + LOGO */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2

                gap-8
                md:gap-[36px]
                lg:gap-[50px]

                items-start
              "
            >
              {/* LEFT CONTENT */}
              <div className="w-full min-w-0">
                <h2
                  className="
                    font-grift-semibold

                    text-[32px]
                    sm:text-[42px]
                    md:text-[44px]
                    lg:text-[60px]

                    leading-[1.12]
                    tracking-[-0.035em]
                    text-[#414A55]

                    mb-[20px]
                    lg:mb-[25px]
                  "
                >
                  The summary
                  <span className="text-[#29C812]">.</span>
                </h2>

                <p
                  className="
                    font-grift-medium

                    text-[16px]
                    sm:text-[20px]
                    md:text-[22px]
                    lg:text-[33px]

                    leading-[1.33]
                    tracking-[-0.015em]
                    text-[#555555]

                    max-w-[500px]
                    m-0
                  "
                >
                  Lexus partnered with us to develop an
                  interactive platform that allows
                  customers to build and customize
                  their vehicles while accessing
                  premium multimedia content. By
                  combining intuitive navigation, high
                  readability, and luxury-focused design,
                  we created a seamless digital
                  experience that enhances dealership
                  engagement and strengthens the
                  Lexus customer journey.
                </p>
              </div>

              {/* RIGHT LOGO CARD */}
              <div
                className="
                  w-full
                  min-w-0

                  md:mt-[55px]
                  lg:mt-[62px]

                  aspect-[1.47/1]
                  max-w-[500px]

                  border border-[#C8C8C8]
                  rounded-[24px]
                  lg:rounded-[30px]

                  overflow-hidden
                  bg-white

                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={lexusLogo}
                  alt="Lexus logo"
                  className="
                    block
                    w-[52%]
                    max-h-[55%]
                    object-contain
                  "
                  loading="lazy"
                />
              </div>
            </div>

            {/* ==================================
                STATISTICS
            ================================== */}

            <div
              className="
                flex flex-row
                items-start
                justify-center

                gap-7
                sm:gap-14
                md:gap-[90px]
                lg:gap-[175px]

                mt-[65px]
                sm:mt-[80px]
                lg:mt-[90px]
              "
            >
              <StatisticCircle
                value="10+"
                label="Team size"
              />

              <StatisticCircle
                value="3"
                subtext="months"
                label="Engagement length"
              />
            </div>

            {/* ==================================
                PROJECT TAGS
            ================================== */}

            <div
              className="
                flex flex-wrap
                justify-center
                items-center

                gap-x-4
                sm:gap-x-6
                lg:gap-x-[28px]
                gap-y-3

                mt-[75px]
                sm:mt-[95px]
                lg:mt-[135px]
              "
            >
              {projectTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    font-grift-medium

                    text-[11px]
                    sm:text-[13px]
                    lg:text-[20px]

                    leading-[1.4]
                    text-[#414A55]
                    whitespace-nowrap
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
          SECTION 02 — BRAND EXPERIENCE
      ====================================== */}

      <section
        className="
          relative
          w-full
          bg-[#D9D9D9]
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
            {/* LEFT — CAR GRAPHIC */}
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
              <img
                src={lexusCar}
                alt="Lexus vehicle experience"
                className="
                  block
                  w-full
                  h-auto
                  max-w-[320px]
                  object-contain
                "
                loading="lazy"
              />
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
                  font-grift-medium

                  text-[15px]
                  sm:text-[18px]
                  md:text-[19px]
                  lg:text-[25px]

                  leading-[1.35]
                  tracking-[-0.01em]
                  text-[#4A4A4A]

                  m-0
                "
              >
                "Luxury is defined by every interaction a
                customer has with a brand. Our objective
                was to create experiences that reflected
                Lexus's commitment to craftsmanship,
                innovation, and exceptional service.
                By combining strategic activations with
                customer-centric engagement, we helped
                strengthen brand loyalty and elevate the
                ownership journey."
              </blockquote>

              {/* ATTRIBUTION */}
              <p
                className="
                  mt-[18px]
                  font-grift-medium

                  text-[12px]
                  sm:text-[14px]
                  lg:text-[20px]

                  leading-[1.4]
                  text-[#929292]
                "
              >
                Director, Brand Experience
                <br />
                Lexus
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
