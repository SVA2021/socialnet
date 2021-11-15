import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from './auth-reducer';

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    postPage: postReducer,
    userPage: usersReducer,
    profilePage: profileReducer,
    authInfo: authReducer
});

let store = createStore(reducers);

export default store;