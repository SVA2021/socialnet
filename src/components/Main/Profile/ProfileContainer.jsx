import React from "react";
import { connect } from "react-redux";
import ProfileList from "./Profile";
import { userFollowAC, userUnfollowAC, setStateAC } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return { userProfileList: state.profilePage.userProfileList };
}

let mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (userID) => { dispatch(userFollowAC(userID)) },
        userUnfollow: (userID) => { dispatch(userUnfollowAC(userID)) },
        setState: (userProfileList) => { dispatch(setStateAC(userProfileList)) }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileList);

export default ProfileContainer;