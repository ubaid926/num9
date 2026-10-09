import React, { useState } from 'react';
import AppNav from '../components/nav';
import WhyWorkWithUs from '../components/contact';
import AccelerateBusinessSection from '../components/AccelerateBusinessSection';
import Footer from '../components/footer';
import heroImage from '../assets/aboutHeroImage.webp';

/* ─── Contact Hero ───────────────────────────────────────── */

function ContactHero() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full max-w-[1920px] mx-auto
          px-5 sm:px-8 md:px-12
          lg:px-16 xl:px-[120px]

          pt-8 sm:pt-10 lg:pt-[65px]
          pb-0
        "
      >
        {/* MAIN TWO-COLUMN LAYOUT */}
        <div
          className="
            flex flex-col lg:flex-row
            lg:items-start lg:justify-between

            gap-8 sm:gap-10 lg:gap-12 xl:gap-16

            mb-10 sm:mb-12 lg:mb-[35px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full lg:w-[46%] xl:w-[46%]
              shrink-0
              lg:pt-[36px]
            "
          >
            {/* EYEBROW */}
            <div
              className="
                flex items-center
                gap-[24px]
                mb-6 sm:mb-8 lg:mb-[35px]
              "
            >
              <span
                className="
                  w-[10px] h-[10px]
                  rounded-full
                  bg-[#169C12]
                  shrink-0
                "
              />

              <span
                className="
                  font-grift-semibold
                  text-[10.22px] sm:text-[16px]
                  lg:text-[20px]
                  tracking-[0.28em]
                  uppercase
                  text-[#606060]
                "
              >
                Contact Us
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                font-grift-semibold
                text-[33.88px]
                sm:text-[48px]
                md:text-[54px]
                lg:text-[48px]
                xl:text-[60px]
                2xl:text-[66px]

                leading-[1.07]
                tracking-[-0.035em]
                text-black
                m-0
              "
            >
              Good things start
              <br className="hidden xl:block" />

              <span className="block text-[#159E0D]">
                with a conversation.
              </span>
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              w-full
              lg:flex-1
              min-w-0
            "
          >
            {/* HERO IMAGE */}

            {/* HERO IMAGE */}
          
{/* HERO IMAGE */}
<div
  className="
    relative
    w-full

    aspect-[3.1/1]
    sm:aspect-auto

    sm:h-[260px]
    md:h-[300px]
    lg:h-[265px]
    xl:h-[265px]

    rounded-[12px]
    sm:rounded-[18px]
    lg:rounded-[22px]

    overflow-hidden
    border border-[#B7B7B7]
    bg-white
  "
>
  <img
    src={heroImage}
    alt="Number9 team in conversation"
    className="
      block
      w-full h-full
      object-cover
      object-center
    "
    loading="eager"
  />
</div>



            {/* IMAGE CAPTION */}
            <p
              className="
                mt-4 lg:mt-[17px]
                mb-0

                font-grift-medium
                text-[12.65px]
                sm:text-[17px]
                lg:text-[19px]
                xl:text-[21px]

                leading-[1.4]
                tracking-[-0.015em]
                text-[#626262]
              "
            >
              Have an idea, a challenge, or a project in mind?
              <br className="hidden sm:block" />
              Tell us about it.
            </p>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="w-full h-[2px] bg-[#C9C9C9]" />
      </div>
    </section>
  );
}



/* ─── Contact Form Section ───────────────────────────────── */

const services = [
  "UI/UX Design",
  "Web & App Development",
  "E-commerce",
  "Digital Marketing",
  "Brand Activation",
];

function ContactFormSection() {
  const [selected, setSelected] = useState(["UI/UX Design"]);
  const [agreed, setAgreed] = useState(false);

  const toggle = (service) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const inputCls = `
    w-full min-w-0
    h-[38px] sm:h-[48px] xl:h-[56px]
    px-3 sm:px-4 xl:px-[18px]
    border border-[#C9CBD3]
    rounded-[6px] lg:rounded-[8px]
    bg-white font-grift-medium
    text-[11px] sm:text-[14px] xl:text-[15px]
    text-[#111] placeholder:text-[#A1A1AA]
    outline-none focus:border-[#159E0D]
    transition-all duration-200
  `;

  const labelCls = `
    block mb-[6px] lg:mb-[8px]
    font-grift-medium
    text-[9.9px] sm:text-[14px] xl:text-[16px]
    text-[#111]
  `;

  const AddressContent = () => (
    <div className="flex items-start gap-[17px] lg:gap-[26px]">
      <svg
        className="
          w-[28px] h-[36px]
          sm:w-[34px] sm:h-[42px]
          xl:w-[40px] xl:h-[48px]
          text-[#169F09] shrink-0
        "
        viewBox="0 0 24 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12c0 9.1 12 20 12 20s12-10.9 12-20C24 5.4 18.6 0 12 0zm0 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" />
      </svg>

      <div>
        <h4 className="font-grift-semibold text-[15.31px] sm:text-[18px] xl:text-[21px] leading-[1.35] text-[#111] mb-[2px]">
          McKinney, Texas
        </h4>
        <p className="font-grift-medium text-[13.31px] sm:text-[16px] xl:text-[19px] leading-[1.35] text-[#606060]">
          300 Davis St, STE 220
          <br />
          McKinney, TX 75069
        </p>
      </div>
    </div>
  );

  const ScheduleCTA = () => (
    <a
      href="#"
      className="
        group inline-flex items-center justify-between
        w-[190px] sm:w-[235px] xl:w-[260px]
        pb-[8px] lg:pb-[10px]
        border-b-2 border-black
        font-grift-medium
        text-[14px] sm:text-[18px] xl:text-[20px]
        text-[#111]
        hover:text-[#159E0D]
        hover:border-[#159E0D]
        transition-all duration-200
      "
    >
      <span>Schedule a Call</span>
      <svg
        className="w-[19px] h-[19px] sm:w-[24px] sm:h-[24px] transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12h16m-7-7 7 7-7 7"
        />
      </svg>
    </a>
  );

  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full max-w-[1920px] mx-auto
          px-[28px] sm:px-8 md:px-12
          lg:px-16 xl:px-[115px]
          pt-[16px] sm:pt-10 lg:pt-[42px]
          pb-[22px] sm:pb-12 lg:pb-[26px]
        "
      >
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-0">

          {/* LEFT COLUMN */}
          <div
            className="
              w-full lg:w-[30%] shrink-0
              lg:pr-[45px] xl:pr-[70px]
              lg:border-r lg:border-[#BDBDBD]
              flex flex-col
            "
          >
            {/* HEADING */}
            <h2
              className="
                font-grift-semibold
                text-[22px] sm:text-[36px]
                lg:text-[43px] xl:text-[56px]
                2xl:text-[60px]
                leading-[1.12] lg:leading-[1.06]
                tracking-[-0.035em]
                text-black m-0
              "
            >
              Let’s make your next move count.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[12px] sm:mt-5 lg:mt-[34px]
                mb-0
                max-w-none lg:max-w-[345px]
                font-grift-medium
                text-[14px] sm:text-[16px] xl:text-[20px]
                leading-[1.4] lg:leading-[1.35]
                text-[#626262]
              "
            >
              Share your goals. We’ll explore how strategy,
              design, and technology can help.
            </p>

            {/* DESKTOP ADDRESS */}
            <div className="hidden lg:block lg:mt-[100px]">
              <AddressContent />
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block lg:mt-auto lg:pb-[126px]">
              <ScheduleCTA />
            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <div
            className="
              w-full lg:flex-1 min-w-0
              mt-[22px] sm:mt-8 lg:mt-0
              lg:pl-[55px] xl:pl-[95px]
            "
          >
            <h3
              className="
                font-grift-semibold
                text-[23px] sm:text-[30px]
                lg:text-[37px] xl:text-[42px]
                leading-[1.15]
                tracking-[-0.025em]
                text-black
                mb-[22px] sm:mb-8 lg:mb-[36px]
              "
            >
              Tell us about your project.
            </h3>

            <form
              className="w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* ROW 1 */}
              <div className="grid grid-cols-2 gap-x-[14px] sm:gap-x-6 xl:gap-x-[44px]">
                <div className="min-w-0">
                  <label htmlFor="fullName" className={labelCls}>
                    Full Name
                    <span className="text-[#E65B22]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    className={inputCls}
                    required
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="workEmail" className={labelCls}>
                    Work Email
                    <span className="text-[#E65B22]">*</span>
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="Your work email"
                    className={inputCls}
                    required
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-2 gap-x-[14px] sm:gap-x-6 xl:gap-x-[44px] mt-[17px] sm:mt-6">
                <div className="min-w-0">
                  <label htmlFor="companyName" className={labelCls}>
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Company name"
                    className={inputCls}
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="contactNumber" className={labelCls}>
                    Contact Number (Optional)
                  </label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    placeholder="Enter your contact number"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* SERVICES */}
              <div className="mt-[19px] sm:mt-[26px]">
                <p className={labelCls}>
                  What can we help you with?
                </p>

                <div className="flex flex-wrap gap-[9px] sm:gap-[12px] xl:gap-x-[18px] mt-[10px]">
                  {services.map((service) => {
                    const active = selected.includes(service);

                    return (
                      <button
                        key={service}
                        type="button"
                        aria-pressed={active}
                        onClick={() => toggle(service)}
                        className={`
                          h-[36px] sm:h-[45px] xl:h-[56px]
                          px-[12px] sm:px-5 xl:px-[35px]
                          rounded-[6px] lg:rounded-[8px]
                          border
                          font-grift-medium
                          text-[10px] sm:text-[13px] xl:text-[16px]
                          whitespace-nowrap
                          transition-all duration-200
                          ${active
                            ? "border-[#18A827] bg-[#E9F5E9] text-[#111]"
                            : "border-[#C9CBD3] bg-white text-[#A1A1AA] hover:border-[#18A827]"
                          }
                        `}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="mt-[32px] sm:mt-[30px]">
                <label htmlFor="projectDetails" className={labelCls}>
                  Project Details
                  <span className="text-[#E65B22]">*</span>
                </label>

                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  placeholder="Tell us about your project, your goals, and where you want to go."
                  required
                  className="
                    w-full h-[70px] sm:h-[110px] xl:h-[143px]
                    px-3 sm:px-4 xl:px-[18px]
                    py-[11px] sm:py-4
                    border border-[#C9CBD3]
                    rounded-[6px] lg:rounded-[8px]
                    bg-white resize-none
                    font-grift-medium
                    text-[11px] sm:text-[14px] xl:text-[15px]
                    text-[#111] placeholder:text-[#A1A1AA]
                    outline-none
                    focus:border-[#159E0D]
                    transition-all duration-200
                  "
                />
              </div>

              {/* PRIVACY POLICY */}
              <div className="flex items-center gap-[7px] sm:gap-[10px] mt-[11px] sm:mt-[18px]">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="
                    w-[13px] h-[13px]
                    sm:w-[18px] sm:h-[18px]
                    shrink-0 cursor-pointer
                    accent-[#159E0D]
                  "
                />
                <label
                  htmlFor="privacy"
                  className="
                    font-grift-medium
                    text-[11px] sm:text-[13px] xl:text-[15px]
                    text-[#111] cursor-pointer
                  "
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="underline underline-offset-2 hover:text-[#159E0D]"
                  >
                    Privacy Policy.
                  </a>
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  h-[46px] sm:h-[56px] xl:h-[71px]
                  mt-[16px] sm:mt-[20px]
                  flex items-center justify-center
                  lg:justify-start lg:px-[45px]
                  bg-black rounded-[6px] lg:rounded-[8px]
                  font-grift-medium
                  text-[13.75px] sm:text-[17px] xl:text-[21px]
                  text-white
                  hover:bg-[#159E0D]
                  transition-colors duration-200
                "
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* MOBILE ADDRESS AND CTA */}
          <div className="lg:hidden w-full mt-[31px] sm:mt-12">
            <AddressContent />

            <div className="mt-[25px] sm:mt-8">
              <ScheduleCTA />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



/* ─── Process + Map Section ──────────────────────────────── */

function ProcessMapSection() {
  const steps = [
    {
      num: "01",
      title: "Share your idea",
      desc: "Tell us about your goals and the support you need.",
    },
    {
      num: "02",
      title: "Discuss the possibilities",
      desc: "Explore ideas and find the right approach with our team.",
    },
    {
      num: "03",
      title: "Plan the next steps",
      desc: "Shape a clear direction and move forward.",
    },
  ];

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=300+Davis+St+STE+220+McKinney+TX+75069";

  return (
    <section className="w-full overflow-hidden mt-0 lg:mt-13 xl:mt-13">
      {/* =========================================
          TOP — PROCESS STEPS
      ========================================= */}
      <div className="w-full bg-[#DAFADB]">
        <div
          className="
            w-full max-w-[1920px] mx-auto
            px-5 sm:px-8 md:px-12
            lg:px-16 xl:px-[118px]
            pt-10 sm:pt-12 lg:pt-[58px]
            pb-10 sm:pb-12 lg:pb-[58px]
          "
        >
          {/* EYEBROW */}
          <div
            className="
              flex items-center
              gap-[24px]
              mb-8 lg:mb-[34px]
            "
          >
            <span
              className="
                w-[10px] h-[10px]
                rounded-full
                bg-[#16A20B]
                shrink-0
              "
            />

            <span
              className="
                font-grift-semibold
                text-[10.56px] sm:text-[15px] lg:text-[21px]
                tracking-[0.28em]
                uppercase
                text-[#606060]
              "
            >
              A clear start. A shared direction.
            </span>
          </div>

          {/* STEPS GRID */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-y-7 lg:gap-y-0
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`
                  flex items-start
                  gap-5 xl:gap-[28px]
                  min-w-0

                  ${index === 0
                    ? "lg:pr-8 xl:pr-[48px]"
                    : index === 1
                      ? "lg:px-8 xl:px-[74px]"
                      : "lg:pl-8 xl:pl-[48px]"
                  }

                  ${index > 0
                    ? "border-t lg:border-t-0 lg:border-l border-[#A9C9AB] pt-7 lg:pt-0"
                    : ""
                  }
                `}
              >
                {/* STEP NUMBER */}
                <span
                  className="
                    block shrink-0
                    font-grift-semibold
                    text-[56.7px]
                    sm:text-[70px]
                    lg:text-[66px]
                    xl:text-[82px]
                    2xl:text-[90px]

                    leading-[0.95]
                    tracking-[-0.045em]
                    text-[#16A20B]
                  "
                >
                  {step.num}
                </span>

                {/* STEP DESCRIPTION */}
                <div className="min-w-0 pt-[3px]">
                  <h3
                    className="
                      font-grift-semibold
                      text-[18px]
                      sm:text-[21px]
                      lg:text-[20px]
                      xl:text-[30px]

                      leading-[1.2]
                      tracking-[-0.02em]
                      text-black
                      mb-[12px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      font-grift-medium
                      text-[17.5px]
                      sm:text-[18px]
                      lg:text-[17px]
                      xl:text-[25px]

                      leading-[1.3]
                      text-[#626262]
                      max-w-[345px]
                      m-0
                    "
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM — LOCATION AND MAP
      ========================================= */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {/* LEFT LOCATION CONTENT */}
            <div
              className="
                w-full
                lg:w-[25.85%]
                shrink-0

                px-5 sm:px-8 md:px-12
                lg:pl-16 lg:pr-8
                xl:pl-[118px] xl:pr-[45px]

                pt-8 sm:pt-10 lg:pt-[35px]
                pb-8 sm:pb-10 lg:pb-[10px]

                flex flex-col
                items-start
              "
            >
              {/* LOCATION EYEBROW */}
              <div
                className="
                  flex items-center
                  gap-[24px]
                  mb-[26px]
                "
              >
                <span
                  className="
                    w-[10px] h-[10px]
                    rounded-full
                    bg-[#16A20B]
                    shrink-0
                  "
                />

                <span
                  className="
                    font-grift-semibold
                    text-[14.78px] sm:text-[15px] lg:text-[21px]
                    tracking-[0.28em]
                    uppercase
                    text-[#606060]
                    whitespace-nowrap
                  "
                >
                  Our Location
                </span>
              </div>

              {/* LOCATION HEADING */}
              <h2
                className="
                  font-grift-semibold

                  text-[49px]
                  sm:text-[52px]
                  lg:text-[48px]
                  xl:text-[64px]
                  2xl:text-[70px]

                  leading-[1.06]
                  tracking-[-0.035em]
                  text-black
                  m-0
                "
              >
                Find us
                <br />
                in Texas.
              </h2>

              {/* DIRECTIONS CTA */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex items-center
                  justify-between

                  w-[240px] lg:w-full
                  max-w-[260px]

                  mt-7 lg:mt-[24px]
                  pb-[10px]

                  border-b-2 border-black

                  font-grift-medium
                  text-[15.4px] sm:text-[19px]
                  lg:text-[22px]
                  text-black

                  hover:text-[#16A20B]
                  hover:border-[#16A20B]
                  transition-all duration-200
                "
              >
                <span>Get Directions</span>

                <svg
                  className="
                    w-[25px] h-[25px]
                    transition-transform duration-200
                    group-hover:translate-x-1
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h16m-7-7 7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* RIGHT — GOOGLE MAP */}

            {/* RIGHT — GOOGLE MAP */}
            <div
              className="
    relative
    w-full
    lg:flex-1
    min-w-0

    h-[300px]
    sm:h-[350px]
    lg:h-[300px]

    overflow-hidden
    bg-[#ECEEEF]
  "
            >
              {/* MAP — CENTERED WITHOUT SEARCH MARKER */}
              <iframe
                title="Number9 - McKinney Texas Location"
                src="https://www.google.com/maps?ll=33.1984,-96.6989&z=13&output=embed"
                className="
      absolute inset-0
      w-full h-full
      border-0
    "
                style={{
                  filter:
                    "grayscale(1) contrast(0.88) brightness(1.08)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* ONLY CUSTOM GREEN LOCATION POINTER */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
      absolute z-10
      left-[53%] top-[25%]
      -translate-x-1/2

      flex items-center
      gap-[12px]

      pointer-events-auto
      group
    "
                aria-label="View McKinney Texas on Google Maps"
              >
                {/* GREEN MAP PIN */}
                <svg
                  viewBox="0 0 32 42"
                  className="
        w-[36px] h-[47px]
        shrink-0
        drop-shadow-sm
      "
                  aria-hidden="true"
                >
                  <path
                    d="M16 1C7.7 1 1 7.7 1 16c0 10 15 25 15 25s15-15 15-25C31 7.7 24.3 1 16 1z"
                    fill="#17A509"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="6"
                    fill="white"
                  />
                </svg>

                {/* LOCATION LABEL */}
                <span
                  className="
        px-[20px] py-[10px]
        rounded-full
        bg-white
        shadow-md

        font-grift-semibold
        text-[15px] sm:text-[18px]
        lg:text-[20px]
        text-black
        whitespace-nowrap

        group-hover:shadow-lg
        transition-shadow
      "
                >
                  McKinney, TX
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}




/* ─── Page ────────────────────────────────────────────────── */
export default function ContactPage({ onNavigate, activeDropdown, setActiveDropdown }) {
  return (
    <div className="bg-white min-h-screen text-[#141414] font-outfit antialiased">
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
      />

      <ContactHero />
      <ContactFormSection />
      <ProcessMapSection />

      <AccelerateBusinessSection />
      <Footer />
    </div>
  );
}
