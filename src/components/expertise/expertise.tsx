import * as React from 'react';
import expertiseData from '../../fakeData/expertise.json';
import ExpertiseItem from './expertiseItem.tsx';
import { Container } from '@mui/material';


export default function Expertise() {
  return (
    <Container maxWidth='xl' sx={{
        paddingTop:{xs:'30%',sm:'7%'}
      }}>
        {expertiseData.cases.map((expertise:any, index:number) => (
          <ExpertiseItem key={index} expertise={expertise}/>
        ))}
    </Container>
  );
}

