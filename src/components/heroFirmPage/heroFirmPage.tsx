import * as React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import  FirmPageCarousel from '../firmPageCarousel/firmPageCarousel.tsx';

const useStyles = makeStyles({
    heroTypography:{
        fontWeight: 700,
        fontSize: '34px',
        color: '#FFF',
        lineHeight: 1.1,
        zIndex:3,
        bottom:'15%',
        left:"12.4%"
    }
});


export default function HeroFirmPage() {
  const classes = useStyles();
  return (
    <Grid container position='relative'>
      <Grid item xs={12}>
        <FirmPageCarousel/>
      </Grid>  
    </Grid>
    
  );
}

