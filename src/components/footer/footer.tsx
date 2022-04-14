import { Paper, Typography,  Grid, Container } from '@mui/material';
import * as React from 'react';
import { Routes } from '../../routes/navRoutes.ts';
import FooterNavButton from './footerNavButton.tsx';


export default function Footer() {
  return (
    <Paper sx={{
        paddingTop:'7%',
        paddingBottom:'7%'
    }}>
        <Container maxWidth="xl">
            <Grid container sx={{
                flexDirection:{md:'column-reverse', lg:'row'}
            }}>
                <Grid item md={6}lg={3}>
                    <Typography component='p' sx={{
                        textAlign:{md:'left',lg:'right'},
                        fontSize:'10px',
                        fontWeight:700,
                        color:'#424347',
                    }}>
                        The website is copyrighted by Crestview Advisors, L.L.C.
                        <br/>
                        All rights reserved. a FINE site
                    </Typography>
                </Grid>
                <Grid item md={12} lg={9}  sx={{
                    display:'flex',
                    flexWrap:'wrap'
                }}>
                    {Routes.slice(1).map((item:any, index:any) => (
                            <FooterNavButton 
                                item={item} 
                                key={index}
                            />
                    ))}
                </Grid>
            </Grid>
        </Container>
    </Paper>
    
  );
}

