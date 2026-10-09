import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/lexusLogo.png';
import heroImg from '../../assets/lexus/lexusHeroImg.webp';
import LexusHeroSection from '../../components/LexusHeroSection';
import LexusCaseStudySections from './LexusCaseStudySections';
import LexusStorySections from '../../components/lexusStorySections';

const caseStudy = {
  name: 'Lexus',
  logo,
  logoClass: 'h-9 sm:h-11 w-auto',
  heroImg,
  category: 'Automotive',
  tagline: 'Digital Experience Redefined.',
  overview: 'Premium digital experiences and interactive platforms enhancing automotive customer journeys globally.',
  challenge: 'Lexus needed to bring its luxury vehicle lineup to life digitally — creating immersive product exploration experiences that matched the quality of the in-showroom experience.',
  solution: 'We built an interactive 3D configurator and immersive digital platform enabling customers to explore, customize, and connect with Lexus vehicles — from color and trim to performance specs.',
  results: [
    { stat: '55%', label: 'Increase in configurator engagement' },
    { stat: '3min+', label: 'Average session duration' },
    { stat: '18%', label: 'Lift in lead conversion' },
  ],
  renderHero: ({ onNavigate }) => <LexusHeroSection onNavigate={onNavigate} />,
  renderAfterHero: () => (
    <>
      <LexusCaseStudySections />
      <LexusStorySections />
    </>
  ),
};

export default function LexusCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
