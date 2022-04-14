import * as React from 'react';
import { Typography, Box, Container, Grid,Divider } from '@mui/material';
import MembersData from '../../fakeData/teamMembers.json';
import CaseStudyMemberCard from './caseStudyMemberCard.tsx';


interface IProps {
    currentCaseStudy:ICaseStudy;
}


export default function CaseStudyMembersList(props:IProps) {

    const MembersArray = []

    MembersData.teamMembers.forEach((member) => {
        props.currentCaseStudy.caseMembers.forEach((item:any) => {
            const memberID =  item.memberId
            const result = memberID.toString().includes(member.id.toString())
            if(result){
                MembersArray.push(member)
            }
        })
    })

    return (
        <Box>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} sm={7} md={4} lg={3}>
                        <Divider sx={{
                            height:'2px',
                            backgroundColor:'#424347',
                            display:{xs:"none", sm:"block"},
                            marginBottom:'7%'
                        }} />
                        <Typography component='h2' variant='inherit'
                            sx={{
                                fontWeight: 700,
                                fontSize:{xs:'28px',sm:'36px'},
                                lineHeight: 1.1,
                                color:'#424347',
                                width:'80%',
                                marginBottom:{xs:'15%',sm:0}
                            }}>
                                Crestview Team
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}
                        sx={{
                            marginTop:{sm:'5%',lg:'0'}
                        }}>
                        {MembersArray && MembersArray.map((member:any, index:number) => (
                            <CaseStudyMemberCard key={index} member={member}/>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
  }

