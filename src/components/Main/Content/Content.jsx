import React from "react";
import { Route } from "react-router-dom";
import main from "./Content.module.css"

import News from "../News/News.jsx";
import Dialogs from "../Dialogs/Dialogs.jsx";
import Music from "../Music/Music.jsx";
import Profile from "../Profile/Profile.jsx";
import Settings from "../Settings/Settings.jsx";


const Content = (props) => {

    return (
        <div className={main}>
            <Route path="/news" render={() => 
                <News postlist={props.postlist} addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText} 
                newPostText={props.newPostText}/> } />
            <Route path="/dialogs" render={() => 
                <Dialogs users={props.userList} messages={props.messageList} />} />
            <Route path="/music" component={Music} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
        </div>
    );
}

export default Content;