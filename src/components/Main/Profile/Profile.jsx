import React from "react";
import main from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import axios from "axios";

class Profile extends React.Component {

    requestData() {//difference requsest depend on server rules
        axios.get(`http://localhost:8000/profile/1`) //test address
            .then(responce => {
                this.props.setProfileState(responce.data);
                console.log(responce.data);
            });
    }

    componentDidMount() {
        this.requestData();
    }

    render = () => {
        // debugger
        return (
            <div className={main}>
                <p>Profile information to be develop</p>
                <ProfileInfo {...this.props} />
            </div>
        )
    }
}
export default Profile;