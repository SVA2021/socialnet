import React from "react";
import Content from "./Content/Content";
import main from "./Main.module.css"
import Sidebar from "./Sidebar/Sidebar";

const Main = (props) => {

    return (
        <div className={main}>
            <Sidebar />
            <Content 
            userList={props.userList} 
            messageList={props.messageList} 
            postlist={props.postlist} 
            dispatch={props.dispatch}
            newPostText={props.newPostText}
            newMessageText={props.newMessageText}
           />
        </div>
    );
}

export default Main;