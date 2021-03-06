import React from 'react';
import cls from './Header.module.css';
import title from "../../assets/images/message.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cls.header}>
            <div className={cls.headerContainer}>
                <img className={cls.headerLogo} src={title}/>
                <p className={cls.headerTitle}>Сheerful conversation!</p>
                <div className={cls.headerLogin}>
                    {props.isAuth ?
                        <div className={cls.loginContainer}>
                            <div className={cls.nickName}>
                                {props.login}
                            </div>
                            <button className={cls.headerBtn} onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to={'/login'}>
                            <button className={cls.headerBtn}>
                                Log in
                            </button>
                        </NavLink>}
                </div>
            </div>
        </header>
    );
};
export default Header;