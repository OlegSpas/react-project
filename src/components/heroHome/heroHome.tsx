import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import  HomeCarousel from '../HomeCarousel/homeCarousel.tsx';


export default function HeroHome() {
  return (
    <Grid container position='relative'>
      <Grid item xs={12}>
        <HomeCarousel/>
      </Grid>  
      <Grid item xs={12} 
        position='absolute' 
        sx={{
          fontWeight: 700,
          fontSize: {xs:'18px',sm:'34px'},
          color: '#FFF',
          lineHeight: 1.1,
          zIndex:3,
          bottom:{xs:'20%',sm:'15%'},
          left:{xs:'5%',sm:"12.4%", lg:'10%'}
      }}>
        <Typography component='h2' variant='inherit'>
            Solution-Oriented <br/>Partnerships
        </Typography>
      </Grid> 
    </Grid>
    
  );
}

