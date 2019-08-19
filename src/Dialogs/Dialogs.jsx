import React from 'react';
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";




const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cls.dialogBlock}>
            <NavLink className={cls.dialog}  activeClassName={cls.active} to={path}>{props.name}</NavLink>
        </div>
    );
}


const Message = (props) => {
       return (

            <div className={cls.message}>{props.message}</div>

    );
}



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem
name ={dialog.name} id={dialog.id} />);


    let messagesElements = props.state.messages.map(message => <Message
        message ={message.message} />);



    return (

        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={cls.messages}>

                {messagesElements}

            </div>
        </div>
    );
}
export default Dialogs;