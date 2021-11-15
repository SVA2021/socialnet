// import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileState } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return { profile: state.profilePage.profile };
}

const ProfileContainer = connect(mapStateToProps, { setProfileState })(Profile);

export default ProfileContainer;