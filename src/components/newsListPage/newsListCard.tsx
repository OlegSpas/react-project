import * as React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface IProps{
    id:number;
    title: string;
    description:  string;
    date: Date;
    link: string;
}

export default function NewsListCard(props:IProps) {



  return (
      <Grid item container xs={12} sx={{
          borderTop:'1px solid #DCDCDC',
          padding:{xs:'20% 0',sm:'10% 0'},
          '&:last-of-type':{
            borderBottom:'1px solid #DCDCDC',
          }
      }}>
          <Grid item xs={12} lg={3}
            sx={{
                marginBottom:{xs:'5%',sm:'2%',md:'3%', lg:0}
            }}>
              <Typography  component='p' variant='inherit' sx={{
                  fontSize:{xs:'14px',sm:'14px',md:'16px',lg:'18px'},
                  fontWeight:'700',
                  color:'#424347'
              }}>
                {props.date}
              </Typography>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component='h3'  variant='inherit' sx={{
                fontSize:{xs:'22px',sm:'22px',md:'22px',lg:'26px'},
                fontWeight:700,
                color:'#424347',
                lineHeight:{md:'24px',lg:'28px'},
                marginBottom:'3%'
            }}>
                {props.title}
            </Typography>
            <Typography component='p' variant='inherit' sx={{
                fontSize:{xs:'16px',sm:'16px',lg:'18px'},
                lineHeight:{xs:'20px',lg:'22px'},
                color:'#424347'
            }}>
                {props.description}
            </Typography>
            <Link to={{pathname:`/${props.link}`}}>
                <Button 
                    sx={{
                    borderBottom:'1px solid #619fc0',
                    transition: 'border 200ms ease',
                    borderRadius:0,
                    color:'#424347',
                    textTransform:'none',
                    fontWeight:'700',
                    fontSize:'15px',
                    padding:'0',
                    marginTop:'3%',
                    '&:hover':{
                        borderBottom:'1px solid transparent',
                        backgroundColor:'transparent'
                    }   
                    }}>
                    Read More
                </Button>
            </Link>
          </Grid>
      </Grid>
  );
}