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
            ]
        }
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this.addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.updateNewPostText();
        }
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
        console.log('state');
    },

    addPost() {
        let newPost = {
            id: 6,
            post: this._state.postPage.newPostText
        };
    
        this._state.postPage.postlist.push(newPost);
        this._state.postPage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.postPage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    subscriber (observer) {
        this._rerenderEntireTree = observer;
    }
}

window.store = store;
/*
let rerenderEntireTree = () => {
    console.log('state');
}

let state = {
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
        ]
    }
}

window.state = state;

let countID = 6;
export const addPost = () => {
 //   debugger;
    let newPost = {
        id: countID,
        post: state.postPage.newPostText
    };

    state.postPage.postlist.push(newPost);
    state.postPage.newPostText = '';
    rerenderEntireTree(state);
    countID++;
}

export const updateNewPostText = (newText) => {
    state.postPage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
*/
export default store;