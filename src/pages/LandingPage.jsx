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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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