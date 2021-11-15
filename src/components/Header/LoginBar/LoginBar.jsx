import React from "react";
import main from "./LoginBar.module.css";

const LoginBar = (props) => {
    // debugger
    let user = (props.resultCode) ? props.info.login : 'Please login';
    return (
        <div className={main.parent}>
            {user}
        </div>
    )

}
export default LoginBar;