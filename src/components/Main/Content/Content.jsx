import React from "react";
import { Route } from "react-router-dom";
import main from "./Content.module.css"

import News from "../News/News.jsx";
import Music from "../Music/Music.jsx";
import Settings from "../Settings/Settings.jsx";
import DialogsContainer from "../Dialogs/DialogsContainer";
import Profile from "../Profile/Profile" 
import UsersContainer from "../Users/UsersContainer";

const Content = (props) => {

    return (
        <div className={main.contentWrapper}>
            <Route path="/profile" component={Profile} />  {/* ok */}
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} /> {/* ok */}
            <Route path="/news" render={() => <News />} /> {/* ok */}
            <Route path="/music" component={Music} /> {/* ok */}
            <Route path="/settings" component={Settings} /> {/* ok */}
        </div>
    );
}

export default Content;