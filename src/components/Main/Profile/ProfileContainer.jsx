import React from "react";
import { connect } from "react-redux";
import ProfileList from "./Profile";
import { userFollowAC, userUnfollowAC } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return { profilePage: state.profilePage };
}

let mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (userID) => { dispatch(userFollowAC(userID)) },
        userUnfollow: (userID) => { dispatch(userUnfollowAC(userID)) }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileList);

export default ProfileContainer;