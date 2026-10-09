import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/citibankLogo.png';

const caseStudy = {
  name: 'Citibank',
  logo,
  logoClass: 'h-8 sm:h-10 w-auto',
  heroImg: null,
  category: 'Financial Services',
  tagline: 'Citibank Digital Banking Transformation.',
  overview: 'Secure financial technology solutions enabling digital banking transformation and customer trust.',
  challenge: 'Citibank sought to modernize customer-facing digital experiences while maintaining the highest standards of security, accessibility, and regulatory compliance.',
  solution: 'We delivered UX strategy, interface design, and frontend engineering for key customer banking journeys — improving usability, reducing drop-off, and strengthening brand trust.',
  results: [
    { stat: '22%', label: 'Increase in digital adoption' },
    { stat: '4.8★', label: 'Average app store rating' },
    { stat: '35%', label: 'Drop in support tickets' },
  ],
};

export default function CitibankCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
