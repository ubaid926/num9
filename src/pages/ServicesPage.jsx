import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/Black Logo.png';
import heroImage from '../assets/Overlapping Circles Office Collaboration Cutout.webp';
import AppNav from '../components/nav';
import AccelerateBusinessSection from '../components/AccelerateBusinessSection';
import Footer from '../components/footer';

/* =========================================================
SERVICES DATA (EXACT CONTENT FROM REFERENCE IMAGE)
========================================================= */

const strategyServices = [
  {
    title: 'Brand Activation',
    text: 'Create high-impact consumer experiences through events, retail activations, and experiential campaigns.',
  },
  {
    title: 'Digital Strategy',
    text: 'Plan and deliver digital roadmaps that align creative, technology, and business goals.',
  },
  {
    title: 'UI/UX Design',
    text: 'Design intuitive web, mobile, and interactive experiences that make customer journeys simple.',
  },
  {
    title: 'Website & Web App Development',
    text: 'Build scalable, responsive websites and platforms designed for performance and growth.',
  },
  {
    title: 'Digital Marketing',
    text: 'Drive awareness, engagement, and conversions through targeted digital campaigns.',
  },
  {
    title: 'Retail Marketing',
    text: 'Activate brands in physical locations with shopper-focused campaigns and in-store experiences.',
  },
  {
    title: 'Logistics Management',
    text: 'Coordinate teams, vendors, and fulfillment to ensure smooth campaign execution.',
  },
  {
    title: 'Multichannel Marketing',
    text: 'Deliver consistent messaging across digital, retail, social, and partner platforms.',
  },
  {
    title: 'Customer Experience',
    text: 'Create seamless customer touchpoints that connect brands with audiences meaningfully.',
  },
];

const vrServices = [
  {
    title: 'Custom VR Experience Development',
    text: 'We build immersive VR applications for training, simulation, and entertainment tailored to business needs.',
  },
  {
    title: 'VR Training Simulations',
    text: 'Create interactive VR training environments for industries like healthcare, automotive, and corporate learning platforms.',
  },
  {
    title: 'Virtual Showrooms',
    text: 'Design fully immersive virtual product showrooms for automotive, real estate, and retail experiences.',
  },
  {
    title: 'VR App Development',
    text: 'Develop high-performance VR applications optimized for Meta Quest and other major VR platforms.',
  },
  {
    title: 'UI/UX for VR Interfaces',
    text: 'Design intuitive 3D interfaces and spatial UI systems that improve interaction within virtual environments.',
  },
  {
    title: 'Cloud-based VR Systems',
    text: 'Deliver scalable VR solutions with cloud integration, real-time streaming, and multi-user environments.',
  },
  {
    title: 'VR QA & Performance Testing',
    text: 'Test VR applications for motion sickness, latency, performance, and user experience optimization.',
  },
  {
    title: 'Digital Simulation & Visualization',
    text: 'Construct accurate 3D simulations for engineering, architecture, and enterprise data visualization.',
  },
  {
    title: 'VR Integration & Deployment',
    text: 'Deploy VR systems into enterprise workflows with full integration into existing software ecosystems.',
  },
];

const configuratorServices = [
  {
    title: '3D Product Configurator',
    text: 'We build real-time 3D configurators that allow users to customize products with instant visual feedback and high-performance rendering.',
  },
  {
    title: 'Automotive Configurator',
    text: 'We build real-time 3D configurators with instant visual feedback and high-performance rendering.',
  },
  {
    title: 'Web-Based Configurator Platforms',
    text: 'Develop scalable web configurators that work seamlessly across desktop, tablet, and mobile environments.',
  },
  {
    title: 'VR Configurator Experiences',
    text: 'Design immersive VR-based configurators for enterprise, products, showrooms, and interactive commerce systems.',
  },
  {
    title: 'UI/UX for Configurator Systems',
    text: 'Create intuitive interfaces that simplify complex customization flows and improve user engagement.',
  },
  {
    title: 'Real-Time Visualization Engine',
    text: 'Integrate high-performance rendering systems for real-time product visualization and dynamic updates.',
  },
  {
    title: 'E-Commerce Configuration Tools',
    text: 'Ignite advanced product customization within e-commerce platforms to increase conversion and user interaction.',
  },
  {
    title: 'Cloud-Based Configurator Solutions',
    text: 'Deploy scalable cloud-powered configurators that support heavy rendering and global accessibility.',
  },
  {
    title: 'Enterprise Integration Systems',
    text: 'Connect configurators with ERP, CRM, and backend systems for seamless product and data synchronization.',
  },
];

