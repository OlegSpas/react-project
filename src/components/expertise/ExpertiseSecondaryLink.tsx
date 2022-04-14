import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
interface IProps{
    expertiseLink:{
        linkName:string;
        linkPath:string;
    }
}


export default function ExpertiseSecondaryLink(props:IProps) {

  return (
    <>
        <Link to={{pathname:`/${props.expertiseLink.linkPath}`}}>
            <Button sx={{
                borderBottom:'1px solid #DCDCDC',
                color:'#424347',
                fontWeight:700,
                fontSize:{xs:'12px',sm:'16px'},
                textTransform:'none',
                paddingLeft:0,
                paddingTop:'10px',
                paddingBottom:'10px',
                width:{xs:'100%',lg:'auto'},
                display:'flex',
                justifyContent:{xs:'space-between',lg:'flex-start'},
            }} endIcon={<ArrowForwardIcon />}>
                {props.expertiseLink.linkName}
            </Button>
        </Link>
    </>
    
  );
}
