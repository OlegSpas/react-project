import * as React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

interface IProps{
    title:string;
    description:string;
}

export default function HightlightItem(props:IProps) {

  return (
    <Grid item xs={12} sm={6} lg={4}>
        <Card sx={{
            boxShadow:0
        }}>
            <CardContent sx={{
                 paddingTop:0,
                 padding:{xs:'0',sx:'16px'},
            }}>
                <Typography 
                    variant='inherit' 
                    component='h3'
                    sx={{
                        fontWeight:700,
                        fontSize:'24px',
                        lineHeight:'28px',
                        color:'#424347',
                        height:'50px',
                        width:'50%',
                        display:'flex',
                        alignItems:'flex-end'
                    }}>
                    {props.title}
                </Typography>
                <Typography  
                    component='p'
                    variant='inherit'
                    sx={{
                        fontSize:'16px',
                        lineHeight:'24px',
                        color:'#424347',
                        paddingTop:'3%'
                    }}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}

