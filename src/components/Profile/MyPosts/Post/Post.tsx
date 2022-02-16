import React from 'react';
import './Post.module.css'
import c from './Post.module.css'
import {v1} from "uuid";

type PostPropsType = {
    message: any
    likesCount: any
}

function Post(props: PostPropsType) {
    return (
        <div className={c.post}>
            <img className={c.avatar}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU'
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