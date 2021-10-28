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
            <Route path="/news" component={News} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/music" component={Music} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
        </div>
    );
}

export default Content;