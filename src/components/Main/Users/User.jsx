import React from "react";
import main from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class User extends React.Component {
    //debugger;
    unfollowAction = (userID) => {

        // debugger
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + this.props.user.id,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '30256688-2360-4496-aaab-8e45acf8cc2e'
                }

            })
            .then(responce => {
                // debugger
                if (responce.data.resultCode === 0) {
                    this.props.userUnfollow(this.props.user.id)
                }
            });

    };
    followAction = (userID) => { 

        debugger
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + this.props.user.id, {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '30256688-2360-4496-aaab-8e45acf8cc2e'
                }

            })
            .then(responce => {
                debugger
                console.log(responce.data);
                if (responce.data.resultCode === 0) {
                    this.props.userFollow(this.props.user.id) 
                }
            })
            .catch(function (error) {
                console.log(error);
              });


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
                        ? <button onClick={this.unfollowAction}>Unfollow</button>
                        : <button onClick={this.followAction}>Follow</button>}
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