import React from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo(props: any) {
    return (
        <div>
            <div className={c.image}>
                <img className={c.imageItem} src={props.image} alt=""/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;