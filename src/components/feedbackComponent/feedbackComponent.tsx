import { Grid } from '@mui/material';
import * as React from 'react';
import FeedbackCarousel from '../feedbackCarousel/feedbackCarousel.tsx';


export default function FeedbackComponent() {

  return (
    <Grid container position='relative'>
     <Grid item xs={12}>
        <FeedbackCarousel/>
      </Grid>  
    </Grid>
    
  );
}

