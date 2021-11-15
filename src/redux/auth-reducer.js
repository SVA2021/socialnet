const SET_AUTH_STATE = 'SET_AUTH_STATE';

let initialState = {
  
  resultCode: 0,
  messages: [],
  info: {}
};
/*
{
    resultCode: 0
    messages: [],
    data: {
      id: 2,
      email: 'blabla@bla.bla',
      login: 'samurai'
    }

*/
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATE: {
      debugger
      return {
        ...action.userInfo
      }
    }
    default:
      return state
  }
}

export default authReducer;
export const setAuthState = (userInfo) => ({ type: SET_AUTH_STATE, userInfo });