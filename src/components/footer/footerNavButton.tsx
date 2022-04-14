import React from 'react';
import { Link } from 'react-router-dom';
import {Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


interface IProps {
    item:{
        buttonText: string;
        path:string;
    }
}

const useStyles = makeStyles({
    footerLink:{
        fontWeight:400,
        fontSize:'16px',
        lineHeight:'24px',
        color:'#424347',
        borderBottom:'1px solid #619fc0',
        transition: 'border 200ms ease',
        '&:hover':{
            borderBottom:'1px solid transparent'
        }       
    },

});

function FooterNavButton (props:IProps) {
    const classes = useStyles();
	return (
        <Grid item sx={{
            marginLeft:{xs:'0',lg:"3%"},
            marginRight:{xs:'3%', lg:0}
        }}>
            <Link to={props.item.path} className={classes.footerLink}>
                {props.item.buttonText}
	        </Link>  
        </Grid>
	)
}

export  default FooterNavButton;