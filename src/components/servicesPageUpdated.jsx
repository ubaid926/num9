import React, { useRef, useEffect, useState } from 'react';
import logo from '../assets/Black Logo.png';
import serviceGradient from '../assets/servicePgBg.jpg';
import AccelerateBusinessSection from './AccelerateBusinessSection';
import Footer from './footer';

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const services = [
  {
    title: ['Brand Activation'],
    description:
      'Creating high-impact brand experiences that connect with consumers through meaningful engagement. We bring brands to life with thoughtful journeys and unforgettable brand presence.',
    tags: ['Sponsorships', 'Field & Events'],
  },
  {
    title: ['Digital Strategy'],
    description:
      'Building clear, data-driven digital strategies that connect every channel, align business goals with customer needs, and create seamless experiences designed to drive growth, engagement, and long-term digital impact.',
    tags: ['Sponsorships', 'Field & Events'],
  },
  {
    title: ['UI/UX Design'],
    description:
      'Designing intuitive, user-centered digital interfaces that feel effortless, continually improving experiences with thoughtful journeys and creating engaging experiences across desktop, mobile app, and digital platforms.',
    tags: ['Sponsorships', 'Field & Events'],
  },
  {
    title: ['Website &', 'Web App Development'],
    description:
      'Developing modern, responsive websites and web applications built around performance, scalability, and seamless user experiences across every device. From informative sites through search, optimization, and everything in between.',
    tags: ['Website', 'Conferences & Dev'],
  },
  {
    title: ['Digital Marketing'],
    description:
      'Creating targeted digital campaigns that capture attention, build engagement, connect brands with the right audiences, and drive meaningful conversions through search, social, content, and paid media.',
    tags: ['Sponsorships', 'Field & Events'],
  },
  {
    title: ['Retail Marketing'],
    description:
      'Bringing brands to life through impactful retail experiences, activations, visual merchandising, and in-store meaningful interactions that engage shoppers and create memorable connections across stores, spaces, and locations.',
    tags: ['Sponsorships', 'Conferences'],
  },
  {
    title: ['Logistics Management'],
    description:
      'Managing every operational detail behind successful brand activations and campaigns. Coordinating multiple partners, timelines, inventory, and deliveries to ensure flawless execution across every environment and touchpoint.',
    tags: ['Sponsorships', 'Field & Events'],
  },
  {
    title: ['Multichannel', 'Marketing'],
    description:
      'Creating consistent brand experiences across digital, retail, social, and partner channels. Connecting every message, platform, and touchpoint into a single engagement to deliver a seamless brand journey.',
    tags: ['Sponsorships', 'Field & Events'],
  },
];

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   White background — "OUR SERVICES" | Black circle | Tagline
═══════════════════════════════════════════════════════════ */
function ServicesHero() {
  return (
    <section className="w-full bg-white overflow-hidden" aria-label="Our Services">
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-stretch min-h-[240px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[400px]">

        {/* LEFT — "OUR SERVICES" */}
        <div className="flex-1 flex items-center justify-end pr-4 sm:pr-8 md:pr-10 lg:pr-14 pt-12 md:pt-0">
          <h1
            className="font-outfit font-black text-slate-900 text-right leading-[0.88] select-none"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 7rem)', letterSpacing: '-0.04em' }}
          >
            OUR<br />SERVICES
          </h1>
        </div>

        {/* CENTER — Black circle + connector line */}
        <div
          className="relative flex flex-col items-center shrink-0 z-10 my-6 md:my-0"
          style={{ width: 'clamp(140px, 24vw, 300px)' }}
        >
          <div
            className="rounded-full bg-[#0f0f0f] flex items-center justify-center shadow-2xl md:-mt-8 lg:-mt-12"
            style={{ width: 'clamp(140px, 24vw, 300px)', height: 'clamp(140px, 24vw, 300px)' }}
          >
            <img
              src={logo}
              alt="Number 9"
              className="brightness-0 invert object-contain"
              style={{ width: '56%', height: '56%' }}
            />
          </div>
          {/* Connector line into the dark section */}
          <div className="flex-1 w-[1px] bg-slate-300 md:block hidden" style={{ minHeight: 60 }} />
        </div>

        {/* RIGHT — Tagline + copy */}
        <div className="flex-1 flex items-center justify-start pl-4 sm:pl-8 md:pl-10 lg:pl-12 pb-10 md:pb-0">
          <div style={{ maxWidth: 360 }}>
            <p
              className="font-outfit font-bold text-slate-900 leading-[1.18] mb-3 tracking-tight"
              style={{ fontSize: 'clamp(0.9rem, 1.9vw, 1.35rem)' }}
            >
              Building the physical, crafting the digital, creating unforgettable experiences.
            </p>
            <p
              className="font-outfit text-slate-500 leading-relaxed"
              style={{ fontSize: 'clamp(0.7rem, 1vw, 0.88rem)' }}
            >
              We bring human-centered design thinking and exceptional client service to solve complex challenges. No one is built like us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES LIST SECTION

   Background approach:
   • The section base is solid #050505 (near-black).
   • Every row gets its own absolutely-positioned bg div with
     `background-attachment: fixed` + `url(serviceGradient)`.
   • `background-attachment:fixed` pins the image to the
     viewport, so the same image is "revealed" through each
     row's clipping rectangle — it never moves.
   • Only the opacity of each row's bg layer animates (fade
     in for active row, fade out for every other row).
═══════════════════════════════════════════════════════════ */
function ServicesList() {
  const rowRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frameId = null;

    const detect = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.5;
        let best = 0;
        let bestDist = Infinity;
        rowRefs.current.forEach((row, i) => {
          if (!row) return;
          const rect = row.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - mid);
          if (dist < bestDist) { bestDist = dist; best = i; }
        });
        setActiveIndex(best);
      });
    };

    window.addEventListener('scroll', detect, { passive: true });
    detect(); // initialise on mount

    return () => {
      window.removeEventListener('scroll', detect);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="w-full relative bg-[#050505]">
      {services.map((service, idx) => {
        const isFirst  = idx === 0;
        const isLast   = idx === services.length - 1;
        const isActive = activeIndex === idx;

        return (
          <div
            key={idx}
            ref={(el) => { rowRefs.current[idx] = el; }}
            className="relative w-full"
          >
            {/* Thin horizontal rule between rows */}
            {!isFirst && <div className="w-full h-[1px] bg-white/15" />}

            {/* ── Per-row fixed background ──────────────────────────
                background-attachment:fixed keeps the image anchored
                to the viewport so it never shifts as rows grow/shrink.
                Only opacity fades; the image is completely stationary. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
              style={{
                backgroundImage: `url(${serviceGradient})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1.07)' : 'scale(1)',
                transition: 'opacity 550ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {/* Slight veil so text stays readable over the bright parts */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* ── ROW CONTENT ─────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col md:flex-row items-stretch w-full">

              {/* LEFT — service title */}
              <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-10 lg:px-16 py-8 md:py-10">
                <h2
                  className="font-outfit font-black text-white text-right leading-[0.95] tracking-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3.4vw, 3rem)' }}
                >
                  {service.title.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.title.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
              </div>

              {/* CENTER — timeline dot */}
              <div
                className="hidden md:flex flex-col items-center justify-center shrink-0 relative"
                style={{ width: 'clamp(60px, 8vw, 96px)' }}
              >
                {!isFirst && <div className="absolute top-0 bottom-1/2 w-[1px] bg-white/25" />}
                {!isLast  && <div className="absolute top-1/2 bottom-0 w-[1px] bg-white/25" />}
                <div
                  className="relative z-10 rounded-full border transition-all duration-500"
                  style={{
                    width:           isActive ? 28 : 22,
                    height:          isActive ? 28 : 22,
                    borderColor:     isActive ? '#19AEEF' : 'rgba(255,255,255,0.4)',
                    backgroundColor: isActive ? 'rgba(25,174,239,0.15)' : 'rgba(0,0,0,0.4)',
                    boxShadow:       isActive ? '0 0 18px rgba(25,174,239,0.35)' : 'none',
                  }}
                />
              </div>

              {/* RIGHT — description + tag pills */}
              <div className="flex-1 flex items-center px-5 sm:px-8 md:px-10 lg:px-14 py-8 md:py-10">
                <div style={{ maxWidth: 520 }}>
                  <p
                    className="font-outfit leading-relaxed mb-5 transition-colors duration-500"
                    style={{
                      fontSize: 'clamp(0.78rem, 1.1vw, 0.95rem)',
                      color: isActive ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.62)',
                    }}
                  >
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="h-8 px-4 flex items-center justify-center text-[12px] font-medium text-white/80 border border-white/30 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-200 cursor-pointer whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <div className="w-full font-outfit">
      <ServicesHero />
      <ServicesList />
      <AccelerateBusinessSection />
      <Footer />
    </div>
  );
}
