import * as React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent  } from '@mui/material';
import { Link } from 'react-router-dom';
import { TEAM } from '../../routes/routes.ts';

interface IProps{
        id:number;
        name:string;
        job:string;
        description:string;
        biography:string;
        smallAvatar:any;
        avatar:any;
}

 export  default function TeamMemberCard(props:IProps) {

  const memberPath = props.id;

  if(props.avatar !== null){
    return (
      <Grid item xs={12}sm={6} sx={{
      }}>
        <Link to={{pathname:`${TEAM}/${memberPath}`}}>
          <Card sx={{
          boxShadow:'none',
          display:{xs:'flex', sm:'block'},
          borderRadius:0,
          borderTop:{xs:'2px solid #DCDCDC',sm:0},
          position:"relative",
          minHeight:{md:'160px',lg:'235px'},
          cursor:'pointer',
          '&:hover > .MuiCardContent-root':{
            border:{xs:0,sm:'2px solid #b1b2b5'},
          },
        }}>
          <CardMedia
            component="img"
            image={props.smallAvatar}
            alt={props.name}
            sx={{
              minWidth:{xs:'66px', sm:'inherit'},
              maxHeight:{xs:'66px', sm:'inherit'},
              width:{xs:'10%',sm:"50%"},
            }} 
          />
          <CardContent sx={{
            position:{xs:'sticky',sm:'absolute'},
            display:'flex',
            flexDirection:'column',
            alingItems:'center',
            justifyContent:'center',
            width:{sm:'57%',md:'57%',lg:'57%'},
            height:{sm:'70%',lg:'75%'},
            zIndex:'2',
            top:{sm:'15%',md:'15%',lg:'12.5%'},
            right:0,
            border:{xs:0,sm:'2px solid #DCDCDC'},
            padding:{xs:'1% 0 1% 5%',sm:'0 2% 0 10%',md:'0 0 0 10%',lg:'0 0 0 10%'},
            transition:'border 300ms ease',
            '&:last-child':{
              paddingBottom:0
            }
            
          }}>
            <Typography variant="inherit" component='h4' sx={{
              fontWeight:700,
              fontSize:{xs:'22px',sm:'18px',md:'22px',lg:'26px'},
              lineHeight:{xs:'24px',sm:'20px',md:'24px',lg:'28px'},
              color:'#424347',
            }}>
              {props.name}
            </Typography>
            <Typography variant='inherit' component='p' sx={{
              fontWeight:400,
              fontSize:{sm:'14px',md:'16px',lg:'18px'},
              lineHeight:{sm:'16px',md:'18px',lg:'28px'},
              color:'#424347',
              marginTop:{xs:'0%',md:'5%',lg:0}
            }}>
              {props.job}
            </Typography>
          </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  } else{
    return ''
  }
}