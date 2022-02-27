import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile() {

    return (
        <div>
            <ProfileInfo profileInfoState={store.getState().profilePage.profileData}/>
            <MyPostsContainer />
        </div>
    );
}


export default Profile;