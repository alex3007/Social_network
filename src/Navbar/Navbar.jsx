import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {

    return (
        <nav className={cls.navbar}>
            <div className={cls.item}>
                <i className="fa fa-user"/> <NavLink className={cls.link} activeClassName={cls.active} to="/Profile">Profile</NavLink>
            </div>
            <div className={cls.item}>
                <i className="fa fa-comments"/> <NavLink className={cls.link} activeClassName={cls.active} to="/Dialogs">Dialogs</NavLink>
            </div>
            <div className={cls.item}>
                <i className="fa fa-newspaper-o"/><NavLink className={cls.link} activeclassName={cls.active}> News</NavLink><br/>
            </div>
            <div className={cls.item}>
                <i className="fa fa-headphones"/><NavLink className={cls.link} activeclassName={cls.active}> Music</NavLink><br/>
            </div>
            <div className={cls.item}>
                <i className="fa fa-play"/> <NavLink className={cls.link} activeclassName={cls.active}> Video</NavLink><br/>
            </div>
            <div className={cls.friendsBlock}>
                <h3><i className="fa fa-user-circle "/> Friends</h3>
                <div className={cls.friendCard}>
                    <SidebarContainer />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;