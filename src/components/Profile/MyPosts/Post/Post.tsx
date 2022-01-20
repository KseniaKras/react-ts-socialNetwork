import React from 'react';
import './Post.module.css'
import c from './Post.module.css'
import {v1} from "uuid";

type PostPropsType = {
    avatar: string
    message: any
    likesCount: any
}

function Post(props: PostPropsType) {
    return (
        <div className={c.post}>
            <img className={c.avatar}
                 src={props.avatar}
                 alt=""
            />
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;