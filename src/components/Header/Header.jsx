import React from "react";
import Heroimg from "./Heroimg/Heroimg";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
    return (
        <div>
        <Logo />     
        <Navbar />
        <Heroimg />   
        </div>
    );
}

export default Header;