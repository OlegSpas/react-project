import * as React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    newsListTitle:{
        fontWeight:400,
        fontSize:'18px',
        lineHeight:'24px',
        color:'#424347',
        borderBottom:'1px solid #619fc0',
        transition: 'border 200ms ease',
        '&:hover':{
            borderBottom:'1px solid transparent'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize:'16px'
          },
    },
}));

interface IProps{
    item:{
        title:string;
        date: string;
    }
}

export default function NewsListItem(props:IProps) {
  const classes = useStyles();

  return (
    <Grid item sm={6} lg={4}>
        <Card sx={{
            boxShadow:0
        }}>
            <CardContent sx={{
                paddingTop:0
            }}>
                <Link to={{pathname:`/`}} className={classes.newsListTitle}> 
                    {props.item.title}
                </Link>
                <Typography 
                    component='p' 
                    variant='body1'
                    sx={{
                        fontSize:'14px',
                        fontWeight:400,
                        lineHeight:'24px',
                        color:'#424347',
                        marginTop:'7%'
                        }}>
                    {props.item.date}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}

