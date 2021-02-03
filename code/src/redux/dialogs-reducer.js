const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'User'},
        {id: 2, name: 'Sveta'},
    ],
    messages: [
        {id: 1, message: 'Hi! How are your?'},
        {id: 2, message: 'I am fine!'}

    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
                dialogs: [...state.dialogs, {id: 1, name: 'Alex'}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;