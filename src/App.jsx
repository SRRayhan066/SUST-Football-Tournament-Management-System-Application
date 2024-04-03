import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/loginPage' element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;