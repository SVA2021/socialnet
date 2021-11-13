import React from "react";
import main from "./Users.module.css"
import axios from "axios";

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


class Users extends React.Component {

    requestData() {
        axios.get(`http://localhost:8000/userSetup`)
            .then(responce => {
                //debugger
                this.props.setUserBase(responce.data);
                //debugger
                axios.get(`http://localhost:8000/userList?_page=${this.props.activePage}&_limit=${this.props.pageLimit}`)
                    .then(responce => {
                        //debugger
                        this.props.setState(responce.data);
                    });
            });
    }
    componentDidMount() {
        this.requestData();
    }
    render = () => {

        let pages = [];
        let pageCount = Math.ceil(this.props.userTotal / this.props.pageLimit);

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        this.setActivePage = (p) => {
            this.props.setActivePage(p);
            this.requestData();

        }
        //debugger
        return (
            <div className={main.parentProfile}>
                <div className={main.pages}>
                    {pages.map((p) => {
                        if (p === this.props.activePage) {
                            return (<span className={main.active}>{p}</span>)
                        }
                        return (<span onClick={() => this.setActivePage(p)}>{p}</span>)
                    }
                    )}
                </div>
                {this.props.userList.map((user) =>
                    <User user={user} userUnfollow={this.props.userUnfollow} userFollow={this.props.userFollow} />)}
            </div>
        );
    }
}

export default Users;