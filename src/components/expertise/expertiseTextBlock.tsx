import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ExpertiseSecondaryLink from './ExpertiseSecondaryLink.tsx';
import ExpertisePrimaryLink from './expertisePrimaryLink.tsx';
 
interface IProps{
    caseTitle:string;
    description:string;
    navName:string;
    primaryLink:{
        primaryLinkName:string;
        primaryLinkPath:string;
    }[];
    links:{
        linkName:string;
        linkPath:string;
    }[];
}


export default function ExpertiseTextBlock(props:IProps) {

  return (
    <>
        <Grid item lg={8} sx={{
            marginBottom:'7%'
        }}>
            <Box sx={{
                width:{xs:'100%',md:'87%'}
            }}>
                <Typography 
                    component='h3'
                    variant='inherit'
                    sx={{
                        fontSize:{xs:'22px',sm:'24px'},
                        fontWeight:"700",
                        color:'#424347',
                        marginBottom:'1%'
                    }}>
                    {props.caseTitle}
                </Typography>
                <Typography 
                    component='p'
                    variant='inherit'
                    sx={{
                        fontSize:{xs:'14px',sm:'18px'},
                        lineHeight:{xs:'20px',sm:'24px'},
                        color:'#424347',
                        marginBottom:'3%'
                    }}>
                    {props.description}
                </Typography>
                {props.primaryLink.map((item:any, index:number) =>(
                    <ExpertisePrimaryLink key={index} {...item}/>
                ))}
            </Box>
        </Grid>
        <Grid item lg={4} sx={{
            display:{xs:'flex', lg:'block'},
            flexDirection:'column',
            width:{xs:'100%',lg:'auto'},
            marginBottom:{xs:"20%", sm:'10%',lg:0},
            marginTop:{xs:'5%', sm:0}
        }}>
            <Typography
                component='h3'
                variant='inherit'
                sx={{
                    fontSize:{xs:'14px',sm:'18px'},
                    fontWeight:'400',
                    color:'#424347',
                    borderBottom:'1px solid #DCDCDC',
                    paddingBottom:{xs:'2%',lg:'5%',},
                    width:{xs:'100%',lg:'77%'}
                }}>
                {props.navName}
            </Typography>
            {props.links.map((item:any, index:number) => (
                    <ExpertiseSecondaryLink key={index} {...item}/>
                    ))}
        </Grid>
    </>
    
  );
}

