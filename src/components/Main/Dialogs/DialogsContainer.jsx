import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";
/*
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
*/
let mapStateToProps = (state) => {
    return {dialogPage: state.dialogPage};
}

let mapDispatchToProps = (dispatch) => {
    return {
    addMessage: () => {dispatch(addMessageActionCreator())},
    onMessageChange: (text) => {dispatch(updateNewMessageActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;