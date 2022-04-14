import * as React from 'react';
import { Typography, Container, Grid, Card, Divider, CardContent } from '@mui/material';
import CaseStudyHightlightItem from './caseStudyHightlightItem.tsx';


interface IProps {
    currentCaseStudy:ICaseStudy;
}


export default function CaseStudyHighlights(props:IProps) {

    return (
        <Container maxWidth='lg' sx={{
            marginTop:'5%',
            marginBottom:'5%',
            display:'flex',
            alignItems:'center',
          }}>
            <Grid container columnSpacing={5}>
              <Grid item sm={7} md={4} lg={3}> 
                <Card
                    sx={{
                      borderRadius:0,
                      marginTop:{xs:'0',sm:'10%', md:'0'},
                      boxShadow:0
                    }}>          
                    <CardContent sx={{
                        padding:0,
                        paddingBottom:{xs:'0',sm:'24px'}
                    }}>
                    <Divider sx={{
                      height:'2px',
                      backgroundColor:'#424347',
                      display:{xs:"none", sm:"block"},
                      marginBottom:'7%'
                    }} />
                      <Typography 
                        component='h2' 
                        variant='inherit' 
                        sx={{
                          fontWeight: 700,
                          fontSize:{xs:'28px',sm:'36px'},
                          lineHeight: 1.1,
                          color:'#424347',
                        }}>
                        Hightlights
                      </Typography>
                    </CardContent>
                </Card>
              </Grid>
              <Grid container  item xs={12} md={8} lg={9}>
                {props.currentCaseStudy.highLights.map((hightlight:any, index:number) => (
                    <CaseStudyHightlightItem key={index} hightlight={hightlight}/>
                ))}
              </Grid>
            </Grid>
          </Container>
    );
  }

