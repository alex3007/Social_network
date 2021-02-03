import * as axios from "axios";


const  baseURL = `https://todoalexserver.herokuapp.com/social`;
//const  baseURL = `http://localhost:80/social`;

export const usersAPI = {

    getUsers() {
        return axios.get(baseURL)
    },
    follow(userId) {
        return axios.put(baseURL, {id: userId})
    },
    unfollow(userId) {
        return axios.delete(baseURL, {id: userId})
    }
};

export const profileAPI = {
    getProfile() {
        return axios.get(baseURL + `/profile`)
    },
    getUserProfile(userId) {
        return axios.put(baseURL + `/profile`, { userId: userId })
    },
    getStatus() {
        return axios.get(baseURL + `/status`);
    },
    updateStatus(status) {
        return axios.put(baseURL + `/status`, { status: status });
    },
    saveProfile(profile) {
        return axios.post(baseURL + `/profile`, {profile: profile});
    }
};

export const authAPI = {
    me() {
        return axios.get(baseURL +`/auth`);
    },
    login(email, password) {
        return axios.post(baseURL +`/auth`, { email: email, password: password});
    },
    logout() {
        return axios.delete(baseURL +`/auth`);
    }
};



