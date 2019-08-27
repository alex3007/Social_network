import React from 'react';
import cls from './Sitebar.module.css';

const Sitebar = (props) => {

    return (

        <div className={cls.friendItem}>
            <img src="https://wallbox.ru/wallpapers/main/201316/a27d648b57a2ebb.jpg" ></img>
            <br/> {props.friend}

         </div>
            );
}
export default Sitebar;