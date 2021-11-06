import React from "react";
import Content from "./Content/Content";
import main from "./Main.module.css"
import Sidebar from "./Sidebar/Sidebar";

const Main = (props) => {

    return (
        <div className={main}>
            <Sidebar />
            <Content userList={props.userList} messageList={props.messageList} 
            postlist={props.postlist} addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText}
            newPostText={props.newPostText}/>
        </div>
    );
}

export default Main;