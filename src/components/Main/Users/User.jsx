import React from "react";
import main from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../../API/api";

class User extends React.Component {
    //debugger;
    unfollowAction = () => {

        // debugger
        this.props.setAnswerStatus(this.props.user.id);

        followAPI.setUnfollow(this.props.user.id)
            .then(responce => {
                // debugger
                // console.log(responce.data);
                if (responce.data.resultCode === 0) {
                    this.props.userUnfollow(this.props.user.id)
                    this.props.setAnswerStatus(0);
                }
            })


    };
    followAction = () => {

        // debugger
       
        this.props.setAnswerStatus(this.props.user.id);

        followAPI.setFollow(this.props.user.id)
            .then(responce => {
                debugger
                // console.log(responce.data);
                if (responce.data.resultCode === 0) {
                    this.props.userFollow(this.props.user.id)
                    this.props.setAnswerStatus(0);
                }
            })


    };

    render = () => {
        return (
            <div className={main.userProfile}>
                <div className={main.item}>
                    <div>
                        <NavLink to={"/profile/" + this.props.user.id}>
                            <img className={main.avatarURL} src={this.props.user.photos.small} alt="user avatar" />
                        </NavLink>
                    </div>
                    {(this.props.user.followed)
                        ? <button disabled={(this.props.answerStatus !== 0) && (this.props.answerStatus === this.props.user.id)}
                            onClick={this.unfollowAction}> Unfollow </button>
                        : <button disabled={(this.props.answerStatus !== 0) && (this.props.answerStatus === this.props.user.id)}
                        onClick={this.followAction}> Follow </button>}
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