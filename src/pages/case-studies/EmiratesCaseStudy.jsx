import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/emiratesLogo.png';
import heroImg from '../../assets/workEmirates.webp';

const caseStudy = {
  name: 'Emirates',
  logo,
  logoClass: 'h-12 sm:h-14 w-auto',
  heroImg,
  category: 'Travel & Hospitality',
  tagline: 'Emirates Digital Experience Platform.',
  overview: 'Aviation digital systems and customer experience solutions supporting global travel innovation.',
  challenge: 'Emirates needed to elevate its digital customer experience across global touchpoints — from booking and loyalty to in-flight entertainment and post-journey engagement.',
  solution: 'We delivered a comprehensive digital experience platform strategy and execution — designing intuitive interfaces, building scalable web systems, and integrating data pipelines to personalise the customer journey.',
  results: [
    { stat: '33%', label: 'Increase in digital bookings' },
    { stat: '4.9★', label: 'Customer satisfaction score' },
    { stat: '12M+', label: 'Customers reached globally' },
  ],
};

export default function EmiratesCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
