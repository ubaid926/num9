import { useState, useEffect, useRef } from 'react'
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
import aboutHeroImg from './assets/Collaborative Design in a Warm Studio 1.webp'
import servicesHeroImg from './assets/Overlapping Circles Office Collaboration Cutout.webp'
import workHeroImg from './assets/workCar.webp'
import homeHeroImg from './assets/Metallic Blue Lexus in a Warehouse 1.webp'
import lexusHeroImg from './assets/lexus/lexusHeroImg.webp'

const BASE_PATH = import.meta.env.BASE_URL; // '/' in local root builds, '/num9dev/' in production
const BASE_PREFIX = BASE_PATH.replace(/\/$/, '');
const toPagePath = (page) => page === 'home' ? BASE_PATH : `${BASE_PATH}${page.replace(/^\/+/, '')}`;

const KNOWN_PAGES = new Set(['home', 'services', 'about', 'contact', 'our-work', 'work']);

// The "Our Work" page (/work) reuses this service detail layout.
const OUR_WORK_SERVICE_SLUG = 'all';

function resolvePageFromLocation() {
  if (typeof window === 'undefined') return 'home';

  // 1. Pathname routing (e.g. /about, /services, /contact, /our-work, /case-study/:slug, /service/:slug)
  const pathname = window.location.pathname || '/';
  // Remove the configured Vite base before resolving the current page.
  const relativePath = BASE_PREFIX && (pathname === BASE_PREFIX || pathname.startsWith(BASE_PREFIX + '/'))
    ? pathname.slice(BASE_PREFIX.length) || '/'
    : pathname;
  let cleanPath = relativePath.replace(/^\/+|\/+$/g, '').toLowerCase();

  // Aliases
  if (cleanPath === 'about-us') cleanPath = 'about';
  if (cleanPath === 'contact-us') cleanPath = 'contact';
  if (cleanPath === 'case-studies') cleanPath = 'our-work';

  if (!cleanPath || cleanPath === 'home') {
    // 2. Query param fallback (?page=about, etc.)
    const params = new URLSearchParams(window.location.search);
    const queryPage = (params.get('page') || '').toLowerCase();
    if (queryPage && queryPage !== 'home') {
      let cleanQueryPage = queryPage;
      if (cleanQueryPage === 'about-us') cleanQueryPage = 'about';
      if (cleanQueryPage === 'contact-us') cleanQueryPage = 'contact';
      if (cleanQueryPage === 'case-studies') cleanQueryPage = 'our-work';

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
  const [previousPage, setPreviousPage] = useState(null);
  const historyStackRef = useRef([resolvePageFromLocation()]);

  // Seed history state on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initial = resolvePageFromLocation();
      if (!window.history.state || !window.history.state.page) {
        try {
          const initialPath = toPagePath(initial);
          window.history.replaceState({ page: initial, isInitial: true }, '', initialPath);
        } catch (e) {
          // Graceful fallback
        }
      }
    }
  }, []);

  // Scroll position to restore after a back/forward navigation (null = go to top)
  const pendingScrollRef = useRef(null);
  // Target WhatWeDo card id to scroll to when returning to home page
  const pendingCardScrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const target = pendingScrollRef.current;
    pendingScrollRef.current = null;

    // If returning to a WhatWeDo card on the home page, let the card scroll effect handle it
    const hasCardTarget = page === 'home' && (
      pendingCardScrollRef.current ||
      (typeof window !== 'undefined' && sessionStorage.getItem('lastWwdCardId'))
    );

    if (typeof target !== 'number' || target <= 0) {
      if (!hasCardTarget) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      return;
    }

    // Re-apply the saved position for a short window while images/sections
    // finish laying out, but stop as soon as the user scrolls themselves.
    let cancelled = false;
    let rafId = 0;
    const start = performance.now();
    const stop = () => { cancelled = true; };
    const userEvents = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    userEvents.forEach((ev) => window.addEventListener(ev, stop, { passive: true, once: true }));

    const restore = () => {
      if (cancelled) return;
      window.scrollTo({ top: target, left: 0, behavior: 'instant' });
      if (performance.now() - start < 1200) {
        rafId = requestAnimationFrame(restore);
      }
    };
    restore();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      userEvents.forEach((ev) => window.removeEventListener(ev, stop));
    };
  }, [page]);

  // Scroll to exact WhatWeDo card when returning to home page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (page !== 'home') return;

    let targetCardId = pendingCardScrollRef.current;
    if (!targetCardId) {
      try {
        targetCardId = sessionStorage.getItem('lastWwdCardId');
      } catch (e) {}
    }
    if (!targetCardId) return;

    pendingCardScrollRef.current = null;

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 35;
    let secondCheckTimer = null;

    const stop = () => {
      cancelled = true;
    };
    const userEvents = ['wheel', 'touchstart', 'mousedown'];
    userEvents.forEach((ev) => window.addEventListener(ev, stop, { passive: true, once: true }));

    const findCardElement = () => {
      return (
        document.getElementById(targetCardId) ||
        document.querySelector(`[data-service-id="${targetCardId}"]`) ||
        document.querySelector(`[data-service-slug="${targetCardId}"]`) ||
        document.getElementById(`wwd-card-${targetCardId}`) ||
        document.querySelector(`[id*="${targetCardId}"]`)
      );
    };

    const performScroll = () => {
      if (cancelled) return;
      const el = findCardElement();
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbarOffset = window.innerWidth >= 1024 ? 90 : 80;
        const targetY = Math.max(0, rect.top + scrollTop - navbarOffset);

        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });

        try {
          sessionStorage.removeItem('lastWwdCardId');
          sessionStorage.removeItem('lastWwdSlug');
        } catch (e) {}

        // Second pass after images may have settled
        secondCheckTimer = setTimeout(() => {
          if (cancelled) return;
          const reEl = findCardElement();
          if (reEl) {
            const reRect = reEl.getBoundingClientRect();
            if (Math.abs(reRect.top - navbarOffset) > 20) {
              const reScrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const reTargetY = Math.max(0, reRect.top + reScrollTop - navbarOffset);
              window.scrollTo({ top: reTargetY, behavior: 'smooth' });
            }
          }
        }, 350);
      } else if (attempts < maxAttempts) {
        attempts++;
        requestAnimationFrame(performScroll);
      }
    };

    const mountTimer = setTimeout(() => {
      requestAnimationFrame(performScroll);
    }, 50);

    return () => {
      cancelled = true;
      clearTimeout(mountTimer);
      if (secondCheckTimer) clearTimeout(secondCheckTimer);
      userEvents.forEach((ev) => window.removeEventListener(ev, stop));
    };
  }, [page]);

  useEffect(() => {
    const handlePopState = (event) => {
      const savedY = event && event.state && event.state.scrollY;
      const targetCardId =
        (event && event.state && event.state.wwdCardId) ||
        (typeof window !== 'undefined' ? sessionStorage.getItem('lastWwdCardId') : null);

      if (targetCardId) {
        pendingCardScrollRef.current = targetCardId;
      } else {
        pendingScrollRef.current = typeof savedY === 'number' ? savedY : null;
      }
      const newPage = resolvePageFromLocation();
      setPreviousPage(page);

      if (
        historyStackRef.current.length > 1 &&
        historyStackRef.current[historyStackRef.current.length - 2] === newPage
      ) {
        historyStackRef.current.pop();
      } else {
        historyStackRef.current.push(newPage);
      }

      setPage(newPage);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [page]);

  const handleNavigate = (newPage, options = {}) => {
    const target = newPage || 'home';
    if (target === page) return;

    if (options && options.fromWwdCard) {
      if (typeof window !== 'undefined') {
        try {
          window.history.replaceState(
            {
              ...(window.history.state || {}),
              page,
              scrollY: window.scrollY,
              wwdCardId: options.fromWwdCard,
            },
            '',
            window.location.href
          );
        } catch (e) {}
      }
    }

    if (options && options.returnToWwdCard) {
      pendingCardScrollRef.current = options.returnToWwdCard;
    }

    if (options && options.replace) {
      if (historyStackRef.current.length > 0) {
        historyStackRef.current[historyStackRef.current.length - 1] = target;
      } else {
        historyStackRef.current = [target];
      }
      preloadHeroForPage(target);
      setPage(target);

      if (typeof window !== 'undefined') {
        try {
          const targetPath = toPagePath(target);
          window.history.replaceState(
            { ...(window.history.state || {}), page: target },
            '',
            targetPath
          );
        } catch (e) {
          // Fallback gracefully
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      return;
    }

    // Remember where the user was on the current page so Back can return there
    if (typeof window !== 'undefined') {
      try {
        window.history.replaceState(
          { ...(window.history.state || {}), page, scrollY: window.scrollY },
          '',
          window.location.href
        );
      } catch (e) {
        // Graceful fallback
      }
    }
    pendingScrollRef.current = null;

    setPreviousPage(page);
    historyStackRef.current.push(target);
    preloadHeroForPage(target);
    setPage(target);

    if (typeof window !== 'undefined') {
      try {
        const targetPath = toPagePath(target);
        if (window.location.pathname !== targetPath || window.location.search) {
          window.history.pushState({ page: target, from: page }, '', targetPath);
        }
      } catch (e) {
        // Fallback gracefully
      }
      if (!options || !options.returnToWwdCard) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }
  };

  const handleBack = (fallback = 'home', options = {}) => {
    if (typeof window !== 'undefined') {
      const targetCardId =
        (options && options.returnToWwdCard) ||
        sessionStorage.getItem('lastWwdCardId') ||
        (window.history.state && window.history.state.wwdCardId);

      if (targetCardId) {
        pendingCardScrollRef.current = targetCardId;
      }

      const hasHistoryStack = historyStackRef.current.length > 1;
      const hasHistoryStateFrom = !!(window.history.state && window.history.state.from);
      const isNotInitialState = !!(window.history.state && !window.history.state.isInitial);

      if ((hasHistoryStack || hasHistoryStateFrom || isNotInitialState) && window.history.length > 1) {
        window.history.back();
        return;
      }

      if (previousPage) {
        handleNavigate(previousPage, options);
        return;
      }

      if (window.history.state && window.history.state.from) {
        handleNavigate(window.history.state.from, options);
        return;
      }
    }
    handleNavigate(fallback || 'home', options);
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
      if (href === '/' || href === BASE_PATH || (BASE_PREFIX && href === BASE_PREFIX)) {
        route = 'home';
      } else if (BASE_PREFIX && href.startsWith(BASE_PREFIX + '/')) {
        route = href.slice(BASE_PREFIX.length).replace(/^\/+/, '') || 'home';
      } else if (href.startsWith('/')) {
        // Existing root-relative internal links (e.g. /about) remain supported.
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
    onBack: handleBack,
    previousPage,
    activeDropdown,
    setActiveDropdown,
    currentPage: page,
  };

  return (
    <div className="bg-white dark:bg-[#0B0D0C] font-grift text-slate-900 dark:text-[#F3F4F6] relative min-h-screen overflow-x-hidden transition-colors duration-300">
      {page === 'services' && <ServicesPage {...sharedNavProps} />}

      {page === 'about' && <AboutPage {...sharedNavProps} />}

      {page === 'contact' && <ContactPage {...sharedNavProps} />}

      {page === 'our-work' && <OurWorkPage {...sharedNavProps} />}

      {page === 'work' && (
        <ServiceDetailPage
          key="work"
          slug={OUR_WORK_SERVICE_SLUG}
          isOurWorkPage
          {...sharedNavProps}
        />
      )}

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
          <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onNavigate={handleNavigate} currentPage={page} />
          {/* Hero */}
          <div className={`bg-white dark:bg-[#0B0D0C] transition-all duration-300 ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''}`}>
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
