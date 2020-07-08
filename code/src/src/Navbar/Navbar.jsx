import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <div className={cls.navbarItem}>
                <i className="fa fa-address-book"/>
                <NavLink to="/profile" className={cls.navbarLink} activeClassName={cls.active}>Profile</NavLink>
            </div>
            <div className={`${cls.navbarItem} ${cls.activel}`}>
                <i className="fa fa-comments"/>
                <NavLink to="/dialogs" className={cls.navbarLink} activeClassName={cls.active}>Messages</NavLink>
            </div>
            <div className={`${cls.navbarItem} ${cls.activel}`}>
                <i className="fa fa-user"/>
                <NavLink to="/users" className={cls.navbarLink} activeClassName={cls.active}>Users</NavLink>
            </div>

            <div className={cls.navbarItem}>
                <i className="fa fa-newspaper-o"/>
                <NavLink className={cls.navbarLink} activeclassName={cls.active}>News</NavLink>
            </div>
            <div className={cls.navbarItem}>
                <i className="fa fa-headphones"/>
                <NavLink className={cls.navbarLink} activeclassName={cls.active}>Music</NavLink>
            </div>
            <div className={cls.navbarItem}>
                <i className="fa fa-play"/>
                <NavLink className={cls.navbarLink} activeclassName={cls.active}> Video</NavLink>
            </div>
            <div className={cls.navbarItem}>
                <i className="fa fa-user-circle "/>
                <NavLink className={cls.navbarLink} activeclassName={cls.active}>Friends</NavLink>
            </div>

        </div>
    )
}

export default Navbar;