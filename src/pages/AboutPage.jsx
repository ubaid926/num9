import React from 'react';
import AppNav from '../components/nav';
import AccelerateBusinessSection from '../components/AccelerateBusinessSection';
import Footer from '../components/footer';
import aboutHeroImage from '../assets/aboutHeroImage.webp';
import aboutus3rdSect from '../assets/aboutus3rdSect.webp';

/* ─── Brand logos ─────────────────────────────────────────── */
import pepsicoLogo   from '../assets/pepsicoLogo.png';
import lexusLogo     from '../assets/lexusLogo.png';
import citibankLogo  from '../assets/citibankLogo.png';
import emiratesLogo  from '../assets/emiratesLogo.png';
import microsoftLogo from '../assets/microsoftLogo.png';
import safewayLogo   from '../assets/safewayLogo.png';
import magellanLogo  from '../assets/magellanLogo.jpg';
import argoLogo      from '../assets/argoLogo.jpg';
import nutrienLogo   from '../assets/nutrienLogo.png';

/* ─── About Hero ─────────────────────────────────────────── */

function AboutHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1640px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-5 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10">

        {/* Heading + desktop description */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16 mb-3 sm:mb-8 lg:mb-10">

          {/* LEFT: Eyebrow + heading */}
          <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[540px] xl:max-w-[720px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="w-[5px] h-[5px] sm:w-2 sm:h-2 rounded-full bg-[#15B83E] shrink-0" />

              <span className="font-grift-semibold font-semibold text-[11.62px] tracking-[0.28em] sm:text-[15px] sm:tracking-[0.22em] lg:text-[17px] xl:text-[21px] uppercase text-[#333]">
                About Number9
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-grift-semibold font-semibold text-[34.73px] leading-[1.08] tracking-[-0.03em] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[70px] text-[#111]">
              Creative thinking.
              <br />
              <span className="text-[#0F9E11]">
                Meaningful connections.
              </span>
            </h1>
          </div>

          {/* RIGHT: Desktop only */}
          <div className="hidden lg:block lg:w-[36%] lg:max-w-[380px] xl:max-w-[520px] lg:pt-3 xl:pt-5 lg:border-l lg:border-[#000000] lg:pl-10 xl:pl-12">

            <p className="font-grift-semibold text-[18px] xl:text-[23px] leading-[1.65] text-[#555] mb-6">
              We connect strategy, design, technology,
              and activation to help brands move forward.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-[#999] rounded-[6px] text-[15px] xl:text-[20px] font-medium text-[#111] hover:border-black hover:bg-black hover:text-white transition-all duration-200"
            >
              Explore Our Story
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full overflow-hidden rounded-[7px] sm:rounded-[14px] lg:rounded-[18px] xl:rounded-[22px]">

          <img
            src={aboutHeroImage}
            alt="Number9 team collaborating"
            className="block w-full h-[100px] min-[375px]:h-[140px] min-[480px]:h-[190px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[560px] object-cover object-center"
            loading="eager"
          />

          {/* Caption hidden on mobile to match reference */}
          <div className="hidden sm:block absolute bottom-7 left-7 lg:bottom-9 lg:left-9">
            <p className="font-grift-semibold text-[11px] lg:text-[13px] tracking-[0.22em] uppercase text-white/90 leading-[1.8] drop-shadow-sm">
              Digital ideas.
              <br />
              Real-world impact.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}



/* ─── Who We Are ─────────────────────────────────────────── */
function WhoWeAre() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1640px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-18 lg:py-20 xl:py-24">

        {/* ── Top row: stat (left) + divider + heading (right) ── */}
        <div className="flex flex-row items-start gap-0 sm:gap-0 mb-8 sm:mb-0">

          {/* LEFT — stat + label */}
          <div className="w-[45%] sm:w-[300px] lg:w-[340px] xl:w-[480px] shrink-0 pr-5 sm:pr-10 lg:pr-14 xl:pr-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5 sm:mb-6">
              <span className="w-[7px] h-[7px] rounded-full bg-[#15B83E] shrink-0" />
              <span className="font-grift-semibold text-[11.62px] sm:text-[12px] lg:text-[19px] tracking-[0.26em] uppercase text-[#555]">
                Who we are
              </span>
            </div>

            {/* Big stat */}
            <p className="font-grift-semibold text-[90px] sm:text-[90px] lg:text-[100px] xl:text-[225px] leading-[0.9] text-[#0F9E11] tracking-[-0.02em] mb-3">
              20+
            </p>

            {/* Label */}
            <p className="font-grift-semibold text-[16px] sm:text-[16px] lg:text-[27px] text-[#5E5B5B] leading-snug">
              Years of industry experience
            </p>
          </div>

          {/* Vertical divider */}
          <div className="w-px self-stretch bg-[#000000] shrink-0" />

          {/* RIGHT — heading */}
          <div className="flex-1 pl-5 sm:pl-10 lg:pl-14 xl:pl-16">
            <h2 className="font-grift-semibold text-[22.99px] sm:text-[30px] lg:text-[36px] xl:text-[48px] leading-[1.18] tracking-[-0.02em] text-[#111] mt-7 sm:mb-6 lg:mb-8 max-w-[560px]">
              A creative partner from concept to completion.
            </h2>

            {/* Paragraphs — hidden on mobile (shown below) */}
            <div className="hidden sm:block space-y-4 max-w-[680px]">
              <p className="text-[14px] sm:text-[15px] lg:text-[22px] leading-[1.65] text-[#818282]">
                Based in Dallas, Texas, Number9 Media &amp; Creative Inc. is a full-service
                digital and brand activation agency.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[22px] leading-[1.65] text-[#818282]">
                We work with business, marketing, and technology teams to create
                integrated experiences across digital and physical touchpoints.
              </p>
            </div>
          </div>

        </div>

        {/* Paragraphs — mobile only, full width below the top row */}
        <div className="sm:hidden space-y-4 mt-6">
          <p className="font-grift-medium text-[22.99px] leading-[1.65] text-[#818282]">
            Based in Dallas, Texas, Number9 Media &amp; Creative Inc. is a full-service
            digital and brand activation agency.
          </p>
          <p className="font-grift-medium text-[22.99px] leading-[1.65] text-[#818282]">
            We work with business, marketing, and technology teams to create
            integrated experiences across digital and physical touchpoints.
          </p>
        </div>

      </div>
    </section>
  );
}


/* ─── Thinking Behind Number9 ────────────────────────────── */

function ThinkingSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1640px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-12">

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 xl:gap-12">

          {/* LEFT — Image + Caption */}

          {/* LEFT — Image + Caption */}
          <div className="w-full lg:w-[53%] shrink-0">

            {/* Image with subtle border effect */}
            <div
              className="
      relative w-full
      overflow-hidden
      rounded-[18px]
      sm:rounded-[20px]
      lg:rounded-[22px]
      border border-[#B7B7B7]
    "
            >
              <img
                src={aboutus3rdSect}
                alt="Strategy, Design, Technology, Execution"
                className="
        block w-full
        h-[280px]
        sm:h-[420px]
        md:h-[500px]
        lg:h-[560px]
        xl:h-[725px]
        object-cover object-center
      "
              />
            </div>

            {/* Image caption */}
            <p className="mt-4 font-grift-medium text-[13px] sm:text-[15px] lg:text-[17px] text-[#858585]">
              Strategy. Design. Technology. Execution.
            </p>

          </div>


          {/* RIGHT — Content */}
          <div className="w-full  lg:flex-1 min-w-0 lg:pt-5 ">

            {/* Main Heading */}
            <h2 className="
              font-grift-semibold
              text-[34px]
              sm:text-[44px]
              md:text-[50px]
              lg:text-[48px]
              xl:text-[58px]
              2xl:text-[70px]
              leading-[1.07]
              tracking-[-0.035em]
              text-black
              mb-6 lg:mb-7
            ">
              The thinking
              <br />
              <span className="text-[#159E00]">
                behind Number9.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 lg:space-y-6 mb-10 lg:mb-12 xl:mb-14">

              <p className="
                font-grift-medium
                text-[22.99px]
                sm:text-[17px]
                lg:text-[17px]
                xl:text-[25px]
                leading-[1.4]
                text-[#818282]
              ">
                Great brand experiences bring strategy,
                creativity, and technology together.
                That belief sits at the heart of Number9.
              </p>

              <p className="
                font-grift-medium
                text-[22.99px]
                sm:text-[17px]
                lg:text-[17px]
                xl:text-[25px]
                leading-[1.4]
                text-[#818282]
              ">
                Based in Dallas, Texas, we bring over 20
                years of industry experience to digital
                platforms and real-world activations.
                We collaborate with business, marketing,
                and technology teams to turn ideas into
                clear, engaging experiences—from
                concept to completion.
              </p>

            </div>

            {/* Horizontal Separator */}
            <div className="w-full h-px bg-[#333] mb-7 lg:mb-8" />

            {/* Bottom Feature Columns */}
            <div className="grid grid-cols-2 gap-5 sm:gap-8">

              {/* Digital Experiences */}
              <div className="min-w-0 pr-3 sm:pr-5 lg:pr-6 border-r border-[#444]">

                <h3 className="
                  font-grift-semibold
                  text-[12px]
                  sm:text-[17px]
                  lg:text-[18px]
                  xl:text-[25px]
                  leading-[1.3]
                  text-[#111]
                  mb-3
                ">
                  Digital experiences
                </h3>

                <p className="
                  font-grift-medium
                  text-[11px]
                  sm:text-[15px]
                  lg:text-[16px]
                  xl:text-[22px]
                  leading-[1.4]
                  text-[#858585]
                ">
                  Websites, applications,
                  dashboards, and e-commerce.
                </p>

              </div>

              {/* Real-world Connections */}
              <div className="min-w-0 pl-1 sm:pl-2">

                <h3 className="
                  font-grift-semibold
                  text-[12px]
                  sm:text-[17px]
                  lg:text-[18px]
                  xl:text-[25px]
                  leading-[1.3]
                  text-[#111]
                  mb-3
                ">
                  Real-world connections
                </h3>

                <p className="
                  font-grift-medium
                  text-[11px]
                  sm:text-[15px]
                  lg:text-[16px]
                  xl:text-[22px]
                  leading-[1.4]
                  text-[#858585]
                ">
                  Retail activations, campaigns,
                  and coordinated delivery.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



/* ─── Brand Partnerships ─────────────────────────────────── */
const brandLogos = [
  { src: pepsicoLogo,   alt: 'PepsiCo',   cls: 'h-7 sm:h-8 lg:h-11'   },
  { src: lexusLogo,     alt: 'Lexus',     cls: 'h-7 sm:h-8 lg:h-15'   },
  { src: citibankLogo,  alt: 'Citibank',  cls: 'h-6 sm:h-7 lg:h-11'   },
  { src: emiratesLogo,  alt: 'Emirates',  cls: 'h-10 sm:h-12 lg:h-25' },
  { src: microsoftLogo, alt: 'Microsoft', cls: 'h-6 sm:h-7 lg:h-8'   },
  { src: safewayLogo,   alt: 'Safeway',   cls: 'h-6 sm:h-7 lg:h-8'   },
  { src: magellanLogo,  alt: 'Magellan Health', cls: 'h-8 sm:h-9 lg:h-22' },
  { src: argoLogo,      alt: 'Argo',      cls: 'h-7 sm:h-8 lg:h-16'   },
  { src: nutrienLogo,   alt: 'Nutrien',   cls: 'h-6 sm:h-7 lg:h-19'   },
];


function BrandPartnerships({ onNavigate }) {
  // Display order matching the reference image.
  // Existing brandLogos array should contain the same brand images.
  const findBrand = (name) =>
    brandLogos.find((brand) =>
      brand.alt.toLowerCase().includes(name.toLowerCase())
    );

  const logoColumns = [
    ["PepsiCo", "Emirates", "Magellan"],
    ["Lexus", "Microsoft", "Argo"],
    ["Citibank", "Safeway", "Nutrien"],
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1640px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 xl:py-24">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12 xl:gap-16">

          {/* LEFT — Text Content */}
          <div className="w-full lg:w-[42%] xl:w-[43%] shrink-0 flex items-center gap-6 sm:gap-10 lg:gap-12 xl:gap-16">

            {/* Thin vertical line — desktop only */}
            <div
              className="
                hidden lg:block
                w-px h-[200px]
                lg:h-[230px] xl:h-[253px]
                bg-[#111] shrink-0
              "
            />

            <div className="min-w-0">

              {/* Eyebrow */}
              <p className="
                font-grift-semibold
                text-[11.62px] sm:text-[13px]
                lg:text-[14px] xl:text-[16px]
                tracking-[0.3em]
                uppercase text-[#666]
                mb-6 lg:mb-8
                whitespace-nowrap
              ">
                Brands we have worked with
              </p>

              {/* Main Heading */}
              <h2 className="
                font-grift-semibold
                text-[38px]
                sm:text-[50px]
                md:text-[58px]
                lg:text-[55px]
                xl:text-[70px]
                2xl:text-[76px]
                leading-[1.08]
                tracking-[-0.035em]
                text-black
                mb-7 lg:mb-8
              ">
                Big brands.
                <br />
                <span className="text-[#159E00]">
                  Meaningful
                  <br />
                  partnerships.
                </span>
              </h2>

              {/* Description */}
              <p className="
                font-grift-medium
                text-[22.99px]
                sm:text-[18px]
                lg:text-[18px]
                xl:text-[23px]
                leading-[1.5]
                text-[#858585]
                max-w-[510px]
                mb-9 lg:mb-10
              ">
                Our portfolio includes projects for pepsiCo,
                Lexus, Citibank, Safeway, Shaan Foods,
                and ZEE5.
              </p>

              {/* CTA */}
              <a
                href="#"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("our-work");
                  }
                }}
                className="
                  inline-flex items-center justify-between
                  gap-12
                  pb-2
                  border-b-2 border-[#111]
                  font-grift-medium
                  text-[16px] sm:text-[18px] xl:text-[20px]
                  text-[#111]
                  hover:text-[#159E00]
                  hover:border-[#159E00]
                  transition-colors duration-200
                  group
                "
              >
                <span>Explore Our Work</span>

                <svg
                  className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0-6-6m6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — Staggered Logo Grid */}
          <div className="w-full lg:flex-1 min-w-0">

            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-6 xl:gap-8 items-start">

              {logoColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={`
                    flex flex-col
                    gap-3 sm:gap-5
                    lg:gap-5
                    ${
                      colIndex === 1
                        ? "pt-6 sm:pt-10 lg:pt-12"
                        : ""
                    }
                  `}
                >
                  {column.map((brandName) => {
                    const brand = findBrand(brandName);

                    if (!brand) return null;

                    return (
                      <div
                        key={brandName}
                        className="
                          w-full
                          aspect-[1.32/1]
                          bg-white
                          rounded-[12px]
                          sm:rounded-[16px]
                          lg:rounded-[18px]
                          xl:rounded-[20px]
                          flex items-center justify-center
                          p-3 sm:p-5 lg:p-6
                          shadow-[0_12px_38px_rgba(0,0,0,0.13)]
                          hover:shadow-[0_18px_45px_rgba(0,0,0,0.17)]
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        <img
                          src={brand.src}
                          alt={brand.alt}
                          className={`
                            object-contain
                            max-w-full
                            max-h-full
                            ${brand.cls || ""}
                          `}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ─── Connected Capabilities ─────────────────────────────── */
const capabilities = [
  {
    num: '01',
    title: 'Strategy & Research',
    desc: 'Uncover opportunities through audience insights, market research, and brand strategy.',
    tags: ['AUDIENCE RESEARCH', 'DIGITAL STRATEGY'],
  },
  {
    num: '02',
    title: 'Design & Technology',
    desc: 'Create beautiful, intuitive experiences powered by modern technology.',
    tags: ['UI/UX', 'WEBSITES & WEB APPS', 'E-COMMERCE', 'DASHBOARDS'],
  },
  {
    num: '03',
    title: 'Marketing & Activation',
    desc: 'Bring ideas to life through integrated campaigns, digital products, and real-world experiences.',
    tags: ['INFLUENCER CAMPAIGNS', 'RETAIL ACTIVATIONS', 'LOGISTICS'],
  },
];



function ConnectedCapabilities() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-[1640px] mx-auto
          px-6 sm:px-8 lg:px-12 xl:px-16
          pt-10 pb-12
          sm:pt-16 sm:pb-20
          lg:pt-12 lg:pb-24 xl:pb-28
        "
      >
        {/* SECTION HEADER */}
        <div className="mb-6 sm:mb-14 lg:mb-16 xl:mb-20">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-5">
            <span
              className="
                w-[5px] h-[5px]
                sm:w-[8px] sm:h-[8px]
                rounded-full bg-[#159E00] shrink-0
              "
            />

            <span
              className="
                font-grift-semibold
                text-[11.62px]
                sm:text-[13px]
                lg:text-[15px]
                xl:text-[17px]
                tracking-[0.28em]
                sm:tracking-[0.28em]
                uppercase text-[#606060]
              "
            >
              Our Expertise
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="
              font-grift-medium
              text-[25px]
              sm:text-[38px]
              lg:text-[44px]
              xl:text-[48px]
              2xl:text-[52px]
              leading-[1.12]
              sm:leading-[1.15]
              tracking-[-0.03em]
              text-[#050505]
              sm:font-grift-semibold
            "
          >
            <span className="block sm:inline">
              Connected capabilities.
            </span>{" "}
            <span className="block sm:inline text-[#159E00]">
              A shared direction.
            </span>
          </h2>
        </div>

        {/* CAPABILITY ROWS */}
        <div className="w-full">

          {capabilities.map((cap, index) => (
            <div
              key={cap.num}
              className={`
                grid
                grid-cols-[minmax(0,1fr)_minmax(0,0.46fr)]
                md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                lg:grid-cols-[105px_minmax(280px,1.1fr)_minmax(330px,1.3fr)_minmax(190px,0.65fr)]
                xl:grid-cols-[130px_minmax(350px,1.1fr)_minmax(430px,1.3fr)_minmax(210px,0.6fr)]
                items-start
                gap-x-3
                sm:gap-x-6
                lg:gap-x-5
                xl:gap-x-6
                py-7
                sm:py-10
                lg:py-9
                xl:py-10
                ${
                  index !== capabilities.length - 1
                    ? "border-b border-[#C8C8C8]"
                    : ""
                }
              `}
            >

              {/* MOBILE/TABLET LEFT CONTENT */}
              <div className="min-w-0 lg:contents">

                {/* NUMBER + TITLE */}
                <div className="flex items-start gap-4 sm:gap-5 lg:block">

                  {/* Number */}
                  <span
                    className="
                      font-grift-semibold
                      text-[28.56px]
                      sm:text-[50px]
                      lg:text-[56px]
                      xl:text-[64px]
                      leading-none
                      tracking-[-0.04em]
                      text-[#159E00]
                      tabular-nums
                      shrink-0
                    "
                  >
                    {cap.num}
                  </span>

                  {/* Mobile + Tablet Title */}
                  <h3
                    className="
                      lg:hidden
                      font-grift-medium
                      text-[18px]
                      sm:text-[24px]
                      leading-[1.08]
                      text-[#111]
                      min-w-0
                    "
                  >
                    {cap.title}
                  </h3>
                </div>

                {/* Desktop title */}
                <div className="hidden lg:flex items-center gap-10 xl:gap-12 min-h-[64px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#999] shrink-0" />

                  <h3
                    className="
                      font-grift-semibold
                      text-[22px]
                      xl:text-[28px]
                      2xl:text-[30px]
                      leading-[1.25]
                      text-[#111]
                    "
                  >
                    {cap.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div
                  className="
                    min-w-0
                    mt-3 sm:mt-5
                    lg:mt-0
                    lg:border-l
                    lg:border-[#BDBDBD]
                    lg:pl-8
                    xl:pl-12
                    lg:min-h-[58px]
                  "
                >
                  <p
                    className="
                      font-grift-medium
                      text-[14px]
                      sm:text-[17px]
                      lg:text-[18px]
                      xl:text-[21px]
                      2xl:text-[23px]
                      leading-[1.5]
                      text-[#858585]
                    "
                  >
                    {cap.desc}
                  </p>
                </div>
              </div>

              {/* SERVICE TAGS */}
              <div
                className="
                  min-w-0
                  flex flex-col gap-[3px]
                  border-l border-[#D0D0D0]
                  pl-3
                  sm:pl-5
                  lg:border-l-0
                  lg:pl-3
                  xl:pl-4
                  lg:gap-1
                  self-start
                  min-h-[60px]
                  lg:min-h-0
                "
              >
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      font-grift-medium
                      text-[8px]
                      sm:text-[13px]
                      lg:text-[13px]
                      xl:text-[15px]
                      2xl:text-[16px]
                      leading-[1.45]
                      tracking-[0.1em]
                      uppercase
                      text-[#858585]
                      break-words
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}




/* ─── Process Section ────────────────────────────────────── */

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your audience, business goals, and the challenge through research and collaboration.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Shape the strategy, map the experience, and develop clear, engaging creative concepts.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Bring the experience to life through digital platforms, interactive applications, and campaign execution.",
  },
  {
    num: "04",
    title: "Activate",
    desc: "Connect with audiences through digital marketing, retail experiences, and coordinated delivery.",
  },
];


function ProcessSection() {
  return (
    <section className="w-full bg-[#1A1A1A]">
      <div
        className="
          w-full max-w-[1920px] mx-auto
          px-[21px] sm:px-8 lg:px-12 xl:px-[6.25%]
          pt-[24px] sm:pt-14 lg:pt-[68px]
          pb-[46px] sm:pb-14 lg:pb-[72px]
        "
      >
        {/* SECTION HEADING */}
        <h2
          className="
            font-grift-semibold
            text-[21px] sm:text-[36px]
            lg:text-[44px] xl:text-[56px]
            leading-[1.12]
            tracking-[-0.035em]
            text-white
            mb-[31px] sm:mb-16 lg:mb-[80px]
          "
        >
          How ideas become{" "}
          <span className="text-[#2FC625]">
            meaningful experiences.
          </span>
        </h2>

        {/* PROCESS TIMELINE */}
        <div className="relative">

          {/* MOBILE VERTICAL CONNECTING LINE */}
          <div
            className="
              absolute lg:hidden
              left-[8px]
              top-[8px]
              bottom-[120px]
              w-px
              bg-gradient-to-b
              from-[#2FC625]/50
              via-[#2FC625]/30
              to-[#2FC625]/20
              pointer-events-none
            "
          />

          {/* DESKTOP CONNECTING LINE */}
          <div
            className="
              hidden lg:block
              absolute top-[20px] left-[20px] right-[20px]
              h-px
              bg-gradient-to-r
              from-[#2FC625]/50
              via-[#2FC625]/20
              to-transparent
              pointer-events-none
            "
          />

          {/* PROCESS STEPS */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-x-8 sm:gap-x-10 lg:gap-x-8 xl:gap-x-12
              gap-y-[30px] sm:gap-y-12
            "
          >
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="
                  relative min-w-0
                  flex flex-row lg:flex-col
                  items-start
                  gap-[22px] lg:gap-0
                "
              >
                {/* TIMELINE MARKER */}
                <div
                  className="
                    relative z-10
                    w-[17px] h-[17px]
                    lg:w-[42px] lg:h-[42px]
                    flex items-center justify-center
                    mt-[3px] lg:mt-0
                    lg:mb-[22px]
                    shrink-0
                  "
                >
                  <div
                    className="
                      w-[17px] h-[17px]
                      lg:w-[42px] lg:h-[42px]
                      rounded-full
                      bg-[#246A25]
                      flex items-center justify-center
                    "
                  >
                    <div
                      className="
                        w-[10px] h-[10px]
                        lg:w-[26px] lg:h-[26px]
                        rounded-full
                        bg-[#2FC625]
                      "
                    />
                  </div>
                </div>

                {/* STEP CONTENT */}
                <div className="flex flex-col min-w-0">

                  {/* STEP NUMBER */}
                  <span
                    className="
                      font-grift-semibold
                      text-[26px] sm:text-[38px]
                      lg:text-[40px] xl:text-[44px]
                      leading-none
                      tracking-[-0.03em]
                      text-[#239E06]
                      mb-[4px] lg:mb-[6px]
                    "
                  >
                    {step.num}
                  </span>

                  {/* STEP TITLE */}
                  <h3
                    className="
                      font-grift-medium
                      text-[23px] sm:text-[30px]
                      lg:text-[32px] xl:text-[36px]
                      leading-[1.15]
                      tracking-[-0.025em]
                      text-white
                      mb-[10px] lg:mb-[16px]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* STEP DESCRIPTION */}
                  <p
                    className="
                      font-grift-medium
                      text-[13px] sm:text-[18px]
                      lg:text-[18px] xl:text-[20px]
                      leading-[1.5] lg:leading-[1.55]
                      tracking-[-0.01em]
                      text-[#E0E0E0]
                      max-w-[380px]
                    "
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM PROGRESS BAR */}
        <div
          className="
            relative w-full
            h-[3px] lg:h-[8px]
            bg-[#969C9B]
            rounded-full
            overflow-hidden
            mt-[29px] sm:mt-16 lg:mt-[72px]
          "
        >
          <div
            className="
              absolute top-0 left-0
              h-full w-[27%]
              bg-[#2FC625]
              rounded-full
            "
          />
        </div>
      </div>
    </section>
  );
}






/* ─── Page ────────────────────────────────────────────────── */
export default function AboutPage({ onNavigate, activeDropdown, setActiveDropdown }) {
  return (
    <div className="bg-white min-h-screen text-[#141414] font-outfit antialiased">
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
      />
      <AboutHero />
      <WhoWeAre />
      <ThinkingSection />
      <BrandPartnerships onNavigate={onNavigate} />
      <ConnectedCapabilities />
      <ProcessSection />
      <AccelerateBusinessSection />
      <Footer />
    </div>
  );
}
