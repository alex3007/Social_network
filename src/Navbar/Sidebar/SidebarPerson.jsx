import React from 'react';
import cls from './SitebarPerson.module.css';

const SidebarPerson = (props) => {

    return (

        <div className={cls.friendItem}>

            <img src="https://wallbox.ru/wallpapers/main/201316/a27d648b57a2ebb.jpg" alt="avatar" ></img>

            <br/> {props.friend}

         </div>
            );
}
export default SidebarPerson;