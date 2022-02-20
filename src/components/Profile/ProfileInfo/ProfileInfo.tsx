import React from 'react';
import c from './ProfileInfo.module.css';
import {ProfileDataType} from "../../../redux/profile-reducer";


type ProfileInfoPropsType = {
    profileInfoState: ProfileDataType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div className={c.image}>
                <img src={props.profileInfoState.image}
                     alt=""
                     className={c.imageItem}
                />
            </div>
            <div>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;