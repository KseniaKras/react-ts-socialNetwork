import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileAPIType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileAPIType | null
}

function Profile(props: ProfilePropsType) {
debugger
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;