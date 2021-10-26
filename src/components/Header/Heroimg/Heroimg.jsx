import React from "react";
import h from "./Heroimg.module.css";
import hero from "../../../img/header_images.jpg";

const Heroimg = (props) => {
    return (
        <div className={h.hero}>
            <img src={hero} alt="happy people" />
        </div>
    );
}

export default Heroimg;