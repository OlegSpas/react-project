import * as React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { Container, Grid, Typography, FormControl, MenuItem, Box, Select } from '@mui/material';
import TeamListItem from './teamListItem.tsx';
import TeamListData from '../../fakeData/teamList.json';

 export  default function TeamList() {
  const [typeMembers, setTypeMembers] = React.useState('All Team Members');
  const [industry, setIndustry] = React.useState('All Industries');
  const [foundTeams, setFoundTeams] = React.useState(TeamListData.team);
  const [teams, setTeams]  = React.useState(TeamListData.team);

  const filterTeams = (keyword:string) => {
    const results = teams.filter((user) => {
      return user.typeMembers.toLowerCase().startsWith(keyword.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });
    return results;

  }

  const filterMembers = (keyword:string, teamsToFilter: any[]) => {
    var results = teamsToFilter;
      //remove  references
      results = results.map(r => {
        return {
          ...r, 
          membersList: [...r.membersList]
        }
      }) 
      results.forEach((team) => {
        team.membersList = team.membersList.filter((member) => {
         return  member.industry && member.industry.toLowerCase().startsWith(keyword.toLowerCase())
        });
      })
    results = results.filter((team) => team.membersList.length > 0)
    return results
  }

  const handleChange = (event: SelectChangeEvent) => {
    const keyword = event.target.value;
    if(keyword !== 'All Team Members') {
      if(industry === 'All Industries'){
        const result  =  filterMembers('',  filterTeams(keyword));
        setFoundTeams(result);
      } else{
        const result  =  filterMembers(industry,  filterTeams(keyword));
        setFoundTeams(result);
      }
      setIndustry('All Industries');
    } else {
      setFoundTeams(TeamListData.team);
    }

    setTypeMembers(keyword as string);
  };


  const handleChange2 = (event: SelectChangeEvent) => {
    const keyword = event.target.value;

    if(keyword !== 'All Industries'){
      if(typeMembers !== 'All Team Members'){
        const result  =  filterMembers(keyword,  filterTeams(typeMembers));
        setFoundTeams(result)   ;
        setTypeMembers('All Team Members');
      } else{
        const result  =  filterMembers(keyword,  filterTeams(''));
        setFoundTeams(result);
      }
    } else{
      setFoundTeams(TeamListData.team);
    }
    setIndustry(keyword as string);
  };

  return (
    <Box sx={{
      marginTop:'5%'
    }}>
      <Container maxWidth='lg'>
        <Grid container sx={{
          justifyContent:'space-between',
          alignItems:'space-between'
        }}>
          <Grid item xs={9} md={10} lg={7}>
            <Typography component='h2' variant='inherit' sx={{
              fontSize:{xs:'30px',sm:'38px',md:'52px'},
              lineHeight:{xs:'34px',sm:'40px',md:'56px'},
              fontWeight:700,
              color:'#424347',
            }}>
              Opportunistic Investors
              with Deep Expertise
            </Typography>
          </Grid>
          <Grid container item xs={12} lg={4} sx={{
              display:'flex',
              justifyContent:{sm:'space-between',lg:'flex-end'},
              alignContent:{md:'center'},
              marginTop:{xs:'20%',sm:'10%', lg:'0'},
              marginBottom:{xs:'15%',sm:'0'}
            }}>
            <Grid item xs={12} sm={5} lg={10}>
              <FormControl fullWidth sx={{
                backgroundColor:'#fff',
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom:'1px solid #424347'
                },
              }}>
                <Select
                  value={typeMembers}
                  onChange={handleChange}
                  variant='standard' 
                  sx={{
                    fontSize:'16px',
                    fontWeight:'700',
                    backgroundColor:'#fff',
                    '&:before':{
                      borderBottom:'1px solid  #dcdcdc'
                    },
                    '&:after':{
                      borderBottom:'1px solid #424347'
                    },
                    '&:hover > svg':{
                      color:'#424347'
                    },
                    "& .MuiSvgIcon-root":{
                      color:'#DCDCDC'
                    },
                    '& .MuiSelect-iconOpen':{
                      color:'#424347',
                      transition:'color 200ms ease'
                    }
                  }}>
                  <MenuItem  value='All Team Members' 
                  sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    All Team Members
                  </MenuItem>
                  <MenuItem  value='Partners' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Partners
                  </MenuItem>
                  <MenuItem  value='Investment Profesionals' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Investment Profesionals
                  </MenuItem>
                  <MenuItem  value={`Finance, Legal & IR`} sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Finance, Legal & IR
                  </MenuItem>
                  <MenuItem  value='Operating Executives' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Operating Executives
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={5} lg={10} sx={{
              display:{xs:'none',sm:'block'},
            }}>
              <FormControl fullWidth sx={{
                backgroundColor:'#fff',
                marginTop:{xs:'2%',sm:'0',lg:'2%'},
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom:'1px solid #424347'
                },
              }}>
                <Select
                  value={industry}
                  onChange={handleChange2}
                  variant='standard' 
                  sx={{
                    fontSize:'16px',
                    fontWeight:'700',
                    backgroundColor:'#fff',
                    '&:before':{
                      borderBottom:'1px solid  #dcdcdc'
                    },
                    '&:after':{
                      borderBottom:'1px solid #424347'
                    },
                    '&:hover > svg':{
                      color:'#424347'
                    },
                    "& .MuiSvgIcon-root":{
                      color:'#DCDCDC'
                    },
                    '& .MuiSelect-iconOpen':{
                      color:'#424347',
                      transition:'color 200ms ease'
                    }
                  }}>
                  <MenuItem  value='All Industries' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    All Industries
                  </MenuItem>
                  <MenuItem  value='Media' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Media
                  </MenuItem>
                  <MenuItem  value='Financial Services' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Financial Services
                  </MenuItem>
                  <MenuItem  value='Industrials' sx={{
                   backgroundColor:'#fff',
                   color:'#DCDCDC',
                   fontWeight:'700',
                   '&:focus':{
                     backgroundColor:'#fff'
                   },
                   '&:hover':{
                     backgroundColor:'#fff',
                     color:'#424347'
                   },
                   '&:selected':{
                     backgroundColor:'#fff'
                   },
                   '&:active':{
                     backgroundColor:'#fff'
                   }
                  }}>
                    Industrials
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{
          marginTop:{md:'2%', lg:'5%'}
        }}>
          {foundTeams?(
            foundTeams.map((team,index) => (
                <TeamListItem key={team.typeMembers} id={index} team = {team}/>
              ))
            ) : (
            <h1>No results found!</h1>
          )}
        </Grid>
      </Container>
    </Box>
  );
}