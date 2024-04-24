import React, { useEffect, useState } from 'react';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ContentPage from './pages/ContentPage';
import UpcomingEvent from './pages/UpcomingEvent';
import Tournament from './pages/Tournament';
import About from './pages/About';
import QuarterFinal from './pages/QuarterFinal';
import SemiFinal from './pages/SemiFinal';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import Final from './pages/Final';
import Teams from './pages/Teams';
import Refrees from './pages/Refrees';
import Managers from './pages/Managers';
import Leaderboard from './pages/Leaderboard';
import TeamsPendingRequest from './pages/TeamsPendingRequest';
import ManagersPendingRequest from './pages/ManagersPendingRequest';
import PlayersPendingRequest from './pages/PlayersPendingRequest';



const App = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [tokenValue,setTokenValue] = useState('');

  const handleLogin = () =>{
    setIsLoggedIn(true);
    console.log("Check login "+isLoggedIn);
  }

  useEffect(()=>{
    const token = getToken();
    setTokenValue(token);
    if(token!='') setIsLoggedIn(true);
    else setIsLoggedIn(false);
  },[]);

  const getToken = () => {
    // Check cookies first
    const cookieToken = getCookie('accessToken');
    if (cookieToken) {
      return cookieToken;
    }else return '';
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(name))
      ?.split('=')[1];
    return cookieValue || '';
  };

  return (

    <BrowserRouter>
      <div>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
            <Route path="/loginPage" element={<LoginPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
          </Routes>
        ) : (
          <div>
            <Header tokenValue={tokenValue}/>
            <div className="content-page-container">
              <div className="content-page-left-container">
                <SideMenu />
              </div>
              <div className="content-page-right-container">
                <Routes>
                  <Route path='/tournamentsPage' element={<Tournament setIsLoggedIn={setIsLoggedIn} />}></Route>

                  <Route path='/quarterFinal' element={<QuarterFinal/>}></Route>
                  <Route path='/semiFinal' element={<SemiFinal/>}></Route>
                  <Route path='/final' element={<Final/>}></Route>

                  <Route path='/teams' element={<Teams/>}></Route>

                  <Route path='/refrees' element={<Refrees/>}></Route>

                  {/* <Route path='/managers' element={<Managers/>}></Route>

                  <Route path='/leaderboard' element={<Leaderboard/>}></Route> */}

                  <Route path='/teamsRequest' element={<TeamsPendingRequest/>}></Route>
                  <Route path='/managersRequest' element={<ManagersPendingRequest/>}></Route>
                  <Route path='/playersRequest' element={<PlayersPendingRequest/>}></Route>

                  <Route path='/about' element={<About/>}></Route>
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;