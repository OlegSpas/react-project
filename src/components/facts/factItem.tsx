import * as React from 'react';
import { Typography,
    Card,
    CardContent,
    Grid, 
    Divider 
} from '@mui/material';


interface IProps{
    fact:{
        title:string;
        description:string;
    }
}

export default function FactItem(props:IProps) {

  return (
    <Grid item xs={12} sm={6} md={3} >
        <Card  
        sx={{
            backgroundColor:"inherit",
            boxShadow:0,
            width:{xs:'100',xl:'90%'}
        }}>
            <CardContent sx={{
                paddingTop:0
            }}>
                <Typography 
                    component='h3' 
                    variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:{xs:'18px',md:'20px'},
                        height:{xs:'80px',lg:'60px'},
                        width:'80%',
                        display:'flex',
                        alignItems:'flex-end',
                        marginBottom:'2.5%',
                        fontWeight:'700'
                     }}>
                    {props.fact.title}
                </Typography>
                <Divider 
                    sx={{
                        backgroundColor:'#fff',
                        height:'0.5px'
                    }}
                    />
                <Typography 
                component='p'
                variant='inherit'
                    sx={{
                        color:'#fff',
                        fontSize:{xs:'32px',md:'36px',lg:'52px'},
                        fontWeight:'bold',
                        marginTop:{xs:'2%',md:'10%'},
                        lineHeight:{xs:'34px',md:'38px',lg:'54px'},
                    }}>
                    {props.fact.description}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}

