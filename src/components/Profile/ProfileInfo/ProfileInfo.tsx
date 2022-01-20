import React from 'react';
import c from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
    image: string
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div className={c.image}>
                <img src={props.image}
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