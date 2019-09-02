const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'How is your buisness?', likesCount: 10},
        {id: 3, message: 'Yo!', likesCount: 14},
        {id: 4, message: 'Yo!', likesCount: 15},
        {id: 5, message: 'Hi!!', likesCount: 13}
    ],
    newPostText: ['Enter message']
};

export const profileReducer = (state = initialState , action) => {

           if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            let stateCopy ={...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;


        }else if(action.type ===APDATE_NEW_POST_TEXT) {

               let stateCopy ={...state};

               stateCopy.newPostText = action.newText;
               return stateCopy;

           }

            return state;
 }

        export const addPostActionCreator = () => {

            return {type:ADD_POST}
        };

        export const updateNewPostTextActionCreator = (text) => {

            return {type:APDATE_NEW_POST_TEXT, newText:text}
        };

export default profileReducer;
