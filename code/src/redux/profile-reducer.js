import {profileAPI} from "../components/api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Frontend is my pleasure', likesCount: 11},
        {id: 2, message: 'You are successful if you like your job', likesCount: 15},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}

        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getProfile = () => async (dispatch) => {
    const response = await profileAPI.getProfile();
    dispatch(setProfile(response.data));
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = () => async (dispatch) => {
    let res = await profileAPI.getStatus();
    dispatch(setStatus(res.data.status));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let res = await profileAPI.updateStatus(status);

        if (res.data.resultCode === 0) {
            dispatch(setStatus(res.data.status));
        }
    } catch(error) {
        //
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile());
    }
}

export default profileReducer;