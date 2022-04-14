import * as React from 'react';
import { Box  } from '@mui/material';
import SiteMapIMG from '../../images/siteMapBG.jpg'

export default function SiteMapImg() {
  return (
    <Box
        component='img'
        src={SiteMapIMG}
        sx={{
            marginTop:'5%',
            width:'100%',
            height:{md:'auto',lg:'600px'},
            minHeight:{md:'300px',lg:'600px'}
        }}/>
  );
}

