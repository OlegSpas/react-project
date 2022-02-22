import { Container, Grid, Paper } from '@mui/material';
import * as React from 'react';
import FactsData from '../../fakeData/factData.json';
import FactItem from './factItem.tsx';

export default function Home() {
  return (
    <Paper sx={{
      backgroundColor:'#497e9c',
      height:{xs:'800px',sm:'400px'},
      display:'flex',
      alignItems:'center',
      borderRadius:0
    }} >
      <Container maxWidth='xl'>
        <Grid container>
          {FactsData.facts.map((item, i) => (
              <FactItem  key={i} {...item}/>
          ))}
        </Grid>
    </Container>
    </Paper>
    
  );
}

