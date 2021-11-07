import { combineReducers, createStore } from 'redux';
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    postPage: postReducer
});

let store = createStore(reducers);

export default store;