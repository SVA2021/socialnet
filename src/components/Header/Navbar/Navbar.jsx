import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={s.menunav}>
            <ul>
                <li className={s.active}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </li>
                <li className={s.active}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;