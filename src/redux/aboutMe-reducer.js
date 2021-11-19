import { usersAPI } from "../API/api";

const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SET_MY_ID = 'SET_MY_ID';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';

let initialState = {
    status: 'please login',
    myID: 10,
    auth: {
        id: null
    }
};

const aboutMeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_STATUS: {
            // debugger
            return {
                ...state,
                status: action.string,
            }
        }
        case SET_MY_ID: {
            // debugger
            return {
                ...state,
                myID: action.id,
            }
        }
        case UPDATE_PROFILE_STATUS: {
            // debugger
            return {
                ...state,
                status: action.string,
            }
        }
        default:
            return state
    }
}

export default aboutMeReducer;
export const setProfileStatus = (string) => ({ type: SET_PROFILE_STATUS, string });
export const updateProfileStatus = (string) => ({ type: UPDATE_PROFILE_STATUS, string });


export const getProfileStatusThunk = (myID) => {
    if (!myID) return console.log('wrong request');
    return (dispatch) => {
        usersAPI.getProfileStatus(myID)
            .then(responce => {
                // debugger
                dispatch(setProfileStatus(responce.data));
            });
    }
}

export const updateProfileStatusThunk = (string) => {
    if (string.length > 300) return console.log('too long request');
    return (dispatch) => {
        usersAPI.setProfileStatus(string)
            .then(responce => {
                // debugger
                (responce.data.resultCode === 0)
                ? dispatch(updateProfileStatus(string))
                : console.log('status was not updated');
            });
    }
}