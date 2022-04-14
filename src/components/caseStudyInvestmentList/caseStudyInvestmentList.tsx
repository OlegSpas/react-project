import * as React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import InvestmentsData from '../../fakeData/investmentsData.json';
import CaseStudyInvestmentItem from './caseStudyInvestmentItem.tsx';


interface IProps {
    currentCaseStudy:ICaseStudy;
}


export default function CaseStudyInvestmentsList(props:IProps) {

    const InvestmentsArray = []

    InvestmentsData.investments.forEach((investment) => {
        props.currentCaseStudy.caseInvestments.forEach((item:any) => {
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
                marginTop:{xs:'15%',sm:'7%'}
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
                            Similar Investments
                    </Typography>
                </Grid>
            </Grid>
            {InvestmentsArray.map((investment, index) => (
                <CaseStudyInvestmentItem key={index} investment={investment}/>
            ))}
          </Container>
      </Box>
    );
  }

