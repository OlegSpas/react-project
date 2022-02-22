import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { TEAM } from '../../routes/routes.ts'
import sectionBackGround from '../../images/teamMeetBackground.jpg';
import sectionMobileBackground from '../../images/teamMeetBackgroundMobile.jpg'



const useStyles = makeStyles({
  meetTeamLink:{
    width:'100%',
    height:'100%',
    padding: '9px 15px',
    color:'#fff',
    transition:'color 200ms ease, background-color 200ms ease',
    border: '1px solid #fff',
    borderRadius:'3px',
    fontSize:'18px',
    '&:hover':{
      color:'#424347',
      backgroundColor:'#fff',
    }
  },
});



export default function MeetTeamSection() {
  const classes = useStyles();
  return (
    <Paper 
      sx={{
        backgroundImage: {xs:'none',md:`url("${sectionBackGround}")`},
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius:0,
        height:{xs:'auto',md:'600px'},
        display:'flex',
        alignItems:'center'
      }}
    >
      <Container maxWidth='xl' sx={{
        padding:{xs:0,md:'16px'}
      }}>
        <Box 
          sx={{
            width:{lg:'45%',md:'68%'},
            background:{xs:'#070B16', md:'transparent'},
            padding:{xs:'10% 3% 10% 3%', md:'0'}
          }}
          >
          <Typography 
            variant='inherit'
            component='h3'
            sx={{
              color: '#FFF',
              fontWeight:700,
              fontSize:{xs:'14px',md:'20px'},
              marginBottom:'3%'
            }}
            >
            Expertise and Experience
          </Typography>
          <Typography 
            variant='inherit'
            component='p'
            sx={{
              color:'#fff',
              fontSize:{xs:'24px',sm:'28px',md:'32px',lg:"40px"},
              fontWeight:'400',
              lineHeight:{xs:'26px',sm:'30px',md:'34px',lg:'42px'},
              marginBottom:"7%"
            }}
            >
            Ten partners with complementary experience and distinguished backgrounds. Dedicated investment and support teams.
          </Typography>
            <Link 
              to={TEAM}
             className={classes.meetTeamLink}>
              Meet the Team
            </Link>
        </Box>
        <Box
          component='img'
          alt='Meet the team Image'
          src={sectionMobileBackground}
          sx={{
            display:{xs:'block', md:'none'},
            width:'100%'
          }}/>
      </Container>
    </Paper>
  );
}

