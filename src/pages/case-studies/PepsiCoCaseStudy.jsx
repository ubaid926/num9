import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/pepsicoLogo.png';

const caseStudy = {
  name: 'PepsiCo',
  logo,
  logoClass: 'h-12 sm:h-14 w-auto',
  heroImg: null,
  category: 'Consumer Goods',
  tagline: 'PepsiCo Retail & Consumer Engagement.',
  overview: 'Retail and consumer engagement solutions powered by data driven digital technologies.',
  challenge: 'PepsiCo required a unified digital platform to connect retail activations, shopper marketing campaigns, and brand experience initiatives across North America.',
  solution: 'We built an integrated campaign platform combining digital strategy, brand activation frameworks, and data-driven targeting to drive measurable consumer engagement at scale.',
  results: [
    { stat: '2.4×', label: 'Increase in campaign reach' },
    { stat: '31%', label: 'Lift in retail engagement' },
    { stat: '60+', label: 'Markets activated' },
  ],
};

export default function PepsiCoCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
