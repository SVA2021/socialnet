import { usersAPI, followAPI } from "../API/api.js";

const SET_STATE = 'SET_STATE';
const USER_FOLLOW = 'USER_FOLLOW';
const USER_UNFOLLOW = 'USER_UNFOLLOW';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_ANSWER_STATUS = 'SET_ANSWER_STATUS';


let initialState = {
    //get from server
    items: [],
    totalCount: 0,
    //set by user
    pageLimit: 5, // now fixed
    activePage: 1,
    isLoad: true,
    answerStatus: 0 // userID
};
/* 
{
    "items": [
        {
            "name": "NatalliaLanina",
            "id": 20801,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
    ],
    "totalCount": 15827,
    "error": null
}
*/
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE: {
            // debugger
            return {
                ...state,
                items:
                    [...state.items, ...action.itemData.items],
                totalCount: action.itemData.totalCount,
                isLoad: false
            }
        }
        case USER_FOLLOW: {
            // debugger
            return {
                ...state,
                items: state.items.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user;
                }),
            }
        }
        case USER_UNFOLLOW: {
            // debugger
            return {
                ...state,
                items: state.items.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                }),
            }
        }
        case SET_ACTIVE_PAGE: {
            // debugger
            return {
                ...state,
                items: [],//need to clear state and render new users list
                activePage: action.activePage,
                isLoad: true
            }
        }
        case SET_ANSWER_STATUS: {
            // debugger
            return {
                ...state,
                answerStatus: action.userID,
            }
        }
        default:
            return state
    }
}

export default usersReducer;
export const userFollow = (userID) => ({ type: USER_FOLLOW, userID });
export const userUnfollow = (userID) => ({ type: USER_UNFOLLOW, userID });
export const setState = (itemData) => ({ type: SET_STATE, itemData });
export const setActivePage = (activePage) => ({ type: SET_ACTIVE_PAGE, activePage });
export const setAnswerStatus = (userID) => ({ type: SET_ANSWER_STATUS, userID });

export const getUsersThunk = (activePage, pageLimit) => {
    return (dispatch) => {
        usersAPI.getUsers(activePage, pageLimit)
            .then(responce => {
                dispatch(setState(responce.data));
            });
    }
}

export const setActivePageThunk = (activePage, pageLimit) => {
    return (dispatch) => {
        dispatch(setActivePage(activePage, pageLimit));
        usersAPI.getUsers(activePage, pageLimit)
            .then(responce => {
                dispatch(setState(responce.data));
            });
    }
}

export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(setAnswerStatus(userID));
        followAPI.setFollow(userID)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(userFollow(userID));
                    dispatch(setAnswerStatus(0));
                }
            })
    }
}

export const unfollowThunk = (userID) => {
    return (dispatch) => {
        dispatch(setAnswerStatus(userID));
        followAPI.setUnfollow(userID)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(userUnfollow(userID));
                    dispatch(setAnswerStatus(0));
                }
            })
    }
}