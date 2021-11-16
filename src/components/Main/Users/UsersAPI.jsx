import React from "react";
import main from "./UsersAPI.module.css"
import axios from "axios";
import User from "./User.jsx";
import Preloader from "../../Preloader/Preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:8000/items?_page=${this.props.activePage}&_limit=${this.props.pageLimit}`)
            .then(responce => {
                this.props.setState(responce.data);
            });
    }
    render = () => {

        let pages = [];
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageLimit);

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        this.setActivePage = (p) => {
            this.props.setActivePage(p);

            axios.get(`http://localhost:8000/items?_page=${p}&_limit=${this.props.pageLimit}`)
                .then(responce => {
                    this.props.setState(responce.data);
                });
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
                {this.props.items.map((user) =>
                    <User user={user} userUnfollow={this.props.userUnfollow}
                        userFollow={this.props.userFollow} />)}
            </div>
        );
    }
}

export default UsersAPI;