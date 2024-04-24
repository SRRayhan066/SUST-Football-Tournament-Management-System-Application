import React, { useEffect } from 'react';
import 'antd/dist/reset.css';
import '../css/contentPage.css';
import { Avatar, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = ({tokenValue,setIsLoggedIn}) => {

    const navigate = useNavigate();

    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    const [color, setColor] = useState(localStorage.getItem('headerColor') || colorList[0]);
    const [role, setRole] = useState(localStorage.getItem('userRole') || "");

    useEffect(()=>{
        const token = tokenValue;
        const expiresIn = 3600;
        Cookies.set('accessToken',token,{expires:expiresIn});

        console.log("Here "+token);
        axios.get("http://localhost:8081/user/info",{
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            console.log(res.data);
            const val = res.data.role;
            switch(val){
                case 'admin' :
                    setColor(colorList[0]);
                    break;
                case 'player' :
                    setColor(colorList[1]);
                    break;
                case 'manager' :
                    setColor(colorList[2]);
                    break;
                default :
                    setColor(colorList[3]);
                    break;
            }
            setRole(val.toUpperCase());
            localStorage.setItem('headerColor', color);
            localStorage.setItem('userRole', val);
        })
        .catch(error=>console.log(error));
    },[]);

    const logOut = () =>{
        Cookies.remove('accessToken');
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
            <div className="header">
                {/* <h1>Hello</h1> */}
                <div className="nav-left-content">
                    <img src='../../public/Images/logo.png'></img>
                </div>
                <div className="nav-right-content">
                    <h2>{role}</h2>
                    <Avatar
                        className='avatar-class'
                        style={{
                            backgroundColor: color,
                            verticalAlign: 'middle',
                            marginRight: '15px'
                        }}
                        size='large'
                        icon={<UserOutlined/>}
                    >
                    </Avatar>
                    <Button type='primary' danger onClick={logOut}>Log Out</Button>
                </div>
            </div>
    );
};

export default Header;