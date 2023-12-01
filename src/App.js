import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Aside from './component/aside';
import PrimarySearchAppBar from './component/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from './component/theme';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/DashboardPage/Home';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Team from './component/TeamPage/Team';
import Contact from './component/ContactPage/Contact';
import Invoices from './component/InvoicesPage/Invoices';
import Profile from './component/ProfilePage/Profile';
import Calendar from './component/CalendarPage/Calendar';
import FaqPage from './component/FAQPage/FaqPage';
import Bar from './component/BarPage/Bar';
import Pie from './component/PiePage/Pie';
import Line from './component/LinePage/Line';
import Geog from './component/GeogPage/Geog';

function App() {
  const [mode, setMode] = React.useState(localStorage.getItem('theme')||"light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <PrimeReactProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="App">
          <div className='flex'>
            <Aside/>
            <div className=' w-full'>
              <PrimarySearchAppBar setMode={setMode}/>
              <div className="ms-[60px] md:ms-[260px]">
                <Routes>
                  <Route path='/' element={<Navigate to={"dashboard"}/>}/>
                  <Route path='dashboard' element={<Home/>}/> 
                  <Route path='team' element={<Team/>}/> 
                  <Route path='contacts' element={<Contact/>}/> 
                  <Route path='invoices' element={<Invoices/>}/> 
                  <Route path='form' element={<Profile/>}/> 
                  <Route path='calendar' element={<Calendar/>}/> 
                  <Route path='faq' element={<FaqPage/>}/> 
                  <Route path='bar' element={<Bar/>}/> 
                  <Route path='pie' element={<Pie/>}/> 
                  <Route path='line' element={<Line/>}/> 
                  <Route path='geography' element={<Geog/>}/> 
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </PrimeReactProvider>
  );
}

export default App;
