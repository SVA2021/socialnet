import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _state: {
        postPage: {
            postlist: [
                {id: 1, post: 'Hi'},
                {id: 2, post: 'How is your it-kamasutra?'},
                {id: 3, post: 'Yo'},
                {id: 4, post: 'Yo'},
                {id: 5, post: 'Yo'}
              ], 
              newPostText: 'new post in state'
        },
        dialogPage: {
            userList: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messageList: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ], 
            newMessageText: "hi"
        }
    },

    dispatch(action) {
        dialogsReducer(this._state.dialogPage, action);
        postReducer(this._state.postPage, action);
        /*
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                post: this._state.postPage.newPostText
            };
        
            this._state.postPage.postlist.push(newPost);
            this._state.postPage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postPage.newPostText = action.newPostText;
            this._rerenderEntireTree(this._state);
        }/* else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogPage.newMessageText = action.newMessageText;
            this._rerenderEntireTree(this._state);
        } */
        this._rerenderEntireTree(this._state);
        
        /*else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogPage.newMessageText
            };
        
            this._state.dialogPage.messageList.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._rerenderEntireTree(this._state);
        }*/
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
        console.log('state');
    },

    subscriber (observer) {
        this._rerenderEntireTree = observer;
    }
}


window.store = store;
/*
export const addPostActionCreator = (text) => ({type: ADD_POST, newPostText: text});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
/*
export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, newMessageText: text});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessageText: text});
*/

export default store;