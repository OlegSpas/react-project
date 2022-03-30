import { Typography, Box,Container } from '@mui/material';
import HeroBackGround from '../../images/newsHeroBG.jpg';
import * as React from 'react';

export default function NewsHero() {
  return (
    <Box component='div' sx={{
        backgroundImage: `url(${HeroBackGround})`,
        height:{xs:'20vh',sm:'45vh',md:'55vh',lg:'80vh'},
        minHeight:{xs:'125px',sm:'250px',md:'320px'},
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }}>
        <Container sx={{
            height:'100%'
        }} maxWidth="xl">
            <Box component='div' sx={{
                display:'flex',
                alignItems:'flex-end',
                height:{xs:'90%',md:'85%'},
                marginLeft:{lg:'0%',xl:'10%'}
            }}>
                <Typography component='h2' variant='inherit' sx={{
                    fontSize:{sm:'34px',md:'54px'},
                    fontWeight:700,
                    color:'#fff'
                    }}>
                    News and Press
                </Typography>
            </Box>
        </Container>
    </Box>
    
  );
}

