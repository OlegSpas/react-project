import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HOME } from './routes/routes.ts'
import Header from './components/header/header.tsx'
import Footer from './components/footer/footer.tsx'
import Home from './components/home/home.tsx';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Charter", 
      "Courier New",
      "slab-serif"
    ].join(','),
    overline:{
      fontSize: '16px',
      lineHeight: 1.2,
      fontWeight: 700,
    }
  },
  breakpoints: {
    values: {
      xs: 0, 
      sm: 600, 
      md: 775, 
      lg: 1025, 
      xl: 1280, 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path={HOME} element={<Home />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}
export default App;
