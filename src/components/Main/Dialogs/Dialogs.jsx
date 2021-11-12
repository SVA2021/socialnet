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

class Dialogs extends React.Component {

    newMessageElement = React.createRef();

    addMessage = () => {
        this.props.addMessage(this.newMessageElement.current.value);
    }

    onMessageChange = () => {
        this.props.onMessageChange(this.newMessageElement.current.value);
    }

    render = () => {
        return (
            <div className={main.containerDialogs}>
                <div className={main.dialogUserWrapper}>
                    {this.props.dialogPage.userList.map(user => <DialogUser name={user.name} id={user.id} />)}
                </div>
                <div className={main.messageListWrapper}>
                    <h3>My messages</h3>
                    <div>
                        <textarea onChange={this.onMessageChange} ref={this.newMessageElement} value={this.props.dialogPage.newMessageText} />
                    </div>
                    <div>
                        <button onClick={this.addMessage}>add message</button>
                    </div>
                    {this.props.dialogPage.messageList.map(m => <Message message={m.message} id={m.id} />)}
                </div>
            </div>

        );
    }
}

export default Dialogs;