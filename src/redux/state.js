import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";

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
        this._rerenderEntireTree(this._state);
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

export default store;