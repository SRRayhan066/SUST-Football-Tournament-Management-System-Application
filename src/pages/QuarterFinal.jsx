import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';

const QuarterFinal = () => {
    return (
        <div>
            <Header/>
            <div className="content-page-container">
                <div className="content-page-left-container">
                    <SideMenu selectedOption='quarterFinal'/>
                </div>
                <div className="content-page-right-container">

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default QuarterFinal;