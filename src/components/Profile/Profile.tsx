import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: any           // Типизация ??           StoreType
}

function Profile({store}: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profileInfoState={store.getState().profilePage.profileData}/>
            <MyPostsContainer store={store}/>
        </div>
    );
}


export default Profile;