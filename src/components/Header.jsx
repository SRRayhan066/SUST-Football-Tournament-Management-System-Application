import React from 'react';
import 'antd/dist/reset.css';
import '../css/contentPage.css';
import { Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Header = () => {

    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    const [color,setColor] = useState(colorList[0]);

    return (
            <div className="header">
                {/* <h1>Hello</h1> */}
                <div className="nav-left-content">
                    <img src='../../public/Images/logo.png'></img>
                </div>
                <div className="nav-right-content">
                    <h2>SUST FOOTBALL TOURNAMENT MANAGEMENT SYSTEM</h2>
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
                    <LogoutOutlined className='log-out-class'/>
                </div>
            </div>
    );
};

export default Header;