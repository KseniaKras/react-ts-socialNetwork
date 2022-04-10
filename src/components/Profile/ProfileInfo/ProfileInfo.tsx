import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileAPIType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../assets/images/userCommon.png";
import ProfileStatus from './ProfileStatus';
import profileImage from './../../assets/images/profileImage.jpg'


type ProfileInfoPropsType = {
    profile: ProfileAPIType | null
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile === null) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfoBlock}>
            <div className={s.imageBlock}>
                <img src={profileImage}          //{'http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg'}
                     alt="profileImage"
                     className={s.imageItem}
                />
                <div className={s.avatarBlock}>
                    <img src={props.profile?.photos.large ?  props.profile.photos.large : userPhoto} className={s.avatar}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;