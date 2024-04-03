import React, { useState } from 'react';
import '../css/loginPage.css'
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const LoginPage = () => {
    
    const [loginStatus,setLoginStatus] = useState(true);

    const onCheckLogin = () =>{
        switch(loginStatus){
            case true:
                return 'Login';
            case false:
                return 'Register';
        }
    }

    const selectPState = () =>{
        switch(loginStatus){
            case true:
                return "Don't have an account? ";
            case false:
                return "Already have an account? "
        }
    }

    const onSetLoginStatus = () =>{
        setLoginStatus(prev => !prev);
    }

    return (
        <div className='login-page-main-container'>
            <div className="login-page-container">
                <div className="login-page-left-container">
                    <img src='../../public/Images/footballMatchImage.jpg'></img>
                </div>
                <div className="login-page-right-container">
                    <div className="login-page-right-container2">
                        <h2>SUST Football Tournament Management System</h2>

                        <h1>{onCheckLogin()}</h1>
                        <p>An web application for the management of Football Tournament</p>

                        <div className="login-page-right-container2">
                            {loginStatus && (
                                <LoginForm/>
                            )}
                            {!loginStatus && (
                                <RegistrationForm/>
                            )}
                            <div className="login-page-state-change-class">
                                <p>{selectPState()}<a onClick={onSetLoginStatus}><b>Click here</b></a></p>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;