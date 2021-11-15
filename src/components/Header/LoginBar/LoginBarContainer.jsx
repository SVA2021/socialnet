import { connect } from "react-redux";
import { setAuthState } from "../../../redux/auth-reducer";
// import { withRouter } from "react-router";
import React from "react";
// import main from "./ProfileContainer.module.css";
import LoginBar from "./LoginBar";
import axios from "axios";

class LoginBarContainer extends React.Component {

    requestData() {//difference request depend on server rules
        // debugger
        axios.get(`http://localhost:8000/auth/1`) //test address
            .then(responce => {
                // debugger
                this.props.setAuthState(responce.data);
                // console.log(responce.data);
            });
    }

    componentDidMount() {
        this.requestData();
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
// let withUTRLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setAuthState })(LoginBarContainer);