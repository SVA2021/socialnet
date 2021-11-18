import { usersAPI } from "../API/api";

const SET_PROFILE_STATE = 'SET_PROFILE_STATE';

let initialState = {
  profile: {
    contacts: {},
    photos: {}
  }
};
/*
 "profile": [
        {
            "userId": 1,
            "aboutMe": "я круто чувак 100001%",
            "contacts": {
              "facebook": "facebook.commmm",
              "vk": "vk.com/ddddd",
              "twitter": "https://twitter.com/@sdf"
            },
            "lookingForAJob": true,
            "lookingForAJobDescription": "не ищу, а дурачусь",
            "fullName": "samurai segun",
            "photos": {
              "small": null,
              "large": null
            }
          }
        ]
*/
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_STATE: {
      // debugger
      return {
        ...action
      }
    }
    default:
      return state
  }
}

export default profileReducer;
export const setProfileState = (profile) => ({ type: SET_PROFILE_STATE, profile });

export const getProfileThunk = (userID) => {
  return (dispatch) => {
      usersAPI.getProfile(userID)
          .then(responce => {
              dispatch(setProfileState(responce.data));
          });
  }
}