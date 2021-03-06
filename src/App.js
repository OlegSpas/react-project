import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HOME, FIRM, INVESTMENTS, TEAM, NEWS, CONTACT, CASESTUDIES, TERMS, SITEMAP } from './routes/routes.ts';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';
import Home from './components/homePage/home.tsx';
import FirmPage from './components/firmPage/firmPage.tsx';
import InvestmentsPage from './components/investmentsPage/investmentsPage.tsx';
import TeamPage from './components/TeamPage/teamPage.tsx';
import NewsPage from './components/NewsPage/newsPage.tsx';
import ContactPage from './components/contactPage/contactPage.tsx';
import CaseStudiesPage from './components/caseStudiesPage/caseStudiesPage.tsx';
import TeamMemberPage from '../src/components/teamMemberPage/teamMemberPage.tsx';
import TermsOfUse from './components/termsOfUsePage/termsOfUsePage.tsx';
import CaseStudyPage from './components/caseStudyPage/caseStudyPage.tsx';
import SiteMapPage from './components/siteMapPage/siteMapPage.tsx';

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
              <Route path={CASESTUDIES} element={<CaseStudiesPage/>}/>
              <Route path={TEAM} element={<TeamPage/>}/>
              <Route path={NEWS} element={<NewsPage/>}/>
              <Route path={CONTACT} element={<ContactPage/>}/>
              <Route path={`${TEAM}/:id`} element={<TeamMemberPage/>}/>
              <Route path={TERMS} element={<TermsOfUse/>}/>
              <Route path={`${CASESTUDIES}/:id`} element={<CaseStudyPage/>}/>
              <Route path={SITEMAP} element={<SiteMapPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}
export default App;
