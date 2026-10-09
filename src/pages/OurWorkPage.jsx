import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AppNav from '../components/nav';
import CaseStudies from '../components/caseStudies';
import AccelerateBusinessSection from '../components/AccelerateBusinessSection';
import Footer from '../components/footer';

import workCar      from '../assets/workCar.webp';
import workLaptop   from '../assets/workLaptop.webp';
import workEmirates from '../assets/workEmirates.webp';
import lexusLogo     from '../assets/lexusLogo.png';
import emiratesLogo  from '../assets/emiratesLogo.png';
import microsoftLogo from '../assets/microsoftLogo.png';

/* â”€â”€ extra logos for clients grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
import pepsicoLogo   from '../assets/pepsicoLogo.png';
import nutrienLogo   from '../assets/nutrienLogo.png';
import citibankLogo  from '../assets/citibankLogo.png';
import argoLogo      from '../assets/argoLogo.jpg';
import mediImpactLogo from '../assets/mediImpactLogo.jpg';
import jcpenneyLogo  from '../assets/jcpenneyLogo.png';
import safewayLogo   from '../assets/safewayLogo.png';
import ymcaLogo      from '../assets/ymcaLogo.jpg';
import magellanLogo  from '../assets/magellanLogo.jpg';

/* â”€â”€â”€ ImageCard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function ImageCard({ img, logo, logoClass = '', label, tag, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-[16px] group cursor-pointer ${className}`}>
      <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        {logo && (
          <img src={logo} alt={label} className={`object-contain object-left drop-shadow brightness-0 invert mb-1.5 ${logoClass}`} />
        )}
        <a href="#" className="inline-flex items-center gap-1 text-white text-[13px] sm:text-[20px] font-medium hover:underline">
          {tag}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* â”€â”€â”€ ClientsGrid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const clients = [
  {
    logo: microsoftLogo,
    logoClass: 'h-[48px] sm:h-[52px] w-auto opacity-75',
    name: 'Microsoft',
    desc: 'Enterprise AI and cloud solutions enabling scalable digital transformation and innovation.',
    route: 'case-study/microsoft',
  },
  {
    logo: pepsicoLogo,
    logoClass: 'h-[49px] sm:h-[57px] mr-auto ml-auto w-auto opacity-75',
    name: 'PepsiCo',
    desc: 'Retail and consumer engagement solutions powered by data driven digital technologies.',
    route: 'case-study/pepsico',
  },
  {
    logo: nutrienLogo,
    logoClass: 'h-[58px] sm:h-[82px] w-auto opacity-75',
    name: 'Nutrien',
    desc: 'Technology driven enterprise solutions improving operational efficiency and data based decision making.',
    route: 'case-study/nutrien',
  },
  {
    logo: citibankLogo,
    logoClass: 'h-[48px] sm:h-[56px] w-auto opacity-75',
    name: 'Citibank',
    desc: 'Secure financial technology solutions enabling digital banking transformation and customer trust.',
    route: 'case-study/citibank',
  },
  {
    logo: lexusLogo,
    logoClass: 'h-[48px] sm:h-[62px] w-auto opacity-75',
    name: 'Lexus',
    desc: 'Premium digital experiences and interactive platforms enhancing automotive customer journeys globally.',
    route: 'case-study/lexus',
  },
  {
    logo: argoLogo,
    logoClass: 'h-[58px] sm:h-[68px] w-auto',
    name: 'Argo',
    desc: 'Custom software solutions delivering scalable digital products and enterprise level innovation.',
    route: 'case-study/argo',
  },
  {
    logo: mediImpactLogo,
    logoClass: 'h-[50px] sm:h-[68px] w-auto opacity-95',
    name: 'MedImpact',
    desc: 'Healthcare technology solutions enabling secure, scalable digital health transformation and analytics.',
    route: 'case-study/medimpact',
  },
  {
    logo: jcpenneyLogo,
    logoClass: 'h-[46px] sm:h-[50px] w-auto opacity-85',
    name: 'JCPenney',
    desc: 'Retail technology and digital commerce solutions enhancing customer engagement and operational efficiency.',
    route: 'case-study/jcpenney',
  },
  {
    logo: emiratesLogo,
    logoClass: 'h-[74px] sm:h-[92px] w-auto opacity-75',
    name: 'Emirates',
    desc: 'Aviation digital systems and customer experience solutions supporting global travel innovation.',
    route: 'case-study/emirates',
  },
  {
    logo: safewayLogo,
    logoClass: 'h-[30px] sm:h-[44px] w-auto opacity-75',
    name: 'Safeway',
    desc: 'Retail infrastructure and data driven solutions improving supply chain and customer experience.',
    route: null,
  },
  {
    logo: ymcaLogo,
    logoClass: 'h-[60px] sm:h-[68px] w-auto opacity-90',
    name: 'YMCA',
    desc: 'Community focused digital platforms supporting engagement, management, and service accessibility systems.',
    route: null,
  },
  {
    logo: magellanLogo,
    logoClass: 'h-[58px] sm:h-[74px] w-auto opacity-85',
    name: 'Magellan Health',
    desc: 'Healthcare and behavioral health technology solutions enabling data driven care and service optimization.',
    route: null,
  },
];

function ClientsGrid({ onNavigate }) {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-[1680px]
          mx-auto
          px-5 sm:px-8 lg:px-12 xl:px-[72px]
          pt-16 sm:pt-20 lg:pt-[95px]
          pb-16 sm:pb-20 lg:pb-[100px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-x-10
            lg:gap-x-[80px]
            xl:gap-x-[110px]

            gap-y-16
            lg:gap-y-[88px]
          "
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="
                flex
                flex-col
                min-h-[220px]
                lg:min-h-[245px]
                items-center
                px-5
                sm:px-0
              "
            >
              {/* Logo */}
              <div
                className="
                  h-[64px]
                  lg:h-[70px]
                  flex
                  items-center
                  mb-5
                  lg:mb-[18px]
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`
                    object-contain
                    
                    object-left
                    max-w-full
                    ${client.logoClass}
                  `}
                />
              </div>

              {/* Description */}
              <p
                className="
                  font-grift-medium
                  text-[20.25px]
                  sm:text-[14px]
                  lg:text-[25px]
                  leading-[1.45]
                  text-[#414141]
                  max-w-[510px]
                "
              >
                {client.desc}
              </p>

              {/* Link */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (client.route && onNavigate) onNavigate(client.route);
                }}
                className="
                  inline-flex
                  items-center
                  gap-1
                  mt-auto
                  pt-6

                  self-end

                  text-[14.58px]
                  sm:text-[11px]
                  lg:text-[18px]

                  text-[#343434]
                  font-grift-medium
                  whitespace-nowrap

                  group
                "
              >
                See case study

                <ArrowRight
                  strokeWidth={1.4}
                  className="
                    w-[10px]
                    h-[10px]
                    transition-transform
                    duration-200
                    group-hover:translate-x-[2px]
                  "
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function OurWorkHero() {
  const [industry, setIndustry] = useState('All industries');

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 min-[1500px]:px-[72px] pt-7 sm:pt-8 lg:pt-7 pb-12 sm:pb-16 lg:pb-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-10 lg:mb-[44px]">
          <svg className="w-[20px] h-[20px] text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25 12 3l8.25 8.25M5.25 9.75v10.5h13.5V9.75M9 20.25v-6h6v6" />
          </svg>
          <svg className="w-[13px] h-[13px] text-[#444]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
          </svg>
          <span className="text-[15px] font-semibold text-[#111]">Our Clients</span>
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
                <option>All industries</option>
                <option>Automotive</option>
                <option>Enterprise</option>
                <option>Travel &amp; Hospitality</option>
                <option>Retail</option>
              </select>
              <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202020]" />
            </div>
          </div>
          <div className="relative mt-[-49px] min-h-[720px]">
            <div className="absolute left-[7%] top-0 w-[356.4px] h-[457.2px] overflow-hidden rounded-[17px]">
              <ImageCard img={workCar} logo={lexusLogo} logoClass="h-23 w-auto" label="Lexus" tag="Case study" className="w-full h-full" />
            </div>
            <div className="absolute right-8 top-[185px] w-[378px] h-[272.7px] overflow-hidden rounded-[17px]">
              <ImageCard img={workEmirates} logo={emiratesLogo} logoClass="h-40 w-auto" label="Emirates" tag="Case study" className="w-full h-full" />
            </div>
            <div className="absolute left-[18%] top-[500px] w-[511.2px] h-[272.7px] overflow-hidden rounded-[17px]">
              <ImageCard img={workLaptop} logo={microsoftLogo} logoClass="h-12 w-auto" label="Microsoft" tag="Case study" className="w-full h-full" />
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
              <ImageCard img={workCar} logo={lexusLogo} logoClass="h-[40px] xl:h-[48px] w-auto" label="Lexus" tag="Case study" className="w-full h-full" />
            </div>
            <div className="w-full h-[228px] xl:h-[260px] overflow-hidden rounded-[11px]">
              <ImageCard img={workEmirates} logo={emiratesLogo} logoClass="h-[55px] xl:h-[65px] w-auto" label="Emirates" tag="Case study" className="w-full h-full" />
            </div>
            <div className="w-full h-[228px] xl:h-[260px] overflow-hidden rounded-[11px]">
              <ImageCard img={workLaptop} logo={microsoftLogo} logoClass="h-[35px] xl:h-[42px] w-auto" label="Microsoft" tag="Case study" className="w-full h-full" />
            </div>
          </div>

          {/* Dropdown */}
          <div className="relative mt-10 lg:mt-12 w-full max-w-[460px]">
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full h-[43px] appearance-none border border-[#bfc0c2] bg-white rounded-none px-4 pr-12 text-[18px] text-[#3f3f3f] outline-none cursor-pointer focus:border-[#777]">
              <option>All industries</option>
              <option>Automotive</option>
              <option>Enterprise</option>
              <option>Travel &amp; Hospitality</option>
              <option>Retail</option>
            </select>
            <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#202020]" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function OurWorkPage({ onNavigate, activeDropdown, setActiveDropdown }) {
  return (
    <div className="bg-white min-h-screen text-[#141414] font-outfit antialiased">
      <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onNavigate={onNavigate} />
      <OurWorkHero />
      <ClientsGrid onNavigate={onNavigate} />
      <AccelerateBusinessSection />
      <Footer />
    </div>
  );
}

