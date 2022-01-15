import React from 'react';
import './MyPosts.module.css'
import Post, {PostData} from "./Post/Post";
import c from './MyPosts.module.css';


function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={c.post}>
                <Post avatar={PostData.avatar} message="Hi! It's my first post" likesCount={15}/>
                <Post avatar={PostData.avatar} message="Hello" likesCount={1}/>
                <Post avatar={PostData.avatar} message="What's new?" likesCount={18}/>
                <Post avatar={PostData.avatar} message="Good day!" likesCount={25}/>
            </div>
        </div>
    );
}

export default MyPosts;