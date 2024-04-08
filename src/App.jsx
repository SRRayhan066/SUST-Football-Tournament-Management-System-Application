import React from 'react';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ContentPage from './pages/ContentPage';
import UpcomingEvent from './pages/UpcomingEvent';
import Tournament from './pages/Tournament';
import About from './pages/About';
import QuarterFinal from './pages/QuarterFinal';

import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>

        <Route path='/loginPage' element={<LoginPage/>}></Route>

        <Route path='/tournamentsPage' element={<Tournament/>}></Route>
        <Route path='/quarterFinal' element={<QuarterFinal/>}></Route>

        <Route path='/upcomingEvents' element={<UpcomingEvent/>}></Route>
        <Route path='/about' element={<About/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;