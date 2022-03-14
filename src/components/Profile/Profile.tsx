import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
    setProfile: (profile: ProfileType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;