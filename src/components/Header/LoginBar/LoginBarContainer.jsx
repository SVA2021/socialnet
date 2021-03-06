import { connect } from "react-redux";
import { getLoginThunk } from "../../../redux/auth-reducer";
import React from "react";
import LoginBar from "./LoginBar";

class LoginBarContainer extends React.Component {

    componentDidMount() {
        this.props.getLoginThunk();
    }

    render = () => {
        // debugger
        return (
            <LoginBar {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return { ...state.authInfo };
}

export default connect(mapStateToProps, { getLoginThunk })(LoginBarContainer);