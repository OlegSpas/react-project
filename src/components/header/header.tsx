import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Button } from '@mui/material';
import NavigationButton from '../layout/navButtons.tsx';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes } from '../../routes/navRoutes.ts';
import logo  from '../../images/logo.svg';
import MobileLogo from '../../images/mobileLogo.svg';
import { Link } from 'react-router-dom';


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
        backgroundColor: { xs: '#fff', lg: '#0F100F' },
        position:{xs:'static', lg:'static'},
        boxShadow:"none"
      }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center !important',
            width:'100%',
            paddingTop:{xs:'0',lg:'1.5%'},
            paddingBottom:{xs:'0',lg:'1.5%'}
          }}>
          <IconButton
            disableRipple
            size="large"
            sx={{  
              display: { lg: 'flex', xs: 'none' }, 
              padding:0,  
          }}>
            <Link to={{pathname:`/`}}>
              <Box
                component="img"
                alt="Logo"
                src={logo}
                sx={{
                  height:50,
                  maxHeight:210
                }}
              />
            </Link>
          </IconButton>
          <Box
            sx={{
              width:{lg:'63%',xl:'50%'},
              display: { lg: 'flex', xs: 'none' },
              alignItems:'center',
              position:'relative',
             }}
            >  
            <Button
              sx={{
                position:"absolute",
                right:'0%',
                bottom:'60%',
                color:'#fff',
                fontWeight:700,
                fontSize:'12px',
                zIndex:3
              }}> 
               LP Login
            </Button>
            {Routes.slice(1,7).map((item:any, index:string) => (
                <NavigationButton 
                  item={item} 
                  key={index}
                />
            ))}
          </Box>
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
            <Link to={{pathname:`/`}}>
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
            </Link>
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
            {Routes.slice(1,7).map((item:any, index:string) => (
                <NavigationButton
                  item={item}
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