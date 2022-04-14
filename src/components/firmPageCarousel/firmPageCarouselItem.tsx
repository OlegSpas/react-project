import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


interface IProps{
    item:{
        title:string;
        subTitle:string;
        img: any;
        mobImage:any;
        description:string;
        person:string
    }
}

const useStyles = makeStyles(theme => ({
    carouselItem: {
        backgroundImage: props => `url("${props.item.img}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme.breakpoints.down('md')]: {
            backgroundImage: 'none !important',
        },
    }, 
}));

function FirmPageCarouselItem(props:IProps){
    const classes = useStyles(props);
    return (
        <Box
            position="relative"
            className={classes.carouselItem}
            sx={{
                width:'auto',
                height:{xs:'700px',sm:'630px',md:'100vh'},
                maxHeight:{xs:'1200px',md:700},
                display:'flex',
                flexDirection:'column-reverse',
                justifyContent:'flex-end',
                zIndex: 1,
            }}>  
            <Box
                component='img'
                alt='feedbackImg'
                src={props.item.mobImage}
                sx={{
                    display:{xs:'block',md:'none'},
                    width:'100%',
                    height:'auto'
                }}/>
            <Box
                component='div'
                sx={{
                    position:{xs:'static',md:'absolute'},
                    top:{md:'30%',lg:'40%'},
                    left:'3%',
                    width:{md:'50%'},
                    backgroundColor:{xs:'#070B16',md:'transparent'},
                    padding:{xs:'10% 3%', md: 0}
                }}
                >
                <Typography
                    component='h3'
                    variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:{xs:'14px',md:'18px'},
                        fontWeight:700,
                        marginBottom:'5%'
                    }}>
                    {props.item.title}
                </Typography>
                <Typography
                    component='h2'
                    variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:{xs:'30px',sm:'38px',lg:'54px'},
                        fontWeight:700,
                        marginBottom:'2%'
                    }}>
                    {props.item.subTitle}
                </Typography>
                <Typography
                component='p'
                sx={{
                    color:'#fff',
                    fontSize:{xs:'12px',sm:'14px',lg:'16px'},
                    lineHeight:{xs:'16px',sm:'18px',lg:'20px'}
                }}>
                    {props.item.description}
                </Typography>

            </Box>
            <Box 
                component='div'
                sx={{
                    position:{xs:'static',md:'absolute'},
                    bottom:'5%',
                    right:'5%',
                }}>
                <Typography
                    component='p'
                    variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:'16px',
                        lineHeight:'20px',
                        fontWeight:'700'
                    }}>
                        {props.item.person}
                </Typography>
            </Box>
        </Box>
    )
}

export default FirmPageCarouselItem;