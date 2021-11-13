import React from "react";
import { connect } from "react-redux";
import { userFollowAC, userUnfollowAC, setStateAC, setUserBaseAC, setActivePageAC } from "../../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        userList: state.userPage.userList,
        userTotal: state.userPage.userTotal,
        pageLimit: state.userPage.pageLimit,
        activePage: state.userPage.activePage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        userFollow: (userID) => { dispatch(userFollowAC(userID)) },
        userUnfollow: (userID) => { dispatch(userUnfollowAC(userID)) },
        setState: (userList) => { dispatch(setStateAC(userList)) },
        setUserBase: (userSetup) => { dispatch(setUserBaseAC(userSetup)) },
        setActivePage: (activePage) => { dispatch(setActivePageAC(activePage)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;