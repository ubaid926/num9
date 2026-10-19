import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import AppNav from "../components/nav";
import CaseStudies from "../components/caseStudies";
import AccelerateBusinessSection from "../components/AccelerateBusinessSection";
import Footer from "../components/footer";

import workCar from "../assets/workCar.webp";
import workLaptop from "../assets/workLaptop.webp";
import workEmirates from "../assets/workEmirates.webp";
import lexusLogo from "../assets/Logos/Updated_Logos/lexus_PNG22.png";
import emiratesLogo from "../assets/Logos/Updated_Logos/Emirates-Logo.png";
import microsoftLogo from "../assets/Logos/Updated_Logos/Microsoft_logo__282012_29.png";

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
import clientEmpireLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Empire Cinemas Crown Emblem_trimmed.png";
import clientAlmazaLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Almaza Gem Crest Logo_trimmed.png";
import clientFairviewLogo from "../assets/Logos/ClientsGrid_Logos/Logos/Fairview Geometric Architecture Logo_trimmed.png";
import clientLifegiftLogo from "../assets/Logos/ClientsGrid_Logos/Logos/LifeGive Oval Leaf Logo_trimmed.png";

/* ─── ImageCard ─────────────────────────────────────────── */
function ImageCard({ img, logo, logoClass = "", label, tag, className = "", route, onNavigate }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] group cursor-pointer ${className}`}
    >
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        {logo && (
          <img
            src={logo}
            alt={label}
            className={`object-contain object-left drop-shadow brightness-0 invert mb-1.5 ${logoClass}`}
          />
        )}
        <a
          href="#"
          onClick={(e) => { if (route && onNavigate) { e.preventDefault(); onNavigate(route); } }}
          className="inline-flex items-center gap-1 text-white text-[13px] sm:text-[20px] font-medium hover:underline"
        >
          {tag}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* Categories used by both dropdowns and the client-card filter. */
const INDUSTRY_OPTIONS = [
  "All industries",
  "Automotive",
  "Enterprise",
  "Travel & Hospitality",
  "Retail",
  "Healthcare",
  "Education",
  "Media & Entertainment",
  "Financial Services",
  "Architecture",
  "Community & Non-Profit",
  "Food & Beverage",
];

const CLIENT_INDUSTRIES = {
  Microsoft: ["Enterprise"],
  PepsiCo: ["Retail", "Food & Beverage"],
  Nutrien: ["Enterprise"],
  Citibank: ["Financial Services", "Enterprise"],
  Lexus: ["Automotive"],
  Argo: ["Enterprise"],
  MedImpact: ["Healthcare", "Enterprise"],
  JCPenney: ["Retail"],
  Emirates: ["Travel & Hospitality"],
  Safeway: ["Retail", "Food & Beverage"],
  YMCA: ["Community & Non-Profit"],
  "Magellan Health": ["Healthcare"],
  "Snacks.com": ["Retail", "Food & Beverage"],
  ZEE5: ["Media & Entertainment"],
  "Sentral Education": ["Education"],
  PwC: ["Enterprise", "Financial Services"],
  "Empire Cinemas": ["Media & Entertainment"],
  Almaza: ["Food & Beverage"],
  Fairview: ["Architecture"],
  LifeGive: ["Healthcare", "Retail"],
};

/* ─── ClientsGrid ────────────────────────────────────────── */

const clients = [
  {
    logo: clientMicrosoftLogo,
    logoClass: "h-[38px] sm:h-[42px] w-auto",
    name: "Microsoft",
    desc: "Enterprise AI and cloud solutions enabling scalable digital transformation and innovation.",
    route: "case-study/microsoft",
  },
  {
    logo: clientPepsicoLogo,
    logoClass: "h-[42px] sm:h-[47px] w-auto",
    name: "PepsiCo",
    desc: "Retail and consumer engagement solutions powered by data driven digital technologies.",
    route: "case-study/pepsico",
  },
  {
    logo: clientNutrienLogo,
    logoClass: "h-[35px] sm:h-[39px] w-auto",
    name: "Nutrien",
    desc: "Technology driven enterprise solutions improving operational efficiency and data based decision making.",
    route: "case-study/nutrien",
  },
  {
    logo: clientCitibankLogo,
    logoClass: "h-[38px] sm:h-[42px] w-auto",
    name: "Citibank",
    desc: "Secure financial technology solutions enabling digital banking transformation and customer trust.",
    route: "case-study/citibank",
  },
  {
    logo: clientLexusLogo,
    logoClass: "h-[48px] sm:h-[54px] w-auto",
    name: "Lexus",
    desc: "Premium digital experiences and interactive platforms enhancing automotive customer journeys globally.",
    route: "case-study/lexus",
  },
  {
    logo: clientArgoLogo,
    logoClass: "h-[30px] sm:h-[34px] w-auto",
    name: "Argo",
    desc: "Custom software solutions delivering scalable digital products and enterprise level innovation.",
    route: "case-study/argo",
  },
  {
    logo: clientMedimpactLogo,
    logoClass: "h-[52px] sm:h-[58px] w-auto",
    name: "MedImpact",
    desc: "Healthcare technology solutions enabling secure, scalable digital health transformation and analytics.",
    route: "case-study/medimpact",
  },
  {
    logo: clientJcpenneyLogo,
    logoClass: "h-[38px] sm:h-[42px] w-auto",
    name: "JCPenney",
    desc: "Retail technology and digital commerce solutions enhancing customer engagement and operational efficiency.",
    route: "case-study/jcpenney",
  },
  {
    logo: clientEmiratesLogo,
    logoClass: "h-[52px] sm:h-[68px] w-auto",
    name: "Emirates",
    desc: "Aviation digital systems and customer experience solutions supporting global travel innovation.",
    route: "case-study/emirates",
  },
  {
    logo: clientSafewayLogo,
    logoClass: "h-[34px] sm:h-[38px] w-auto",
    name: "Safeway",
    desc: "Retail infrastructure and data driven solutions improving supply chain and customer experience.",
    route: "case-study/safeway",
  },
  {
    logo: clientYmcaLogo,
    logoClass: "h-[52px] sm:h-[58px] w-auto",
    name: "YMCA",
    desc: "Community focused digital platforms supporting engagement, management, and service accessibility systems.",
    route: "case-study/ymca",
  },
  {
    logo: clientMagellanLogo,
    logoClass: "h-[44px] sm:h-[49px] w-auto",
    name: "Magellan Health",
    desc: "Healthcare and behavioral health technology solutions enabling data driven care and service optimization.",
    route: "case-study/magellan",
  },
  {
    logo: clientSnacksLogo,
    logoClass: "h-[42px] sm:h-[48px] w-auto max-w-[210px]",
    name: "Snacks.com",
    desc: "Direct-to-consumer e-commerce platform and custom snack builder delivering personalized retail experiences.",
    route: "case-study/snacks",
  },
  {
    logo: clientZee5Logo,
    logoClass: "h-[52px] sm:h-[58px] w-auto",
    name: "ZEE5",
    desc: "Next-generation OTT streaming platform and high-performance digital entertainment discovery architecture.",
    route: "case-study/zee5",
  },
  {
    logo: clientSentralLogo,
    logoClass: "h-[50px] sm:h-[56px] w-auto",
    name: "Sentral Education",
    desc: "Integrated K-12 education management platform streamlining school administration and community engagement.",
    route: "case-study/sentral",
  },
  {
    logo: clientPwcLogo,
    logoClass: "h-[50px] sm:h-[56px] w-auto",
    name: "PwC",
    desc: "Enterprise workflow dashboards and tax technology solutions accelerating collaborative advisory operations.",
    route: "case-study/pwc",
  },
  {
    logo: clientEmpireLogo,
    logoClass: "h-[50px] sm:h-[56px] w-auto",
    name: "Empire Cinemas",
    desc: "Next-generation cinema ticketing systems and interactive entertainment booking experiences.",
    route: "case-study/empire",
  },
  {
    logo: clientAlmazaLogo,
    logoClass: "h-[48px] sm:h-[54px] w-auto max-w-[200px]",
    name: "Almaza",
    desc: "Heritage beverage brand platforms combining interactive digital storytelling and modern customer loyalty.",
    route: "case-study/almaza",
  },
  {
    logo: clientFairviewLogo,
    logoClass: "h-[46px] sm:h-[52px] w-auto max-w-[200px]",
    name: "Fairview",
    desc: "Architectural cladding and facade technology platforms showcasing global building innovation.",
    route: "case-study/fairview",
  },
  {
    logo: clientLifegiftLogo,
    logoClass: "h-[46px] sm:h-[52px] w-auto max-w-[200px]",
    name: "LifeGive",
    desc: "Health and wellness digital platform empowering lifestyle transformation with organic nutritional systems.",
    route: "case-study/lifegive",
  },
];

function ClientsGrid({ onNavigate, industry }) {
  const filteredClients = industry === "All industries"
    ? clients
    : clients.filter((client) => CLIENT_INDUSTRIES[client.name]?.includes(industry));

  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-[1680px] mx-auto
          px-5 sm:px-8 lg:px-12 xl:px-[24px]
          pt-10 sm:pt-12 lg:pt-[40px]
          pb-12 sm:pb-16 lg:pb-[70px]
        "
      >
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3
            gap-8 md:gap-8
            lg:gap-x-[48px] lg:gap-y-[72px]
            xl:gap-x-[76px]
          "
        >
          {filteredClients.length === 0 && (
            <p className="col-span-full py-12 text-center text-[#414141]">
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
                min-h-[320px]
                lg:min-h-[340px]
                border border-[#39B529]
                rounded-[22px]
                bg-white
                px-[28px] sm:px-[32px] lg:px-[38px]
                pt-[30px] lg:pt-[32px]
                pb-[20px]
              "
            >
              {/* Logo */}
              <div
                className="
                  flex items-center justify-start
                  w-full h-[60px] sm:h-[66px]
                  mb-[20px] sm:mb-[24px]
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`
                    block
                    object-contain
                    object-left
                    ${client.logoClass}
                  `}
                />
              </div>

              {/* Description */}
              <p
                className="
                  font-grift-medium
                  text-[18px] lg:text-[22px]
                  leading-[1.48]
                  tracking-[-0.02em]
                  text-[#414141]
                  text-left
                  m-0
                "
              >
                {client.desc}
              </p>

              {/* Bottom divider and case study */}
              <div className="mt-auto pt-[28px]">
                <div
                  className="
                    w-full h-px
                    bg-[#888282]
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
                    pt-[19px]
                    text-[#414141]
                    font-grift-medium
                    text-[16px] lg:text-[20px]
                    no-underline
                    cursor-pointer
                  "
                >
                  <span>Case study</span>

                  <span
                    className="
                      flex items-center justify-center
                      w-[46px] h-[46px]
                      shrink-0
                      rounded-full
                      border border-[#AFAFAF]
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
                        group-hover:translate-x-[2px]
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
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 min-[1500px]:px-[72px] pt-7 sm:pt-8 lg:pt-7 pb-12 sm:pb-16 lg:pb-18">

        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-10 lg:mb-[44px]">
          <svg className="w-[20px] h-[20px] text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25 12 3l8.25 8.25M5.25 9.75v10.5h13.5V9.75M9 20.25v-6h6v6" />
          </svg>
          <svg className="w-[13px] h-[13px] text-[#444]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
          </svg>
          <span className="text-[15px] font-semibold text-[#111]">Our Work</span>
        </div>

        {/* Desktop 1500px+ */}
        <div className="hidden min-[1500px]:grid min-[1500px]:grid-cols-[45%_55%] items-start">
          <div className="relative z-10">
            <p className="font-grift-semibold text-[21.12px] tracking-[0.31em] text-[#5f5f5f] mb-[7px]">Our clients</p>
            <h1 className="font-grift-semibold text-[70px] leading-[1.12] tracking-[-0.035em] text-black max-w-[620px] mb-[34px]">
              Over 10 Years of<br />Over Delivering<span className="text-[#32c400]">.</span>
            </h1>
            <p className="font-grift-medium text-[35px] leading-[1.55] tracking-[-0.01em] text-[#666666] max-w-[680px]">
              500+ active clients and a 96% retention rate,<br />
              earned through AI-augmented delivery that<br />
              compounds value across every engagement.
            </p>
            <div className="relative mt-70 w-full max-w-[460px]">
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full h-[43px] appearance-none border border-[#bfc0c2] bg-white rounded-none px-4 pr-12 text-[18px] text-[#3f3f3f] outline-none cursor-pointer focus:border-[#777]">
                {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202020]" />
            </div>
          </div>
          <div className="relative mt-[-49px] min-h-[720px]">
            <div className="absolute left-[7%] top-0 w-[356.4px] h-[457.2px] overflow-hidden rounded-[17px]">
              <ImageCard img={workCar} logo={lexusLogo} logoClass="h-23 w-auto" label="Lexus" tag="Case study" className="w-full h-full" route="case-study/lexus" onNavigate={onNavigate} />
            </div>
            <div className="absolute right-8 top-[185px] w-[378px] h-[272.7px] overflow-hidden rounded-[17px]">
              <ImageCard img={workEmirates} logo={emiratesLogo} logoClass="h-40 w-auto" label="Emirates" tag="Case study" className="w-full h-full" route="case-study/emirates" onNavigate={onNavigate} />
            </div>
            <div className="absolute left-[18%] top-[500px] w-[511.2px] h-[272.7px] overflow-hidden rounded-[17px]">
              <ImageCard img={workLaptop} logo={microsoftLogo} logoClass="h-12 w-auto" label="Microsoft" tag="Case study" className="w-full h-full" route="case-study/microsoft" onNavigate={onNavigate} />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet / Laptop <1500px */}
        <div className="min-[1500px]:hidden">
          <p className="font-grift-semibold text-[14px] lg:text-[12px] tracking-[0.31em] text-[#5f5f5f] mb-3">Our clients</p>
          <h1 className="font-grift-semibold text-[42px] sm:text-[50px] lg:text-[43px] xl:text-[52px] leading-[1.15] tracking-[-0.035em] text-black mb-5 lg:mb-4">
            Over 10 Years of<br />Over Delivering<span className="text-[#32c400]">.</span>
          </h1>
          <p className="font-grift-medium text-[18px] sm:text-[20px] lg:text-[20px] xl:text-[23px] leading-[1.45] tracking-[-0.01em] text-[#777] max-w-[1100px]">
            500+ active clients and a 96% retention rate, earned through AI-augmented delivery that
            <br className="hidden lg:block" /> compounds value across every engagement.
          </p>

          {/* Laptop 3-col image row */}
          <div className="hidden lg:grid min-[1500px]:hidden grid-cols-3 gap-[16px] mt-[18px]">
            <div className="w-full h-[228px] xl:h-[260px] overflow-hidden rounded-[11px]">
              <ImageCard img={workCar} logo={lexusLogo} logoClass="h-[40px] xl:h-[48px] w-auto" label="Lexus" tag="Case study" className="w-full h-full" route="case-study/lexus" onNavigate={onNavigate} />
            </div>
            <div className="w-full h-[228px] xl:h-[260px] overflow-hidden rounded-[11px]">
              <ImageCard img={workEmirates} logo={emiratesLogo} logoClass="h-[55px] xl:h-[65px] w-auto" label="Emirates" tag="Case study" className="w-full h-full" route="case-study/emirates" onNavigate={onNavigate} />
            </div>
            <div className="w-full h-[228px] xl:h-[260px] overflow-hidden rounded-[11px]">
              <ImageCard img={workLaptop} logo={microsoftLogo} logoClass="h-[35px] xl:h-[42px] w-auto" label="Microsoft" tag="Case study" className="w-full h-full" route="case-study/microsoft" onNavigate={onNavigate} />
            </div>
          </div>

          {/* Dropdown */}
          <div className="relative mt-10 lg:mt-12 w-full max-w-[460px]">
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full h-[43px] appearance-none border border-[#bfc0c2] bg-white rounded-none px-4 pr-12 text-[18px] text-[#3f3f3f] outline-none cursor-pointer focus:border-[#777]">
              {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202020]" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────── */
export default function OurWorkPage({ onNavigate, activeDropdown, setActiveDropdown }) {
  const [industry, setIndustry] = useState("All industries");

  return (
    <div className="bg-white min-h-screen text-[#141414] font-grift antialiased">
      <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onNavigate={onNavigate} />
      <OurWorkHero onNavigate={onNavigate} industry={industry} setIndustry={setIndustry} />
      <ClientsGrid onNavigate={onNavigate} industry={industry} />
      <AccelerateBusinessSection onScheduleClick={() => onNavigate && onNavigate('contact')} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
