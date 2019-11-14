import React from 'react';
import cls from './Header.module.css';
const Header = () => {
return (
    <header className={cls.header}>
        <div className={cls.header_block}><img className={cls.header_logo} src="./sun.png"></img>
    <p className={cls.header_title}>Сheerful conversation!</p></div>
    </header>
  );
}
export default Header;