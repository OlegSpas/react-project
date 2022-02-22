import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


interface IProps {
	buttonText: string;
	path:string;
}


const useStyles = makeStyles(theme => ({
    headerLink:{
        borderTop:'2px solid rgba(220,220,220,0.3)',
        alignItems:'left',
        borderRadius:0,
        height: 50,
        width:230,
        display:'block',
        paddingTop: '5px',
        fontSize:'18px',
        fontWeight:700,
        textDecoration: 'none',
        color:"#FFF",
        transition: 'border-color 200ms ease',
        '&:hover':{
            borderTop:'2px solid #fff'
        },

        [theme.breakpoints.down('xl')]: {
            borderTop: '0px solid rgba(220,220,220,0.3)',
            '&:hover':{
                borderTop:'2px solid #fff'
            },
            width:'auto',
          },
          
        [theme.breakpoints.down('lg')]: {
            width:'100vw',
            borderTop:'2px solid rgba(220,220,220,0.3)',
            margin:"0  1%",
            color:"#424347",
          },
    }
  
}));

function NavigationButton (props:IProps) {
    const classes = useStyles();
	return (
        <Grid item xl={4} lg={2}>
            <Link className={classes.headerLink} to={props.path}>
                {props.buttonText}
            </Link>   
        </Grid>
	)
}

export  default NavigationButton;