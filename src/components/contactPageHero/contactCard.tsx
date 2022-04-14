import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface IProps{
    card:{
        title: string;
        phoneNumber: string;
        details: {
            detail: string;
        }[];
    }
}

export default function ContactCard(props:IProps) {
  return (
    <Box sx={{
        width:{xs:'100%',sm:'50%',md:'20%',lg:'15%'},
        marginTop:{xs:'15%',sm:'5%',lg:0}
    }}>
       <Typography component='h3' variant='inherit' 
        sx={{
            color:'#424347',
            fontSize:'16px',
            marginBottom:'5%'
        }}>
           {props.card.title}
       </Typography >
       {props.card.details.map((card, index) => {
            return(
                <Typography key={index} component='p' variant='inherit'
                    sx={{
                        color:'#424347',
                        fontSize:"15px",
                        lineHeight:'22px'
                    }}>
                    {card.detail}
                </Typography>
                )
            })}
       <Typography component='p' 
        variant='inherit'
        onClick={() => {
            window.location.href = `tel:${props.card.phoneNumber}`;
        }}
        sx={{
            width:'max-content',
            borderBottom:'1px solid #619fc0',
            transition: 'border 200ms ease',
            borderRadius:0,
            color:'#424347',
            textTransform:'none',
            fontSize:'15px',
            padding:'0',
            marginTop:'3%',
            '&:hover':{
            borderBottom:'1px solid transparent',
            backgroundColor:'transparent'
          } 
        }}>
           {props.card.phoneNumber}
       </Typography>
    </Box>
  );
}

