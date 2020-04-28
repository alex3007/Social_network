import React from 'react';
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cls.dialogBlock}>
            <NavLink className={cls.dialog} activeClassName={cls.active} to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={cls.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem
        name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messages.map(message => <Message
        message={message.message} id={message.id}/>);

    let newMessageText = state.newMessageText;


    let newMessage = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }


    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    }


    return (

        <div>
            <h3> Message</h3>
            <div>
                <textarea onChange={onMessageChange}
                          value={newMessageText}
                          placeholder={'Enter new message'}
                          className={cls.textArea}></textarea>
                <button onClick={onSendMessage} className={cls.buttonAddPost}>Send</button>
            </div>


            <div className={cls.dialogs}>

                <div className={cls.dialogsItems}>

                    {dialogsElements}

                </div>
                <div className={cls.messages}>

                    {messagesElements}

                </div>
            </div>
        </div>
    );
}
export default Dialogs;