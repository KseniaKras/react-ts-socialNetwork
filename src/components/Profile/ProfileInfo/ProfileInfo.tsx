import React from 'react';
import c from './ProfileInfo.module.css';
import {ProfileAPIType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../assets/images/userCommon.png";


type ProfileInfoPropsType = {
    profile: ProfileAPIType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile == null) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={c.image}>
                <img src={'http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg'}
                     alt=""
                     className={c.imageItem}
                />
            </div>
            <div>
                {/*<img src={props.profile?.photos.small} />*/}
                <img src={props.profile?.photos.large ?  props.profile.photos.large : userPhoto} className={c.avatar}/>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;