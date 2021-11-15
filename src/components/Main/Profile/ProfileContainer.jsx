import { connect } from "react-redux";
import { setProfileState } from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import React from "react";
import main from "./ProfileContainer.module.css";
import ProfileInfo from "./ProfileInfo";
import axios from "axios";

class ProfileContainer extends React.Component {

    requestData() {//difference request depend on server rules
        // debugger
        let userID = this.props.match.params.userID;
        axios.get(`http://localhost:8000/profile/` + userID) //test address
            .then(responce => {
                // debugger
                this.props.setProfileState(responce.data);
                // console.log(responce.data);
            });
    }

    componentDidMount() {
        this.requestData();
    }

    render = () => {
        // debugger
        return (
            <div className={main}>
                <p>Profile information to be develop</p>
                <ProfileInfo {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return { profile: state.profilePage.profile };
}
let withUTRLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfileState })(withUTRLDataProfileContainer);