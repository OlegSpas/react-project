import * as React from 'react';
import { Grid, Divider, Box, Typography } from '@mui/material';
import ExpertiseTextBlock from './expertiseTextBlock.tsx';
 
interface IProps{
    expertise:IExpertise
}


export default function ExpertiseItem(props:IProps) {
    const currentDetails  = props.expertise.details;

  return (
    <Grid container sx={{
        marginBottom:'7%'
        }}>
        <Grid item md={3}>
            <Box sx={{
                width:'80%'
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
                    {props.expertise.title}
                </Typography>
            </Box>
        </Grid>
        <Grid item container md={9}  sx={{
            marginTop:{xs:'20%',sm:'7%',md:0}
        }}>
            {currentDetails.map((expertise:any, index:number) => (
                <ExpertiseTextBlock key={index} expertise={expertise}/>
                ))}
        </Grid>
    </Grid>
    
  );
}
