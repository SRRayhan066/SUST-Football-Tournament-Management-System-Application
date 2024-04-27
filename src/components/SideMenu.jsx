import React, { useState } from 'react';
import 'antd/dist/reset.css';
import '../css/contentPage.css';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';

import { RiFootballLine, RiTeamFill } from "react-icons/ri";
import { TbSoccerField, TbUsersPlus } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { LuGlasses, LuUserPlus2 } from "react-icons/lu";
import { MdLeaderboard, MdPendingActions } from "react-icons/md";
import { BiSolidCircleQuarter } from "react-icons/bi";
import { WiMoonFirstQuarter } from "react-icons/wi";
import { FaCircle, FaUserPlus } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { ImUserPlus } from "react-icons/im";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { MdOutlineUpcoming } from "react-icons/md";

const {SubMenu} = Menu;



const SideMenu = (props) => {

    const USERTYPE = {
        GENERAL:'general',
        PLAYER:'player',
        MANAGER:'manager',
        ADMIN:'admin'
    }

    const [checkTournamentDetails,setCheckTournamentDetails] = useState(true);
    const [checkUpcomingEventDetails,setCheckUpcomingEventDetails] = useState(true);
    const [userType,setUserType] = useState(USERTYPE.ADMIN);
    const [openKeys, setOpenKeys] = useState([]);

    const matchesMenuOption = () =>{
        let menuOption;
        menuOption = (
            <SubMenu key='matches' icon={<TbSoccerField />} title='Matches'>
                <Menu.Item key='quarterFinal' icon={<BiSolidCircleQuarter />}>
                    <Link to='/quarterFinal'>Quarter Final</Link>
                </Menu.Item>
                <Menu.Item key='semiFinal' icon={<WiMoonFirstQuarter />}>
                    <Link to='/semiFinal'>Semi Final</Link>
                </Menu.Item>
                <Menu.Item key='final' icon={<FaCircle />}>
                    <Link to='/final'>Final</Link>
                </Menu.Item>
            </SubMenu>
        )
        return menuOption;
    }

    const tournamentMenuOption = () =>{
        let menuOption;
        if(!checkTournamentDetails){
            menuOption = (
                <Menu.Item key='tournaments' icon={<RiFootballLine />}>
                    <Link to='/tournamentsPage'>Tournaments</Link>
                </Menu.Item>
            )
        }else{
            menuOption = (
                <SubMenu key='tournaments' icon={<RiFootballLine />} title='Tournament' onTitleClick={() => setOpenKeys(['tournaments'])}>
                    {matchesMenuOption()}
                    <Menu.Item key='teams' icon={<RiTeamFill />}>
                        <Link to='/teams'>Teams</Link>
                    </Menu.Item>
                    <Menu.Item key='refress' icon={<GiWhistle />}>
                        <Link to='/refrees'>Refrees</Link>
                    </Menu.Item>
                    {/* <Menu.Item key='managers' icon={<LuGlasses />}>
                        <Link to='/managers'>Managers</Link>
                    </Menu.Item>
                    <Menu.Item key='leaderBoard' icon={<MdLeaderboard />}>
                        <Link to='/leaderboard'>Leaderboard</Link>
                    </Menu.Item> */}
                </SubMenu>
            )
        }
        return menuOption;
    }

    const pendingRequestMenuOption = () =>{
        let menuOption;
        if(userType===USERTYPE.ADMIN){
            menuOption = (
                <SubMenu key='pendingRequests' icon={<MdPendingActions />} title='Pending Request'>
                    <Menu.Item key="teamRequest" icon={<TbUsersPlus />}>
                        <Link to='/teamsRequest'>Team's Request</Link>
                    </Menu.Item>
                    
                </SubMenu>
            )
        }else if(userType===USERTYPE.MANAGER){
            menuOption = (
                <SubMenu key='pendingRequests' icon={<MdPendingActions />} title='Pending Request'>
                    <Menu.Item key="playerRequest" icon={<LuUserPlus2 />}>
                        <Link to='/playersRequest'>Player's Request</Link>
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
                <SubMenu key='upcomingEvents' icon={<IoMdFootball />} title='Upcoming Event' onTitleClick={() => setOpenKeys(['upcomingEvents'])}>
                    <Menu.Item key='participatedTeams' icon={<RiTeamFill />}>
                        <Link to='/teams'>Participated Teams</Link>
                    </Menu.Item>
                    {(userType===USERTYPE.ADMIN || userType===USERTYPE.MANAGER) && pendingRequestMenuOption()}
                </SubMenu>
            )
        }else{
            menuOption = (
                <Menu.Item icon={<IoMdFootball />} key='upcomingEvents' title='Upcoming Events'>
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

            <Menu.Item key='about' icon={<HiMiniQuestionMarkCircle />}>
                <Link to='/about'>About</Link>
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;