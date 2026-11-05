import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import AppNav from "../components/nav";
import CaseStudies from "../components/caseStudies";
import AccelerateBusinessSection from "../components/AccelerateBusinessSection";
import Footer from "../components/footer";

import workCar from "../assets/workCar.webp";
import workLaptop from "../assets/workLaptop.webp";
import workEmirates from "../assets/workEmirates.webp";
import lexusLogo from "../assets/Logos/ClientsGrid_Logos/lexus.png";
import emiratesLogo from "../assets/Emirates-Logo_White.png";
import microsoftLogo from "../assets/Microsoft_logo__White.png";

/* ─── extra logos for clients grid ──────────────────────── */
import clientMicrosoftLogo from "../assets/Logos/ClientsGrid_Logos/microsoft.png";
import clientPepsicoLogo from "../assets/Logos/ClientsGrid_Logos/pepsico.png";
import clientNutrienLogo from "../assets/Logos/ClientsGrid_Logos/nutrien.png";
import clientCitibankLogo from "../assets/Logos/ClientsGrid_Logos/citibank.png";
import clientLexusLogo from "../assets/Logos/ClientsGrid_Logos/lexus.png";
import clientArgoLogo from "../assets/Logos/ClientsGrid_Logos/argo.png";
import clientMedimpactLogo from "../assets/Logos/ClientsGrid_Logos/medimpact.png";
import clientJcpenneyLogo from "../assets/Logos/ClientsGrid_Logos/jcpenney.png";
import clientEmiratesLogo from "../assets/Logos/ClientsGrid_Logos/emirates.png";
import clientSafewayLogo from "../assets/Logos/ClientsGrid_Logos/safeway.png";
import clientYmcaLogo from "../assets/Logos/ClientsGrid_Logos/ymca.png";
import clientMagellanLogo from "../assets/Logos/ClientsGrid_Logos/magellan.png";

/* ─── new case study logos from clientgridlogo/logo ─────── */
import clientSnacksLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Snack.com_trimmed.png";
import clientZee5Logo from "../assets/Logos/ClientsGrid_Logos/Logos/ZEE5-Logo (1)_trimmed.png";
import clientSentralLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Sentral Education Ribbon Logo_trimmed.png";
import clientPwcLogo from "../assets/Logos/ClientsGrid_Logos/Logos/PwC Logo with Layered Warm Blocks_trimmed.png";
import clientEmpireLogo from "../assets/Logos/hero_logos/empire.png";
import clientAlmazaLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Almaza Gem Crest Logo_trimmed.png";
import clientFairviewLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Fairview Geometric Architecture Logo_trimmed.png";
import clientLifegiftLogo from "../assets/Logos/ClientsGrid_Logos/Logos/LifeGive Oval Leaf Logo_trimmed.png";

/* ─── new logos from Updated_Logos ─────────────────────── */
import clientIcomLogo from "../assets/Logos/Updated_Logos/Clean restored ICOM network logo.webp";
import clientGenesisLogo from "../assets/Logos/Updated_Logos/GENESIS.Logo.032218_Site_PNG_RevB.webp";
import clientStandardCharteredLogo from "../assets/Logos/Updated_Logos/Standard_Chartered__282021_29.webp";
import clientSkinnyLogo from "../assets/caseStudies/skinny/Jordan_s_Skinny_Mixes_Logo_f5994884-b437-492f-aa4a-b5debcc1c695_1543x_copy_copy.png";
import { INDUSTRY_OPTIONS, CLIENT_INDUSTRIES } from "../data/industries";

/* ─── ImageCard ─────────────────────────────────────────── */

