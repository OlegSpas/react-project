import * as React from 'react';
import { useLocation } from 'react-router-dom';
import MemberData from '../../fakeData/teamMembers.json';
import HeroTeamMemberPage from '../heroTeamMemberPage/heroTeamMemberPage.tsx';
import MemberBiography from '../memberBiography/memberBiography.tsx';
import MemberInvestmentsList from '../memberInvestmentsList/memberInvestmentsList.tsx';


interface IProps {
  match: {params:{id:number}};
}

interface IState{
    memberData?:IMember;
}


export default function TeamMemberPage(props:IProps, state:IState) {

    const location = useLocation()
    const url = location.pathname;
    const splitURL = url.split('/')
    const membersID = splitURL[2];
    const currentMember  = MemberData.teamMembers[membersID]

    return (
      <>
        <HeroTeamMemberPage currentMember={currentMember}/>
        <MemberBiography currentMember={currentMember}/>
        <MemberInvestmentsList currentMember={currentMember}/>
      </>
    );
  }

