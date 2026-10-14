
import React, { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import lexusHeroBg from "../assets/lexus/lexusHeroImg.webp";

export default function LexusHeroSection({ onNavigate, onSubmit }) {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSent) return;

    // Only show success after an actual submission succeeds.
    if (!onSubmit) return;

    try {
      await onSubmit(email);
      setIsSent(true);
      setEmail("");
      setTimeout(() => setIsSent(false), 3500);
    } catch (error) {
      console.error("Case study submission failed:", error);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={lexusHeroBg}
          alt="Lexus Luxury Automotive"
          className="
            h-full w-full object-cover
            object-center lg:object-[center_35%]
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/65 via-black/55 to-black/75
            lg:bg-gradient-to-r
            lg:from-black/80 lg:via-black/35 lg:to-transparent
          "
        />
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          max-w-[1680px]
          px-[18px] sm:px-8 lg:px-14 xl:px-20
          pt-[52px] sm:pt-10 lg:pt-12
          pb-[46px] sm:pb-16 lg:pb-20
        "
      >
        {/* BREADCRUMB */}
        <nav
          className="
            flex items-center gap-[16px]
            font-grift-semibold
            text-[16px]
            text-white
            mb-[42px] sm:mb-14 lg:mb-16
          "
        >
          <ChevronRight className="h-[18px] w-[18px] shrink-0 stroke-[3]" />

          <button
            type="button"
            onClick={() => onNavigate?.("our-work")}
            className="cursor-pointer transition-colors hover:text-white/75"
          >
            Our Clients
          </button>

          <ChevronRight className="h-[18px] w-[18px] shrink-0 stroke-[3]" />

          <span>Lexus</span>
        </nav>

        {/* HERO CONTENT */}
        <div
          className="
            flex flex-col
            lg:flex-row lg:items-center lg:justify-between
            gap-0 lg:gap-12 xl:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full min-w-0 lg:max-w-[720px] xl:max-w-[820px]">
            {/* SUBHEADING */}
            <p
              className="
                font-grift-bold
                text-[18px] lg:text-[13px]
                leading-[1.25]
                tracking-[0.23em] lg:tracking-[0.16em]
                text-[#B9B9B9]
                uppercase
                mb-[26px] lg:mb-5
                max-w-[390px] lg:max-w-none
              "
            >
              LEXUS CASE STUDY - LUXURY AUTOMOTIVE
            </p>

            {/* MOBILE HEADING */}
            <h1
              className="
                lg:hidden
                font-grift-extrabold
                text-[45px]
                leading-[1.09]
                tracking-[-0.035em]
                text-white
                m-0
              "
            >
              Elevating Luxury Customer Experiences Across North America
            </h1>

            {/* DESKTOP HEADING */}
            <h1
              className="
                hidden lg:block
                font-grift-semibold
                lg:text-[70px] xl:text-[80px]
                leading-[1.04]
                tracking-[-0.03em]
                text-white
                mb-7
              "
            >
              Digital Experience
              <br />
              Redefined
            </h1>

            {/* DESKTOP ACCENT */}
            <div
              className="
                hidden lg:block
                w-[48px] h-[3.5px]
                bg-[#3fc000]
                rounded-[1px]
                mb-9
              "
            />

            {/* DESKTOP TAGS */}
            <div className="hidden lg:flex flex-col gap-3.5">
              <div className="flex flex-wrap gap-3.5">
                {[
                  "UI/UX Design",
                  "Interactive Experience",
                  "Vehicle Customization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-white/70
                      bg-black/25
                      px-5 py-2
                      font-grift-medium
                      text-[20px]
                      text-white
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                {[
                  "Digital Experience",
                  "Multimedia Experience",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-white/70
                      bg-black/25
                      px-5 py-2
                      font-grift-medium
                      text-[20px]
                      text-white
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PDF CARD */}
          <div
            className="
              w-full flex justify-start
              mt-[51px]
              lg:mt-0
              lg:w-auto lg:justify-end
              lg:pr-4 xl:pr-10
            "
          >
            <div
              className="
                w-full
                lg:w-[390px] xl:w-[410px]
                bg-white
                text-[#222222]
                rounded-[28px] lg:rounded-[26px]
                px-[34px] py-[28px]
                lg:p-7
                shadow-[0_22px_60px_rgba(0,0,0,0.35)]
              "
            >
              <p
                className="
                  font-grift-medium
                  text-[20px] lg:text-[16px]
                  leading-[1.32]
                  mb-[17px] lg:mb-4
                "
              >
                Get this case study in PDF to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-[20px] lg:gap-2.5"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="
                    w-full min-w-0 flex-1
                    h-[61px] lg:h-[46px]
                    px-[15px]
                    rounded-[11px]
                    border border-[#999999]
                    bg-white
                    font-grift-medium
                    text-[20px] lg:text-[15px]
                    text-[#222222]
                    placeholder:text-[#929292]
                    outline-none
                    focus:border-[#35C900]
                    focus:ring-1 focus:ring-[#35C900]
                    transition-colors
                  "
                />

                <button
                  type="submit"
                  disabled={isSent || !onSubmit}
                  className="
                    h-[61px] lg:h-[46px]
                    px-[21px] lg:px-7
                    shrink-0
                    rounded-[11px]
                    bg-[#35C900]
                    font-grift-medium
                    text-[20px] lg:text-[15px]
                    text-white
                    flex items-center justify-center gap-1.5
                    transition-colors
                    hover:bg-[#2DB500]
                    disabled:opacity-60
                  "
                >
                  {isSent ? (
                    <>
                      <Check className="h-4 w-4" />
                      Sent
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
