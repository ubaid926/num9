import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/microsoftLogo.png';
import heroImg from '../../assets/workLaptop.webp';

const caseStudy = {
  name: 'Microsoft',
  logo,
  logoClass: 'h-10 sm:h-12 w-auto',
  heroImg,
  category: 'Enterprise Technology',
  tagline: 'Microsoft Enterprise Solutions.',
  overview: 'Enterprise AI and cloud solutions enabling scalable digital transformation and innovation.',
  challenge: 'Microsoft needed a partner to help enterprise teams adopt modern cloud platforms, streamline internal tooling, and build scalable digital experiences that could serve global business units.',
  solution: 'We delivered a full-service digital transformation engagement — from UX strategy and interface design to web application development and analytics integration — enabling Microsoft teams to ship faster and serve users better.',
  results: [
    { stat: '40%', label: 'Reduction in deployment time' },
    { stat: '3×', label: 'Increase in team productivity' },
    { stat: '98%', label: 'User satisfaction score' },
  ],
};

export default function MicrosoftCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
