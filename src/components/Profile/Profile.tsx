import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileAPIType} from "../../redux/profile-reducer";
import s from './Profile.module.css'

type ProfilePropsType = {
    profile: ProfileAPIType | null
    status: string
    updateStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profileBlock}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;