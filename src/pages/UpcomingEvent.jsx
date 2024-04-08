import React from 'react';
import Header from '../components/Header';
import '../css/contentPage.css'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';

const UpcomingEvent = () => {
    return (
        <div>
            <Header/>
            <div className="content-page-container">
                <div className="content-page-left-container">
                    <SideMenu selectedOption='upcomingEvents' />
                </div>
                <div className="content-page-right-container">

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UpcomingEvent;