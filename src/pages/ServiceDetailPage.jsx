import React, { useState, useRef, useLayoutEffect } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import AppNav from "../components/nav";
import AccelerateBusinessSection from "../components/AccelerateBusinessSection";
import Footer from "../components/footer";
import { getServiceDetail } from "../data/serviceDetailData";

/* ─── Auto-fit Heading Word for Mobile (prevents clipping without altering font size) ─── */
function FitHeadingWord({ text, isLastWord }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measureAndFit = () => {
      if (window.innerWidth >= 1024) {
        setScale(1);
        return;
      }
      el.style.transform = "none";
      const parent = el.parentElement;
      const parentWidth = parent ? parent.clientWidth : window.innerWidth;
      const textWidth = el.scrollWidth;

      if (parentWidth > 0 && textWidth > parentWidth) {
        const s = Math.max(0.65, (parentWidth - 4) / textWidth);
        setScale(s);
      } else {
        setScale(1);
      }
    };

    measureAndFit();
    window.addEventListener("resize", measureAndFit);
    return () => window.removeEventListener("resize", measureAndFit);
  }, [text]);

  return (
    <span
      ref={ref}
      style={
        scale < 1
          ? {
              transform: `scale(${scale})`,
              transformOrigin: "left center",
              display: "inline-block",
            }
          : undefined
      }
      className={`block lg:inline ${
        isLastWord ? "text-[#299F00]" : "text-black"
      }`}
    >
      {text}
      {!isLastWord && " "}
    </span>
  );
}

/* ─── Work Image Card ────────────────────────────────────── */





