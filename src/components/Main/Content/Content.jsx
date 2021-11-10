import React from "react";
import { Route } from "react-router-dom";
import main from "./Content.module.css"

import News from "../News/News.jsx";
//import Dialogs from "../Dialogs/Dialogs.jsx";
import Music from "../Music/Music.jsx";
import Settings from "../Settings/Settings.jsx";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";


const Content = (props) => {

    return (
        <div className={main}>
            <Route path="/news" render={() => 
                <News /> } />
            <Route path="/dialogs" render={() => 
                <DialogsContainer />} />
            <Route path="/music" component={Music} />
            <Route path="/profile" render={() => 
                <ProfileContainer />} />
            <Route path="/settings" component={Settings} />
        </div>
    );
}

export default Content;