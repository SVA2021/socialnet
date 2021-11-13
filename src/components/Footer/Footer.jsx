import React from "react";
import main from "./Footer.module.css";

const Footer = (props) => {
    return (
        <div className={main.foot}>
            <p>&copy; Copyright <a href="http://localhost:3000/">MyWebSite</a>.</p>
            <p>Layout by Rocket <a href="http://www.rocketwebsitetemplates.com/">Website Templates</a></p>
        </div>
    );
}

export default Footer;