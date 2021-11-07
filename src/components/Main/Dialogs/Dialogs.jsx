import React from "react";
import main from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";

const DialogUser = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={main.dialogUserItem}>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={main.messageItem}>
        {props.message}
        </div>
    );
}


const Dialogs = (props) => {

    let userDiv = props.users.map( user => <DialogUser name={user.name} id={user.id}/>);
    let messageDiv = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        let action = addMessageActionCreator(text); //{type: 'ADD-POST', newPostText: text};
        props.dispatch(action);
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }
    
    return (
        <div className={main.containerDialogs}>
            <div className={main.dialogUserWrapper}>
              {userDiv}
            </div>
            <div className={main.messageListWrapper}>
            <h3>My messages</h3>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
            </div>
            <div>
                <button onClick={addMessage}>add post</button>
            </div>

               {messageDiv}
            </div>
        </div>

    );
}

export default Dialogs;