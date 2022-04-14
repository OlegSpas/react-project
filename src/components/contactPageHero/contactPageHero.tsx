import * as React from 'react';
import { Box,Container,  Typography } from '@mui/material';
import Contacts from '../../fakeData/contactData.json';
import ContactCard from './contactCard.tsx';

export default function ContactPageHero() {
  return (
    <Container maxWidth='lg' sx={{
        marginTop:'5%',
        marginBottom:'5%'
    }}>
        <Box component='div'>
            <Typography component='h2' variant='inherit' sx={{
                fontSize:{sm:'34px',md:'44px',lg:'52px'},
                fontWeight:700,
                color:'#424347'
            }}> 
                Contact Us
            </Typography>
        </Box>
        <Box component='div' 
            sx={{
                display:'flex',
                justifyContent:{sm:'space-between',md:'space-evenly'},
                flexDirection:{xs:'column', sm:'row'},
                width:'100%',
                padding:{xs:'10% 0',sm:'3% 0'}

            }}>
            {Contacts.contacts.map((card, index) => {
                return(
                <ContactCard key={index} card={card} />
                        )
            })}
        </Box>
    </Container> 
  );
}

