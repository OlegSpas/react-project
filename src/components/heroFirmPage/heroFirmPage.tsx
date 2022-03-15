import * as React from 'react';
import { Grid } from '@mui/material';
import  FirmPageCarousel from '../firmPageCarousel/firmPageCarousel.tsx';

export default function HeroFirmPage() {
  return (
    <Grid container position='relative'>
      <Grid item xs={12}>
        <FirmPageCarousel/>
      </Grid>  
    </Grid>
    
  );
}

