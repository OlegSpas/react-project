import * as React from 'react';
import { useLocation } from 'react-router-dom';
import HeroCaseStudy from '../heroCaseStudy/heroCaseStudy.tsx';
import CaseStudyData from '../../fakeData/caseStudiesData.json';
import CaseStudyFeedback from '../caseStudyFeedback/caseStudyFeedback.tsx';
import CaseStudyInvestmentsList from '../caseStudyInvestmentList/caseStudyInvestmentList.tsx';
import CaseStudyHighlights from '../caseStudyHighlights/caseStudyHighlights.tsx';
import CaseStudyMembersList from '../caseStudyMembersList/caseStudyMembersList.tsx';


export default function CaseStudyPage() {

    const location = useLocation()
    const url = location.pathname;
    const splitURL = url.split('/')
    const caseStudyID = splitURL[2];
    const currentCaseStudy = CaseStudyData.caseStudies[caseStudyID]

    return (
      <>
        <HeroCaseStudy currentCaseStudy={currentCaseStudy}/>
        <CaseStudyFeedback currentCaseStudy={currentCaseStudy}/>
        <CaseStudyHighlights currentCaseStudy={currentCaseStudy}/>
        <CaseStudyMembersList currentCaseStudy={currentCaseStudy}/>
        <CaseStudyInvestmentsList currentCaseStudy={currentCaseStudy}/>
      </>
    );
  }

