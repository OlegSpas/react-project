import { Box, Container, Grid } from '@mui/material';
import CaseStudiesData from '../../fakeData/caseStudiesData.json';
import CaseStudiesItem from './caseStudiesItem.tsx';
import * as React from 'react';

export default function CaseStudiesList() {
  return (
      <Box sx={{
          marginTop:'7%'
      }}>
          <Container maxWidth='lg'>
              <Grid container>
                <Grid item container>
                {CaseStudiesData.caseStudies.map((item, index) => {
                    return(
                        <CaseStudiesItem key={index} item={item}/>
                    )
                  })}
                </Grid>
              </Grid>
          </Container>
      </Box>    
  );
}

