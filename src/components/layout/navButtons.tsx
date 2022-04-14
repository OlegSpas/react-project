import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


interface IProps {
    item:{
        buttonText: string;
        path:string;
    }
}


const useStyles = makeStyles(theme => ({
    headerLink:{
        alignItems:'center',
        borderRadius:0,
        height: 50,
        display:'flex',
        paddingTop: '5px',
        fontSize:'18px',
        fontWeight:700,
        textDecoration: 'none',
        color:"#FFF",
        marginRight:'5%',


        [theme.breakpoints.down('xl')]: {
            borderTop: '0px solid rgba(220,220,220,0.3)',
            '&:hover':{
                borderTop:'2px solid #fff'
            }
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
            <Link className={classes.headerLink} to={props.item.path}>
                {props.item.buttonText}
            </Link>   
	)
}

export  default NavigationButton;