const WorkCard = ({ title, image, category, index = 1 }) => {
  const categoryLabels = {
    Safeway: "Responsive UI/UX Experience",
    CitiBank: "Data Visualization Dashboards",
  };

  const displayCategory =
    category || categoryLabels[title] || "UI/UX Design";

  return (
    <article
      className="
        group
        relative
        flex flex-col
        w-full min-w-0
        h-auto
        bg-[#161616]
        rounded-[22px] sm:rounded-[36px] lg:rounded-[50px]
        p-3 sm:p-5 lg:p-6
        box-border
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div
        className="
          relative
          w-full
          aspect-[2.02/1]
          rounded-[16px] sm:rounded-[26px] lg:rounded-[32px]
          overflow-hidden
          bg-[#f4f4f4]
        "
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            block
            w-full
            h-full
            object-cover
            transition-transform duration-500
            group-hover:scale-[1.025]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          w-full
          min-w-0
          px-1.5 sm:px-4 lg:px-5
          pt-3 sm:pt-5
          pb-1.5 sm:pb-2
        "
      >
        {/* Category + Number */}
        <div className="flex items-center justify-between gap-3 mb-1.5 sm:mb-2">
          <span
            className="
              inline-flex items-center
              max-w-[85%]
              rounded-full
              bg-[#f7f8fa]
              px-2.5 sm:px-3 py-[5px] sm:py-[7px]
              font-grift-medium
              text-[10px] sm:text-[12px]
              tracking-[0.025em]
              text-[#717889]
              leading-[1.2]
            "
          >
            {displayCategory}
          </span>

          <span
            className="
              inline-flex items-center justify-center
              w-[28px] h-[26px] sm:w-[36px] sm:h-[32px]
              shrink-0
              rounded-full
              bg-[#373737]
              font-grift-semibold
              text-[11px] sm:text-[12px]
              text-[#299F00]
            "
          >
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            relative
            block
            w-full
            h-auto
            m-0
            font-grift-semibold
            text-[22px] sm:text-[30px] lg:text-[40px]
            leading-[1.2]
            tracking-[-0.035em]
            text-[#38D900]
            whitespace-normal
            break-words
          "
        >
          {title}
        </h3>
      </div>
    </article>
  );
};









/* ─── Tag pill ───────────────────────────────────────────── */
function TagPill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#555] bg-transparent px-4 py-1.5 font-grift-medium text-[12px] sm:text-[13px] text-[#ccc] whitespace-nowrap">
      {label}
    </span>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ServiceDetailPage({
  slug,
  onNavigate,
  activeDropdown,
  setActiveDropdown,
}) {
  const titleParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("title")
      : null;
  const data = getServiceDetail(slug, titleParam);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  // Fallback for unknown slug
  if (!data) {
    return (
      <div className="bg-[#0d0d0d] min-h-screen flex flex-col">
        <AppNav
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          onNavigate={onNavigate}
        />
        
        <div className="flex-1 flex flex-col items-center justify-center text-white gap-4 px-6">
          <h1 className="font-grift-semibold text-[32px] text-[#3FC000]">Page not found</h1>
          <button
            onClick={() => onNavigate?.("our-work")}
            className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back to Our Clients
          </button>
        </div>
      </div>
    );
  }

  const filteredWorks =
    filter === "All"
      ? data.works
      : data.works.filter((w) =>
          w.title.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white font-grift antialiased overflow-x-hidden">
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[5%] pt-6 sm:pt-9 lg:pt-10 pb-8 sm:pb-14 lg:pb-[58px]">

          {/* Eyebrow Breadcrumb: "01 / THIS IS OUR PROCESS" on mobile, Back to Case Studies on desktop */}
       
{/* Back to Case Studies - Mobile & Desktop */}
<div className="flex items-center mb-4 sm:mb-6 lg:mb-0">
  <button
    type="button"
    onClick={() => onNavigate?.("our-work")}
    className="
      inline-flex
      items-center
      gap-3 lg:gap-4
      font-grift-medium
      text-[14px] sm:text-[15px] lg:text-[17px]
      text-[#171717]
      hover:text-[#299F00]
      transition-colors
      group
      cursor-pointer
    "
  >
    <ArrowLeft
      size={21}
      strokeWidth={2}
      className="
        shrink-0
        lg:w-[25px] lg:h-[25px]
        transition-transform duration-200
        group-hover:-translate-x-1
      "
    />

    <span>Back to Case Studies</span>
  </button>
</div>


          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(380px,36%)] gap-8 sm:gap-12 lg:gap-14 xl:gap-20 mt-4 sm:mt-16 lg:mt-[88px]">

            {/* LEFT SECTION */}
            <div className="min-w-0">

              {/* Main Heading: two-tone styling for all services (first part black, last word green) */}
              <h1 className="font-grift-semibold text-[88px] sm:text-[68px] lg:text-[80px] xl:text-[100px] 2xl:text-[116px] leading-[1.0] sm:leading-[1.05] tracking-[-0.045em] mb-4 sm:mb-5 text-black">
                {(() => {
                  const heading = data.heading || "";
                  const words = heading.trim().split(/\s+/);
                  if (words.length <= 1) {
                    return <FitHeadingWord text={heading} isLastWord={true} />;
                  }
                  const lastWord = words.pop();
                  const firstPart = words.join(" ");
                  return (
                    <>
                      <FitHeadingWord text={firstPart} isLastWord={false} />
                      <FitHeadingWord text={lastWord} isLastWord={true} />
                    </>
                  );
                })()}
              </h1>

              {/* Subtitle */}
              <p className="font-grift-semibold text-[17px] sm:text-[18px] lg:text-[21px] text-[#1b1b1b] leading-[1.4] mb-3.5 sm:mb-7 lg:mb-8">
                Thoughtful design, Seamless experiences.
              </p>

              {/* Description */}
              <p className="font-grift-medium text-[20px] sm:text-[18px] lg:text-[22px] xl:text-[24px] leading-[1.5] text-[#555555] max-w-[730px]">
                {data.description}
              </p>

              {/* Filter Dropdown */}
              <div className="relative mt-7 sm:mt-10 lg:mt-[65px] w-full max-w-full lg:max-w-[277px]">

                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="w-full h-[58px] sm:h-[64px] flex items-center justify-between gap-4 border-[1.5px] border-[#299F00] rounded-[14px] bg-white px-5 text-left hover:bg-[#fafff8] transition-colors cursor-pointer"
                >
                  <div className="flex flex-col gap-[1px] min-w-0 flex-1">
                    <span className="font-grift-medium text-[16px] sm:text-[14px] leading-tight text-[#444444]">
                      by Capability
                    </span>
                    <span className="font-grift-semibold text-[20px] sm:text-[17px] leading-tight text-[#171717] truncate">
                      {filter === "All" ? data.heading : filter}
                    </span>
                  </div>

                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    className={`text-[#171717] shrink-0 transition-transform duration-200 ${
                      filterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {filterOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#dedede] rounded-[12px] overflow-hidden z-20 shadow-[0_12px_35px_rgba(0,0,0,0.1)]">
                    {["All", ...data.works.map((w) => w.title)].map(
                      (opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setFilter(opt);
                            setFilterOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 font-grift-medium text-[14px] transition-colors cursor-pointer ${
                            filter === opt
                              ? "text-[#299F00] bg-[#f3faef]"
                              : "text-[#333333] hover:bg-[#f5f5f5]"
                          }`}
                        >
                          {opt === "All" ? "All projects" : opt}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="min-w-0 mt-8 sm:mt-10 lg:mt-0 lg:pt-[35px] flex flex-col gap-6 sm:gap-9 lg:gap-[42px]">

              {/* Industries */}
              <div>
                <h2 className="font-grift-semibold text-[22px] sm:text-[22px] lg:text-[32px] leading-[1.2] tracking-[-0.03em] text-black mb-3 sm:mb-5 uppercase">
                  INDUSTRIES
                </h2>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {data.industries.map((ind) => (
                    <span
                      key={ind}
                      className="inline-flex items-center justify-center text-center whitespace-nowrap rounded-full border border-[#b8b8b8] px-3.5 sm:px-5 py-1.5 sm:py-2.5 min-h-[34px] sm:min-h-[44px] lg:min-h-[52px] font-grift-medium text-[13px] sm:text-[15px] lg:text-[18px] text-[#333333] leading-none"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <h2 className="font-grift-semibold text-[22px] sm:text-[22px] lg:text-[32px] leading-[1.2] tracking-[-0.03em] text-black mb-3 sm:mb-5 uppercase">
                  LOCATIONS
                </h2>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {data.locations.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center justify-center text-center whitespace-nowrap rounded-full border border-[#b8b8b8] px-3.5 sm:px-5 py-1.5 sm:py-2.5 min-h-[34px] sm:min-h-[44px] lg:min-h-[52px] font-grift-medium text-[13px] sm:text-[15px] lg:text-[18px] text-[#333333] leading-none"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── THE WORK grid ────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[5%] pt-2 sm:pt-6 lg:pt-12 pb-12 lg:pb-16">

          {/* Section Heading */}
          <h2 className="font-grift-semibold text-[49px] sm:text-[34px] lg:text-[46px] leading-[1.1] tracking-[-0.035em] uppercase mb-5 sm:mb-8 lg:mb-[36px]">
            <span className="text-[#299F00]">THE </span>
            <span className="text-black">WORK</span>
          </h2>

          {/* Projects Grid */}
          {filteredWorks.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1 lg:grid-cols-2
                gap-y-4 sm:gap-y-6 lg:gap-y-[52px]
                gap-x-6 lg:gap-x-10 xl:gap-x-[100px]
                items-stretch
                w-full
              "
            >
              {filteredWorks.map((work, index) => (
                <WorkCard
                  key={work.title}
                  title={work.title}
                  image={work.image}
                  category={work.category}
                  index={index + 1}
                />
              ))}
            </div>
          ) : (
            <p className="font-grift-medium text-[16px] text-[#777777] mt-5">
              No projects found.
            </p>
          )}

        </div>
      </section>


      {/* ── CTA + Footer ─────────────────────────────────── */}
      <AccelerateBusinessSection
        onScheduleClick={() => onNavigate?.("contact")}
      />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
