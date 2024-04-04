import React from 'react';
import '../css/contentPage.css';
import { useState } from 'react';
import About from './About';
import Profie from './Profie';
import Tournament from './Tournament';
import UpcomingEvent from './UpcomingEvent';
import 'antd/dist/reset.css';
import { Menu, Avatar } from 'antd';
import { DribbbleOutlined, CalendarOutlined, BookOutlined, TrademarkOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const ContentPage = () => {

    const MENUS = {
        TOURNAMENT:'tournament',
        UPCOMINGEVENT:'upcomingEvent',
        ABOUT:'about'
    }

    const USERTYPE = {
        GENERAL:'general',
        PLAYER:'player',
        MANAGER:'manager',
        ADMIN:'admin'
    }

    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    const [selectedMenu,setSelectedMenu] = useState('tournament');
    const [userType,setUserType] = useState(USERTYPE.PLAYER);
    const [color,setColor] = useState(colorList[0]);

    let items = [
        {
            key:'tournament',
            label:'Tournaments',
            icon: <DribbbleOutlined />  
        },
        {
            key:'upcomingEvent',
            label:'Upcoming Event',
            icon: <CalendarOutlined />
        },
        {
            key:'about',
            label:'About',
            icon: <BookOutlined />
        }
    ]


    const onMenuClick = (e) =>{
        console.log(e.key);
        setSelectedMenu(e.key);
        onAddChildren();
    }

    console.log('Selected menu:', selectedMenu);
    

    return (  
        <div>
            <div className="header">
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
                        size="large"
                        icon={<UserOutlined/>}
                    >
                        
                    </Avatar>
                    <LogoutOutlined className='log-out-class'/>
                </div>
            </div>
            <div className="content-page-container">
                <div className="content-page-left-container">
                    <Menu
                        onClick={onMenuClick}
                        className='menu-bar-class'
                        items={items}
                        mode='inline'
                        selectedKeys={[selectedMenu]}
                    >      
                    </Menu>
                </div>
                <div className="content-page-right-container">
                    {selectedMenu===MENUS.TOURNAMENT && <Tournament/>}
                    {selectedMenu===MENUS.UPCOMINGEVENT && <UpcomingEvent/>}
                    {selectedMenu===MENUS.ABOUT && <About/>}
                </div>
            </div>
            <div className="footer">
                <p>All rights reserved to S R Rayhan</p>
                <TrademarkOutlined/>
            </div>
        </div>
    );
};

export default ContentPage;