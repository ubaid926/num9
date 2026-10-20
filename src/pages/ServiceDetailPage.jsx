import React, { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import AppNav from "../components/nav";
import AccelerateBusinessSection from "../components/AccelerateBusinessSection";
import Footer from "../components/footer";
import { getServiceDetail } from "../data/serviceDetailData";

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
        w-full
        h-auto
        min-h-0
        bg-[#161616]
        rounded-[30px] sm:rounded-[42px] lg:rounded-[50px]
        p-4 sm:p-5 lg:p-6
        overflow-hidden
        box-border
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* Project Image */}
      <div
        className="
          relative
          w-full
          shrink-0
          aspect-[2.02/1]
          rounded-[24px] sm:rounded-[30px] lg:rounded-[32px]
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

      {/* Card Content - inside black container */}
      <div className="relative z-10 w-full flex flex-col px-2 sm:px-4 lg:px-5 pt-5 pb-1">

        {/* Category and Number */}
        <div className="flex items-center justify-between gap-3 mb-2">

          {/* Category Pill */}
          <span
            className="
              inline-flex
              items-center justify-center
              max-w-[85%]
              rounded-full
              bg-[#f7f8fa]
              px-3 py-[7px]
              font-grift-medium
              text-[11px] sm:text-[12px]
              tracking-[0.025em]
              text-[#717889]
              leading-[1.2]
            "
          >
            {displayCategory}
          </span>

          {/* Number Badge */}
          <span
            className="
              inline-flex
              items-center justify-center
              w-[36px] h-[32px]
              shrink-0
              rounded-full
              bg-[#373737]
              font-grift-semibold
              text-[12px]
              text-[#299F00]
            "
          >
            {String(index).padStart(2, "0")}
          </span>

        </div>

        {/* Project Title */}
        <h3
          className="
            block
            w-full
            m-0
            font-grift-semibold
            text-[30px] sm:text-[36px] lg:text-[40px]
            leading-[1.2]
            tracking-[-0.035em]
            text-[#38D900]
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
  const data = getServiceDetail(slug);
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
  <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[5%] pt-9 lg:pt-10 pb-14 lg:pb-[58px]">

    {/* Back to Case Studies */}
    <button
      onClick={() => onNavigate?.("our-work")}
      className="inline-flex items-center gap-4 font-grift-medium text-[15px] lg:text-[17px] text-[#171717] hover:text-[#299F00] transition-colors group"
    >
      <ArrowLeft
        size={25}
        strokeWidth={2}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      Back to Case Studies
    </button>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(380px,36%)] gap-12 lg:gap-14 xl:gap-20 mt-16 sm:mt-20 lg:mt-[88px]">

      {/* LEFT SECTION */}
      <div className="min-w-0">

        {/* Main Heading */}
        <h1 className="font-grift-semibold text-[54px] sm:text-[76px] lg:text-[80px] xl:text-[100px] 2xl:text-[116px] leading-[1.05] tracking-[-0.045em] mb-5 text-black">
          {data.heading === "UI/UX Design" ? (
            <>
              <span className="text-black">UI/UX </span>
              <span className="text-[#299F00]">Design</span>
            </>
          ) : (
            <span className="text-[#299F00]">
              {data.heading}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="font-grift-semibold text-[17px] sm:text-[19px] lg:text-[21px] text-[#1b1b1b] leading-[1.5] mb-7 lg:mb-8">
          Thoughtful design, Seamless experiences.
        </p>

        {/* Description */}
        <p className="font-grift-medium text-[17px] sm:text-[20px] lg:text-[22px] xl:text-[24px] leading-[1.5] text-[#555555] max-w-[730px]">
          {data.description}
        </p>

        {/* Filter Dropdown */}
        <div className="relative mt-12 lg:mt-[65px] w-full max-w-[277px]">

          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-full h-[64px] flex items-center justify-between gap-4 border-[1.5px] border-[#299F00] rounded-[14px] bg-white px-5 text-left hover:bg-[#fafff8] transition-colors"
          >
            <div className="flex flex-col gap-[2px]">
              <span className="font-grift-medium text-[14px] leading-[18px] text-[#171717]">
                by Capability
              </span>
              <span className="font-grift-semibold text-[17px] leading-[21px] text-[#171717]">
                {filter === "All" ? data.heading : filter}
              </span>
            </div>

            <ChevronDown
              size={23}
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
                    className={`w-full text-left px-5 py-3 font-grift-medium text-[14px] transition-colors ${
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
      <div className="min-w-0 lg:pt-[35px] flex flex-col gap-11 lg:gap-[42px]">

        {/* Industries */}
        <div>
          <h2 className="font-grift-semibold text-[25px] sm:text-[28px] lg:text-[32px] leading-[1.2] tracking-[-0.035em] text-black mb-7">
            INDUSTRIES
          </h2>

          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {data.industries.map((ind) => (
              <span
                key={ind}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#555555] px-6 py-3 min-h-[52px] font-grift-medium text-[16px] lg:text-[18px] text-[#494949] leading-[1.2]"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <h2 className="font-grift-semibold text-[25px] sm:text-[28px] lg:text-[32px] leading-[1.2] tracking-[-0.035em] text-black mb-7">
            LOCATIONS
          </h2>

          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {data.locations.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#555555] px-6 py-3 min-h-[52px] font-grift-medium text-[16px] lg:text-[18px] text-[#494949] leading-[1.2]"
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
  <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[5%] pt-8 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">

    {/* Section Heading */}
    <h2 className="font-grift-semibold text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[46px] leading-[1.1] tracking-[-0.035em] uppercase mb-8 lg:mb-[36px]">
      <span className="text-[#299F00]">THE </span>
      <span className="text-black">WORK</span>
    </h2>

    {/* Projects Grid */}
    {filteredWorks.length > 0 ? (
    
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-[5.3%] items-stretch">
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
