import React from "react";
import main from "./UsersAPI.module.css"
import axios from "axios";
import User from "./User.jsx";
import Preloader from "../../Preloader/Preloader";

class UsersAPI extends React.Component {

    requestData() {//difference requsest depend on server rules
        axios.get(`http://localhost:8000/userSetup`)
            .then(responce => {
                this.props.setUserBase(responce.data);
                axios.get(`http://localhost:8000/userList?_page=${this.props.activePage}&_limit=${this.props.pageLimit}`)
                    .then(responce => {
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
        return (
            <div className={main.parentProfile}>
                {(this.props.isLoad === true) ? <Preloader /> : null}
                {/* //pagination */}
                <div className={main.pages}>
                    {pages.map((p) => {
                        return (<span onClick={() => this.setActivePage(p)}
                            className={(p === this.props.activePage) ? main.active : null}>
                            {p}</span>)
                    }
                    )}
                </div>
                {/* users rendering */}
                {this.props.userList.map((user) =>
                    <User user={user} userUnfollow={this.props.userUnfollow}
                        userFollow={this.props.userFollow} />)}
            </div>
        );
    }
}

export default UsersAPI;