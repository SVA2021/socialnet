// import React from "react";
import { connect } from "react-redux";
// import Profile from "./Profile";
import { setProfileState } from "../../../redux/profile-reducer";
import { withRouter } from "react-router";
import React from "react";
import main from "./ProfileContainer.module.css";
import ProfileInfo from "./ProfileInfo";
import axios from "axios";

class ProfileContainer extends React.Component {

    requestData() {//difference request depend on server rules
        axios.get(`http://localhost:8000/profile/1`) //test address
            .then(responce => {
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
// withRouter(ProfileContainer);
// const ProfileContainer = connect(mapStateToProps, { setProfileState })(Profile);

export default connect(mapStateToProps, { setProfileState })(ProfileContainer);