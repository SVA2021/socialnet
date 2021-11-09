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
      newPostText: 'new post in state'
};


const postReducer = (state = initialState, action) => {
    //let stateCopy = {...state};
    //stateCopy.postlist = [...state.postlist];
    switch (action.type) {
        case ADD_POST: {
            /*
            let newPost = {
                id: 6,
                post: state.newPostText
            };

            stateCopy.postlist.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
            
            let newPost = {
                id: 6,
                post: state.newPostText
            };*/
           return {
               ...state,
               postlist: [...state.postlist, { id: 6, post: state.newPostText} ],
               newPostText: ''
           }
        }
        case UPDATE_NEW_POST_TEXT: {
            /*stateCopy.newPostText = action.newPostText;
            return stateCopy;*/
            return {
                ...state,
                newPostText: action.newPostText}
        }
        default:
            return state;
    }
}

export default postReducer;
export const addPostActionCreator = (text) => ({type: ADD_POST, newPostText: text});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});