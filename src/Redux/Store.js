const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const APDATE_NEW_MESSAGE_TEXT = 'APDATE-NEW-MESSAGE-TEXT';


let store = {

    _state: {

        profilePage: {

            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'How is your buisness?', likesCount: 10},
                {id: 3, message: 'Yo!', likesCount: 14},
                {id: 4, message: 'Yo!', likesCount: 15},
                {id: 5, message: 'Hi!!', likesCount: 13}
            ],
            newPostText: ['Enter message']
        },

        messagesPage: {

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
        },

        sitebar: [
            {id: 1, friend: 'Alex'},
            {id: 2, friend: 'Gleb'},
            {id: 3, friend: 'Vika'},
            {id: 4, friend: 'Olga'},
            {id: 5, friend: 'Ira'}
        ]

    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action){

        if (action.type === ADD_POST) {

         let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        }else if(action.type ===APDATE_NEW_POST_TEXT){

                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
        } else if(action.type === ADD_MESSAGE){
                let newMessage = {
                    id: 6,
                    message: this._state.messagesPage.newMessageText,
                };
                let newName = {
                    id: 6,
                    name: this._state.messagesPage.newNameText,
                };

                this._state.messagesPage.dialogs.push(newName);
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state);
        }else if(action.type === APDATE_NEW_MESSAGE_TEXT){

                this._state.messagesPage.newMessageText = action.newTxt;
                this._callSubscriber(this._state);
        }
     }
};

export const addPostActionCreator = () => {

    return {type:ADD_POST}
};

export const updateNewPostTextActionCreator = (text) => {

    return {type:APDATE_NEW_POST_TEXT, newText:text}
};

export const addMessageActionCreator = () => {

    return {type:ADD_MESSAGE}
};

export const updateNewMessageTextActionCreator = (text) => {

    return {type:APDATE_NEW_MESSAGE_TEXT, newTxt:text}
};

export default store;



