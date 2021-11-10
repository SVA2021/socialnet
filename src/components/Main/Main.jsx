import React from "react";
import Content from "./Content/Content";
import main from "./Main.module.css"
import Sidebar from "./Sidebar/Sidebar";

const Main = (props) => {

    return (
        <div className={main}>
            <Sidebar />
            <Content />
        </div>
    );
}

export default Main;