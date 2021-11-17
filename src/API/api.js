import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '30256688-2360-4496-aaab-8e45acf8cc2e'
    }
});

export const usersAPI = {
    getUsers (activePage = 1, pageLimit = 5) {
    return instance.get(`users?page=${activePage}&count=${pageLimit}`,
        {
            withCredentials: true
        })
        .then((responce) => (responce))
}}

export const followAPI = {
    setFollow (userID) {
        return instance.post(`follow/` + userID, {})
        .then((responce) => (responce))
    },
    setUnfollow (userID) {
        return instance.delete(`follow/` + userID)
        .then((responce) => (responce))
    }
}