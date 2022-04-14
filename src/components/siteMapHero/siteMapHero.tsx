import { Typography, Container } from '@mui/material';
import * as React from 'react';

export default function SiteMapHero() {
  return (
    <Container maxWidth='lg' sx={{
        marginTop:'5%',
        marginBottom:'5%'
    }}>
            <Typography component='h2' variant='inherit' sx={{
                fontSize:{sm:'34px',md:'44px',lg:'52px'},
                fontWeight:700,
                color:'#424347'
            }}> 
                Sitemap
            </Typography>
    </Container> 
    
  );
}

