import { Grid, Typography } from '@mui/material';
import * as React from 'react';

interface IProps{
    terms:{
        title:string;
        details:{
            detail:string;
        }[];
    }
}

export default function TermsItem(props:IProps) {
  return (
    <Grid item lg={11}>
        <Typography component='h3' variant='inherit'
            sx={{
                fontSize:{xs:'22px',sm:'22px'},
                fontWeight:"700",
                color:'#424347',
        }}>
            {props.terms.title}
        </Typography>
        {props.terms.details.map((detail, index) => (
           <Typography key={index} variant='inherit' component='p'
                sx={{
                    fontSize:{xs:'14px',sm:'16px'},
                    lineHeight:{xs:'20px',sm:'18px'},
                    color:'#424347',
                    marginBottom:'3%'
                }}>
               {detail.detail}
           </Typography>

        ))}
    </Grid>
  );
}

