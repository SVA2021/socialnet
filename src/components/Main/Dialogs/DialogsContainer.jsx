import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";

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