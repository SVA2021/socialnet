import React from "react";
import s from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={s.menunav}>
            <ul>
                <li className={s.active}><a href="index.html">Home</a></li>
                <li><a href="support.html">Support</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <div className={s.clear}></div>
        </div>
    );
}

export default Navbar;