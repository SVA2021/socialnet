import React from "react";
import main from "./Profile.module.css"
import axios from "axios";

class Profile extends React.Component {
    //debugger;
    followStatus = (this.props.user.followed) ? 'Unfollow' : 'Follow';
    unfollowAction = (userID) => { this.props.userUnfollow(this.props.user.id) };
    followAction = (userID) => { this.props.userFollow(this.props.user.id) };
    clickAction = (this.props.user.followed) ? this.unfollowAction : this.followAction;

    render = () => {
    return (
        <div className={main.userProfile}>
            <div className={main.item}>
                <img className={main.avatarURL} src={this.props.user.avatarURL} alt="user avatar" />
                <button onClick={this.clickAction}>{this.followStatus}</button>
            </div>
            <div className={main.item}>
                <p>{this.props.user.headMessage}</p>
            </div>
            <div className={main.item}>
                <div className={main.fullname}>
                    <span>{this.props.user.fullName.name}</span>
                    <span>{this.props.user.fullName.surname}</span>
                </div>
                <div className={main.location}>
                    <span>{this.props.user.location.city}</span>
                    <span>{this.props.user.location.country}</span>
                </div>
            </div>
        </div>
    );
    }
}


class ProfileList extends React.Component{
    GetUserProfile = () => {
        return (
            <button onClick={this.getProfile}>GetUserProfile</button>
        );
    }

    getProfile = () => {
        //can not make request to direct url, need to specify exact page
        axios.get(`http://localhost:8000/profilePage`)
            .then(responce => {
                this.props.setState(responce.data.userProfileList);
            });
    }

    render = () => {
    return (
        <div className={main.parentProfile}>
            <this.GetUserProfile />
            {this.props.userProfileList.map((user) =>
                <Profile user={user} userUnfollow={this.props.userUnfollow} userFollow={this.props.userFollow} />)}
        </div>
    );
    }
}

export default ProfileList;