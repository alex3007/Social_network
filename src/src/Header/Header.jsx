import React from 'react';
import cls from './Header.module.css';
import message from "./../Assets/images/message.png";


const Header = () => {
return (
    <header className={cls.header}>
        <div className={cls.header_block}><img className={cls.header_logo} src={message}/>
    <p className={cls.header_title}>Сheerful conversation!</p></div>
    </header>
  );
}
export default Header;