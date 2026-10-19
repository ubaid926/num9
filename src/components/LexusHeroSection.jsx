
import React, { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import lexusHeroBg from "../assets/lexus/lexusHeroImg.webp";

export default function LexusHeroSection({ onNavigate, onSubmit }) {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSent || !onSubmit) return;

    try {
      await onSubmit(email);
      setIsSent(true);
      setEmail("");
      setTimeout(() => setIsSent(false), 3500);
    } catch (error) {
      console.error("Case study submission failed:", error);
    }
  };

  const tags = [
    "UI/UX Design",
    "Interactive Experience",
    "Vehicle Customization",
    "Digital Experience",
    "Multimedia Experience",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={lexusHeroBg}
          alt="Lexus Luxury Automotive"
          className="
            h-full w-full object-cover
            object-[58%_center]
            sm:object-center
            lg:object-[center_35%]
          "
        />

        {/* Background overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/75 via-black/60 to-black/75
            lg:bg-gradient-to-r
            lg:from-black/80
            lg:via-black/50
            lg:to-black/45
          "
        />
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          w-full max-w-[1680px]
          px-[26px] sm:px-8
          lg:px-14 xl:px-20
          pt-[48px] sm:pt-[52px] lg:pt-[46px]
          pb-[44px] sm:pb-[60px] lg:pb-[95px]
        "
      >
        {/* BREADCRUMB */}
        <nav
          aria-label="Breadcrumb"
          className="
            flex items-center
            gap-[16px] sm:gap-5
            font-grift-semibold
            text-[14px] sm:text-[16px]
            text-white
            mb-[43px] sm:mb-[52px] lg:mb-[65px]
          "
        >
          <ChevronRight
            size={19}
            strokeWidth={3}
            className="shrink-0"
          />

          <button
            type="button"
            onClick={() => onNavigate?.("our-work")}
            className="
              cursor-pointer
              hover:text-white/75
              transition-colors
            "
          >
            Our Clients
          </button>

          <ChevronRight
            size={19}
            strokeWidth={3}
            className="shrink-0"
          />

          <span>Lexus</span>
        </nav>

        {/* HERO CONTENT */}
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-0 lg:gap-10 xl:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full min-w-0
              lg:flex-1
              lg:max-w-[760px]
            "
          >
            {/* SUBHEADING */}
            <p
              className="
                font-grift-bold
                uppercase
                text-[15px] sm:text-[17px]
                lg:text-[13px]
                tracking-[0.24em]
                lg:tracking-[0.2em]
                leading-[1.35]
                text-[#B9B9B9]
                max-w-[390px] lg:max-w-none
                mb-[23px] lg:mb-[18px]
              "
            >
              LEXUS CASE STUDY - LUXURY AUTOMOTIVE
            </p>

            {/* SAME HEADING ON ALL SCREENS */}
            <h1
              className="
                font-grift-semibold
                text-[clamp(38px,9vw,56px)]
                sm:text-[58px]
                md:text-[64px]
                lg:text-[64px]
                xl:text-[70px]
                leading-[1.06]
                tracking-[-0.035em]
                text-white
                m-0
              "
            >
              Digital Experience
              <br />
              Redefined
            </h1>

            {/* DESKTOP ACCENT LINE */}
            <div
              className="
                hidden lg:block
                w-[55px] h-[3px]
                bg-[#3FC000]
                mt-[34px] mb-[39px]
              "
            />

            {/* DESKTOP TAGS */}
            <div
              className="
                hidden lg:flex
                flex-wrap gap-[13px]
                max-w-[760px]
              "
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    inline-flex items-center
                    rounded-full
                    border border-white/80
                    bg-black/20
                    px-[24px] py-[12px]
                    font-grift-medium
                    text-[17px] xl:text-[19px]
                    leading-[1.2]
                    whitespace-nowrap
                    text-white
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PDF FORM CARD */}
          <div
            className="
              w-full flex justify-start
              mt-[52px] sm:mt-[60px]
              lg:mt-0
              lg:w-auto lg:shrink-0
              lg:justify-end
            "
          >
            <div
              className="
                w-full
                lg:w-[400px] xl:w-[440px]
                rounded-[26px]
                bg-white
                text-[#222222]
                px-[32px] py-[27px]
                sm:p-[32px]
                lg:px-[29px] lg:py-[25px]
                shadow-[0_20px_55px_rgba(0,0,0,0.22)]
              "
            >
              <p
                className="
                  font-grift-medium
                  text-[18px] sm:text-[20px]
                  lg:text-[18px] xl:text-[19px]
                  leading-[1.35]
                  text-[#343434]
                  mb-[18px]
                "
              >
                Get this case study in PDF to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                className="
                  flex items-center
                  gap-[16px] lg:gap-[17px]
                  w-full
                "
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="
                    w-full min-w-0 flex-1
                    h-[58px]
                    rounded-[10px]
                    border border-[#999]
                    bg-white
                    px-[15px]
                    font-grift-medium
                    text-[17px] sm:text-[18px]
                    lg:text-[16px]
                    text-[#222]
                    placeholder:text-[#929292]
                    outline-none
                    focus:border-[#35C900]
                    focus:ring-1
                    focus:ring-[#35C900]
                    transition-colors
                  "
                />

                <button
                  type="submit"
                  disabled={isSent || !onSubmit}
                  className="
                    flex items-center justify-center
                    gap-[6px]
                    shrink-0
                    h-[58px]
                    px-[22px] lg:px-[21px]
                    rounded-[10px]
                    bg-[#35C900]
                    text-white
                    font-grift-medium
                    text-[17px] sm:text-[18px]
                    lg:text-[17px]
                    hover:bg-[#2DB500]
                    transition-colors
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {isSent ? (
                    <>
                      <Check size={17} />
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
