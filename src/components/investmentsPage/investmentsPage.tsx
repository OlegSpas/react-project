import * as React from 'react';
import HeroInvestmentsPage from '../heroInvestmentsPage/heroInvestmentsPage.tsx';
import InvestmentsList from '../investmentsList/investmentsList.tsx';
import FeedbackComponent from '../feedbackComponent/feedbackComponent.tsx';


export default function InvestmentsPage() {
  return (
    <>
      <HeroInvestmentsPage/>
      <InvestmentsList/>
      <FeedbackComponent/>
    </>
    
  );
}

