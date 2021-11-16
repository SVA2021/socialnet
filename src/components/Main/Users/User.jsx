import React from "react";
import main from "./User.module.css";
import { NavLink } from "react-router-dom";

class User extends React.Component {
    //debugger;
    unfollowAction = (userID) => { this.props.userUnfollow(this.props.user.id) };
    followAction = (userID) => { this.props.userFollow(this.props.user.id) };

    render = () => {
        return (
            <div className={main.userProfile}>
                <div className={main.item}>
                    <div>
                        <NavLink to={"/profile/" + this.props.user.id}>
                            <img className={main.avatarURL} src={this.props.user.photos.small} alt="user avatar" />
                        </NavLink>
                    </div>
                    {(this.props.user.followed) ?
                        <button onClick={this.unfollowAction}>Unfollow</button> :
                        <button onClick={this.followAction}>Follow</button>}
                </div>
                <div className={main.item}>
                    <p>{this.props.user.status}</p>
                </div>
                <div className={main.item}>
                    <div className={main.fullname}>
                        <span>{this.props.user.id}</span>
                        <span>{this.props.user.name}</span>
                    </div>
                    <div className={main.location}>
                        <span>{this.props.user.uniqueUrlName}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;