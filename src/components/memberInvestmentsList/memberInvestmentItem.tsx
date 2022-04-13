import * as React from 'react';
import { Button, Grid, Typography, Collapse, Box } from '@mui/material';
import { Link } from 'react-router-dom';


interface IProps {
    industry: string;
    status: string;
    name: string;
    description:string;
    location:string;
    logo:string;
    websSite:string;
}


export default function MemberInvestmentItem(props:IProps) {
    const [open, setOpen] = React.useState(false);
    const [opacity, setOpacity] = React.useState('1');
  
    const handleClick = () => {
      open ? setOpacity('1') : setOpacity('0');
      setOpen(!open);
    } 

    return (
        <>
            <Grid onClick={handleClick}  container sx={{
                cursor:'pointer',
                padding:{xs:'5% 0',sm:'2% 0'},
                transition: 'border-bottom 200ms ease',
                '&:hover+tr': {
                borderBottom: '1.1px solid #000',
                transition: 'border-bottom 200ms ease',
            }
            }}>
                <Grid item md={6} lg={4}  sx={{
                border:0,
                paddingLeft:'0'
                }}>
                    <Typography 
                        component='h3'
                        variant='inherit'
                        sx={{
                            fontSize:{xs:'22px',sm:'22px'},
                            fontWeight:"700",
                            color:'#424347',
                            textAlign:'left'
                        }}>
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item md={6} lg={4} sx={{
                border:0,
                paddingLeft:'0',
                display:{xs:'none', md:'table-cell'}
                }}>
                <Typography component='p' sx={{
                    transition: 'all .2s ease',
                    opacity:opacity,
                    fontSize:{sm:'16px'},
                    fontWeight:"400",
                    color:'#424347',
                    }}>
                    {props.industry}
                </Typography>
                </Grid>
                <Grid item lg={4} sx={{
                border:0,
                paddingLeft:'0',
                display:{xs:'none', lg:'table-cell'}
                }}>
                <Typography component='p' sx={{
                    transition: 'all .2s ease',
                    opacity:opacity,
                    fontSize:{sm:'16px'},
                    fontWeight:"400",
                    color:'#424347',
                    }}>
                    {props.status}
                </Typography>
                </Grid>
            </Grid>
            <Grid onClick={handleClick} container sx={{
            borderBottom: '1.1px solid #DCDCDC',
            transition: 'border-bottom 200ms ease',
            '&:hover': {
                borderBottom: '1.1px solid #000',
                transition: 'border-bottom 200ms ease',
            },
            }}>
                <Grid container
                sx={{
                    padding: 0,
                }}>
                <Collapse in={open} timeout={500} unmountOnExit>
                    <Grid container sx={{
                        paddingBottom:'2%' ,
                        display:'flex',
                        justifyContent:"flex-end"
                    }}>
                        <Grid item xs={12} md={7} lg={6}>
                            <Typography component='p' variant='inherit' sx={{
                            fontSize:{xs:'16px',sm:'16px'},
                            lineHeight:{xs:'18px', sm:'22px'},
                            fontWeight:"400",
                            color:'#424347',
                            marginTop:'1%',
                            width:{xs:'100%',md:'87%'},
                            marginBottom:{xs:'4%',md:0}
                            }}>
                            {props.description}
                            </Typography>
                            <Link to={{pathname:`/${props.websSite}`}}>
                                <Button 
                                sx={{
                                display:{xs:'none', md:'block'},
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
                                    View Website
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={5} lg={6} container sx={{
                        display:'flex',
                        flexWrap:'nowrap',
                        flexDirection:{xs:'row-reverse',md:'column-reverse', lg:'row'}
                        }}>
                        <Grid item xs={6} md={12} lg={6}>
                            <Box component='div' sx={{
                                display:'flex',
                                alignItems:{xs:'left',sm:'center'},
                                flexDirection:{xs:'column',sm:'row'},
                            }}>
                                <Typography component='span' variant='inherit'  sx={{
                                fontWeight:'700',
                                fontSize:{xs:'16px',sm:'16px',xl:'18px'},
                                marginRight:'5px',
                                color:'#424347',
                                }}>
                                Industry:  
                                </Typography>
                                <Typography variant='inherit' component='p' sx={{
                                fontSize:{xs:'14px',sm:'14px',xl:'16px'},
                                color:'#424347'
                                }}>
                                {props.industry}
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
                                {props.location}
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
                                {props.status}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={12} lg={6}  sx={{
                            justifyContent:{md:'flex-start',lg:"inherit"},
                            display:{md:'flex', lg:'block'},
                            width:"100%"
                        }}>
                            <Box
                                component='img' 
                                src={`/${props.logo}`}
                                sx={{
                                objectFit:'scale-down',
                                marginLeft:{lg:'7%',xl:0},
                                maxHeight:{xs:'60px',sm:'70px'},
                                maxWidth:{xs:'100px',sm:'160px'}
                                }}
                            />
                        </Grid>
                        </Grid>
                        <Grid item xs={12} md={0} sx={{
                            display:{xs:'block', md:'none'}
                        }}>
                            <Link to={{pathname:`/${props.websSite}`}}>
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
                                marginBottom:'5%',
                                '&:hover':{
                                    borderBottom:'1px solid transparent',
                                    backgroundColor:'transparent'
                                }   
                                }}>
                                    View Website
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Collapse>
                </Grid>
            </Grid> 
        </>
    );
  }

