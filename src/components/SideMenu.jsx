import React, { useState } from 'react';
import 'antd/dist/reset.css';
import '../css/contentPage.css';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';

const {SubMenu} = Menu;



const SideMenu = (props) => {

    const USERTYPE = {
        GENERAL:'general',
        PLAYER:'player',
        MANAGER:'manager',
        ADMIN:'admin'
    }

    const [checkTournamentDetails,setCheckTournamentDetails] = useState(true);
    const [checkUpcomingEventDetails,setCheckUpcomingEventDetails] = useState(false);
    const [userType,setUserType] = useState(USERTYPE.PLAYER);
    const [openKeys, setOpenKeys] = useState([]);

    const matchesMenuOption = () =>{
        let menuOption;
        menuOption = (
            <SubMenu key='matches' title='Matches'>
                <Menu.Item key='quarterFinal'>
                    <Link to='/quarterFinal'>Quarter Final</Link>
                </Menu.Item>
                <Menu.Item key='semiFinal'>
                    <Link>Semi Final</Link>
                </Menu.Item>
                <Menu.Item key='final'>
                    <Link>Final</Link>
                </Menu.Item>
            </SubMenu>
        )
        return menuOption;
    }

    const tournamentMenuOption = () =>{
        let menuOption;
        if(!checkTournamentDetails){
            menuOption = (
                <Menu.Item key='tournaments'>
                    <Link to='/tournamentsPage'>Tournaments</Link>
                </Menu.Item>
            )
        }else{
            menuOption = (
                <SubMenu key='tournaments' title='Tournament' onTitleClick={() => setOpenKeys(['tournaments'])}>
                    {matchesMenuOption()}
                    <Menu.Item key='teams'>
                        <Link>Teams</Link>
                    </Menu.Item>
                    <Menu.Item key='refress'>
                        <Link>Refrees</Link>
                    </Menu.Item>
                    <Menu.Item key='managers'>
                        <Link>Managers</Link>
                    </Menu.Item>
                    <Menu.Item key='leaderBoard'>
                        <Link>Leaderboard</Link>
                    </Menu.Item>
                </SubMenu>
            )
        }
        return menuOption;
    }

    const pendingRequestMenuOption = () =>{
        let menuOption;
        if(userType===USERTYPE.ADMIN){
            menuOption = (
                <SubMenu key='pendingRequests' title='Pending Request'>
                    <Menu.Item key="teamRequest">
                        <Link>Team's Request</Link>
                    </Menu.Item>
                    <Menu.Item key='managerRequest'>
                        <Link>Manager Request</Link>
                    </Menu.Item>
                </SubMenu>
            )
        }else if(userType===USERTYPE.MANAGER){
            menuOption = (
                <SubMenu key='pendingRequests' title='Pending Request'>
                    <Menu.Item key="playerRequest">
                        <Link>Player's Request</Link>
                    </Menu.Item>
                </SubMenu>
            )
        }
        return menuOption;
    }

    const upcomingEventMenuOption = () =>{
        let menuOption;
        if(checkUpcomingEventDetails){
            menuOption = (
                <SubMenu key='upcomingEvents' title='Upcoming Event' onTitleClick={() => setOpenKeys(['upcomingEvents'])}>
                    <Menu.Item key='participatedTeams'>
                        <Link>Participated Teams</Link>
                    </Menu.Item>
                    {(userType===USERTYPE.ADMIN || userType===USERTYPE.MANAGER) && pendingRequestMenuOption()}
                </SubMenu>
            )
        }else{
            menuOption = (
                <Menu.Item key='upcomingEvents' title='Upcoming Events'>
                    <Link to='/upcomingEvents'>Upcoming Events</Link>
                </Menu.Item>
            )
        }
        return menuOption;
    }

    return (
        <Menu className='menu-bar-class' mode='inline'
         selectedKeys={props.selectedOption}
         defaultOpenKeys={openKeys}
         onOpenChange={(keys) => setOpenKeys(keys)}
         >
            
            {tournamentMenuOption()}
            
            {upcomingEventMenuOption()}

            <Menu.Item key='about'>
                <Link to='/about'>About</Link>
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;