import * as React from 'react';
import { Typography, Box, Button, Container, Grid  } from '@mui/material';
import { CASESTUDIES } from '../../routes/routes.ts';
import { Link } from 'react-router-dom';


interface IProps {
    currentCaseStudy:ICaseStudy;
}


export default function HeroCaseStudy(props:IProps) {
    const caseStudyLogo = '/'+ props.currentCaseStudy.logo;

  return(
    <Box  component='div'
        sx={{
            margin:'10% 0'
        }}>
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item md={12}
                    sx={{
                        marginBottom:{xs:'15%',sm:'5%'}
                    }}>
                    <Link to={{pathname:`${CASESTUDIES}`}}>
                    <Button 
                        sx={{
                        borderBottom:'1px solid #619fc0',
                        transition: 'border 200ms ease',
                        borderRadius:0,
                        color:'#424347',
                        textTransform:'none',
                        fontWeight:'400',
                        fontSize:'14px',
                        padding:'0',
                        '&:hover':{
                        borderBottom:'1px solid transparent',
                        backgroundColor:'transparent'
                        }   
                        }}>
                        Back to All Case Studies
                    </Button>
                    </Link>
                </Grid>
                <Grid item lg={12}
                    sx={{
                        marginBottom:{xs:'5%',sm:'1%'}
                    }}>
                    <Typography component='h2' variant='inherit'
                        sx={{
                            fontWeight: 700,
                            fontSize:{xs:'28px',sm:'46px'},
                            lineHeight: 1.1,
                            color:'#424347',
                        }}>
                        {props.currentCaseStudy.caseName}
                    </Typography>
                </Grid>
                <Grid item container  lg={12}
                    sx={{
                        alignItems:'center'
                    }}>
                    <Grid item md={0} lg={3}></Grid>
                    <Grid item md={8} lg={6} sx={{
                        paddingLeft:0,
                        marginBottom:{sm:'5%', md:0}
                    }}>
                        <Typography component='p' variant='inherit'
                            sx={{
                                fontSize:{xs:'20px',sm:'24px'},
                                lineHeight:'30px',
                                color:'#424347',
                            }}>
                            {props.currentCaseStudy.descriptopn}
                        </Typography>
                        <a target="_blank" rel="noreferrer"  href={props.currentCaseStudy.webSite}>
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
                                marginTop:{xs:'5%',sm:'2%',md:'3%'},
                                display:'block',
                                '&:hover':{
                                    borderBottom:'1px solid transparent',
                                    backgroundColor:'transparent'
                                }   
                                }}>
                                View Website
                            </Button>
                        </a>
                    </Grid>
                    <Grid item md={3} lg={3}
                        sx={{
                            width:'100%',
                            marginTop:{xs:'15%',sm:0},
                            paddingLeft:{xs:'0',md:'3%'},
                            display:{xs:'flex', md:'block'},
                            flexDirection:{xs:'row-reverse', md:'row'},
                            justifyContent:{xs:'space-between', md:'flex-start'}
                        }}>
                        <Box component='img' src={caseStudyLogo}
                            sx={{
                            marginLeft:{lg:'7%',xl:0},
                            marginBottom:'15%',
                            maxHeight:{xs:'55px',sm:'110px'},
                            maxWidth:{xs:'115',sm:'220px'},
                            objectFit:'scale-down'
                        }}/>
                        <Box>
                            <Box component='div' sx={{
                                    display:'flex',
                                    alignItems:{xs:'left',sm:'center'},
                                    flexDirection:{xs:'column',sm:'row'},
                                }}>
                                    <Typography component='span' variant='inherit'  sx={{
                                    fontWeight:'700',
                                    fontSize:{xs:'16px',sm:'16px',lg:'18px'},
                                    marginRight:'5px',
                                    color:'#424347',
                                    }}>
                                    Industry:  
                                    </Typography>
                                    <Typography variant='inherit' component='p' sx={{
                                    fontSize:{xs:'14px',sm:'14px',lg:'16px'},
                                    color:'#424347'
                                    }}>
                                    {props.currentCaseStudy.industry}
                                    </Typography>
                            </Box>
                            <Box component='div' sx={{
                                    display:'flex',
                                    alignItems:{xs:'flex-start',sm:'center'},
                                    flexDirection:{xs:'column',sm:'row'}
                                }}>
                                    <Typography component='span' variant='inherit' sx={{
                                    fontWeight:'700',
                                    fontSize:{xs:'16px',sm:'16px',xl:'18px'},
                                    marginRight:'5px',
                                    color:'#424347'
                                    }}>
                                    HQ:  
                                    </Typography>
                                    <Typography variant='inherit' component='p' sx={{
                                    fontSize:{xs:'14px',sm:'14px',xl:'16px'},
                                    color:'#424347'
                                    }}>
                                    {props.currentCaseStudy.location}
                                    </Typography>
                            </Box>
                            <Box component='div' sx={{
                                    display:'flex',
                                    alignItems:{xs:'flex-start',sm:'center'},
                                    flexDirection:{xs:'column',sm:'row'}
                                }}>
                                    <Typography component='span' variant='inherit' sx={{
                                    fontWeight:'700',
                                    fontSize:{xs:'16px',sm:'16px',xl:'18px'},
                                    marginRight:'5px',
                                    color:'#424347'
                                    }}>
                                    Status:  
                                    </Typography>
                                    <Typography variant='inherit' component='p' sx={{
                                    fontSize:{xs:'14px',sm:'14px',xl:'16px'},
                                    color:'#424347'
                                    }}>
                                    {props.currentCaseStudy.status}
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

