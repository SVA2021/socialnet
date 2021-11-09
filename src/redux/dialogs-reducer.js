const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE: {
            return { 
                ...state,
                newMessageText: action.newMessageText }
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                messageList: [...state.messageList, {id: 6, message: state.newMessageText} ],
                newMessageText: ''
            }
        }
        default:
            return state
    }
}

export default dialogsReducer;
export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, newMessageText: text});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessageText: text});