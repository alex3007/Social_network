import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {

    return (
        <nav className={cls.navbar}>
            <div className={cls.item}>
                <NavLink activeClassName={cls.active} to="/Profile">Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink activeClassName={cls.active} to="/Dialogs">Dialogs</NavLink>
            </div>
            <div className={cls.friendsBlock}>
                <h3> Friends</h3>
                <div className={cls.friendCard}>
                    <SidebarContainer />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;