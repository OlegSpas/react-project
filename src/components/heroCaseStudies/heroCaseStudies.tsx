import * as React from 'react';
import { Typography, Grid, Container, Box } from '@mui/material';
import InvestmentsHeroBG from '../../images/investmentsBG.jpg';


export default function HeroCaseStudies() {
  return (
      <Grid 
        container 
        sx={{
            backgroundImage:`url('${InvestmentsHeroBG}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width:'auto',
            height:'100vh',
            maxHeight:{xs:200,sm:300,md:420,lg:800},
      }}>
        <Container maxWidth='xl'>
            <Box sx={{
                height:{xs:'90%',lg:'80%'},
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-end'
           }}>
               <Typography 
                component='h2'
                variant='inherit'
                sx={{
                    fontWeight: 700,
                    fontSize: {xs:'28px',sm:'36px',lg:'42px',xl:'52px'},
                    lineHeight:{xs:'30px',sm:'38px',lg:'44px',xl:'54px'},
                    color: '#FFF',
                    width:{xs:'90%',sm:'65%',md:'60%',lg:'45%'}
                }}>
                    Creative Solutions
                    & Long-term Partnerships
               </Typography>
               <Typography
                component='p'
                variant='inherit'
                sx={{
                    fontSize: {xs:'16px',lg:'18px'},
                    lineHeight:{xs:'20px',lg:"22px"},
                    fontWeight: 400,
                    color:"#fff",
                    display:{xs:'none',  lg:'block'},
                    width:'90%',
                    marginTop:'.5%'
                }}
               >
                   Tom Murphy, Co-Founder & Partner, with Jason Luo, Operating Executive & Chairman of Accuride Corporation, Barry Volpert, Co-Founder & CEO and Alex Rose, Co-President & Partner
               </Typography>
            </Box>
        </Container>
      </Grid>
  );
}

