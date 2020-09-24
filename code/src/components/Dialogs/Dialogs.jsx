import React from 'react';
import cls from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    return (
        <div className={cls.dialogsArea}>
            <h2>Messages</h2>
                <div className={cls.dialogs}>
                    <div className={cls.names}>
                        {dialogsElements}
                    </div>
                    <div className={cls.messages}>
                        {messagesElements}
                    </div>
                </div>
            <div className={cls.textArea}>
                <AddMessageForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
};

export default Dialogs;

















