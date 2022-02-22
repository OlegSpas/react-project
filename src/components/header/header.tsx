import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Grid, Button } from '@mui/material';
import NavigationButton from '../layout/navButtons.tsx';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes } from '../../routes/navRoutes.ts';
import logo  from '../../images/logo.svg';
import MobileLogo from '../../images/mobileLogo.svg';


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{  
        backgroundColor: { xs: '#fff', lg: 'transparent' },
        position:{xs:'static', lg:'absolute'},
        boxShadow:"none"
      }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'flex-start !important',
            width:'100%',
            paddingTop:{xs:'0',lg:'7%'},
          }}>
          <IconButton
            disableRipple
            size="large"
            sx={{  
              display: { lg: 'flex', xs: 'none' }, 
              padding:0,  
          }}>
            <Box
              component="img"
              alt="Logo"
              src={logo}
              sx={{
                height:61,
                maxHeight:210
              }}
            />
          </IconButton>
          <Grid container
            sx={{
              width:'65%',
              display: { lg: 'flex', xs: 'none' },
              position:'relative',
             }}
             spacing={1}>  
            <Button
              sx={{
                position:"absolute",
                right:'3%',
                bottom:'110%',
                color:'#fff',
                fontWeight:700,
                fontSize:'12px',
                zIndex:3
              }}> 
               LP Login
            </Button>
            {Routes.slice(0,6).map((item:any, index:string) => (
                <NavigationButton 
                  {...item} 
                  key={index}
                />
            ))}
          </Grid>
          <Box sx={{
             display: { xs: 'flex', lg: 'none' } ,
             justifyContent:'space-between',
             alignItems:'center',
             width:'100%'
            }}>  
            <IconButton
              disableRipple
              size="large"
              sx={{
                padding:0
              }}
            >
            <Box
              component="img"
              sx={{
                height:45,
                maxHeight:210,
                flexGrow: 1, 
                padding:0,
                display: { xs: 'flex', lg: 'none' },
                marginBottom:'15%'

              }}
              alt="Logo"
              src={MobileLogo}
            />
            </IconButton>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              color='#000'
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
            <Button sx={{
                position:"absolute",
                right:'5%',
                bottom:'110%',
                color:'#fff',
                fontWeight:700,
                fontSize:'12px'
              }}> 
               LP Login
            </Button>
            {Routes.slice(0,6).map((item:any, index:string) => (
                <NavigationButton 
                  {...item} 
                  key={index}
                />
            ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;