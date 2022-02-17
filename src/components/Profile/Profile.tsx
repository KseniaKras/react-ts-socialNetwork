import React from 'react';
import './Profile.module.css'
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes)=>void
}

function Profile({profilePage,dispatch,...props}: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profileInfoState={profilePage.profileData} />
            <MyPosts posts={profilePage.posts}
                     dispatch={dispatch}
                     newPostMessage={profilePage.newPostText}
            />
        </div>
    );
}


export default Profile;