import React from 'react';
import CaseStudyPage from '../CaseStudyPage';
import logo from '../../assets/mediImpactLogo.jpg';

const caseStudy = {
  name: 'MedImpact',
  logo,
  logoClass: 'h-12 sm:h-14 w-auto',
  heroImg: null,
  category: 'Healthcare Technology',
  tagline: 'MedImpact Healthcare Digital Transformation.',
  overview: 'Healthcare technology solutions enabling secure, scalable digital health transformation and analytics.',
  challenge: 'MedImpact required a trusted digital partner to modernize patient-facing systems and internal analytics platforms while meeting strict healthcare compliance and data security standards.',
  solution: 'We delivered secure, HIPAA-compliant digital solutions including patient portal redesigns, analytics dashboards, and workflow automation tools that improved care delivery and operational visibility.',
  results: [
    { stat: '50%', label: 'Faster claims processing' },
    { stat: '92%', label: 'Patient portal adoption' },
    { stat: '100%', label: 'HIPAA compliance maintained' },
  ],
};

export default function MedImpactCaseStudy(props) {
  return <CaseStudyPage caseStudy={caseStudy} {...props} />;
}
