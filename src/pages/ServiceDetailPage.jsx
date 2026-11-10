import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import AppNav from "../components/nav";
import AccelerateBusinessSection from "../components/AccelerateBusinessSection";
import Footer from "../components/footer";
import { getServiceDetail } from "../data/serviceDetailData";

import number9Logo from "../assets/logoWhite.webp";

/* ─── Client Logos for Work Cards ────────────────────────── */
import clientMicrosoftLogo from "../assets/Logos/ClientsGrid_Logos/microsoft.png";
import clientPepsicoLogo from "../assets/Logos/ClientsGrid_Logos/pepsico.png";
import clientNutrienLogo from "../assets/Logos/ClientsGrid_Logos/nutrien.png";
import clientCitibankLogo from "../assets/Logos/ClientsGrid_Logos/citibank.png";
import clientLexusLogo from "../assets/Logos/ClientsGrid_Logos/lexus.png";
import clientArgoLogo from "../assets/Logos/ClientsGrid_Logos/argo.png";
import clientMedimpactLogo from "../assets/Logos/ClientsGrid_Logos/medimpact.png";
import clientJcpenneyLogo from "../assets/Logos/ClientsGrid_Logos/jcpenney.png";
import clientEmiratesLogo from "../assets/Logos/ClientsGrid_Logos/emirates.png";
import clientSafewayLogo from "../assets/Logos/hero_logos/safeway.png";
import clientYmcaLogo from "../assets/Logos/ClientsGrid_Logos/ymca.png";
import clientMagellanLogo from "../assets/Logos/ClientsGrid_Logos/magellan.png";

import clientSnacksLogo from "../assets/Logos/hero_logos/snacks.png";
import clientZee5Logo from "../assets/Logos/hero_logos/zee5.png";
import clientSentralLogo from "../assets/Logos/hero_logos/sentral.png";
import clientPwcLogo from "../assets/Logos/ClientsGrid_Logos/Logos/PwC Logo with Layered Warm Blocks_trimmed.png";
import clientEmpireLogo from "../assets/Logos/hero_logos/empire.png";
import clientAlmazaLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Almaza Gem Crest Logo_trimmed.png";
import clientFairviewLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Fairview Geometric Architecture Logo_trimmed.png";
import clientLifegiveLogo from "../assets/Logos/ClientsGrid_Logos/Logos/LifeGive Oval Leaf Logo_trimmed.png";
import clientShanLogo from "../assets/Logos/hero_logos/White Shan Logo on Black Oval.png";

import clientGenesisLogo from "../assets/Logos/Updated_Logos/GENESIS.Logo.032218_Site_PNG_RevB.webp";
import clientIcomLogo from "../assets/Logos/Updated_Logos/Clean restored ICOM network logo.webp";
import clientStandardCharteredLogo from "../assets/Logos/Updated_Logos/Standard_Chartered__282021_29.webp";
import clientSkinnyLogo from "../assets/caseStudies/skinny/Jordan_s_Skinny_Mixes_Logo_f5994884-b437-492f-aa4a-b5debcc1c695_1543x_copy_copy.png";
import clientMezanLogo from "../assets/caseStudies/meezan/mezanLogo.png";
import clientDeltaLogo from "../assets/caseStudies/Delta Light/deltaLogo_transparent.png";
import clientDreoLogo from "../assets/caseStudies/DREO IHS 2025/dreoLogo_trimmed.png";
import clientFinamillLogo from "../assets/caseStudies/Finamill IHS 2025/finamillLogo_trimmed.png";
import clientKatjesLogo from "../assets/caseStudies/Katjes USA/katjesLogo.svg";
import clientNakamichiLogo from "../assets/caseStudies/Nakamichi Car Audio/nakamichiLogo.svg";
import clientScantechLogo from "../assets/caseStudies/SCANTECH The Battery Show North America 2024/scantechLogo.svg";
import clientSsstcLogo from "../assets/caseStudies/SSSTC Circleexhibit/ssstcLogo.svg";

