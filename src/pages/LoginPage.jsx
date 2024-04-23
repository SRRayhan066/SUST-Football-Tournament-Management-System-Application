import React, { useState, useEffect } from 'react';
import '../css/loginPage.css'
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { Alert } from 'antd';

const LoginPage = ({setIsLoggedIn}) => {
    
    const [loginStatus,setLoginStatus] = useState(true);
    const [registrationSucces,setRegistrationSuccess] = useState(false);
    const [loginSucces,setLoginSuccess] = useState(false);

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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRegistrationSuccess(false);
            setLoginSuccess(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [registrationSucces,loginSucces]);

    return (
        <div className='login-page-main-container'>
            
            <div className="login-page-container">
                {registrationSucces && <Alert className='alert-class' message='Registration Successfull' type='success' showIcon closable/>}
                {loginSucces && <Alert className='alert-class' message='Login Successfull' type='success' showIcon closable/>}
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
                                <LoginForm setLoginSuccess={setLoginSuccess} setIsLoggedIn={setIsLoggedIn}/>
                            )}
                            {!loginStatus && (
                                <RegistrationForm setLoginStatus={setLoginStatus} setRegistrationSuccess={setRegistrationSuccess}/>
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