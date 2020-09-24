import React from 'react';
import cls from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={cls.name}>
        <NavLink className={cls.name} to={path}>{props.name+':'}</NavLink>
        <div className={cls.message}>{props.message}</div>
    </div>
};

export default DialogItem;