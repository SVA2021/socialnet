import React from "react";
import main from "./ProfileInfo.module.css";
import defaultUser from "../../../img/avatar_null.png";
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {
// debugger
    return (
        <>
            {(props.profile.userId) ? null : <Preloader />}
            <div className={main.container}>
            <img src={(props.profile.photos.small) ? props.profile.photos.small : defaultUser} alt="user" />
                <p>userId = {props.profile.userId}</p>
                <p>fullName = {props.profile.fullName}</p>
                <p>aboutMe = {props.profile.aboutMe}</p>
                <p>facebook = {props.profile.contacts.facebook}</p>
                <p>vk = {props.profile.contacts.vk}</p>
                <p>twitter = {props.profile.contacts.twitter}</p>
                <p>lookingForAJob = {props.profile.lookingForAJob}</p>
                <input type="checkbox" name="lookingForAJob" checked={props.profile.lookingForAJob} />
                <p>lookingForAJobDescription = {props.profile.lookingForAJobDescription}</p>
            </div>
        </>
    )

}
export default ProfileInfo;