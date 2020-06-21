const ADD_MESSAGE = 'ADD-MESSAGE';
const APDATE_NEW_MESSAGE_TEXT = 'APDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Gleb"},
        {id: 3, name: "Vova"},
        {id: 4, name: "Ira"},
        {id: 5, name: "Lena"}
    ],

    newNameText: ['Alex'],


    messages: [
        {id: 1, message: 'Hi,how are you?'},
        {id: 2, message: 'How is your buisness?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Hi!!'}
    ],
    newMessageText: ['']
}

export const dialogsReducer = (state = initialState, action) => {

        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            let newName = {
                id: 6,
                name: state.newNameText,
            };
            let stateCopy ={...state};
            stateCopy.messages = [...state.messages];
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.dialogs.push(newName);
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;



        } else if (action.type === APDATE_NEW_MESSAGE_TEXT) {


            let stateCopy ={...state};

            stateCopy.newMessageText = action.newTxt;
            return stateCopy;

        }
    return state;
}

export const addMessageActionCreator = () => {

    return {type:ADD_MESSAGE}
};

export const updateNewMessageTextActionCreator = (text) => {

    return {type:APDATE_NEW_MESSAGE_TEXT, newTxt:text}
};

export default dialogsReducer;