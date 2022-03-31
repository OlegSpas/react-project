import * as React from 'react';
import { Box  } from '@mui/material';
import ContactIMG from '../../images/contactUsBG.jpg'

export default function ContactImage() {
  return (
    <Box
        component='img'
        src={ContactIMG}
        sx={{
            marginTop:'5%',
            width:'100%',
            height:{md:'auto',lg:'600px'},
            minHeight:{md:'300px',lg:'600px'}
        }}/>
  );
}

