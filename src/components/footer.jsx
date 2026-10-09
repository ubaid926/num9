import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import logo from '../assets/Black Logo.png';

const Footer = () => {
  const discoverLinks = [
    'About Us',
    'Our Approach',
    'Services',
    'Case Studies',
    'Technologies',
    'Industries',
    'Careers',
    'Life at Number 9',
    'Blog',
    'Press',
    'Contact Us',
  ];

  const resourceLinks = [
    'All Resources',
    'Blog',
    'Case Studies',
    'Whitepapers & eBooks',
    'Webinars',
    'Industry Insights',
    'Technology Hub',
    'Newsletter',
    'Glossary',
  ];

  const careerLinks = [
    'Job Opportunities',
    'Internships',
    'Referral Program',
    'Associate Program',
  ];

  return (
    <footer className="w-full bg-white">
      <div className="w-full grid grid-cols-1 xl:grid-cols-[1.72fr_1fr]">

        {/* =====================================================
            LEFT WHITE SIDE
        ====================================================== */}
        <div
          className="
            bg-white

            px-6
            sm:px-10
            md:px-14
            lg:px-20
            xl:px-[90px]
            2xl:px-[130px]

            pt-10
            sm:pt-12
            xl:pt-10

            pb-8
            xl:pb-8

            min-h-[670px]

            flex
            flex-col
            justify-between
          "
        >
          {/* TOP COLUMNS */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-[110px_1fr_1fr_1fr]

              gap-y-10
              gap-x-10
              xl:gap-x-16
            "
          >
            {/* LOGO */}
            <div className="flex items-start">
              <a href="#" className="flex items-center" aria-label="Home">
                <img
                  src={logo}
                  alt="Number 9"
                  className="h-10 sm:h-18 w-auto object-contain block"
                />
              </a>
            </div>

            {/* DISCOVER */}
            <div>
              <h3 className="text-[20px] font-semibold text-black mb-7">
                Discover Number 9
                <span className="text-[#15B83E]">.</span>
              </h3>

              <ul className="space-y-[14px]">
                {discoverLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        text-[14px]
                        text-black/80

                        transition-colors
                        hover:text-black
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="text-[20px] font-semibold text-black mb-7">
                Resources
                <span className="text-[#15B83E]">.</span>
              </h3>

              <ul className="space-y-[14px]">
                {resourceLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        text-[14px]
                        text-black/80

                        transition-colors
                        hover:text-black
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CAREERS */}
            <div>
              <h3 className="text-[20px] font-semibold text-black mb-7">
                Careers
                <span className="text-[#15B83E]">.</span>
              </h3>

              <ul className="space-y-[28px]">
                {careerLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        text-[14px]
                        text-black/80

                        transition-colors
                        hover:text-black
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM LEGAL */}
          <div className="mt-16">
            <div
              className="
                flex
                flex-wrap

                gap-x-12
                gap-y-3
              "
            >
              <a
                href="#"
                className="text-[12px] text-black/80 hover:text-black"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[12px] text-black/80 hover:text-black"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-[12px] text-black/80 hover:text-black"
              >
                Do Not Sell My Personal Information
              </a>
            </div>

            <p className="mt-6 text-[12px] text-black/80">
              ©Elipse Studio 2026. All rights reserved.
            </p>
          </div>
        </div>

        {/* =====================================================
            RIGHT GRAY SIDE
        ====================================================== */}
        <div
          className="
            bg-[#D9DDE0]

            px-6
            sm:px-10
            lg:px-14
            xl:px-[50px]
            2xl:px-[65px]

            pt-10
            sm:pt-12

            pb-10

            min-h-[670px]

            flex
            flex-col
          "
        >
          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-[20px] font-semibold text-black">
              Get in touch
              <span className="text-[#ff5e45]">.</span>
            </h3>

            <div
              className="
                flex
                flex-wrap
                gap-3

                mt-6
              "
            >
              <button
                type="button"
                className="
                  h-[40px]
                  px-6

                  border
                  border-black

                  rounded-[5px]

                  text-[14px]
                  text-black

                  transition-all

                  hover:bg-black
                  hover:text-white
                "
              >
                Contact Us
              </button>

              <button
                type="button"
                className="
                  h-[40px]
                  px-6

                  rounded-[5px]

                  bg-[#32CA00]
                  text-white

                  text-[14px]

                  flex
                  items-center
                  gap-3

                  transition-colors

                  hover:bg-[#2bb400]
                "
              >
                Schedule a Call

                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4 mt-7">
              <Phone className="w-[17px] h-[17px] text-black fill-black" />

              <a
                href="tel:+14084782739"
                className="text-[13px] text-black/85"
              >
                +1 (408) 478-2739
              </a>
            </div>
          </div>

          {/* LINE */}
          <div className="h-px bg-black/20 my-10" />

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-[19px] font-semibold text-black">
              Stay ahead with insights.
            </h3>

            <p
              className="
                mt-5

                max-w-[350px]

                text-[13px]
                leading-[1.5]

                text-black/80
              "
            >
              Get insights from the experts on building
              <br className="hidden sm:block" />
              and scaling technology teams.
            </p>

            <div
              className="
                mt-8

                flex
                items-end

                gap-5
              "
            >
              <input
                type="email"
                placeholder="Your e-mail address"
                className="
                  w-full
                  max-w-[220px]

                  bg-transparent

                  border-none
                  outline-none

                  text-[13px]
                  text-black

                  placeholder:text-black/45
                "
              />

              <button
                type="button"
                className="
                  h-[40px]
                  px-6

                  border
                  border-black

                  rounded-[5px]

                  text-[14px]
                  text-black

                  transition-all

                  hover:bg-black
                  hover:text-white
                "
              >
                Subscribe
              </button>
            </div>

            <label
              className="
                mt-7

                flex
                items-center
                gap-4

                cursor-pointer
              "
            >
              <input
                type="checkbox"
                className="
                  w-[18px]
                  h-[18px]

                  border
                  border-black/40

                  accent-black
                "
              />

              <span className="text-[12px] text-black/80">
                By subscribing I accept the{' '}
                <a
                  href="#"
                  className="
                    underline
                    underline-offset-2
                    text-black
                  "
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {/* LINE */}
          <div className="h-px bg-black/20 my-12" />

          {/* SOCIAL */}
          <div>
            <h3 className="text-[19px] font-semibold text-black">
              Follow us
              <span className="text-[#ff5e45]">.</span>
            </h3>

            <div className="flex items-center gap-5 mt-7">
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon label="Facebook">
                <FacebookIcon />
              </SocialIcon>

              <SocialIcon label="X">
                <XIcon />
              </SocialIcon>

              <SocialIcon label="YouTube">
                <YouTubeIcon />
              </SocialIcon>

              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const iconClass = 'w-[15px] h-[15px] fill-current';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.57V8.43L15.84 12l-6.09 3.57z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const SocialIcon = ({ children, label }) => {
  return (
    <a
      href="#"
      aria-label={label}
      className="
        w-[30px]
        h-[30px]
        rounded-full
        bg-[#3D4442]
        text-white
        flex
        items-center
        justify-center
        shrink-0
        transition-transform
        duration-300
        hover:scale-110
      "
    >
      {children}
    </a>
  );
};

export default Footer;