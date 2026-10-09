import { useState } from 'react'
import AppNav from './components/nav'
import HeroSectionFullWidth from './components/heroSection'
import CaseStudies from './components/caseStudies'
import FourthSection from './components/fourthSection'
import WhatWeDo from './components/whatWeDo'
import FifthSection from './components/fifthSection'
import WhyWorkWithUs from './components/contact'
import AccelerateBusinessSection from './components/AccelerateBusinessSection'
import Footer from './components/footer'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OurWorkPage from './pages/OurWorkPage'
import MicrosoftCaseStudy  from './pages/case-studies/MicrosoftCaseStudy'
import PepsiCoCaseStudy    from './pages/case-studies/PepsiCoCaseStudy'
import NutrienCaseStudy    from './pages/case-studies/NutrienCaseStudy'
import CitibankCaseStudy   from './pages/case-studies/CitibankCaseStudy'
import LexusCaseStudy      from './pages/case-studies/LexusCaseStudy'
import ArgoCaseStudy       from './pages/case-studies/ArgoCaseStudy'
import MedImpactCaseStudy  from './pages/case-studies/MedImpactCaseStudy'
import JCPenneyCaseStudy   from './pages/case-studies/JCPenneyCaseStudy'
import EmiratesCaseStudy   from './pages/case-studies/EmiratesCaseStudy'

export default function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [page, setPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlPage = params.get('page');
      if (urlPage) return urlPage;
      if (window.location.hash) return window.location.hash.replace('#', '');
    }
    return 'home';
  });

  const sharedNavProps = {
    onNavigate: setPage,
    activeDropdown,
    setActiveDropdown,
  };

  return (
    <div className="bg-white font-outfit text-slate-900 relative min-h-screen overflow-x-hidden">
      {page === 'services' && <ServicesPage {...sharedNavProps} />}

      {page === 'about' && <AboutPage {...sharedNavProps} />}

      {page === 'contact' && <ContactPage {...sharedNavProps} />}

      {page === 'our-work' && <OurWorkPage {...sharedNavProps} />}

      {page === 'case-study/microsoft'  && <MicrosoftCaseStudy  {...sharedNavProps} />}
      {page === 'case-study/pepsico'    && <PepsiCoCaseStudy    {...sharedNavProps} />}
      {page === 'case-study/nutrien'    && <NutrienCaseStudy    {...sharedNavProps} />}
      {page === 'case-study/citibank'   && <CitibankCaseStudy   {...sharedNavProps} />}
      {page === 'case-study/lexus'      && <LexusCaseStudy      {...sharedNavProps} />}
      {page === 'case-study/argo'       && <ArgoCaseStudy       {...sharedNavProps} />}
      {page === 'case-study/medimpact'  && <MedImpactCaseStudy  {...sharedNavProps} />}
      {page === 'case-study/jcpenney'   && <JCPenneyCaseStudy   {...sharedNavProps} />}
      {page === 'case-study/emirates'   && <EmiratesCaseStudy   {...sharedNavProps} />}

      {page === 'home' && (
        <>
          {/* Navbar */}
          <AppNav activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} onNavigate={setPage} />
          {/* Hero */}
          <div className={`bg-white transition-all duration-300 ${activeDropdown ? 'brightness-50 pointer-events-none blur-[1px]' : ''}`}>
            <HeroSectionFullWidth isDarkened={!!activeDropdown} />
          </div>
          {/* Case Studies */}
          <CaseStudies />
          {/* What We Do */}
          <WhatWeDo />
          {/* Fifth Section — testimonials + awards */}
          <FifthSection />
          <WhyWorkWithUs />
          <AccelerateBusinessSection />
          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
