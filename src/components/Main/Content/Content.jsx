import React from "react";
import { Route } from "react-router-dom";
import main from "./Content.module.css"

import News from "../News/News.jsx";
import Music from "../Music/Music.jsx";
import Settings from "../Settings/Settings.jsx";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const Content = (props) => {

    return (
        <div className={main.contentWrapper}>
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} /> 
            <Route path="/news" render={() => <News />} /> 
            <Route path="/music" component={Music} /> 
            <Route path="/settings" component={Settings} />
        </div>
    );
}

export default Content;