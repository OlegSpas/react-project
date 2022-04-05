import { Box, Grid, Typography, Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';


interface IProps{
    item: {
        id: number;
        caseName: string;
        descriptopn: string;
        logo: string;
        path: string;
        industry: string;
        location: string;
        status: string;
        webSite: string;
        feedback: string;
        feedbackBG: string;
        feedbackIMG: string;
        feedbackPerson: string;
    }
}

export default function CaseStudiesItem(props:IProps) {
  return (
    <Grid item container lg={12}
        sx={{
            borderTop:'1px solid #DCDCDC',
            padding:'10% 0'
        }}>
        <Grid item>
            <Typography component='h4' variant='inherit' 
            sx={{
                fontWeight:400,
                fontSize:{sm:'16px',md:'16px',lg:'20px'},
                lineHeight:{sm:'18px',md:'18px',lg:'28px'},
                color:'#424347',
                display:{xs:'none',md:'block'}
            }}>
                {props.item.industry}
            </Typography>
            <Typography component='h3' variant='inherit'
            sx={{
                fontWeight: 700,
                fontSize:{xs:'28px',sm:'36px'},
                lineHeight: 1.1,
                color:'#424347',
            }}>
                {props.item.caseName}
            </Typography>
        </Grid>
        <Grid item container  columnSpacing={{
            md:0,
            lg:5
        }}
        sx={{
            marginTop:{xs:'5%',sm:'2%',md:'1%',lg:'3%',xl:'1%'},
            flexDirection:{lg:'row-reverse',xl:'row'}
        }}>
            <Grid item md={0} lg={3}></Grid>
            <Grid item md={7} lg={6} sx={{
            }}>
                <Typography component='p' variant='inherit'  
                sx={{
                    fontWeight:400,
                    fontSize:{sm:'14px',md:'16px',lg:'18px'},
                    lineHeight:{sm:'16px',md:'18px',lg:'24px'},
                    color:'#424347',
                }}> 
                    {props.item.descriptopn}
                </Typography>
                <Link to={{pathname:`/${props.item.path}`}}>
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
                    marginTop:{sm:'2%',md:'3%'},
                    display:{xs:'none',sm:'block'},
                    '&:hover':{
                        borderBottom:'1px solid transparent',
                        backgroundColor:'transparent'
                    }   
                    }}>
                    View case study
                </Button>
            </Link>
            </Grid>
            <Grid item md={5} lg={3}
            sx={{
                display:'flex',
                justifyContent:'flex-end',
                marginTop:{xs:'20%',sm:'10%',md:'0'},
            }}
            >
            <Box
                component='img' 
                src={props.item.logo}
                sx={{
                  marginLeft:{lg:'7%',xl:0},
                  maxHeight:'110px',
                  maxWidth:'220px',
                  objectFit:'scale-down'
                }}
              />
            </Grid>
            <Grid item xs={12} md={0} sx={{
                display:{xs:'block', md:'none'}
              }}>
                <Link to={{pathname:`/${props.item.path}`}}>
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
                          marginTop:'15%',
                          marginBottom:'5%',
                          '&:hover':{
                            borderBottom:'1px solid transparent',
                            backgroundColor:'transparent'
                        }   
                    }}>
                        View Case Study
                    </Button>
                </Link>
            </Grid>
        </Grid>
    </Grid>
  );
}

