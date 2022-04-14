import * as React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import InvestmentsData from '../../fakeData/investmentsData.json';
import MemberInvestmentItem from './memberInvestmentItem.tsx';


interface IProps {
    currentMember:IMember;
}


export default function MemberInvestmentsList(props:IProps) {

    const InvestmentsArray = []

    InvestmentsData.investments.forEach((investment) => {
        props.currentMember.memberInvestments.forEach((item:any) => {
            const memberID =  item.investmentsId
            const result = memberID.toString().includes(investment.id.toString())
            if(result){
                InvestmentsArray.push(investment)
            }
        })
    })

    return (
      <Box
        sx={{
            marginTop:'7%'
        }}>  
          <Container maxWidth='lg'>
            <Grid container>
                <Grid item xs={12}
                    sx={{
                        borderBottom:'2px solid #424347',
                        paddingBottom:'3%'
                    }}>
                    <Typography variant='inherit' component='h2' 
                        sx={{
                            fontWeight: 700,
                            fontSize:{xs:'28px',sm:'34px'},
                            lineHeight: 1.1,
                            color:'#424347',
                        }}>
                            Investments
                    </Typography>
                </Grid>
            </Grid>
            {InvestmentsArray.map((investment, index) => (
                <MemberInvestmentItem key={index} investment={investment}/>
            ))}
          </Container>
      </Box>
    );
  }

