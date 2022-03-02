import * as React from 'react';
import HeroFirmPage from '../heroFirmPage/heroFirmPage.tsx';
import FirmHighLightComponent from '../highlightsComponent/firmHightlightComponent.tsx';
import Facts from '../facts/facts.tsx';
import FeedbackComponent from '../feedbackComponent/feedbackComponent.tsx';
import Expertise from '../expertise/expertise.tsx';

export default function FirmPage() {
  return (
    <>
      <HeroFirmPage/>
      <FirmHighLightComponent/>
      <Facts/>
      <Expertise/>
      <FeedbackComponent/>
    </>
    
  );
}

