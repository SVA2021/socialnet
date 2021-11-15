import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    postPage: postReducer,
    userPage: usersReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;