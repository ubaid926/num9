import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import logo from "../assets/Green 9 with Blue NO Badge.webp";

// Matched to the supplied 1920px reference with routing integrated to existing routes.
const Footer = ({ onNavigate }) => {
  const handleNavigateClick = (e, targetPage) => {
    e?.preventDefault?.();
    if (!targetPage) return;
    if (onNavigate) {
      onNavigate(targetPage);
    } else if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (targetPage === "home") {
        url.searchParams.delete("page");
      } else {
        url.searchParams.set("page", targetPage);
      }
      window.location.href = url.toString();
    }
  };

  const getHref = (route) => (route === "home" ? "/" : `?page=${route}`);

  const discoverLinks = [
    { label: "About Us", route: "about" },
    { label: "Our Approach", route: "about" },
    { label: "Services", route: "services" },
    { label: "Case Studies", route: "our-work" },
    { label: "Technologies", route: "services" },
    { label: "Industries", route: "services" },
    { label: "Careers", route: "contact" },
    { label: "Life at Number9", route: "about" },
    { label: "Blog", route: "our-work" },
    { label: "Press", route: "about" },
    { label: "Contact Us", route: "contact" },
  ];

  const resourceLinks = [
    { label: "All Resources", route: "our-work" },
    { label: "Blog", route: "our-work" },
    { label: "Case Studies", route: "our-work" },
    { label: "Whitepapers & eBooks", route: "our-work" },
    { label: "Webinars", route: "services" },
    { label: "Industry Insights", route: "services" },
    { label: "Technology Hub", route: "services" },
    { label: "Newsletter", route: "contact" },
    { label: "Glossary", route: "about" },
  ];

  const careerLinks = [
    { label: "Job Opportunities", route: "contact" },
    { label: "Internships", route: "contact" },
    { label: "Referral Program", route: "contact" },
    { label: "Associate Program", route: "contact" },
  ];

  const linkClass = "block text-[14px] leading-[1.4] text-black hover:opacity-60 transition-opacity cursor-pointer";
  const headingClass = "mb-[25px] text-[18px] xl:text-[19px] 2xl:text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-black whitespace-nowrap";

  return (
    <footer className="w-full bg-white text-black">
      <div className="grid w-full min-w-0 grid-cols-1 xl:grid-cols-[minmax(0,63.4fr)_minmax(0,36.6fr)]">
        {/* LEFT: White navigation and legal */}
        <div className="flex min-h-[640px] flex-col justify-between bg-white px-6 pt-10 pb-11 sm:px-10 lg:px-12 xl:pl-[max(56px,calc((100vw-1400px)/2+64px))] xl:pr-6 2xl:pr-[40px] xl:pt-[60px] xl:pb-[45px]">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-[72px_minmax(185px,1.3fr)_minmax(130px,1fr)_minmax(110px,1fr)] gap-x-6 xl:gap-x-7 2xl:gap-x-12 items-start">
            {/* LOGO */}
            <div className="flex items-start justify-start pt-1 sm:col-span-2 lg:col-span-1">
              <a
                href="/"
                onClick={(e) => handleNavigateClick(e, "home")}
                className="inline-block shrink-0 cursor-pointer"
                aria-label="Home"
              >
                <img
                  src={logo}
                  alt="Number 9"
                  className="w-[72px] sm:w-[76px] lg:w-[72px] h-auto object-contain block"
                />
              </a>
            </div>


            <div>
              <h3 className={headingClass}>
                Discover Number9<span className="text-[#F15B40]">.</span>
              </h3>
              <ul className="space-y-[14px]">
                {discoverLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={getHref(item.route)}
                      onClick={(e) => handleNavigateClick(e, item.route)}
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={headingClass}>
                Resources<span className="text-[#F15B40]">.</span>
              </h3>
              <ul className="space-y-[14px]">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={getHref(item.route)}
                      onClick={(e) => handleNavigateClick(e, item.route)}
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={headingClass}>
                Careers<span className="text-[#F15B40]">.</span>
              </h3>
              <ul className="space-y-[17px]">
                {careerLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={getHref(item.route)}
                      onClick={(e) => handleNavigateClick(e, item.route)}
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-[14px] leading-[1.4]">
            <div className="flex flex-wrap items-center gap-x-[44px] gap-y-3">
              <a
                href={getHref("about")}
                onClick={(e) => handleNavigateClick(e, "about")}
                className="hover:underline cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href={getHref("about")}
                onClick={(e) => handleNavigateClick(e, "about")}
                className="hover:underline cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href={getHref("about")}
                onClick={(e) => handleNavigateClick(e, "about")}
                className="hover:underline cursor-pointer"
              >
                Do Not Sell My Personal Information
              </a>
            </div>
            <p className="mt-[20px]">©Number9 2024 2025. All rights reserved.</p>
          </div>
        </div>

        {/* RIGHT: Gray contact, newsletter and social panel */}
        <div
          className="
            bg-[#D9DDE0]
            min-w-0
            w-full
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
          <section>
            <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.025em]">
              Get in touch<span className="text-[#F15B40]">.</span>
            </h3>
            <div className="mt-[22px] flex flex-wrap gap-[8px]">
              <a
                href="#contact"
                onClick={(e) => handleNavigateClick(e, "contact")}
                className="flex h-[40px] items-center justify-center rounded-[5px] border-2 border-black px-[20px] text-[16px] transition-colors hover:bg-black hover:text-white cursor-pointer"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavigateClick(e, "contact")}
                className="flex h-[40px] items-center justify-center gap-[13px] rounded-[5px] bg-[#31C900] px-[22px] text-[16px] text-white transition-colors hover:bg-[#29aa00] cursor-pointer"
              >
                Schedule a Call <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </div>
            <a
              href="tel:+14084782739"
              className="mt-[32px] inline-flex items-center gap-[14px] text-[14px] hover:underline"
            >
              <Phone className="h-[17px] w-[17px] fill-black" />+1 (408) 478-2739
            </a>
          </section>

          <div className="my-[38px] h-px w-full bg-black/20" />

          <section className="w-full min-w-0">
            <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.025em]">
              Stay ahead with insights.
            </h3>
            <p className="mt-[16px] max-w-[350px] text-[14px] leading-[1.45]">
              Get insights from the experts on building and scaling technology teams.
            </p>

            {/* Newsletter: reference-sized row, never overflows grey panel */}
            <div
              className="mt-8 grid w-full max-w-[327px] min-w-0 items-center gap-3"
              style={{ gridTemplateColumns: "minmax(0, 1fr) 123px" }}
            >
              <input
                type="email"
                placeholder="Your e-mail address"
                className="block box-border h-[40px] w-full min-w-0 bg-transparent border-0 outline-none px-3 text-[13px] text-black placeholder:text-black/45"
              />
              <button
                type="button"
                className="box-border h-[40px] w-[123px] min-w-0 whitespace-nowrap rounded-[5px] border-2 border-black bg-transparent px-3 text-[14px] text-black transition-colors hover:bg-black hover:text-white cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            <label className="mt-[32px] flex cursor-pointer items-start gap-[14px] text-[14px] leading-[1.45]">
              <input
                type="checkbox"
                className="mt-[1px] h-[18px] w-[18px] shrink-0 accent-black"
              />
              <span>
                By subscribing I accept the{" "}
                <a
                  href={getHref("about")}
                  onClick={(e) => handleNavigateClick(e, "about")}
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </section>

          <div className="mt-auto mb-[39px] pt-[48px]">
            <div className="h-px w-full bg-black/20" />
          </div>

          <section>
            <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.025em]">
              Follow us<span className="text-[#F15B40]">.</span>
            </h3>
            <div className="mt-[26px] flex flex-wrap items-center gap-[24px]">
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
          </section>
        </div>
      </div>
    </footer>
  );
};

const iconClass = "w-[15px] h-[15px] fill-current";

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
      onClick={(e) => e.preventDefault()}
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