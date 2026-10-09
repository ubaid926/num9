import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/argoLogo.jpg';

const caseStudy = {
  name: 'Argo',
  logo,
  logoClass: 'h-10 sm:h-12 w-auto',
  heroImg: null,
  category: 'Software & Technology',
  tagline: 'Argo Custom Software Solutions.',
  overview: 'Custom software solutions delivering scalable digital products and enterprise level innovation.',
  challenge: 'Argo needed a technology partner to design and develop custom software solutions that could scale with their business and support complex enterprise workflows.',
  solution: 'We partnered with Argo to architect, design, and build a suite of scalable digital products — from customer-facing interfaces to internal enterprise tools — using modern development practices.',
  results: [
    { stat: '6mo', label: 'Time to market for core product' },
    { stat: '99.9%', label: 'Platform uptime SLA' },
    { stat: '4×', label: 'Scalability improvement' },
  ],
};

export default function ArgoCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
