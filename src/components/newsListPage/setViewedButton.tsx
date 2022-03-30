import * as React from 'react';
import { Grid, Button } from '@mui/material';

interface IProps{
    setViewedNews: (newsLength:number) => void;
    newsLength:number;
}

export default function SetViewedButton(props:IProps) {
    const [display, setDisplay] = React.useState('block');

    const handleSetViewedNews = () => {
        props.setViewedNews(props.newsLength);
        setDisplay('none');
        console.log(props.newsLength)
  }

  if(props.newsLength > 20){
    return (
        <Grid item>
            <Button
                onClick={handleSetViewedNews}
                sx={{
                    display:display,
                    borderBottom:'1px solid #619fc0',
                    transition: 'border 200ms ease',
                    borderRadius:0,
                    color:'#424347',
                    textTransform:'none',
                    fontWeight:'700',
                    fontSize:'15px',
                    padding:'0',
                    marginTop:'3%',
                    '&:hover':{
                        borderBottom:'1px solid transparent',
                        backgroundColor:'transparent'
                    }   
                }}>
                See All News
            </Button>
        </Grid>
      );
  } else{
      return '';
  }
}