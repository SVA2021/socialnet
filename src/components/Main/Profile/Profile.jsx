import React from "react";
import main from "./Profile.module.css"
import axios from "axios";

const Profile = (props) => {
    //debugger;
    let followStatus = (props.user.followed) ? 'Unfollow' : 'Follow';
    let unfollowAction = (userID) => { props.userUnfollow(props.user.id) };
    let followAction = (userID) => { props.userFollow(props.user.id) };
    let clickAction = (props.user.followed) ? unfollowAction : followAction;
    return (
        <div className={main.userProfile}>
            <div className={main.item}>
                <img className={main.avatarURL} src={props.user.avatarURL} alt="user avatar" />
                <button onClick={clickAction}>{followStatus}</button>
            </div>
            <div className={main.item}>
                <p>{props.user.headMessage}</p>
            </div>
            <div className={main.item}>
                <div className={main.fullname}>
                    <span>{props.user.fullName.name}</span>
                    <span>{props.user.fullName.surname}</span>
                </div>
                <div className={main.location}>
                    <span>{props.user.location.city}</span>
                    <span>{props.user.location.country}</span>
                </div>
            </div>
        </div>
    );
}


const ProfileList = (props) => {
    const GetUserProfile = () => {
        return (
            <button onClick={getProfile}>GetUserProfile</button>
        );
    }

    function getProfile() {
//can not make request to direct url, need to specify exact page
        axios.get(`http://localhost:8000/profilePage`)
            .then(responce => {
                props.setState(responce.data.userProfileList);
            });
    }
    //debugger;
    let profileBatch = props.userProfileList.map((user) =>
        <Profile user={user} userUnfollow={props.userUnfollow} userFollow={props.userFollow} />
    );

    return (
        <div className={main.parentProfile}>
            <GetUserProfile />
            {profileBatch}
        </div>
    );
}

export default ProfileList;