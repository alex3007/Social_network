import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from "./sidebar-reducer";

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

        sidebar: [
            {id: 1, friend: 'Alex'},
            {id: 2, friend: 'Gleb'},
            {id: 3, friend: 'Vika'},
            {id: 4, friend: 'Olga'},
            {id: 5, friend: 'Ira'}
        ]

    },

    dispatch(action) {

        profileReducer(this._state.profilePage,action);
        dialogsReducer(this._state.messagesPage,action);
        sidebarReducer(this._state)
        this._callSubscriber(this._state);
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    }
};

export default store;



