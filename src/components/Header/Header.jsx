import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import header from "./Header.module.css";
import LoginBarContainer from "./LoginBar/LoginBarContainer";

const Header = (props) => {
    return (
        <div>
            <div className={header.container}>
                <Logo />
                <Navbar />
                <LoginBarContainer />
            </div>
        </div>
    );
}

export default Header;