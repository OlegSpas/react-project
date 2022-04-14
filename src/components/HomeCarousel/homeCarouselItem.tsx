import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


interface IProps{
    item:{
        img: any;
        description:string;
    }
}

const useStyles = makeStyles({
    carouselItem: {
        backgroundImage: props => `url("${props.item.img}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }, 
  });

function HomeCarouselItem(props:IProps){
    const classes = useStyles(props);
    return (
        <Box
        className={classes.carouselItem}
        position="relative"
        sx={{
            width:'auto',
            height:'100vh',
            maxHeight:{xs:200,sm:800},
            display:'flex',
            flexDirection:'column-reverse',
            justifyContent:'space-between',
            alignItems:'flex-end',
            zIndex: 1,
        }}>
            <Typography   
                component="h4"
                sx={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color:"#fff",
                    position:'absolute',
                    bottom:'5%',
                    right:'15%',
                    display:{xs:'none',  md:'block'}
                }}>
                {props.item.description}
            </Typography>
        </Box>
    )
}

export default HomeCarouselItem;