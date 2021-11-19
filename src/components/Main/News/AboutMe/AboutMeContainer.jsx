import { connect } from "react-redux";
// import { getLoginThunk } from "../../../redux/auth-reducer";
import React from "react";
import AboutMe from "./AboutMe";
import { getProfileStatusThunk, updateProfileStatusThunk } from "../../../../redux/aboutMe-reducer.js";

class AboutMeContainer extends React.Component {

    componentDidMount() {
        // debugger
        // this.props.getProfileStatusThunk(this.props.auth.id);
    }

    render = () => {
        // debugger
        // this.props.getProfileStatusThunk(this.props.auth.id);

        return (
            <AboutMe {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        myID: state.myInfo.myID,
        status: state.myInfo.status,
        auth: state.authInfo.data
    };
}

export default connect(mapStateToProps, { getProfileStatusThunk, updateProfileStatusThunk })(AboutMeContainer);