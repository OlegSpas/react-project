import { Container, Grid, Button } from '@mui/material';
import { Routes } from '../../routes/navRoutes.ts';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CASESTUDIES, TEAM } from '../../routes/routes.ts';
import CaseData from '../../fakeData/caseStudiesData.json';
import MemberData from '../../fakeData/teamMembers.json';

export default function SiteMapList() {
  return (
    <Container maxWidth='lg' sx={{
        marginTop:'5%',
        marginBottom:'5%'
    }}>
        <Grid container
            sx={{
                height:{lg:'400px'}
            }}>
            <Grid item xs={12} md={4} lg={3} sx={{
                marginBottom:'5%'
            }}>
                {Routes.slice(0,6).map((item:any, index:string) => (
                    <Link key={index} to={{pathname:`${item.path}`}}>
                        <Button 
                        sx={{
                        display:'block',
                        borderBottom:'1px solid #619fc0',
                        transition: 'border 200ms ease',
                        borderRadius:0,
                        color:'#424347',
                        textTransform:'none',
                        fontWeight:'700',
                        fontSize:'15px',
                        padding:'0',
                        marginTop:'3%',
                        textAlign:'left',
                        '&:hover':{
                            borderBottom:'1px solid transparent',
                            backgroundColor:'transparent'
                        }   
                        }}>
                        {item.buttonText}
                    </Button>
                    </Link>
                ))}
            </Grid>
            <Grid item xs={12} md={4} lg={3}sx={{
                marginBottom:'5%'
            }}>
                <Link to={{pathname:`${CASESTUDIES}`}}>
                        <Button 
                        sx={{
                        display:'block',
                        borderBottom:'1px solid #619fc0',
                        transition: 'border 200ms ease',
                        borderRadius:0,
                        color:'#424347',
                        textTransform:'none',
                        fontWeight:'700',
                        fontSize:'15px',
                        padding:'0',
                        marginBottom:'3%',
                        textAlign:'left',
                        '&:hover':{
                            borderBottom:'1px solid transparent',
                            backgroundColor:'transparent'
                        }   
                        }}>
                        Case Studies
                    </Button>
                </Link>
                {CaseData.caseStudies.map((item, index) => (
                    <Link key={index} to={{pathname:`${CASESTUDIES}/${item.id}`}}>
                        <Button 
                        sx={{
                        display:'block',
                        borderRadius:0,
                        color:'#424347',
                        textTransform:'none',
                        fontWeight:'700',
                        fontSize:'14px',
                        lineHeight:'18px',
                        padding:'0',
                        marginTop:'0%',
                        textAlign:'left', 
                        }}>
                        {item.caseName}
                    </Button>
                    </Link>
                ))}
            </Grid>
            <Grid item xs={12} md={4} lg={6}
                sx={{
                    height:'100%',
                    display:'flex',
                    flexDirection:'column',
                    flexWrap:'wrap',
                    marginBottom:'5%'
                }}>
                    <Link to={{pathname:`${TEAM}`}}>
                        <Button 
                        sx={{
                        display:'block',
                        borderBottom:'1px solid #619fc0',
                        transition: 'border 200ms ease',
                        borderRadius:0,
                        color:'#424347',
                        textTransform:'none',
                        fontWeight:'700',
                        fontSize:'16px',
                        lineHeight:'18px',
                        padding:'0',
                        marginBottom:'3%',
                        textAlign:'left',
                        '&:hover':{
                            borderBottom:'1px solid transparent',
                            backgroundColor:'transparent'
                        }   
                        }}>
                        Our Team
                    </Button>
                    </Link>
                {MemberData.teamMembers.map((item, index) => (
                    <Link key={index} to={{pathname:`${TEAM}/${item.id}`}}>
                        <Button 
                        sx={{
                        display:'block',
                        borderRadius:0,
                        color:'#424347',
                        textTransform:'none',
                        fontWeight:'700',
                        fontSize:'14px',
                        lineHeight:'18px',
                        padding:'0',
                        marginTop:'0%',
                        textAlign:'left', 
                        }}>
                        {item.name}
                    </Button>
                    </Link>
                ))}
            </Grid>
        </Grid>
    </Container>     
  );
}

