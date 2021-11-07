import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <Dialogs 
        dialogPage={state}
        addMessage={addMessage}
        onMessageChange={onMessageChange}
        />
    );
}

export default DialogsContainer;