function getClientMeta(title, customLogo) {
  if (customLogo) {
    const isCustomShan = String(customLogo).toLowerCase().includes("shan");
    return {
      logo: customLogo,
      brand: title,
      route: null,
      isColored: isCustomShan,
      logoClass: isCustomShan
        ? "h-[50px] sm:h-[58px] lg:h-[66px] xl:h-[72px] w-auto max-w-[220px] sm:max-w-[250px]"
        : "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[68px] w-auto max-w-[240px] sm:max-w-[280px]",
    };
  }
  const t = (title || "").toLowerCase();

  if (t.includes("lexus")) return { logo: clientLexusLogo, brand: "Lexus", route: "case-study/lexus", logoClass: "h-[48px] sm:h-[56px] lg:h-[64px] xl:h-[70px] w-auto max-w-[230px] sm:max-w-[270px]" };
  if (t.includes("microsoft")) return { logo: clientMicrosoftLogo, brand: "Microsoft", route: "case-study/microsoft", logoClass: "h-[42px] sm:h-[50px] lg:h-[58px] xl:h-[64px] w-auto max-w-[250px] sm:max-w-[290px]" };
  if (t.includes("pepsi")) return { logo: clientPepsicoLogo, brand: "PepsiCo", route: "case-study/pepsico", logoClass: "h-[44px] sm:h-[52px] lg:h-[60px] xl:h-[66px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("citi")) return { logo: clientCitibankLogo, brand: "Citibank", route: "case-study/citibank", logoClass: "h-[44px] sm:h-[52px] lg:h-[60px] xl:h-[66px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("emirates")) return { logo: clientEmiratesLogo, brand: "Emirates", route: "case-study/emirates", logoClass: "h-[74px] sm:h-[90px] lg:h-[106px] xl:h-[118px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("safeway")) return { logo: clientSafewayLogo, brand: "Safeway", route: "case-study/safeway", isColored: true, logoClass: "h-[38px] sm:h-[46px] lg:h-[54px] xl:h-[60px] w-auto max-w-[250px] sm:max-w-[300px]" };
  if (t.includes("shan")) return { logo: clientShanLogo, brand: "Shan Foods", route: "case-study/shan", isColored: true, logoClass: "h-[56px] sm:h-[68px] lg:h-[80px] xl:h-[90px] w-auto max-w-[250px] sm:max-w-[290px]" };
  if (t.includes("lifegive")) return { logo: clientLifegiveLogo, brand: "LifeGive", route: "case-study/lifegive", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[68px] w-auto max-w-[230px]" };
  if (t.includes("sentral")) return { logo: clientSentralLogo, brand: "Sentral Education", route: "case-study/sentral", isColored: true, logoClass: "h-[72px] sm:h-[88px] lg:h-[104px] xl:h-[116px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("pwc") || t.includes("b2b dashboard")) return { logo: clientPwcLogo, brand: "PwC", route: "case-study/pwc", logoClass: "h-[48px] sm:h-[56px] lg:h-[64px] xl:h-[70px] w-auto" };
  if (t.includes("empire") || t.includes("ticket reservation")) return { logo: clientEmpireLogo, brand: "Empire Cinemas", route: "case-study/empire", isColored: true, logoClass: "h-[64px] sm:h-[76px] lg:h-[90px] xl:h-[100px] w-auto max-w-[200px]" };
  if (t.includes("almaza")) return { logo: clientAlmazaLogo, brand: "Almaza", route: "case-study/almaza", isColored: true, logoClass: "h-[46px] sm:h-[54px] lg:h-[64px] xl:h-[70px] w-auto max-w-[230px]" };
  if (t.includes("fairview")) return { logo: clientFairviewLogo, brand: "Fairview", route: "case-study/fairview", isColored: true, logoClass: "h-[46px] sm:h-[54px] lg:h-[64px] xl:h-[70px] w-auto max-w-[230px]" };
  if (t.includes("snack")) return { logo: clientSnacksLogo, brand: "Snacks.com", route: "case-study/snacks", isColored: true, logoClass: "h-[36px] sm:h-[44px] lg:h-[52px] xl:h-[58px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("zee5")) return { logo: clientZee5Logo, brand: "ZEE5", route: "case-study/zee5", isColored: true, logoClass: "h-[62px] sm:h-[74px] lg:h-[86px] xl:h-[96px] w-auto max-w-[200px]" };
  if (t.includes("genesis")) return { logo: clientGenesisLogo, brand: "GENESIS Exhibits", route: "case-study/genesis", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[68px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("icom")) return { logo: clientIcomLogo, brand: "ICOM", route: "case-study/icom", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[68px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("standard chartered")) return { logo: clientStandardCharteredLogo, brand: "Standard Chartered", route: "case-study/standard-chartered", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[68px] w-auto max-w-[250px] sm:max-w-[290px]" };
  if (t.includes("skinny")) return { logo: clientSkinnyLogo, brand: "Skinny Mixes", route: "case-study/skinny", logoClass: "h-[74px] sm:h-[90px] lg:h-[106px] xl:h-[118px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("mezan") || t.includes("meezan")) return { logo: clientMezanLogo, brand: "Mezan Global", route: "case-study/mezan", isColored: true, logoClass: "h-[50px] sm:h-[60px] lg:h-[72px] xl:h-[80px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("delta light") || t.includes("delta")) return { logo: clientDeltaLogo, brand: "Delta Light", route: "case-study/delta-light", logoClass: "h-[38px] sm:h-[46px] lg:h-[54px] xl:h-[60px] w-auto max-w-[240px]" };
  if (t.includes("dreo")) return { logo: clientDreoLogo, brand: "DREO", route: "case-study/dreo", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[70px] w-auto max-w-[240px]" };
  if (t.includes("finamill")) return { logo: clientFinamillLogo, brand: "Finamill", route: "case-study/finamill", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[70px] w-auto max-w-[240px]" };
  if (t.includes("katjes")) return { logo: clientKatjesLogo, brand: "Katjes USA", route: "case-study/katjes", isColored: true, logoClass: "h-[48px] sm:h-[56px] lg:h-[64px] xl:h-[72px] w-auto max-w-[240px]" };
  if (t.includes("nakamichi")) return { logo: clientNakamichiLogo, brand: "Nakamichi Car Audio", route: "case-study/nakamichi", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[70px] w-auto max-w-[280px]" };
  if (t.includes("scantech")) return { logo: clientScantechLogo, brand: "SCANTECH", route: "case-study/scantech", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[70px] w-auto max-w-[260px]" };
  if (t.includes("ssstc")) return { logo: clientSsstcLogo, brand: "SSSTC", route: "case-study/ssstc", logoClass: "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[70px] w-auto max-w-[240px]" };
  if (t.includes("ymca")) return { logo: clientYmcaLogo, brand: "YMCA", route: "case-study/ymca", logoClass: "h-[50px] sm:h-[58px] lg:h-[68px] xl:h-[74px] w-auto" };
  if (t.includes("magellan")) return { logo: clientMagellanLogo, brand: "Magellan Health", route: "case-study/magellan", logoClass: "h-[44px] sm:h-[52px] lg:h-[60px] xl:h-[66px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("nutrien")) return { logo: clientNutrienLogo, brand: "Nutrien", route: "case-study/nutrien", logoClass: "h-[42px] sm:h-[50px] lg:h-[58px] xl:h-[64px] w-auto max-w-[240px] sm:max-w-[280px]" };
  if (t.includes("argo")) return { logo: clientArgoLogo, brand: "Argo", route: "case-study/argo", logoClass: "h-[44px] sm:h-[52px] lg:h-[60px] xl:h-[66px] w-auto max-w-[240px] sm:max-w-[270px]" };
  if (t.includes("medimpact")) return { logo: clientMedimpactLogo, brand: "MedImpact", route: "case-study/medimpact", logoClass: "h-[44px] sm:h-[52px] lg:h-[60px] xl:h-[66px] w-auto max-w-[240px] sm:max-w-[270px]" };
  if (t.includes("jcpenney")) return { logo: clientJcpenneyLogo, brand: "JCPenney", route: "case-study/jcpenney", logoClass: "h-[42px] sm:h-[50px] lg:h-[58px] xl:h-[64px] w-auto max-w-[250px] sm:max-w-[290px]" };

  if (t.includes("volvo")) return { logo: null, brand: "VOLVO", route: null };
  if (t.includes("byd")) return { logo: null, brand: "BYD", route: null };
  if (t.includes("kia")) return { logo: null, brand: "KIA", route: null };
  if (t.includes("costa cart")) return { logo: null, brand: "COSTA CARTS", route: null };
  if (t.includes("rooh afza")) return { logo: null, brand: "ROOH AFZA", route: null };
  if (t.includes("ahmed food")) return { logo: null, brand: "AHMED FOODS", route: null };
  if (t.includes("malka")) return { logo: null, brand: "MALKA FOODS", route: null };
  if (t.includes("electric motorcycle")) return { logo: null, brand: "EV CINEMATOGRAPHY", route: null };
  if (t.includes("wildlife")) return { logo: null, brand: "CGI ANAMORPHIC VFX", route: null };
  if (t.includes("virtual tour")) return { logo: null, brand: "3D VIRTUAL TOUR", route: null };

  return { logo: null, brand: title, route: null };
}

export const CAPABILITY_SERVICES = [
  {
    slug: "all",
    name: "All",
    aliases: ["all", "all-capabilities"],
  },
  {
    slug: "trade-shows-experiential-marketing",
    name: "Trade Shows / Experiential Marketing",
    aliases: ["trade-shows-experiential-marketing", "trade-shows-brand-activation"],
  },
  {
    slug: "interactive-digital-experiences",
    name: "Interactive Digital Experiences",
    aliases: ["interactive-digital-experiences", "interactive-experience"],
  },
  {
    slug: "digital-video-productions",
    name: "Digital Video Productions",
    aliases: ["digital-video-productions"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing / Specialty Distribution",
    aliases: ["digital-marketing", "omnichannel-marketing"],
  },
];

export const CAPABILITY_SUBCATEGORIES = {
  "trade-shows-experiential-marketing": [
    "Brand Activation",
    "Trade Show Booth Design",
    "Experiential Marketing",
    "Exhibition Design",
    "Interactive Experiences",
    "Event Production",
    "3D Booth Visualization",
    "Immersive Experiences",
    "Retail & Pop-Up Experiences",
  ],
  "interactive-digital-experiences": [
    "UI/UX Design",
    "Web Development",
    "3D Product Configurators",
    "Augmented Reality (AR)",
    "Virtual Reality (VR)",
    "Interactive Installations",
    "Immersive Digital Experiences",
    "Touchscreen Experiences",
    "Gamification & Interactive Games",
  ],
  "digital-video-productions": [
    "3D Animation",
    "Motion Graphics",
    "Video Production",
    "Product Visualization",
    "CGI & VFX",
    "Brand Films",
    "Commercial Videos",
    "Explainer Videos",
    "Post-Production",
  ],
  "digital-marketing": [
    "Digital Strategy",
    "Social Media Marketing",
    "Content Marketing",
    "Performance Marketing",
    "Search Engine Optimization (SEO)",
    "Influencer Marketing",
    "Media Planning & Buying",
    "Content Distribution",
    "Omnichannel Marketing",
  ],
};

function getCanonicalCapability(slug, fallbackHeading) {
  const s = String(slug || "").toLowerCase().trim();
  const h = String(fallbackHeading || "").toLowerCase().trim();

  for (const cap of CAPABILITY_SERVICES) {
    if (cap.slug === s || (cap.aliases && cap.aliases.includes(s))) {
      return cap;
    }
    if (cap.name.toLowerCase() === h) {
      return cap;
    }
  }

  if (s === "all" || s === "all-capabilities" || h === "all") return CAPABILITY_SERVICES[0];
  if (s.includes("trade") || s.includes("experiential")) return CAPABILITY_SERVICES[1];
  if (s.includes("interactive") || s.includes("digital-exp")) return CAPABILITY_SERVICES[2];
  if (s.includes("video") || s.includes("production")) return CAPABILITY_SERVICES[3];
  if (s.includes("marketing") || s.includes("distribution")) return CAPABILITY_SERVICES[4];

  return CAPABILITY_SERVICES[1]; // Default to Trade Shows if not matched
}


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
      className={`block lg:inline ${isLastWord ? "text-[#299F00]" : "text-black dark:text-white"
        }`}
    >
      {text}
      {!isLastWord && " "}
    </span>
  );
}

/* ─── Work Image Card ────────────────────────────────────── */





const WorkCard = ({ title, image, category, description, index = 1, link, onNavigate, logo: propLogo }) => {
  const categoryLabels = {
    Safeway: "Responsive UI/UX Experience",
    CitiBank: "Data Visualization Dashboards",
  };

  const displayCategory =
    category || categoryLabels[title] || "UI/UX Design";

  const clientMeta = getClientMeta(title, propLogo);
  const targetRoute = link || clientMeta.route;

  const cardContent = (
    <>
      {/* Image Container with Center Client Logo & Top-Right Number 9 Logo */}
      <div
        className="
          relative
          w-full
          aspect-video
          rounded-[8px] sm:rounded-[11px] lg:rounded-[14px]
          overflow-hidden
          bg-[#181818]
         "
      >
        {/* Background Project Photo */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            block
            w-full
            h-full
            object-cover
            transition-transform duration-500
            group-hover:scale-[1.04]
          "
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/50 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

        {/* Top-Right: Number 9 Logo */}
        <div className="absolute top-3 right-3.5 sm:top-5 sm:right-6 lg:top-6 lg:right-7 z-10 pointer-events-none">
          <img
            src={number9Logo}
            alt="Number 9"
            className="h-[22px] sm:h-[30px] lg:h-[36px] w-auto object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Center: Client Logo (only shown if logo exists) */}
        {clientMeta.logo && (
          <div className="absolute inset-0 z-10 flex items-center justify-center p-6 sm:p-8 pointer-events-none">
            <div className="flex items-center justify-center w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] h-[78px] sm:h-[94px] lg:h-[110px] xl:h-[122px]">
              <img
                src={clientMeta.logo}
                alt={clientMeta.brand || title}
                className={`block object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] transition-transform duration-300 group-hover:scale-105 ${
                  clientMeta.logoClass || "h-[46px] sm:h-[54px] lg:h-[62px] xl:h-[68px] w-auto max-w-full"
                } ${clientMeta.isColored ? "" : "brightness-0 invert"}`}
              />
            </div>
          </div>
        )}
      </div>

      {/* Content Below Image (Directly on Page Background - No Black Container) */}
      <div className="w-full pt-4 sm:pt-5 pb-1">
        {/* Title */}
        <h3
          className="
            relative
            block
            w-full
            h-auto
            m-0
            font-grift-semibold
            text-[22px] sm:text-[28px] lg:text-[34px]
            leading-[1.22]
            tracking-[-0.035em]
            text-[#171717] dark:text-[#F3F4F6]
            group-hover:text-[#15B83E] dark:group-hover:text-[#15B83E]
            transition-colors
            whitespace-normal
            break-words
          "
        >
          {title}
        </h3>

        {/* Description / Subtitle */}
        {description && (
          <p className="font-grift-medium text-[14px] sm:text-[16px] leading-[1.5] text-[#666666] mt-2 sm:mt-2.5">
            {description}
          </p>
        )}
      </div>
    </>
  );

  const baseClass = `
    group
    relative
    flex flex-col
    w-full min-w-0
    h-auto
    box-border
    transition-transform duration-300
    hover:-translate-y-1.5
  `;

  if (targetRoute) {
    const cleanRoute = targetRoute.startsWith("/") ? targetRoute.slice(1) : targetRoute;
    return (
      <a
        href={`/${cleanRoute}`}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate(cleanRoute);
          }
        }}
        className={baseClass + " cursor-pointer no-underline block"}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className={baseClass}>
      {cardContent}
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
  onBack,
  previousPage,
  activeDropdown,
  setActiveDropdown,
  isOurWorkPage = false,
  currentPage,
}) {
  // On the "Our Work" page the capability filter switches in place instead of navigating away.
  const [activeSlug, setActiveSlug] = useState(slug);
  const effectiveSlug = isOurWorkPage ? activeSlug : slug;

  const titleParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("title")
      : null;
  const data = getServiceDetail(effectiveSlug, titleParam);

  const currentCapability = getCanonicalCapability(effectiveSlug, data?.heading);
  const canonicalSlug = currentCapability.slug;

  const [filterOpen, setFilterOpen] = useState(false);
  const [subcategoryOpen, setSubcategoryOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const dropdownRef = useRef(null);
  const subcategoryRef = useRef(null);

  // Automatically reset selected subcategory to "All" whenever capability changes
  useEffect(() => {
    setSelectedSubcategory("All");
  }, [canonicalSlug]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-dropdown="capability"]')) {
        setFilterOpen(false);
      }
      if (!e.target.closest('[data-dropdown="subcategory"]')) {
        setSubcategoryOpen(false);
      }
    };
    if (filterOpen || subcategoryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [filterOpen, subcategoryOpen]);

  // Fallback for unknown slug
  if (!data && canonicalSlug !== "all") {
    return (
      <div className="bg-white dark:bg-[#0B0D0C] min-h-screen flex flex-col text-[#171717] dark:text-[#F3F4F6] transition-colors duration-300">
        <AppNav
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          onNavigate={onNavigate}
          currentPage={currentPage || (isOurWorkPage ? "work" : "service")}
        />

        <div className="flex-1 flex flex-col items-center justify-center text-white gap-4 px-6">
          <h1 className="font-grift-semibold text-[32px] text-[#3FC000]">Page not found</h1>
          <button
            onClick={() => {
              if (onNavigate) onNavigate("home");
              else if (onBack) onBack("home");
              else if (typeof window !== "undefined") window.location.href = "/";
            }}
            className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>
      </div>
    );
  }

  const isAllCapabilities = canonicalSlug === "all";
  const breadcrumbTitle = isOurWorkPage || isAllCapabilities
    ? "Work"
    : data?.heading || currentCapability?.name || "Services";

  const allCapabilitiesWorks = React.useMemo(() => {
    const combined = [];
    const seenTitles = new Set();
    const seenImages = new Set();
    const seenBrands = new Set();
    const serviceSlugs = [
      "trade-shows-experiential-marketing",
      "interactive-digital-experiences",
      "digital-video-productions",
      "digital-marketing",
    ];
    for (const s of serviceSlugs) {
      const detail = getServiceDetail(s);
      if (detail && Array.isArray(detail.works)) {
        for (const w of detail.works) {
          const clientMeta = getClientMeta(w.title, w.logo);
          const brandKey = (clientMeta?.brand || w.title || "").toLowerCase();
          const imageKey = w.image;

          // Prevent any duplicate title, duplicate card image, or duplicate client brand on the work page
          if (
            !seenTitles.has(w.title.toLowerCase()) &&
            (!imageKey || !seenImages.has(imageKey)) &&
            (!brandKey || !seenBrands.has(brandKey))
          ) {
            seenTitles.add(w.title.toLowerCase());
            if (imageKey) seenImages.add(imageKey);
            if (brandKey) seenBrands.add(brandKey);
            combined.push(w);
          }
        }
      }
    }
    return combined;
  }, []);

  const allWorks = isAllCapabilities ? allCapabilitiesWorks : (data?.works || []);
  const industriesList = data?.industries || ["Technology", "Enterprise", "Healthcare", "Finance", "Retail", "Automotive"];
  const locationsList = data?.locations || ["New York", "Texas", "California"];

  const allSubcategoriesCombined = React.useMemo(() => {
    return Array.from(
      new Set(Object.values(CAPABILITY_SUBCATEGORIES).flat())
    );
  }, []);

  const currentSubcategories = isAllCapabilities
    ? allSubcategoriesCombined
    : (CAPABILITY_SUBCATEGORIES[canonicalSlug] || []);

  const subcategoryOptions = ["All", ...currentSubcategories];

  const filteredWorks = React.useMemo(() => {
    if (!allWorks || allWorks.length === 0) return [];
    if (!selectedSubcategory || selectedSubcategory === "All") return allWorks;

    const subLower = selectedSubcategory.toLowerCase();
    const keywords = subLower
      .replace(/[&/()]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !["and", "the", "for"].includes(w));

    return allWorks.filter((work) => {
      if (work.subcategory && String(work.subcategory).toLowerCase() === subLower) return true;
      if (Array.isArray(work.subcategories)) {
        if (work.subcategories.some((sc) => String(sc).toLowerCase() === subLower)) return true;
      }

      const hay = `${work.title || ""} ${work.category || ""} ${work.description || ""}`.toLowerCase();
      if (hay.includes(subLower)) return true;

      return keywords.some((kw) => hay.includes(kw));
    });
  }, [allWorks, selectedSubcategory]);

  const renderFilterDropdowns = () => (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full">
      {/* Capability Dropdown */}
      <div
        data-dropdown="capability"
        className="relative w-full sm:w-[277px] max-w-full"
      >
        <button
          type="button"
          onClick={() => {
            setFilterOpen(!filterOpen);
            setSubcategoryOpen(false);
          }}
          className="w-full h-[58px] sm:h-[64px] flex items-center justify-between gap-4 border-[1.5px] border-[#299F00] dark:border-[#15B83E] rounded-[14px] bg-white dark:bg-[#171A18] px-5 text-left hover:bg-[#fafff8] dark:hover:bg-[#1C231E] transition-colors cursor-pointer"
          aria-expanded={filterOpen}
          aria-haspopup="listbox"
        >
          <div className="flex flex-col gap-[1px] min-w-0 flex-1">
            <span className="font-grift-medium text-[16px] sm:text-[14px] leading-tight text-[#444444] dark:text-[#9CA3AF]">
              by Capability
            </span>
            <span className="font-grift-semibold text-[20px] sm:text-[17px] leading-tight text-[#171717] dark:text-[#F3F4F6] truncate">
              {currentCapability.name || data?.heading || "All"}
            </span>
          </div>

          <ChevronDown
            size={20}
            strokeWidth={2}
            className={`text-[#171717] dark:text-[#F3F4F6] shrink-0 transition-transform duration-200 ${
              filterOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {filterOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#171A18] border border-[#dedede] dark:border-[#2C362F] rounded-[12px] overflow-hidden z-30 shadow-[0_12px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.6)] py-1">
            {CAPABILITY_SERVICES.map((item) => {
              const isSelected = item.slug === canonicalSlug;
              return (
                <a
                  key={item.slug}
                  href={`/service/${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setFilterOpen(false);
                    if (isSelected) return;
                    if (isOurWorkPage) {
                      setActiveSlug(item.slug);
                      setSelectedSubcategory("All");
                    } else if (onNavigate) {
                      onNavigate(`service/${item.slug}`, { replace: true });
                    } else if (typeof window !== "undefined") {
                      window.location.replace(`/service/${item.slug}`);
                    }
                  }}
                  className={`w-full text-left px-5 py-3 font-grift-medium text-[14px] sm:text-[15px] leading-snug transition-colors cursor-pointer block border-b border-[#f3f3f3] dark:border-[#222A24] last:border-b-0 ${
                    isSelected
                      ? "text-[#299F00] dark:text-[#15B83E] bg-[#f5fbf3] dark:bg-[#1a3820] font-semibold"
                      : "text-[#333333] dark:text-[#E5E7EB] hover:text-[#299F00] dark:hover:text-[#15B83E] hover:bg-[#f5fbf3] dark:hover:bg-[#202722]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Subcategory Dropdown */}
      <div
        data-dropdown="subcategory"
        className="relative w-full sm:w-[277px] max-w-full"
      >
        <button
          type="button"
          onClick={() => {
            setSubcategoryOpen(!subcategoryOpen);
            setFilterOpen(false);
          }}
          className="w-full h-[58px] sm:h-[64px] flex items-center justify-between gap-4 border-[1.5px] border-[#299F00] dark:border-[#15B83E] rounded-[14px] bg-white dark:bg-[#171A18] px-5 text-left hover:bg-[#fafff8] dark:hover:bg-[#1C231E] transition-colors cursor-pointer"
          aria-expanded={subcategoryOpen}
          aria-haspopup="listbox"
        >
          <div className="flex flex-col gap-[1px] min-w-0 flex-1">
            <span className="font-grift-medium text-[16px] sm:text-[14px] leading-tight text-[#444444] dark:text-[#9CA3AF]">
              by Subcategory
            </span>
            <span className="font-grift-semibold text-[20px] sm:text-[17px] leading-tight text-[#171717] dark:text-[#F3F4F6] truncate">
              {selectedSubcategory}
            </span>
          </div>

          <ChevronDown
            size={20}
            strokeWidth={2}
            className={`text-[#171717] dark:text-[#F3F4F6] shrink-0 transition-transform duration-200 ${
              subcategoryOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {subcategoryOpen && (
          <div
            role="listbox"
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#171A18] border border-[#dedede] dark:border-[#2C362F] rounded-[12px] overflow-y-auto max-h-[340px] z-30 shadow-[0_12px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.6)] py-1"
          >
            {subcategoryOptions.map((sub) => {
              const isSelected = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelectedSubcategory(sub);
                    setSubcategoryOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 font-grift-medium text-[14px] sm:text-[15px] leading-snug transition-colors cursor-pointer block border-b border-[#f3f3f3] dark:border-[#222A24] last:border-b-0 hover:text-[#299F00] dark:hover:text-[#15B83E] hover:bg-[#f5fbf3] dark:hover:bg-[#202722] ${
                    isSelected ? "text-[#299F00] dark:text-[#15B83E] bg-[#f5fbf3] dark:bg-[#1a3820] font-semibold" : "text-[#333333] dark:text-[#E5E7EB]"
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-[#0B0D0C] min-h-screen text-[#171717] dark:text-[#F3F4F6] font-grift antialiased overflow-x-hidden transition-colors duration-300">
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
        currentPage={currentPage || (isOurWorkPage ? "work" : "service")}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-white dark:bg-[#0B0D0C] transition-colors duration-300">
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[5%] pt-6 sm:pt-9 lg:pt-10 pb-8 sm:pb-14 lg:pb-[58px]">

          {/* Eyebrow Breadcrumb: "01 / THIS IS OUR PROCESS" on mobile, Back to Case Studies on desktop */}

          {/* Breadcrumb: Home icon > Page Name */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                let cardId = null;
                if (typeof window !== "undefined") {
                  try {
                    cardId = sessionStorage.getItem("lastWwdCardId");
                  } catch (err) {}
                }
                if (!cardId && slug) {
                  cardId = slug;
                }
                if (onBack) {
                  onBack("home", { returnToWwdCard: cardId });
                } else if (onNavigate) {
                  onNavigate("home", { returnToWwdCard: cardId });
                } else if (typeof window !== "undefined") {
                  window.location.href = "/";
                }
              }}
              className="text-black dark:text-white hover:text-[#32c400] transition-colors cursor-pointer inline-flex items-center"
              aria-label="Home"
            >
              <svg className="w-[20px] h-[20px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25 12 3l8.25 8.25M5.25 9.75v10.5h13.5V9.75M9 20.25v-6h6v6" />
              </svg>
            </button>
            <svg className="w-[13px] h-[13px] text-[#444] dark:text-[#9CA3AF] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
            <span className="text-[18px] sm:text-[21px] font-semibold text-[#111] dark:text-white">
              {breadcrumbTitle}
            </span>
          </div>


          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mt-4 sm:mt-8 lg:mt-8 xl:mt-10">

            {/* LEFT SECTION */}
            <div className="min-w-0">

              {/* Main Heading: two-tone styling for all services (first part black, last word green) */}
              <h1 className="font-grift-semibold text-[clamp(26px,7.2vw,36px)] min-[480px]:text-[40px] sm:text-[48px] md:text-[54px] lg:text-[52px] xl:text-[64px] 2xl:text-[88px] min-[1800px]:text-[104px] leading-[1.04] sm:leading-[1.05] tracking-[-0.04em] mb-4 sm:mb-5 text-black dark:text-white">
                {isAllCapabilities || isOurWorkPage ? (
                  <>
                    <span className="block text-black dark:text-white sm:whitespace-nowrap">CREATIVE WORK&nbsp;/</span>
                    <span className="block sm:whitespace-nowrap">
                      <span className="text-black dark:text-white">DIGITAL </span>
                      <span className="text-[#299F00]">EXPERIENCES</span>
                    </span>
                  </>
                ) : data?.titleLine1 && data?.titleLine2 ? (
                  <>
                    <span className="block text-black dark:text-white">{data.titleLine1}</span>
                    <span className="block">
                      {(() => {
                        const words = data.titleLine2.trim().split(/\s+/);
                        const last = words.pop();
                        const rest = words.join(" ");
                        return (
                          <>
                            {rest && <span className="text-black dark:text-white">{rest} </span>}
                            <span className="text-[#299F00]">{last}</span>
                          </>
                        );
                      })()}
                    </span>
                  </>
                ) : (
                  (() => {
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
                  })()
                )}
              </h1>

              {/* Subtitle */}
              <p className="font-grift-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-[#1b1b1b] dark:text-[#E5E7EB] leading-[1.4] mb-3 sm:mb-5 lg:mb-6">
                {isAllCapabilities || isOurWorkPage
                  ? "Creative Thinking. Meaningful Experiences."
                  : "Thoughtful design, Seamless experiences."}
              </p>

              {/* Description */}
              <p className="font-grift-medium text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[21px] leading-[1.5] text-[#555555] dark:text-[#B4BCB6] max-w-[700px]">
                {isAllCapabilities || isOurWorkPage
                  ? "Bringing brands to life through immersive trade shows, interactive digital experiences, compelling video productions, and strategic marketing. Every project combines creativity, technology, and thoughtful execution to create lasting impressions and meaningful impact."
                  : (data?.description || "")}
              </p>

              {/* Desktop Filters (hidden on mobile/tablet) */}
              <div className="hidden lg:block mt-6 sm:mt-8 lg:mt-8 xl:mt-10">
                {renderFilterDropdowns()}
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="min-w-0 mt-8 sm:mt-10 lg:mt-0 lg:pt-1 flex flex-col gap-5 sm:gap-7 lg:gap-8">

              {/* Industries */}
              <div>
                <h2 className="font-grift-semibold text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[26px] leading-[1.2] tracking-[-0.03em] text-black dark:text-white mb-2 sm:mb-3.5 uppercase">
                  INDUSTRIES
                </h2>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {industriesList.map((ind) => (
                    <span
                      key={ind}
                      className="inline-flex items-center justify-center text-center whitespace-nowrap rounded-full border border-[#b8b8b8] dark:border-[#2C352E] bg-white dark:bg-[#171A18] px-3.5 sm:px-4 lg:px-4 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] xl:min-h-[44px] font-grift-medium text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-[#333333] dark:text-[#E5E7EB] leading-none"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <h2 className="font-grift-semibold text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[26px] leading-[1.2] tracking-[-0.03em] text-black dark:text-white mb-2 sm:mb-3.5 uppercase">
                  LOCATIONS
                </h2>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {locationsList.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center justify-center text-center whitespace-nowrap rounded-full border border-[#b8b8b8] dark:border-[#2C352E] bg-white dark:bg-[#171A18] px-3.5 sm:px-4 lg:px-4 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] xl:min-h-[44px] font-grift-medium text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] text-[#333333] dark:text-[#E5E7EB] leading-none"
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
      <section className="w-full bg-white dark:bg-[#0B0D0C] transition-colors duration-300">
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[5%] pt-2 sm:pt-6 lg:pt-12 pb-12 lg:pb-16">

          {/* Mobile & Tablet Filters — positioned directly above THE WORK heading */}
          <div className="block lg:hidden mb-6 sm:mb-8">
            {renderFilterDropdowns()}
          </div>

          {/* Section Heading */}
          <h2 className="font-grift-semibold text-[49px] sm:text-[34px] lg:text-[46px] leading-[1.1] tracking-[-0.035em] uppercase mb-5 sm:mb-8 lg:mb-[36px]">
            <span className="text-[#299F00] dark:text-[#15B83E]">THE </span>
            <span className="text-black dark:text-white">WORK</span>
          </h2>

          {/* Projects Grid */}
          {filteredWorks.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1 lg:grid-cols-2
                gap-y-8 sm:gap-y-12 lg:gap-y-[64px]
                gap-x-6 lg:gap-x-10 xl:gap-x-[80px]
                items-start
                w-full
              "
            >
              {filteredWorks.map((work, index) => (
                <WorkCard
                  key={work.title}
                  title={work.title}
                  image={work.image}
                  category={work.category}
                  description={work.description}
                  index={index + 1}
                  link={work.link}
                  logo={work.logo}
                  onNavigate={onNavigate}
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
