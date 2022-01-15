import React from 'react';
import './Profile.module.css'
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props: any) {


    return (
        <div>
            <ProfileInfo image='http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg'/>
            <MyPosts />
        </div>
    );
}

export default Profile;