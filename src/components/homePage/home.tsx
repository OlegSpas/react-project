import * as React from 'react';
import HeroHome from '../heroHome/heroHome.tsx';
import HomeHighLightComponent from '../highlightsComponent/homeHightLightComponent.tsx';
import Facts from '../facts/facts.tsx';
import FeedbackComponent from '../feedbackComponent/feedbackComponent.tsx';
import MeetTeamSection from '../meetTeamComponent/meetTeamComponent.tsx';
import NewsList from '../newsList/newsList.tsx';

export default function Home() {
  return (
    <>
        <HeroHome/>   
        <HomeHighLightComponent/>
        <FeedbackComponent/>
        <Facts/>
        <MeetTeamSection/>
        <NewsList/>
    </>
    
  );
}

