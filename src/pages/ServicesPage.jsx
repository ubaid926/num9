import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/Black Logo.png';
import heroImage from '../assets/Overlapping Circles Office Collaboration Cutout.webp';
import AppNav from '../components/nav';
import AccelerateBusinessSection from '../components/AccelerateBusinessSection';
import MarqueeSection from '../components/marqueeSection';
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
    text: 'Design intuitive, responsive, and innovative user experiences that drive customer journey and conversions.',
  },
  {
    title: 'Website & Web App Development',
    text: 'Build scalable, responsive websites and web applications designed for performance and growth.',
  },
  {
    title: 'Digital Marketing',
    text: 'Drive awareness, engagement, and conversions through targeted digital campaigns.',
  },
  {
    title: 'Retail Marketing',
    text: 'Activate brands in physical retail environments with shopper-focused campaigns and in-store experiences.',
  },
  {
    title: 'Logistics Management',
    text: 'Coordinate teams, vendors, and operations to ensure seamless campaign execution.',
  },
  {
    title: 'Multichannel Marketing',
    text: 'Deliver consistent messaging across digital, email, social, and partner channels.',
  },
  {
    title: 'Customer Experience',
    text: 'Create seamless customer journeys that connect brands with audiences meaningfully.',
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

const marqueeRow1 = ['Brand', 'Digital', 'Web & App', 'UI/UX', 'E-Commerce', 'Content'];
const marqueeRow2 = ['Channel', 'Design', 'Activation', 'Solutions', 'Marketing', 'Development'];

/* =========================================================
   COMPONENTS
========================================================= */

function CodeBracketIcon() {
  return (
    <div className="flex items-center mb-3">
      <svg
        className="w-14 h-8 text-[#15B83E]"
        viewBox="0 0 24 16"
        fill="none"
        stroke="#15B83E"
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
        rounded-[14px]
        border border-[#E7E9ED]
        p-5 sm:p-6
        flex flex-col justify-start
        transition-all duration-200
        hover:-translate-y-1
        hover:border-[#D1D5DB]
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.045)]
      "
      style={{ width: '100%', height: 'auto' }}
    >
      <h3 className="font-grift-semibold text-[18.75px] sm:text-[25px] text-[#181818] tracking-[-0.02em] mb-2 leading-[1.3] group-hover:text-black transition-colors">
        {title}
      </h3>
      <p className="font-grift-medium text-[15.84px] sm:text-[21px] leading-[1.58] text-[#6B7280]">
        {text}
      </p>
    </div>
  );
}

function ServiceCategorySection({ title, items }) {
  return (
    <section className="w-full">
      <div className="mb-6">
        <CodeBracketIcon />
        <h2 className="font-grift-medium text-[30px] sm:text-[50px] text-[#111827] tracking-[-0.035em]">
          {title}
        </h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-14"
      >
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
    <section className="w-full bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

        {/* Left Column Content */}
        <div className="w-full lg:w-[50%] min-w-0">

          {/* Breadcrumb / Tag */}
          <div className="flex items-center gap-1.5 mb-4 text-[#555] font-normal">
            <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-4 0h4" />
            </svg>
            <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-grift-semibold text-[21.6px] sm:text-[15px] lg:text-[18px] text-[#141414]">Solutions</span>
          </div>

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#15B83E] shrink-0" />
            <span className="font-grift-semibold text-[14.78px] sm:text-[13px] lg:text-[21px] tracking-[0.18em] text-[#15B83E] uppercase">
              NUMBER 9 SERVICES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-grift-semibold text-[48px] sm:text-[54px] lg:text-[70px] text-[#141414] leading-[1.08] mb-6">
            Build smarter{' '}
            <span className="text-[#15B83E] relative inline-block">
              <svg
                className="absolute -top-1.5 -left-3.5 w-3.5 h-3.5 text-[#15B83E]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              digital products
            </span>
            <br />
            with confidence.
          </h1>

          {/* Subtitle */}
          <p className="font-grift-medium text-[21.12px] sm:text-[18px] lg:text-[21px] leading-[1.65] text-[#6B7280] max-w-full sm:max-w-[500px]">
            We build scalable software, craft exceptional experiences, and turn
            innovative ideas into digital products that grow businesses and delight
            users.
          </p>
        </div>

        {/* Right Column Visual Image â€” hidden on mobile */}
        <div className="hidden lg:flex w-full lg:w-[48%] justify-end items-center overflow-hidden">
          <div className="relative w-full max-w-[720px] flex items-center justify-center select-none">
            <img
              src={heroImage}
              alt="Team collaboration in modern office"
              className="w-full h-auto object-contain block"
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

function MarqueeAndSummary() {
  return (
    <section className="w-full bg-white pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-t border-slate-100">
      {/* Centered Heading & Subtitle */}
      <div className="max-w-[760px] mx-auto px-5 sm:px-6 text-center mb-10 sm:mb-12">
        <h2 className="font-grift-semibold text-[30px] sm:text-[26px] md:text-[28px] text-[#181818] tracking-[-0.03em] leading-snug">
          Yes, we cover everything you need to build, market &amp; grow your brand.
        </h2>
        <p className="font-grift-light text-[25px] sm:text-[14px] text-[#6B7280] leading-[1.55] mt-4 sm:mt-3 max-w-[620px] mx-auto">
          From strategy and creative to technology and activation,
          <br className="hidden sm:inline" /> we bring all the pieces together to deliver real results.
        </p>
      </div>

      {/* Two-Row Scrolling Tag Marquee */}
      <div className="space-y-4 py-2 select-none overflow-hidden">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="font-grift-black flex items-center gap-10 sm:gap-16 whitespace-nowrap animate-marquee-ltr text-[#CBD5E1] text-[30px] sm:text-[34px] lg:text-[40px] tracking-tight">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
              <span key={`row1-${idx}`} className="hover:text-slate-400 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <div className="font-grift-black flex items-center gap-10 sm:gap-16 whitespace-nowrap animate-marquee-rtl text-[#CBD5E1] text-[30px] sm:text-[34px] lg:text-[40px] tracking-tight">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
              <span key={`row2-${idx}`} className="hover:text-slate-400 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Explore All Services Pill Button */}
      <div className="mt-10 sm:mt-12 flex justify-center">
        <a
          href="#services-grid"
          className="
            inline-flex items-center gap-3
            px-7 py-3 sm:px-6 sm:py-2.5
            rounded-full
            border border-slate-300
            font-grift-medium text-[22px] sm:text-[13px] text-slate-800
            hover:border-black hover:bg-black hover:text-white
            transition-all duration-200
            shadow-sm
          "
        >
          <span>Explore All Services</span>
          <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN SERVICES PAGE
========================================================= */

export default function ServicesPage({ onNavigate, activeDropdown, setActiveDropdown }) {
  return (
    <div className="bg-white min-h-screen text-[#141414] font-outfit antialiased selection:bg-[#15B83E]/20 selection:text-black">
      {/* 1. Header Navigation â€” same AppNav as Home page */}
      <AppNav
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        onNavigate={onNavigate}
      />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Three Services Categories (9 Cards Each = 27 Cards) */}
      <div id="services-grid" className="max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-20 lg:space-y-24 pb-16 sm:pb-20">
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

      {/* 4. Marquee Section â€” reusing existing component */}
      <MarqueeSection />

      {/* 5. Accelerate Business Section (Black Banner) */}
      <AccelerateBusinessSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
