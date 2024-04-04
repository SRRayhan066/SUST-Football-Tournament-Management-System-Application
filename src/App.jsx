import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ContentPage from './pages/ContentPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
        <Route path='/contentPage' element={<ContentPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;