function ImageCard({
  img,
  logo,
  logoClass = "",
  imageClass = "object-cover",
  label,
  tag,
  className = "",
  route,
  onNavigate,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] group cursor-pointer ${className}`}
    >
      <img
        src={img}
        alt={label}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={`block w-full h-full ${imageClass || "object-cover"} object-center transition-transform duration-500`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 sm:px-6 sm:pb-6">
        {logo && (
          <div className="h-[52px] sm:h-[58px] xl:h-[64px] flex items-center justify-start mb-2">
            <img
              src={logo}
              alt={label}
              className={`block object-contain object-left drop-shadow-lg ${logoClass}`}
            />
          </div>
        )}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (route && onNavigate) {
              onNavigate(route);
            }
          }}
          className="inline-flex items-center gap-1.5 text-white text-[14px] sm:text-[18px] lg:text-[20px] font-medium hover:underline"
        >
          {tag}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}


/* ─── ClientsGrid ────────────────────────────────────────── */

const clients = [
  {
    logo: clientSkinnyLogo,
    logoClass: "h-[40px] sm:h-[44px] xl:h-[48px] w-auto max-w-[210px]",
    name: "Skinny Mixes",
    desc: "Experiential marketing and high-impact street sampling campaign launching Skinnyccino across Manhattan.",
    route: "case-study/skinny",
  },
  {
    logo: clientMicrosoftLogo,
    logoClass: "h-[34px] sm:h-[36px] xl:h-[40px] w-auto max-w-[210px]",
    name: "Microsoft",
    desc: "Enterprise AI and cloud solutions enabling scalable digital transformation and innovation.",
    route: "case-study/microsoft",
  },
  {
    logo: clientPepsicoLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "PepsiCo",
    desc: "Retail and consumer engagement solutions powered by data driven digital technologies.",
    route: "case-study/pepsico",
  },
  {
    logo: clientNutrienLogo,
    logoClass: "h-[42px] sm:h-[46px] xl:h-[50px] w-auto max-w-[230px]",
    name: "Nutrien",
    desc: "Technology driven enterprise solutions improving operational efficiency and data based decision making.",
    route: "case-study/nutrien",
  },
  {
    logo: clientCitibankLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "Citibank",
    desc: "Secure financial technology solutions enabling digital banking transformation and customer trust.",
    route: "case-study/citibank",
  },
  {
    logo: clientLexusLogo,
    logoClass: "h-[46px] sm:h-[50px] xl:h-[54px] w-auto max-w-[220px]",
    name: "Lexus",
    desc: "Premium digital experiences and interactive platforms enhancing automotive customer journeys globally.",
    route: "case-study/lexus",
  },
  {
    logo: clientArgoLogo,
    logoClass: "h-[42px] sm:h-[46px] xl:h-[50px] w-auto max-w-[220px]",
    name: "Argo",
    desc: "Custom software solutions delivering scalable digital products and enterprise level innovation.",
    route: "case-study/argo",
  },
  {
    logo: clientMedimpactLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[220px]",
    name: "MedImpact",
    desc: "Healthcare technology solutions enabling secure, scalable digital health transformation and analytics.",
    route: "case-study/medimpact",
  },
  {
    logo: clientJcpenneyLogo,
    logoClass: "h-[42px] sm:h-[46px] xl:h-[50px] w-auto max-w-[230px]",
    name: "JCPenney",
    desc: "Retail technology and digital commerce solutions enhancing customer engagement and operational efficiency.",
    route: "case-study/jcpenney",
  },
  {
    logo: clientEmiratesLogo,
    logoClass: "h-[46px] sm:h-[50px] xl:h-[54px] w-auto max-w-[190px]",
    name: "Emirates",
    desc: "Aviation digital systems and customer experience solutions supporting global travel innovation.",
    route: "case-study/emirates",
  },
  {
    logo: clientSafewayLogo,
    logoClass: "h-[42px] sm:h-[46px] xl:h-[50px] w-auto max-w-[240px]",
    name: "Safeway",
    desc: "Retail infrastructure and data driven solutions improving supply chain and customer experience.",
    route: "case-study/safeway",
  },
  {
    logo: clientYmcaLogo,
    logoClass: "h-[46px] sm:h-[50px] xl:h-[54px] w-auto max-w-[190px]",
    name: "YMCA",
    desc: "Community focused digital platforms supporting engagement, management, and service accessibility systems.",
    route: "case-study/ymca",
  },
  {
    logo: clientMagellanLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "Magellan Health",
    desc: "Healthcare and behavioral health technology solutions enabling data driven care and service optimization.",
    route: "case-study/magellan",
  },
  {
    logo: clientSnacksLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[240px]",
    name: "Snacks.com",
    desc: "Direct-to-consumer e-commerce platform and custom snack builder delivering personalized retail experiences.",
    route: "case-study/snacks",
  },
  {
    logo: clientZee5Logo,
    logoClass: "h-[46px] sm:h-[50px] xl:h-[54px] w-auto max-w-[190px]",
    name: "ZEE5",
    desc: "Next-generation OTT streaming platform and high-performance digital entertainment discovery architecture.",
    route: "case-study/zee5",
  },
  {
    logo: clientSentralLogo,
    logoClass: "h-[46px] sm:h-[50px] xl:h-[54px] w-auto max-w-[190px]",
    name: "Sentral Education",
    desc: "Integrated K-12 education management platform streamlining school administration and community engagement.",
    route: "case-study/sentral",
  },
  {
    logo: clientPwcLogo,
    logoClass: "h-[46px] sm:h-[50px] xl:h-[54px] w-auto max-w-[210px]",
    name: "PwC",
    desc: "Enterprise workflow dashboards and tax technology solutions accelerating collaborative advisory operations.",
    route: "case-study/pwc",
  },
  {
    logo: clientEmpireLogo,
    logoClass: "h-[48px] sm:h-[52px] xl:h-[56px] w-auto max-w-[210px]",
    name: "Empire Cinemas",
    desc: "Next-generation cinema ticketing systems and interactive entertainment booking experiences.",
    route: "case-study/empire",
  },
  {
    logo: clientAlmazaLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "Almaza",
    desc: "Heritage beverage brand platforms combining interactive digital storytelling and modern customer loyalty.",
    route: "case-study/almaza",
  },
  {
    logo: clientFairviewLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "Fairview",
    desc: "Architectural cladding and facade technology platforms showcasing global building innovation.",
    route: "case-study/fairview",
  },
  {
    logo: clientLifegiftLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "LifeGive",
    desc: "Health and wellness digital platform empowering lifestyle transformation with organic nutritional systems.",
    route: "case-study/lifegive",
  },
  {
    logo: clientIcomLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "ICOM",
    desc: "Global network platform connecting museums and cultural institutions through innovative digital experiences.",
    route: "case-study/icom",
  },
  {
    logo: clientGenesisLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[230px]",
    name: "GENESIS Exhibits",
    desc: "Award-winning trade show and exhibit design firm delivering immersive brand environments and experiences.",
    route: "case-study/genesis",
  },
  {
    logo: clientStandardCharteredLogo,
    logoClass: "h-[44px] sm:h-[48px] xl:h-[52px] w-auto max-w-[240px]",
    name: "Standard Chartered",
    desc: "Global banking digital transformation delivering intuitive financial platforms and customer-first innovation.",
    route: "case-study/standard-chartered",
  },
];

function ClientsGrid({ onNavigate, industry }) {
  const filteredClients = industry === "All industries"
    ? clients
    : clients.filter((client) => CLIENT_INDUSTRIES[client.name]?.includes(industry));

  return (
    <section className="w-full bg-white dark:bg-[#0B0D0C] transition-colors duration-300">

      <div
        className="
    max-w-[1680px] mx-auto
    px-5 sm:px-8
    lg:px-7 xl:px-9
    min-[1500px]:px-[72px]
    pt-10 sm:pt-12 lg:pt-[40px] min-[1500px]:pt-[48px]
    pb-12 sm:pb-16 lg:pb-[70px]
  "
      >


        <div
          className="
    grid grid-cols-1
    md:grid-cols-2 lg:grid-cols-3
    
gap-y-[35px] gap-x-6 md:gap-7

    lg:gap-x-5 lg:gap-y-9
    xl:gap-x-6 2xl:gap-x-20 xl:gap-y-10 2xl:gap-y-18
    min-[1500px]:gap-x-[76px]
    min-[1500px]:gap-y-[72px]
  "
        >

          {filteredClients.length === 0 && (
            <p className="col-span-full py-12 text-center text-[#414141] dark:text-[#D1D5DB]">
              No client projects found for this industry.
            </p>
          )}
          {filteredClients.map((client) => (
            <div
              key={client.name}

              className="
  group
  flex flex-col
  w-full
  min-w-0
  min-h-[300px]
  lg:min-h-[310px]
  min-[1500px]:min-h-[340px]
  border border-[#39B529] dark:border-[#15B83E]
  rounded-[22px]
  bg-white dark:bg-[#171A18]
  
px-[26px]
lg:px-[36px]
xl:px-[38px]
min-[1500px]:px-[42px]

  pt-[26px] lg:pt-[28px]
  min-[1500px]:pt-[32px]
  pb-[20px]
  transition-shadow duration-300
  hover:shadow-[0_8px_30px_rgba(57,181,41,0.12)]
"

            >
              {/* Logo */}
              <div
                className="
                  flex items-center justify-start
                  w-full h-[68px] sm:h-[74px] xl:h-[80px]
                  mb-[14px] sm:mb-[18px] xl:mb-[22px]
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className={`
                    block
                    object-contain
                    object-left
                    ${client.name === "Lexus" ? "dark:invert" : ""}
                    ${client.logoClass}
                  `}
                />
              </div>

              {/* Description */}
              <p
                className="
                  font-grift-medium
                  text-[16px] sm:text-[18px] xl:text-[22px]
                  leading-[1.48]
                  tracking-[-0.02em]
                  text-[#414141] dark:text-[#B4BCB6]
                  text-left
                  m-0
                "
              >
                {client.desc}
              </p>

              {/* Bottom divider and case study */}
              <div className="mt-auto pt-[24px] xl:pt-[28px]">
                <div
                  className="
                    w-full h-px
                    bg-[#888282] dark:bg-[#2F3932]
                  "
                />

                <a
                  href={client.route ? "#" : undefined}
                  onClick={(e) => {
                    e.preventDefault();

                    if (client.route && onNavigate) {
                      onNavigate(client.route);
                    }
                  }}
                  className="
                    flex items-center justify-between
                    w-full
                    pt-[16px] sm:pt-[18px] xl:pt-[19px]
                    text-[#414141] dark:text-[#E5E7EB]
                    font-grift-medium
                    text-[16px] xl:text-[20px]
                    no-underline
                    cursor-pointer
                  "
                >
                  <span>Case study</span>

                  <span
                    className="
                      flex items-center justify-center
                      w-[42px] h-[42px] xl:w-[46px] xl:h-[46px]
                      shrink-0
                      rounded-full
                      border border-[#AFAFAF] dark:border-[#38443B]
                      transition-all duration-300
                      group-hover:bg-[#39B529]
                      group-hover:border-[#39B529]
                      group-hover:text-white
                    "
                  >
                    <ArrowRight
                      size={20}
                      strokeWidth={1.5}
                      className="
                        transition-transform duration-300
                      "
                    />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Hero ─────────────────────────────────────────── */
function OurWorkHero({ onNavigate, industry, setIndustry }) {

  return (
    <section className="w-full bg-white dark:bg-[#0B0D0C] overflow-hidden transition-colors duration-300">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-7 xl:px-9 min-[1500px]:px-[72px] pt-7 sm:pt-8 lg:pt-7 pb-[12px] sm:pb-16 lg:pb-16 min-[1500px]:pb-[16px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("home");
            }}
            className="text-black dark:text-white hover:text-[#32c400] transition-colors cursor-pointer inline-flex items-center"
            aria-label="Home"
          >
            <svg className="w-[20px] h-[20px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25 12 3l8.25 8.25M5.25 9.75v10.5h13.5V9.75M9 20.25v-6h6v6" />
            </svg>
          </button>
          <svg className="w-[13px] h-[13px] text-[#444] dark:text-[#9CA3AF]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
          </svg>
          <span className="text-[18px] sm:text-[21px] font-semibold text-[#111] dark:text-white">Our Clients</span>
        </div>

        {/* Desktop / Laptop / MacBook (xl: 1280px+) */}
        <div className="hidden xl:grid xl:grid-cols-[45%_55%] 2xl:grid-cols-[44%_56%] items-start gap-8 xl:gap-8 2xl:gap-12">
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[520px] xl:min-h-[580px] 2xl:min-h-[720px]">
            <div>
              <p className="font-grift-semibold text-[14px] xl:text-[18px] 2xl:text-[21px] tracking-[0.31em] text-[#5f5f5f] mb-[7px]">
                Our Clients
              </p>
              <h1 className="font-grift-semibold text-[44px] xl:text-[54px] 2xl:text-[70px] leading-[1.08] 2xl:leading-[1.12] tracking-[-0.035em] text-black dark:text-white max-w-[620px] mb-4 xl:mb-6 2xl:mb-[34px]">
                Over 10 Years of<br />Over Delivering<span className="text-[#32c400]">.</span>
              </h1>
              <p className="font-grift-regular text-[18px] xl:text-[24px] 2xl:text-[35px] leading-[1.4] 2xl:leading-[1.45] tracking-[-0.01em] text-[#5E5B5B] dark:text-[#A1A1AA] max-w-[680px]">
                100+ active clients and a 92% retention rate,<br />
                earned through AI-augmented delivery that<br />
                compounds value across every engagement.
              </p>
            </div>

            <div className="relative mt-8 xl:mt-10 2xl:mt-12 w-full max-w-[460px]">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full h-[43px] appearance-none border border-[#bfc0c2] dark:border-[#323D35] bg-white dark:bg-[#171A18] rounded-none px-4 pr-12 text-[18px] text-[#3f3f3f] dark:text-[#F3F4F6] outline-none cursor-pointer focus:border-[#15B83E]"
              >
                {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202020] dark:text-[#CCCCCC]" />
            </div>
          </div>

          {/* Right: Exact pixel-matched 3-card collage (scales smoothly across all viewports) */}
          <div className="relative w-full flex justify-end">
            <div className="relative w-full max-w-[680px] xl:max-w-[740px] 2xl:max-w-[840px] aspect-[840/775]">
              {/* Card 1: Lexus (Top Left, tall) */}
              <div className="absolute left-[5.7%] top-0 z-10 w-[42.4%] aspect-[0.7795] overflow-hidden rounded-[14px] xl:rounded-[17px] shadow-lg">
                <ImageCard
                  img={workCar}
                  logo={lexusLogo}
                  logoClass="h-[40px] sm:h-[46px] 2xl:h-[50px] w-auto max-w-[200px]"
                  imageClass="object-cover"
                  label="Lexus"
                  tag="Case study"
                  className="w-full h-full bg-[#101820]"
                  route="case-study/lexus"
                  onNavigate={onNavigate}
                />
              </div>

              {/* Card 2: Emirates (Top Right, landscape) */}
              <div className="absolute right-[3.8%] top-[23.9%] z-10 w-[45%] aspect-[1.386] overflow-hidden rounded-[14px] xl:rounded-[17px] shadow-lg">
                <ImageCard
                  img={workEmirates}
                  logo={emiratesLogo}
                  logoClass="h-[42px] sm:h-[50px] 2xl:h-[62px] w-auto"
                  label="Emirates"
                  tag="Case study"
                  className="w-full h-full"
                  route="case-study/emirates"
                  onNavigate={onNavigate}
                />
              </div>

              {/* Card 3: Microsoft (Bottom Center, wide landscape) */}
              <div className="absolute left-[18%] top-[64.5%] z-20 w-[60.9%] aspect-[1.87] overflow-hidden rounded-[14px] xl:rounded-[17px] shadow-xl">
                <ImageCard
                  img={workLaptop}
                  logo={microsoftLogo}
                  logoClass="h-[34px] sm:h-[38px] 2xl:h-[44px] w-auto max-w-[210px]"
                  label="Microsoft"
                  tag="Case study"
                  className="w-full h-full"
                  route="case-study/microsoft"
                  onNavigate={onNavigate}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet (< xl:) */}
        <div className="xl:hidden">
          <p className="font-grift-semibold text-[14px] sm:text-[16px] tracking-[0.31em] text-[#5f5f5f] mb-2 sm:mb-3">Our Clients</p>
          <h1 className="font-grift-semibold text-[38px] sm:text-[46px] lg:text-[50px] leading-[1.12] tracking-[-0.035em] text-black dark:text-white mb-4 sm:mb-5">
            Over 10 Years of<br />Over Delivering<span className="text-[#32c400]">.</span>
          </h1>
          <p className="font-grift-medium text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.45] tracking-[-0.01em] text-[#5E5B5B] dark:text-[#A1A1AA] max-w-[1100px]">
            100+ active clients and a 92% retention rate, earned through AI-augmented delivery that compounds value across every engagement.
          </p>

          {/* Tablet 3-col image row */}
          <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6">
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-[11px]">
              <ImageCard
                img={workCar}
                logo={lexusLogo}
                logoClass="h-[36px] sm:h-[40px] w-auto max-w-[180px]"
                imageClass="object-cover"
                label="Lexus"
                tag="Case study"
                className="w-full h-full"
                route="case-study/lexus"
                onNavigate={onNavigate}
              />
            </div>
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-[11px]">
              <ImageCard img={workEmirates} logo={emiratesLogo} logoClass="h-[38px] sm:h-[42px] w-auto" label="Emirates" tag="Case study" className="w-full h-full" route="case-study/emirates" onNavigate={onNavigate} />
            </div>
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-[11px]">
              <ImageCard img={workLaptop} logo={microsoftLogo} logoClass="h-[34px] sm:h-[38px] w-auto max-w-[180px]" label="Microsoft" tag="Case study" className="w-full h-full" route="case-study/microsoft" onNavigate={onNavigate} />
            </div>
          </div>

          {/* Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10">
            <div className="relative w-full">
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full h-[43px] appearance-none border border-[#bfc0c2] dark:border-[#323D35] bg-white dark:bg-[#171A18] rounded-none px-4 pr-12 text-[18px] text-[#3f3f3f] dark:text-[#F3F4F6] outline-none cursor-pointer focus:border-[#15B83E]">
                {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202020] dark:text-[#CCCCCC]" />
            </div>
          </div>
        </div></div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────── */
export default function OurWorkPage({ onNavigate, activeDropdown, setActiveDropdown, currentPage }) {
  const [industry, setIndustry] = useState("All industries");

  return (
    <div className="bg-white dark:bg-[#0B0D0C] min-h-screen text-[#141414] dark:text-[#F3F4F6] font-grift antialiased transition-colors duration-300">
      <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onNavigate={onNavigate} currentPage={currentPage || "our-work"} />
      <OurWorkHero onNavigate={onNavigate} industry={industry} setIndustry={setIndustry} />
      <ClientsGrid onNavigate={onNavigate} industry={industry} />
      <AccelerateBusinessSection onScheduleClick={() => onNavigate && onNavigate('contact')} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
