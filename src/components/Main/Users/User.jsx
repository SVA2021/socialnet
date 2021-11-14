import React from "react";
import main from "./User.module.css"

class User extends React.Component {
    //debugger;
    unfollowAction = (userID) => { this.props.userUnfollow(this.props.user.id) };
    followAction = (userID) => { this.props.userFollow(this.props.user.id) };

    render = () => {
        return (
            <div className={main.userProfile}>
                <div className={main.item}>
                    <img className={main.avatarURL} src={this.props.user.avatarURL} alt="user avatar" />
                    {(this.props.user.followed) ?
                        <button onClick={this.unfollowAction}>Unfollow</button> :
                        <button onClick={this.followAction}>Follow</button>}
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

export default User;