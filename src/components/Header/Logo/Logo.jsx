import React from "react";
import l from "./Logo.module.css";
import logoimg from "../../../img/logo.png";

const Logo = (props) => {
    return (
        <div className={l.logo} >
            <img src={logoimg} alt="Logo of SocialNet" />
            </div>
    );
}

export default Logo;