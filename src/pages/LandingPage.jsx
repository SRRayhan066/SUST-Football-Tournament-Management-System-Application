import React from 'react';
import 'antd/dist/reset.css'
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/landingPage.css';


const LandingPage = ({isLoggedIn,handleLogin}) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="container">
                    <div className="left-container">
                        <div className="left-containers">
                            <h1>SUST Football Tournament Management System</h1>
                            <p>The application designed for managing information about football tournaments at Shahjalal University of Science and Technology (SUST) plays a crucial role in streamlining the organization and coordination of these annual events. With separate tournaments held for both boys and girls, encompassing nearly 27 departments, the scale and complexity of managing such competitions necessitate a robust and efficient system. The application likely includes features such as team registration, fixture scheduling, match results recording, player statistics tracking, and overall tournament management. It provides a centralized platform for teams to register, allows organizers to create match schedules, and enables updating a match result and standings.</p>
                            <div className="button-container">
                                <Space>
                                    <Button size='large'
                                    onClick={()=>{
                                        handleLogin();
                                        navigate("/tournamentsPage");
                                    }}>View as a guest</Button>
                                    <Button type='primary' size='large' className='login-button' 
                                    onClick={()=>{
                                        navigate("/loginPage");
                                    }}>Login</Button>
                                </Space>
                                
                            </div> 
                        </div>
                    </div>
                    <div className="right-container">
                        <img src='../../public/Images/landingPage.png' alt='image'></img>
                    </div>
                
            </div>
        </div>
    );
};

export default LandingPage;