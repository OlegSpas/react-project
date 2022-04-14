import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { TEAM } from '../../routes/routes.ts';


interface IProps{
  teamMember:IMember;
}

 export  default function SecondaryTeamMemberCard(props:IProps) {

  const memberPath = props.teamMember.id;

    return(
      <Grid item xs={12}>
        <Link to={{pathname:`${TEAM}/${memberPath}`}}>
          <Grid item container lg={12} sx={{
                height:'70px',
                display:'flex',
                alignItems:'center',
                borderBottom:'1px solid #DCDCDC ',
                transition:'border-bottom 200ms ease',
                '&:hover':{
                  borderBottom:'1px solid #424347 '
                }
              }}>
                  <Grid item md={6}>
                    <Typography variant="inherit" component='h4' sx={{
                        fontWeight:700,
                        fontSize:{xs:'22px',lg:'26px'},
                        lineHeight:{xs:'24px',lg:'28px'},
                        color:'#424347',
                      }}>
                        {props.teamMember.name}
                      </Typography>
                  </Grid>
                  <Grid item md={6}
                  sx={{
                    display:{xs:'none', md:'block'}
                  }}>
                    <Typography variant='inherit' component='p' sx={{
                      fontWeight:400,
                      fontSize:{md:'16px',lg:'18px'},
                      lineHeight:{md:'26px',lg:'28px'},
                      color:'#424347',
                      textAlign:{md:'center',lg:'left'},
                    }}>
                      {props.teamMember.job}
                    </Typography>
                  </Grid>
          </Grid>
        </Link>
      </Grid>
    )
}