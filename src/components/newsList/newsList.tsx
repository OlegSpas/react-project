import * as React from 'react';
import { Grid, Container, Divider, Typography,Card, CardContent, } from '@mui/material';
import NewsData from '../../fakeData/newsData.json';
import NewsListItem from './newsListItem.tsx';


export default function NewsList() {

  return (
    <Container maxWidth='xl' sx={{
      marginTop:'5%',
      display:'flex',
      alignItems:'center',
      height:{md:'350px',lg:'250px'}
    }}>
      <Grid container spacing={2}>
        <Grid item sm={6} md={4} lg={3}> 
            <Card sx={{
              boxShadow:0
            }}>         
              <CardContent sx={{
                newsCardContent:{
                  paddingTop:0
              }
              }}>
              <Divider sx={{
                 height:'3px',
                 backgroundColor:'#424347',
                 marginBottom:'10%'
              }} />
                <Typography 
                  component='h2'
                  variant='inherit'
                  sx={{
                    fontWeight: 700,
                    fontSize:'36px',
                    lineHeight: 1.1,
                    color:'#424347',
                  }}>
                    News
                </Typography>
              </CardContent>
          </Card>
        </Grid>
        <Grid container item md={8} >
        {NewsData.news.map((item, index) => (
          <NewsListItem key={index} item={item}/>
        ))}
        </Grid>
      </Grid>
    </Container> 
  );
}

