import { applyMiddleware, combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import aboutMeReducer from './aboutMe-reducer';

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    postPage: postReducer,
    userPage: usersReducer,
    profilePage: profileReducer,
    authInfo: authReducer,
    myInfo: aboutMeReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;