import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileAPIType, ProfilePageType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileAPIType | null
    setProfile: (profile: ProfileAPIType) => void
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