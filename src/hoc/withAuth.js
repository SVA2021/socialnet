import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {getLoginThunk} from "../redux/auth-reducer"

let mapStateToProps = (state) => {
    return { authStatus: state.authInfo.data.login };
}

export const withAuthRedirectContainer = (Component) => {

    class RedirectedComponent extends React.Component {
        render() {
            // debugger
            if (!this.props.authStatus) { return (<Redirect to='/auth' />) }
            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectedComponent = connect(mapStateToProps)(RedirectedComponent);

    return ConnectedRedirectedComponent;

}

// export default connect(mapStateToProps, {getLoginThunk})(withAuthRedirectContainer);
