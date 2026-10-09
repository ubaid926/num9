import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/nutrienLogo.png';

const caseStudy = {
  name: 'Nutrien',
  logo,
  logoClass: 'h-9 sm:h-11 w-auto',
  heroImg: null,
  category: 'Agriculture & Enterprise',
  tagline: 'Nutrien Digital Enterprise Solutions.',
  overview: 'Technology driven enterprise solutions improving operational efficiency and data based decision making.',
  challenge: 'Nutrien needed to modernize their enterprise digital infrastructure to improve operational visibility, enable data-driven decisions, and connect distributed teams across North America.',
  solution: 'We designed and built scalable enterprise dashboards, data visualization tools, and process automation workflows that improved decision-making speed and operational efficiency.',
  results: [
    { stat: '45%', label: 'Faster data reporting' },
    { stat: '200+', label: 'Internal users onboarded' },
    { stat: '28%', label: 'Reduction in operational overhead' },
  ],
};

export default function NutrienCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
