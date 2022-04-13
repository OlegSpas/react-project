import * as React from 'react';
import { Typography, Box, Container, Grid,  Divider } from '@mui/material';


interface IProps {
    currentMember:IMember;
}


export default function MemberBiography(props:IProps) {
    const Member = props.currentMember
    return (
      <Box
        sx={{
            marginTop:'5%'
        }}>
          <Container maxWidth='lg'>
              <Grid container>
                <Grid item sm={6} md={4} lg={3}>
                    <Box sx={{
                        width:'90%'
                    }}>
                        <Divider sx={{
                            height:'2px',
                            backgroundColor:'#424347',
                            display:{xs:"none", sm:"block"}
                        }} />
                        <Typography 
                            component='h2'
                            variant='inherit' 
                            sx={{
                            fontWeight: 700,
                            fontSize:{xs:'28px',sm:'36px'},
                            lineHeight: 1.1,
                            color:'#424347',
                            marginTop:'10%',
                            display:'flex',
                            alignItems:'center'
                            }}>
                                Bio
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} md={9} lg={6}
                    sx={{
                        padding:{md:'0',lg:'0% 1.5% 0% 5%'},
                        marginTop:{sm:'5%', md:0}
                    }}>
                    <Typography component='p' variant='inherit' 
                        sx={{
                            fontSize:'16px',
                            lineHeight:'20px',
                            color:'#424347'
                        }}>
                            {Member.biography}
                    </Typography>
                </Grid>
              </Grid>
          </Container>
      </Box>
    );
  }

