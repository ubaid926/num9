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

const KNOWN_PAGES = new Set(['home', 'services', 'about', 'contact', 'our-work']);

function resolvePageFromLocation() {
  if (typeof window === 'undefined') return 'home';
  const params = new URLSearchParams(window.location.search);
  const urlPage = params.get('page');
  if (!urlPage || urlPage === 'home') return 'home';
  if (KNOWN_PAGES.has(urlPage)) return urlPage;
  if (urlPage.startsWith('case-study/') || urlPage.startsWith('service/')) return urlPage;
  return 'home';
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
    setPage(newPage);
    if (typeof window !== 'undefined') {
      try {
        const url = new URL(window.location.href);
        if (newPage === 'home') {
          url.searchParams.delete('page');
        } else {
          url.searchParams.set('page', newPage);
        }
        const newSearch = url.searchParams.toString();
        const newUrl = url.pathname + (newSearch ? `?${newSearch}` : '') + url.hash;
        window.history.pushState({}, '', newUrl);
      } catch (e) {
        // Fallback gracefully if url cannot be parsed
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

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
          {/* Case Studies */}
          <CaseStudies onNavigate={handleNavigate} />
          {/* What We Do */}
          <WhatWeDo />
          <MarqueeSection />
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
