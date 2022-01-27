import React from 'react';
import './MyPosts.module.css'
import Post from "./Post/Post";
import c from './MyPosts.module.css';
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={c.post}>
                {props.posts.map(p => {
                    return (
                        <Post avatar={p.avatar} message={p.message} likesCount={p.likesCount}/>
                    )
                })}

            </div>
        </div>
    );
}

export default MyPosts;