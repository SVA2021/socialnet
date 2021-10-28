import React from "react";
import main from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

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

    let userList = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messageList = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let userDiv = userList.map(user => <DialogUser name={user.name} id={user.id}/>);
    let messageDiv = messageList.map(m => <Message message={m.message} id={m.id}/>);
    return (
        <div className={main.containerDialogs}>
            <div className={main.dialogUserWrapper}>
              {userDiv}
            </div>
            <div className={main.messageListWrapper}>
               {messageDiv}
            </div>
        </div>

    );
}

export default Dialogs;