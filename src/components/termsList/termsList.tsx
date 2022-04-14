import * as React from 'react';
import { Grid,Typography, Container } from '@mui/material';
import TermsData from '../../fakeData/terms.json';
import TermsItem from './termsItem.tsx';

export default function TermsList() {
  return (
      <Container maxWidth='xl'>
        <Grid container sx={{
        marginTop:'5%'
      }}>
          <Grid item md={4}>

          </Grid>
          <Grid item  container md={8}>
            <Grid item lg={11}
              sx={{
                paddingRight:'2.5%'
              }}>
              <Typography component='p' variant='inherit'
                sx={{
                  fontSize:{xs:'14px',sm:'16px'},
                  lineHeight:{xs:'20px',sm:'18px'},
                  color:'#424347',
                  marginBottom:'3%'
                }}>
                Thank you for visiting the website of Crestview Advisors, L.L.C. and its affiliates (collectively, “Crestview,” “we” or “us”). The following terms and conditions (collectively, these “Terms of Use”) govern your access to and use of www.crestview.com (the “Website”).
              </Typography>
            </Grid>
          {TermsData.terms.map((item, index) => (
              <TermsItem key={index} terms={item}/>
            ))}
          </Grid>
        </Grid>   
      </Container> 
  );
}

