import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <div className={cls.item}>
                <NavLink activeClassName={cls.active} to="/Profile">Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink activeClassName={cls.active} to="/Dialogs">Dialogs</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;