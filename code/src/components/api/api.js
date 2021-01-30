import * as axios from "axios";


const  baseURL = `https://todoalexserver.herokuapp.com/social`;

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
    getStatus() {
        return axios.get(baseURL + `/status`);
    },
    updateStatus(status) {
        return axios.put(baseURL + `/status`, { status: status });
    },
    saveProfile(profile) {
        return axios.put(baseURL + `/profile`, {profile: profile});
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



