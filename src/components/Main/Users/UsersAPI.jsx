import React from "react";
import main from "./UsersAPI.module.css"
import User from "./User.jsx";
import Preloader from "../../Preloader/Preloader";

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
                    <User user={user} 
                    // userUnfollow={this.props.userUnfollow} answerStatus={this.props.answerStatus}
                    //     userFollow={this.props.userFollow} setAnswerStatus={this.props.setAnswerStatus}
                        followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk} />)}
            </div>
        );
    }
}

export default UsersAPI;