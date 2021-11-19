import React from "react";
import main from "./UsersAPI.module.css"
import User from "./User.jsx";
import Preloader from "../../Preloader/Preloader";
import { Redirect } from "react-router";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.activePage, this.props.pageLimit);
    }

    render = () => {

        let pages = [];
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageLimit);

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        this.setActivePage = (p) => {
            this.props.setActivePageThunk(p, this.props.pageLimit)
        }

        if (!this.props.authStatus) { return (<Redirect to='/auth' />) }

        return (
            <div className={main.parentProfile}>
                {(this.props.isLoad === true) ? <Preloader /> : null}

                {/* //pagination */}
                <div className={main.pages}>

                    {pages.map((p) => {
                        if (p <= 3 || p >= pages.length - 2) {
                            return (<span onClick={() => this.setActivePage(p)}
                                className={(p === this.props.activePage) ? main.active : null}>
                                {p}</span>)
                        }
                        if ((pages.length > 9) && (p === Math.ceil(pages.length - 4))) {
                            return <span>...</span>
                        }

                    }
                    )}
                </div>

                {/* users rendering */}
                {this.props.items.map((user) =>
                    <User
                        user={user}
                        followThunk={this.props.followThunk}
                        unfollowThunk={this.props.unfollowThunk}
                    />)}
            </div>
        );
    }
}

export default UsersAPI;