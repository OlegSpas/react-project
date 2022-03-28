import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import TeamMemberCard from './teamMemberCard.tsx';
import SecondaryTeamMemberCard from './teamListSecondaryCard.tsx';


interface IProps{
  team: ITeam;
}

 export default function TeamListItem(props:IProps) {
  if(props.team.typeMembers !== 'secondaryMembers'){
    if(props.team.isTeamHeads === true){
      return(
        <Grid item container lg={12} sx={{
          marginTop:{xs:'0',sm:'4%'}
        }}>
          <Grid item container rowSpacing={{
            xs:0,
            sm:4
          }} 
          columnSpacing={{
            xs:0,
            sm:5}} 
          sx={{
                justifyContent:'space-between',
            }}>
              {props.team.membersList && props.team.membersList.map((item:any, index:number) => (
                    <TeamMemberCard key={index} {...item}/>
              ))}
          </Grid>
        </Grid>
      )
    } else{
        return (
          <Grid item container lg={12}
           sx={{
            marginTop:'10%'
          }}
          >
            <Typography component='h2' variant='inherit' sx={{
              fontWeight: 700,
              fontSize:{xs:'28px',sm:'34px'},
              lineHeight: 1.1,
              color:'#424347',
              height:{xs:'60px',sm:'80px',md:'80px'},
              display:'flex',
              alignItems:'center'
            }}>
              {props.team.typeMembers}
            </Typography>
              <Grid item container spacing={5} sx={{
                  justifyContent:'space-between'
              }}
              rowSpacing={{
                xs:0,
                sm:4
              }} 
              columnSpacing={{
                xs:0,
                sm:5}}>
                {props.team.membersList && props.team.membersList.map((item:any, index:number) => (
                      <TeamMemberCard key={index} {...item}/>
                ))}
              </Grid>
          </Grid>
        );
    }
  } else{
    return (
      <Grid item container sx={{
        borderTop:'3px solid #000',
        marginTop:'10%'
      }}>
        {props.team.membersList && props.team.membersList.map((item:any, index:number) => (
          <SecondaryTeamMemberCard key={index} {...item}/>
        ))}
      </Grid>
    )
  }

}