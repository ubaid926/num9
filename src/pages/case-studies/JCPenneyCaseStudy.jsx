import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/jcpenneyLogo.png';

const caseStudy = {
  name: 'JCPenney',
  logo,
  logoClass: 'h-9 sm:h-11 w-auto',
  heroImg: null,
  category: 'Retail',
  tagline: 'JCPenney Retail Digital Commerce.',
  overview: 'Retail technology and digital commerce solutions enhancing customer engagement and operational efficiency.',
  challenge: 'JCPenney needed to evolve its digital commerce experience to match changing shopper expectations — improving the online-to-offline journey and increasing digital revenue.',
  solution: 'We redesigned and re-platformed key e-commerce experiences, integrated loyalty programme touchpoints, and built campaign tooling that connected in-store and digital retail activations.',
  results: [
    { stat: '27%', label: 'Increase in online conversion' },
    { stat: '40%', label: 'Growth in digital revenue' },
    { stat: '1.8×', label: 'Loyalty programme engagement' },
  ],
};

export default function JCPenneyCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
