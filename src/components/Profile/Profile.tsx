import React from 'react';
import './Profile.module.css'
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    myState: ProfilePageType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profileInfoState={props.myState.profileData} />
            <MyPosts posts={props.myState.posts}/>
        </div>
    );
}

export default Profile;