import React from 'react';
import './Profile.module.css'
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


export const ProfileData = {
    image: 'http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg',
}

type ProfileDataType = {
    image: string,
}

function Profile(props: ProfileDataType) {
    return (
        <div>
            <div className={c.image}>
                <img className={c.imageItem} src={props.image} alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;