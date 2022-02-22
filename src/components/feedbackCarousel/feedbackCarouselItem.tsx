import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


interface IProps{
    img: any;
    mobImage:any;
    description:string;
    person:string
}

const useStyles = makeStyles(theme => ({
    carouselItem: {
        backgroundImage: props => `url("${props.img}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme.breakpoints.down('md')]: {
            backgroundImage: 'none !important',
        },
    }, 
}));

function FeedbackCarouselItem(props:IProps){
    const classes = useStyles(props);
    return (
        <Box
            position="relative"
            className={classes.carouselItem}
            sx={{
                width:'auto',
                height:{xs:'1200px',md:'100vh'},
                maxHeight:{xs:'1200px',md:700},
                display:'block',
                flexDirection:'column',
                zIndex: 1,
            }}>  
            <Box
                component='img'
                alt='feedbackImg'
                src={props.mobImage}
                sx={{
                    display:{xs:'block',md:'none'},
                    width:'100%',
                    height:'auto'
                }}/>
            <Box component='div' 
                sx={{
                width:{md:'57%',lg:'41.5%'},
                position:{xs:'static',md:'absolute'},
                top:'35%',
                right:'3%',
                height:'350px',
                padding: {xs:'8% 2%', md:'0'},
                backgroundColor:{xs:'#424347',md:'transparent'}
                }}
                >
                <Typography 
                    variant='inherit'
                    component="p"
                    sx={{
                        color:'#fff',
                        fontSize:{sm:'32px',lg:'38px'},
                        fontWeight:400,
                        lineHeight:{sm:'32px',lg:'38px'},
                    }}>
                    {props.description}
                </Typography>
                <Typography 
                // className={classes.feedbackPerson} 
                variant='inherit'  
                component="p"
                sx={{
                    color:'#fff',
                    fontSize:'14px',
                    fontStyle:'italic',
                    fontWeight:'700',
                    lineHeight:'18px',
                    marginTop:'3%' 
                }}
                >
                &mdash;    {props.person}
                </Typography>
            </Box>
        </Box>
    )
}

export default FeedbackCarouselItem;