const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessageText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };

            state.messageList.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;
export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, newMessageText: text});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessageText: text});