import * as React from 'react';
import { Grid, FormControl, MenuItem, Select, Box, Container } from '@mui/material';
import NewsData from '../../fakeData/news.json';
import NewsListCard from './newsListCard.tsx';
import SetViewedButton from './setViewedButton.tsx';

const news = NewsData.news;

export default function NewsListComponent() {
  const [filterDateValue, setFilterDateValue] = React.useState('All Years');
  const [filteredNews, setFilteredNews] = React.useState(news);
  const [viewedNews, setViewedNews] = React.useState(20);

  const filterNews = (keyword:string) => {
    const results = news.filter((user) => {
      return user.date.toLowerCase().includes(keyword.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });
    return results;

  }

  const handleChange = (event: SelectChangeEvent) => {
    const keyword = event.target.value;
    if(keyword !== 'All Years') {
      const result = filterNews(keyword);
      setFilteredNews(result);
    } else {
      setFilteredNews(news);
    }
    setFilterDateValue(keyword as string);
  };
  
  return (
    <Box sx={{
      margin:'7% 0',
    }}>
      <Container maxWidth='lg'>
        <Grid container columnSpacing={{md:0,lg:5}}
          sx={{
            justifyContent:'space-between'
          }}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth sx={{
                  backgroundColor:'#fff',
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom:'1px solid #424347'
                  },
                }}>
                  <Select
                    value={filterDateValue}
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
                      <MenuItem  value='All Years' 
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
                        All Years
                      </MenuItem>
                      <MenuItem  value='2018' sx={{
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
                        2018
                      </MenuItem>
                      <MenuItem  value='2019' sx={{
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
                        2019
                      </MenuItem>
                      <MenuItem  value={`2020`} sx={{
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
                        2020
                      </MenuItem>
                      <MenuItem  value='2021' sx={{
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
                      2021
                      </MenuItem>
                      <MenuItem  value='2022' sx={{
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
                      2022
                      </MenuItem>
                    </Select>
            </FormControl>
          </Grid>
          <Grid item container md={8} lg={8} xl={9} sx={{
            marginTop:{sm:0,md:'31px'},
          }}>
            {filteredNews?(
              filteredNews.sort((a, b) => a.id < b.id ? 1 : -1).slice(0, viewedNews).map((newsCard,index) => (
                <NewsListCard key={index} {...newsCard}/>
                ))
              ) : (
              <h1>No results found!</h1>
            )}
            <SetViewedButton newsLength={news.length} setViewedNews={setViewedNews}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}