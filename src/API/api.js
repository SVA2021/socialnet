import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '30256688-2360-4496-aaab-8e45acf8cc2e'
    }
});

export const usersAPI = {
    getUsers(activePage = 1, pageLimit = 5) {
        // debugger
        return instance.get(`users?page=${activePage}&count=${pageLimit}`)
            .then((responce) => (responce))
    },
    setFollow(userID) {
        return instance.post(`follow/` + userID, {})
            .then((responce) => (responce))
    },
    setUnfollow(userID) {
        return instance.delete(`follow/` + userID)
            .then((responce) => (responce))
    },
    getProfile(userID) {
        // debugger
        return instance.get(`profile/` + userID)
            .then((responce) => (responce))
    }
}

export const authAPI = {
    getLogin() {
        // debugger
        return instance.get(`auth/me`)
            .then((responce) => (responce))
    }
}