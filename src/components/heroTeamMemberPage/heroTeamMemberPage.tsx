import * as React from 'react';
import { Typography, Box, Button, Container  } from '@mui/material';
import { TEAM } from '../../routes/routes.ts';
import { Link } from 'react-router-dom';


interface IProps {
    currentMember:IMember;
}


export default function HeroTeamMemberPage(props:IProps) {
  const avatar = '/' + props.currentMember.backgroundAvatar;
  const MobileAvatar  = '/' + props.currentMember.avatar;


  if(props.currentMember.backgroundAvatar !== null && props.currentMember.smallAvatar !== '33'){
    return (
      <Box
        position="relative"
        sx={{
          height:{xs:'700px',sm:'850px',md:'100vh'},
          maxHeight:{xs:'1200px',md:700},
          backgroundImage:{xs:'transparent',md:`url("${avatar}")`},
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>  
        <Container maxWidth='lg' sx={{
          height:'100%',
          paddingLeft:{xs:'0 !important', md:'16px !important'},
          paddingRight:{xs:'0 !important', md:'16px !important'}
        }}>
          <Box sx={{
            display:'flex',
            flexDirection:{xs:'column-reverse', md:'row-reverse'},
            justifyContent:'flex-end',
            alignItems:'center',
            height:'80%'
          }}>
            <Box
              component='img'
                    alt={props.currentMember.name}
                    src={MobileAvatar}
                    sx={{
                        display:{xs:'block',md:'none'},
                        width:'100%',
                        height:'auto'
              }}/>
            <Box
              component='div'
              sx={{
                width:{md:'60%',lg:'47%'},
                backgroundColor:{xs:'#070B16',md:'transparent'},
                padding:{xs:'10% 3%', md: 0}
              }}>
                <Link to={{pathname:`${TEAM}`}}>
                  <Button 
                    sx={{
                    borderBottom:'1px solid #619fc0',
                    transition: 'border 200ms ease',
                    borderRadius:0,
                    color:'#fff',
                    textTransform:'none',
                    fontWeight:'400',
                    fontSize:'14px',
                    padding:'0',
                    marginBottom:'7%',
                    '&:hover':{
                      borderBottom:'1px solid transparent',
                      backgroundColor:'transparent'
                    }   
                    }}>
                      Back to All Team
                  </Button>
                </Link>
                <Typography component='h2' variant='inherit'
                  sx={{
                    fontSize:{xs:'38px',sm:'52px'},
                    fontWeight:700,
                    color:'#fff',
                    marginBottom:'3%'
                  }}>
                    {props.currentMember.name}
                </Typography>
                <Typography component='h3' variant='inherit'
                  sx={{
                    fontSize:'16px',
                    fontWeight:700,
                    color:'#fff',
                    marginBottom:'6%'
                  }}>
                    {props.currentMember.job}
                </Typography>
                <Typography component='p' variant='inherit'
                  sx={{
                    color:'#fff',
                    fontSize:'16px',
                    lineHeight:'20px'
                  }}>
                  {props.currentMember.description}
                </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  } else{
    return(
      <Box
        position="relative"
        sx={{
          height:'90vh',
          minHeight:{xs:'125px',sm:'250px',md:'320px'},
          maxHeight:{xs:'300px', md:'600px'}
        }}>  
        <Container maxWidth='lg' sx={{
          height:'100%',
        }}>
          <Box sx={{
            display:'flex',
            flexDirection:{xs:'column-reverse', md:'row-reverse'},
            justifyContent:'flex-end',
            alignItems:'center',
            height:'80%'
          }}>
            <Box
              component='div'
              sx={{
                width:{md:'60%',lg:'47%'},
              }}>
                <Link to={{pathname:`${TEAM}`}}>
                  <Button 
                    sx={{
                    borderBottom:'1px solid #619fc0',
                    transition: 'border 200ms ease',
                    borderRadius:0,
                    color:'#424347',
                    textTransform:'none',
                    fontWeight:'400',
                    fontSize:'14px',
                    padding:'0',
                    marginBottom:'7%',
                    '&:hover':{
                      borderBottom:'1px solid transparent',
                      backgroundColor:'transparent'
                    }   
                    }}>
                      Back to All Team
                  </Button>
                </Link>
                <Typography component='h2' variant='inherit'
                  sx={{
                    fontSize:{xs:'38px',sm:'52px'},
                    fontWeight:700,
                    color:'#424347',
                    marginBottom:'3%'
                  }}>
                    {props.currentMember.name}
                </Typography>
                <Typography component='h3' variant='inherit'
                  sx={{
                    fontSize:'16px',
                    fontWeight:700,
                    color:'#424347',
                    marginBottom:'6%'
                  }}>
                    {props.currentMember.job}
                </Typography>
                <Typography component='p' variant='inherit'
                  sx={{
                    color:'#424347',
                    fontSize:'16px',
                    lineHeight:'20px'
                  }}>
                  {props.currentMember.description}
                </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }
}

