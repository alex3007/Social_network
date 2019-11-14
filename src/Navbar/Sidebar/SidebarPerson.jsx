import React from 'react';
import cls from './SitebarPerson.module.css';

const SidebarPerson = (props) => {

    return (

        <div className={cls.friendItem}>

            <img src="../../../friend.jpg" alt="avatar" ></img>

            <br/> {props.friend}

         </div>
            );
}
export default SidebarPerson;