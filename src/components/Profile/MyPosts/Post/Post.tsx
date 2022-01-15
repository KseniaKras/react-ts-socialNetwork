import React from 'react';
import './Post.module.css'
import c from './Post.module.css'

export const PostData = {
    avatar: 'https://kartinkin.net/uploads/posts/2021-07/1626319767_12-kartinkin-com-p-anime-ava-geimer-anime-krasivo-12.png'

}

type PostDataType = {
    avatar: string
    message: string
    likesCount: number
}

function Post(props: PostDataType) {
    return (
        <div className={c.post}>
            <img className={c.avatar} src={props.avatar} alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;