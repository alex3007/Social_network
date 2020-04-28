import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

let mapStateToProps = (state) =>{

    return {
    messagesPage:state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () =>{
            dispatch(addMessageActionCreator());
        },
        updateNewMessageBody: (text) =>{
            dispatch(updateNewMessageTextActionCreator(text));
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;