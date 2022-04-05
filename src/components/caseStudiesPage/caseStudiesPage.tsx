import * as React from 'react';
import CaseStudiesList from '../caseStudiesList/caseStudiesList.tsx';
import HeroCaseStudies from '../heroCaseStudies/heroCaseStudies.tsx';

export default function CaseStudiesPage() {
  return (
    <>
        <HeroCaseStudies/>   
        <CaseStudiesList/>
    </>
    
  );
}

