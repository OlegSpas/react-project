import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HOME, FIRM, INVESTMENTS } from './routes/routes.ts';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import Home from './components/homePage/home.tsx';
import FirmPage from './components/firmPage/firmPage.tsx';
import InvestmentsPage from './components/investmentsPage/investmentsPage.tsx';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Charter", 
      "Courier New",
      "slab-serif"
    ].join(','),
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
              <Route path={FIRM} element={<FirmPage />} />
              <Route path={INVESTMENTS} element={<InvestmentsPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}
export default App;