/* =========================================================
   COMPONENTS
========================================================= */

function CodeBracketIcon() {
  return (
    <div className="flex items-center mb-3">
      <svg
        className="w-12 h-7 text-[#15B83E]"
        viewBox="0 0 24 16"
        fill="none"
        stroke="#0F9E11"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="7 3 2 8 7 13" />
        <polyline points="17 3 22 8 17 13" />
      </svg>
    </div>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div
      className="
        group
        bg-white
        rounded-[24px]
        border border-[#D8DCE3]
        px-7 sm:px-8 lg:px-9 pt-7 sm:pt-8 lg:pt-9 pb-8 sm:pb-9 lg:pb-10
        flex flex-col justify-start
        transition-all duration-300
        hover:border-[#BFC5CE]
        hover:shadow-[0_10px_28px_rgba(0,0,0,0.04)]
        hover:-translate-y-0.5
      "
    >
      <h3 className="font-grift-semibold text-[18px] sm:text-[25px] text-[#111827] tracking-[-0.015em] mb-3.5 sm:mb-4 leading-[1.3] group-hover:text-black transition-colors">
        {title}
      </h3>
      <p className="font-grift-regular text-[15px] sm:text-[21px] leading-[1.55] text-[#555E6D]">
        {text}
      </p>
    </div>
  );
}

function ServiceCategorySection({ title, items }) {
  return (
    <section className="w-full">
      <div className="mb-7 sm:mb-9 lg:mb-10">
        <CodeBracketIcon />
        <h2 className="font-grift-medium text-[28px] sm:text-[38px] lg:text-[44px] text-[#111827] tracking-[-0.03em] leading-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-[32px]">
        {items.map((item, idx) => (
          <ServiceCard
            key={`${item.title}-${idx}`}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
TOP NAVBAR (MATCHING REFERENCE IMAGE)
========================================================= */

function ServicesNavbar({ onNavigate }) {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
{ label: 'Services', hasDropdown: true },
{ label: 'Technologies', hasDropdown: true },
{ label: 'Industries', hasDropdown: true },
{ label: 'About', hasDropdown: true },
{ label: 'Our Work', hasDropdown: false },
{ label: 'Blog', hasDropdown: false },
];

return (
<header className="w-full bg-white border-b border-slate-100/90 sticky top-0 z-40 transition-all">
<div className="max-w-[1240px] mx-auto px-6 lg:px-8 h-[74px] sm:h-[80px] flex items-center justify-between">
{/* Brand Logo */}
<a
href="#"
onClick={(e) => {
if (onNavigate) {
e.preventDefault();
onNavigate('home');
}
}}
className="flex items-center group cursor-pointer"
aria-label="Home"
>
<img
         src={logo}
         alt="Number 9"
         className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
       />
</a>

    {/* Desktop Nav Items */}
    <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
      {navLinks.map((link) => (
        <div key={link.label} className="relative group">
          <button
            type="button"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#2C2C2C] hover:text-black transition-colors py-2 cursor-pointer"
          >
            <span>{link.label}</span>
            {link.hasDropdown && (
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-black group-hover:translate-y-0.5 transition-all" />
            )}
          </button>
        </div>
      ))}

      {/* Schedule a Call CTA */}
      <a
        href="#contact"
        className="ml-2 bg-[#0F0F0F] text-white text-[12.5px] font-medium px-4 py-2 rounded-[6px] hover:bg-black hover:shadow-sm transition-all"
      >
        Schedule a Call
      </a>
    </nav>

    {/* Mobile Hamburger Button */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle navigation menu"
      className="lg:hidden p-2 text-slate-800 hover:text-black focus:outline-none"
    >
      {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {/* Mobile Menu Dropdown */}
  {mobileMenuOpen && (
    <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg animate-fadeIn">
      <div className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2 text-[14px] font-medium text-slate-800 hover:text-[#15B83E]"
          >
            <span>{link.label}</span>
            {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
          </a>
        ))}
        <div className="pt-3 border-t border-slate-100">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full bg-[#0F0F0F] text-white text-[13px] font-medium py-2.5 rounded-[6px]"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  )}
</header>

);
}

/* =========================================================
HERO SECTION
========================================================= */

function HeroSection() {
return (

<section
  className="
    w-full bg-white
    pt-8 pb-8
    sm:pt-12 sm:pb-12
    lg:pt-12 lg:pb-6
    overflow-hidden
  "
>

  <div className="max-w-[1540px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

    {/* Left Column Content */}
 <div className="w-full lg:w-[45%] min-w-0 lg:shrink-0">

      {/* Breadcrumb / Tag */}
      <div className="flex items-center gap-1.5 mb-4 text-[#555] font-normal">
         <svg className="w-[20px] h-[20px] text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25 12 3l8.25 8.25M5.25 9.75v10.5h13.5V9.75M9 20.25v-6h6v6" />
      </svg>
        <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="font-grift-semibold text-[21.6px] sm:text-[15px] lg:text-[18px] text-[#141414]">Solutions</span>
      </div>

      {/* Eyebrow Label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#15B83E] shrink-0" />
        <span className="  text-[14.78px] font-grift-semibold sm:text-[13px] lg:text-[21px] tracking-[0.28em] uppercase">
          NUMBER 9 SERVICES
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-grift-semibold text-[48px] sm:text-[54px] lg:text-[70px] text-[#141414] leading-[1.08] mb-6">
        Build smarter{' '}
        <span className="text-[#0F9E11] relative inline-block">
          {/* <svg
            className="absolute -top-1.5 -left-3.5 w-3.5 h-3.5 text-[#15B83E]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg> */}
          digital products
        </span>
        <br />
        with confidence.
      </h1>

      {/* Subtitle */}
      <p className="font-grift-medium text-[21.12px] sm:text-[18px] lg:text-[21px] leading-[1.55] text-[#6B7280] max-w-full sm:max-w-[500px]">
        We build scalable software, craft exceptional experiences, and turn
        innovative ideas into digital products that grow businesses and delight
        users.
      </p>
    </div>

    {/* Right Column Visual Image â€” hidden on mobile */}
  

{/* Right Column Visual Image */}

<div
  className="
    hidden lg:flex
    w-full
    lg:w-[55%]
    xl:w-[58%]
    justify-end
    items-center
    overflow-visible
  "
>
  <div
    className="
      relative
      w-full
      max-w-none
      flex items-center justify-center
      select-none
    "
  >
    <img
      src={heroImage}
      alt="Team collaboration in modern office"
      className="
        block
        w-full
        h-auto
        object-contain
        lg:scale-[1.08]
        xl:scale-[1.12]
        origin-center
      "
      loading="eager"
    />
  </div>
</div>

  </div>
</section>

);
}

/* =========================================================
BOTTOM SUMMARY & MARQUEE SECTION
========================================================= */

const marqueeRow1 = ['Brand', 'Digital', 'Web & App', 'UI/UX', 'E-Commerce', 'Content', 'Multichannel'];
const marqueeRow2 = ['Design', 'Activation', 'Solutions', 'Marketing', 'Development', 'Strategy', 'Branding', 'Omnichannel'];

const row1Items = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
const row2Items = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

function MarqueeAndSummary() {
return (
<section className="w-full bg-white pt-4 pb-20 sm:pt-6 sm:pb-28 lg:pt-28 lg:pb-32 overflow-hidden">
{/* Centered Heading & Subtitle */}
<div className="max-w-[1400px] mx-auto text-center px-5 sm:px-6 mb-6 sm:mb-10">
<h2 className="font-grift-bold font-bold text-[30px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#141414] tracking-[-0.03em] leading-[1.2] xl:whitespace-nowrap">
Yes, we cover everything you need to build, market & grow your brand
<span className="text-[#F25C22]">.</span>
</h2>
<p className="font-grift-medium text-[16px] sm:text-[14px] md:text-[14px] lg:text-[17px] xl:text-[20px] text-[#4B5563] leading-[1.45] mt-7 sm:mt-8 md:mt-9 lg:mt-10 max-w-[1050px] mx-auto">
From strategy and creative to technology and activation
<br className="hidden sm:inline" />
{' '}we bring all the pieces together to deliver real results.
</p>
</div>

  {/* Two-Row Scrolling Tag Marquee */}
  {/* Row 1 — right to left (100% seamless infinite loop) */}
  <div
    className="marquee-track w-full overflow-hidden select-none mb-0.5 sm:mb-1 py-1 sm:py-1.5"
    style={{
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
    }}
  >
    <div className="flex w-max animate-marquee-rtl will-change-transform">
      <div className="flex shrink-0 items-center">
        {row1Items.map((item, idx) => (
          <span
            key={`row1-a-${idx}`}
            className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 items-center" aria-hidden="true">
        {row1Items.map((item, idx) => (
          <span
            key={`row1-b-${idx}`}
            className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Row 2 — left to right (100% seamless infinite loop) */}
  <div
    className="marquee-track w-full overflow-hidden select-none py-1 sm:py-1.5"
    style={{
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
    }}
  >
    <div className="flex w-max animate-marquee-ltr will-change-transform">
      <div className="flex shrink-0 items-center">
        {row2Items.map((item, idx) => (
          <span
            key={`row2-a-${idx}`}
            className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 items-center" aria-hidden="true">
        {row2Items.map((item, idx) => (
          <span
            key={`row2-b-${idx}`}
            className="inline-block px-5 sm:px-7 md:px-9 text-[26px] sm:text-[36px] md:text-[44px] lg:text-[60px] leading-[1.15] font-bold text-[#CFD2D7] transition-colors duration-200 cursor-default hover:text-[#11C911] select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

);
}

/* =========================================================
MAIN SERVICES PAGE
========================================================= */

export default function ServicesPage({ onNavigate, activeDropdown, setActiveDropdown }) {
return (
<div className="bg-white min-h-screen text-[#141414] font-grift antialiased selection:bg-[#15B83E]/20 selection:text-black">
{/* 1. Header Navigation — same AppNav as Home page */}
<AppNav
     activeDropdown={activeDropdown}
     setActiveDropdown={setActiveDropdown}
     onNavigate={onNavigate}
   />

  {/* 2. Hero Section */}
  <HeroSection />

  {/* 3. Three Services Categories (9 Cards Each = 27 Cards) */}

<div
  id="services-grid"
  className="
    max-w-[1540px] mx-auto
    px-6 sm:px-8 lg:px-12
   
space-y-10 sm:space-y-24 lg:space-y-32

    pb-12 sm:pb-16
    pt-4 lg:pt-8
  "
>

    <ServiceCategorySection
      title="Strategy, Creative & Execution"
      items={strategyServices}
    />

    <ServiceCategorySection
      title="Virtual Reality Development Services"
      items={vrServices}
    />

    <ServiceCategorySection
      title="Next-Gen 3D Configurator Services"
      items={configuratorServices}
    />
  </div>

  {/* 4. Marquee Section */}
  <MarqueeAndSummary />

  {/* 5. Accelerate Business Section (Black Banner) */}
  <AccelerateBusinessSection onScheduleClick={() => onNavigate && onNavigate('contact')} />

  {/* 6. Footer */}
  <Footer onNavigate={onNavigate} />
</div>

);
}