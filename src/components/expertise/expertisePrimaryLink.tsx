import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
 
interface IProps{
    primaryLinkName:string;
    primaryLinkPath:string;
}

const useStyles = makeStyles(theme => ({
    newsListTitle:{
        fontWeight:'700',
        fontSize:'18px',
        lineHeight:'22px',
        color:'#424347',
        borderBottom:'1px solid #619fc0',
        transition: 'border 200ms ease',
        '&:hover':{
            borderBottom:'1px solid transparent'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize:'16px'
          },
          [theme.breakpoints.down('sm')]: {
            fontSize:'12px'
          },  
    },
}));


export default function ExpertisePrimaryLink(props:IProps) {
    const classes = useStyles();

  return (
    <>
        <Link to={{pathname:`/${props.primaryLinkPath}`}} className={classes.newsListTitle}>
            {props.primaryLinkName}
        </Link>
    </>
    
  );
}