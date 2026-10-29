import { useState, useEffect } from 'react'
import AppNav from './components/nav'
import HeroSectionFullWidth from './components/heroSection'
import CaseStudies from './components/caseStudies'
import FourthSection from './components/fourthSection'
import WhatWeDo from './components/whatWeDo'
import FifthSection from './components/fifthSection'
import WhyWorkWithUs from './components/contact'
import AccelerateBusinessSection from './components/AccelerateBusinessSection'
import Footer from './components/footer'
import MarqueeSection from './components/marqueeSection'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OurWorkPage from './pages/OurWorkPage'
import CaseStudyTemplate from './pages/CaseStudyTemplate'
import ServiceDetailPage from './pages/ServiceDetailPage'
import aboutHeroImg from './assets/aboutHeroImage.webp'
import servicesHeroImg from './assets/Overlapping Circles Office Collaboration Cutout.webp'
import workHeroImg from './assets/workCar.webp'
import homeHeroImg from './assets/Metallic Blue Lexus in a Warehouse 1.webp'
import lexusHeroImg from './assets/lexus/lexusHeroImg.webp'

const KNOWN_PAGES = new Set(['home', 'services', 'about', 'contact', 'our-work']);

function resolvePageFromLocation() {
  if (typeof window === 'undefined') return 'home';

  // 1. Pathname routing (e.g. /about, /services, /contact, /our-work, /case-study/:slug, /service/:slug)
  const pathname = window.location.pathname || '/';
  let cleanPath = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  // Strip subpath prefix if present (e.g. num9/)
  if (cleanPath.startsWith('num9/')) {
    cleanPath = cleanPath.slice(5);
  } else if (cleanPath === 'num9') {
    cleanPath = '';
  }

  // Aliases
  if (cleanPath === 'about-us') cleanPath = 'about';
  if (cleanPath === 'contact-us') cleanPath = 'contact';
  if (cleanPath === 'work' || cleanPath === 'case-studies') cleanPath = 'our-work';

  if (!cleanPath || cleanPath === 'home') {
    // 2. Query param fallback (?page=about, etc.)
    const params = new URLSearchParams(window.location.search);
    const queryPage = (params.get('page') || '').toLowerCase();
    if (queryPage && queryPage !== 'home') {
      let cleanQueryPage = queryPage;
      if (cleanQueryPage === 'about-us') cleanQueryPage = 'about';
      if (cleanQueryPage === 'contact-us') cleanQueryPage = 'contact';
      if (cleanQueryPage === 'work' || cleanQueryPage === 'case-studies') cleanQueryPage = 'our-work';

      if (KNOWN_PAGES.has(cleanQueryPage)) return cleanQueryPage;
      if (cleanQueryPage.startsWith('case-study/') || cleanQueryPage.startsWith('service/')) return cleanQueryPage;
    }
    return 'home';
  }

  if (KNOWN_PAGES.has(cleanPath)) return cleanPath;
  if (cleanPath.startsWith('case-study/') || cleanPath.startsWith('service/')) return cleanPath;

  return 'home';
}

function preloadHeroForPage(targetPage) {
  if (typeof window === 'undefined') return;
  try {
    let heroSrc = null;
    if (targetPage === 'home') heroSrc = homeHeroImg;
    else if (targetPage === 'about' || targetPage === 'contact') heroSrc = aboutHeroImg;
    else if (targetPage === 'services') heroSrc = servicesHeroImg;
    else if (targetPage === 'our-work') heroSrc = workHeroImg;
    else if (targetPage === 'case-study/lexus') heroSrc = lexusHeroImg;

    if (heroSrc) {
      const existing = document.querySelector(`link[rel="preload"][href="${heroSrc}"]`);
      if (!existing && document.head) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroSrc;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      }
      const img = new Image();
      img.src = heroSrc;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    }
  } catch (e) {
    // Graceful fallback
  }
}

// Safe initial preload after routing resolution is fully initialized
if (typeof window !== 'undefined') {
  try {
    preloadHeroForPage(resolvePageFromLocation());
  } catch (e) {
    // Graceful fallback
  }
}


export default function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [page, setPage] = useState(() => resolvePageFromLocation());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [page]);

  useEffect(() => {
    const handlePopState = () => {
      setPage(resolvePageFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (newPage) => {
    const target = newPage || 'home';
    preloadHeroForPage(target);
    setPage(target);

    if (typeof window !== 'undefined') {
      try {
        let targetPath = '/';
        if (target !== 'home') {
          targetPath = `/${target.replace(/^\/+/, '')}`;
        }
        if (window.location.pathname !== targetPath || window.location.search) {
          window.history.pushState({}, '', targetPath);
        }
      } catch (e) {
        // Fallback gracefully
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  // Intercept standard internal <a> clicks for seamless client-side SPA routing
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http:') ||
        href.startsWith('https:') ||
        href.startsWith('//') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        anchor.target === '_blank' ||
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
      ) {
        return;
      }

      let route = null;
      if (href === '/') {
        route = 'home';
      } else if (href.startsWith('/')) {
        route = href.replace(/^\/+/, '');
      } else if (href.startsWith('?page=')) {
        route = href.replace('?page=', '');
      }

      if (route !== null) {
        e.preventDefault();
        handleNavigate(route);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const sharedNavProps = {
    onNavigate: handleNavigate,
    activeDropdown,
    setActiveDropdown,
  };

  return (
    <div className="bg-white font-grift text-slate-900 relative min-h-screen overflow-x-hidden">
      {page === 'services' && <ServicesPage {...sharedNavProps} />}

      {page === 'about' && <AboutPage {...sharedNavProps} />}

      {page === 'contact' && <ContactPage {...sharedNavProps} />}

      {page === 'our-work' && <OurWorkPage {...sharedNavProps} />}

      {page.startsWith('case-study/') && (
        <CaseStudyTemplate
          key={page}
          slug={page.replace('case-study/', '')}
          {...sharedNavProps}
        />
      )}

      {page.startsWith('service/') && (
        <ServiceDetailPage
          key={page}
          slug={page.replace('service/', '')}
          {...sharedNavProps}
        />
      )}

      {page === 'home' && (
        <>
          {/* Navbar */}
          <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onNavigate={handleNavigate} />
          {/* Hero */}
          <div className={`bg-white transition-all duration-300 ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''}`}>
            <HeroSectionFullWidth
              isDarkened={!!activeDropdown}
              onNavigate={handleNavigate}
            />
          </div>
          {/* What We Do */}
          <WhatWeDo onNavigate={handleNavigate} />
          {/* Case Studies (Latest) */}
          <CaseStudies onNavigate={handleNavigate} />
          {/* <MarqueeSection /> */}
          {/* Fifth Section — testimonials + awards */}
          <FifthSection onNavigate={handleNavigate} />
          <WhyWorkWithUs />
          <AccelerateBusinessSection onScheduleClick={() => handleNavigate('contact')} />
          {/* Footer */}
          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </div>
  );
}
