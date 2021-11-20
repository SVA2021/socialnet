const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postlist: [
        {id: 1, post: 'Hi'},
        {id: 2, post: 'How is your it-kamasutra?'},
        {id: 3, post: 'Yo'},
        {id: 4, post: 'Yo'},
        {id: 5, post: 'Yo'}
      ], 
    //   newPostText: "" //'new post in state'
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            // debugger
           return {
               ...state,
               postlist: [...state.postlist, { id: 6, post: action.post } ], //state.newPostText
               newPostText: "" //action.post
           }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText}
        }
        default:
            return state;
    }
}

export default postReducer;
export const addPostActionCreator = (post) => ({type: ADD_POST, post});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});