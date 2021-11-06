import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import header from "./Header.module.css";

const Header = (props) => {
    return (
        <div>
            <div className={header.container}>
                <Logo />
                <Navbar />
            </div>
        </div>
    );
}

export default Header;