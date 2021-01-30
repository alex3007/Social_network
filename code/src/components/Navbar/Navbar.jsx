import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.navbar}>

            <NavLink to="/profile" className={cls.navbarLink} activeClassName={cls.active}>
                <i className="fa fa-address-book"/>Profile</NavLink>

            <NavLink to="/dialogs" className={cls.navbarLink} activeClassName={cls.active}>
                <i className="fa fa-comments"/>Messages</NavLink>

            <NavLink to="/users" className={cls.navbarLink} activeClassName={cls.active}>
                <i className="fa fa-user"/>Users</NavLink>

            <NavLink to="/friends" className={cls.navbarLink} activeClassName={cls.active}>
                <i className="fa fa-user-circle "/>Friends</NavLink>

            <NavLink to="/music" className={cls.navbarLink} activeClassName={cls.active}>
                <i className="fa fa-headphones"/>Music</NavLink>

            <NavLink to="/video" className={cls.navbarLink} activeClassName={cls.active}>
                <i className="fa fa-play"/> Video</NavLink>

        </div>
    )
}

export default Navbar;