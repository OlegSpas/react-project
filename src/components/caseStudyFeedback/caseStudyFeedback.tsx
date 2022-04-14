import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';


interface IProps {
    currentCaseStudy:ICaseStudy;
}



export default function CaseStudyFeedback(props:IProps) {
    const feedbackBG = '/' + props.currentCaseStudy.feedbackBG;
    const MobileBG  = '/' + props.currentCaseStudy.feedbackIMG;

    return (
      <Box
        position="relative"
        sx={{
          height:{md:'85vh'},
          maxHeight:{xs:'1200px',md:700},
          backgroundImage:{xs:'transparent',md:`url("${feedbackBG}")`},
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
            position:'relative',
            height:{sm:'auto',md:'100%'},
            flexDirection:{xs:'column-reverse', md:'row-reverse'},
          }}>
            <Box
              component='img'
                    alt={props.currentCaseStudy.caseName}
                    src={MobileBG}
                    sx={{
                        display:{xs:'block',md:'none'},
                        width:'100%',
                        height:'auto'
              }}/>
            <Box component='div'
                sx={{
                    width:{sm:'100%',md:'47%'},
                    height:{sm:'auto',md:'100%'},
                    position:{xs:'static',md:'absolute'},
                    right:'0',
                    top:'30%',
                    backgroundColor:{xs:'#070B16',md:'transparent'},
                    padding:{xs:'10% 5%',sm:'10% 2%', md:0}
                }}>
                <Typography component='h3' variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:{xs:'28px',sm:'36px'},
                        lineHeight:{xs:'30px',sm:'38px'},
                        fontWeight:400
                    }}>
                    {props.currentCaseStudy.feedback}
                </Typography>
                <Typography component='p' variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:'16px',
                        fontStyle:'italic',
                        marginTop:'4%'
                    }}>
                   - {props.currentCaseStudy.feedbackPerson}
                </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

