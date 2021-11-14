import React from "react";
import main from "./Preloader.module.css";
import preloader from "../../img/1493.gif";

const Preloader = (props) => {
    return (
        <div className={main.center}>
            <img src={preloader} alt="preloader" />
        </div>
    );
}

export default Preloader;