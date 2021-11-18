import { connect } from "react-redux";
import { getProfileThunk } from "../../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router";
import React from "react";
import main from "./ProfileContainer.module.css";
import ProfileInfo from "./ProfileInfo";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        this.props.getProfileThunk(userID);
    }

    render = () => {
        if (!this.props.authStatus) {
            return (<Redirect to='/auth' />)
        }
        return (
            <div className={main}>
                <p>Profile information to be develop</p>
                <ProfileInfo {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        authStatus: state.authInfo.data.login
    };
}
let withUTRLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfileThunk })(withUTRLDataProfileContainer);