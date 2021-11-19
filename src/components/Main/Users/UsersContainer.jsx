import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirectContainer } from "../../../hoc/withAuth";
import { getUsersThunk, setActivePageThunk, followThunk, unfollowThunk } from "../../../redux/users-reducer";
import UsersAPI from "./UsersAPI";

let mapStateToProps = (state) => {
    return {
        items: state.userPage.items,
        totalCount: state.userPage.totalCount,
        pageLimit: state.userPage.pageLimit,
        activePage: state.userPage.activePage,
        isLoad: state.userPage.isLoad,
        answerStatus: state.userPage.answerStatus,
        authStatus: state.authInfo.data.login
    };
}

// const UsersContainer = connect(mapStateToProps,
//     { getUsersThunk, setActivePageThunk, followThunk, unfollowThunk })(UsersAPI);

// export default UsersContainer;

export default compose(
    connect(mapStateToProps, { getUsersThunk, setActivePageThunk, followThunk, unfollowThunk }),
    withAuthRedirectContainer
)(UsersAPI);