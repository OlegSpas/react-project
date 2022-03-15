import * as React from 'react';
import { Grid, Container, Divider, Typography,Card, CardContent, } from '@mui/material';
import HighlightData from '../../fakeData/hightlightData.json';
import HightlightItem from './highlightItem.tsx';

interface IProps{
  hightlightsLength:number;
}

export default function Hightlights(props:IProps) {

  return (
    <Container maxWidth='xl' sx={{
      marginTop:'5%',
      marginBottom:'5%',
      display:'flex',
      alignItems:'center',
      height:{md:'400px',lg:'250px'},
      padding:{xs:'0 2%', sm:'0% 2%', md:'35% 2%', lg:'17% 0'}
    }}>
      <Grid container spacing={4}>
        <Grid item sm={7}md={3}> 
          <Card
              sx={{
                borderRadius:0,
                marginTop:{xs:'0',sm:'10%', md:'0'},
                paddingBottom:{xs:'0',sm:'24px'},
                boxShadow:0
              }}>          
              <CardContent sx={{
                  padding:0,
                  paddingBottom:{xs:'0',sm:'24px'}
              }}>
              <Divider sx={{
                height:'3px',
                backgroundColor:'#424347',
                display:{xs:"none", sm:"block"}
              }} />
                <Typography 
                  component='h2' 
                  variant='inherit' 
                  sx={{
                    fontWeight: 700,
                    fontSize:{xs:'28px',sm:'36px'},
                    lineHeight: 1.1,
                    color:'#424347',
                    height:{xs:'40px',sm:'80px',md:'120px'},
                    display:'flex',
                    alignItems:'center'
                  }}>
                  Business Strategy
                </Typography>
              </CardContent>
          </Card>
        </Grid>
        <Grid container  item xs={12} md={9}>
        {HighlightData.hightlights.slice(0,props.hightlightsLength).map((item, index) => (
          <HightlightItem key={index} {...item}/>
        ))}
        </Grid>
      </Grid>
    </Container>
    
  );
}

