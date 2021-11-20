import { connect } from "react-redux";
import { getLoginThunk } from "../../../redux/auth-reducer";
import React from "react";
import Auth from "./Login";

class AuthContainer extends React.Component {

    componentDidMount() {
        this.props.getLoginThunk();
    }

    render = () => {
        // debugger
        return (
            <Auth />
        )
    }
}

let mapStateToProps = (state) => {
    return { ...state.authInfo };
}

export default connect(mapStateToProps, { getLoginThunk })(AuthContainer);