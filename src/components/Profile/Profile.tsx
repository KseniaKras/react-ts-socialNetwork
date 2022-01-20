import React from 'react';
import './Profile.module.css'
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const ProfileData = {
    image: 'http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg'
}

type ProfilePropsType = {

}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo image={ProfileData.image} />
            <MyPosts />
        </div>
    );
}

export default Profile;