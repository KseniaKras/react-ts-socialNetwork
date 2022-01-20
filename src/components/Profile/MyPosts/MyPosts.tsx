import React from 'react';
import './MyPosts.module.css'
import Post from "./Post/Post";
import c from './MyPosts.module.css';
import {v1} from "uuid";

type PostsDataType = {
    id: string
    avatar: string
    message: string
    likesCount: number
}

export const PostsData = [
    {
        id: v1(),
        avatar: 'https://kartinkin.net/uploads/posts/2021-07/1626319767_12-kartinkin-com-p-anime-ava-geimer-anime-krasivo-12.png',
        message: 'Hi! It\'s my first post',
        likesCount: 10,
    },
    {
        id: v1(),
        avatar: 'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg',
        message: 'Hello',
        likesCount: 20,
    },
    {
        id: v1(),
        avatar: 'https://www.kinonews.ru/insimgs/2016/newsimg/newsimg59861.jpg',
        message: 'What\'s new?',
        likesCount: 25,
    },
    {
        id: v1(),
        avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
        message: 'Good day!',
        likesCount: 35,
    }
]

type MyPostsPropsType = {}

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
                {PostsData.map(p => {
                    return (
                        <Post avatar={p.avatar} message={p.message} likesCount={p.likesCount}/>
                    )
                })}

            </div>
        </div>
    );
}

export default MyPosts;

{/*<Post avatar={PostData.avatar} message="Hi! It's my first post" likesCount={15}/>*/
}
{/*<Post avatar={PostData.avatar} message="Hello" likesCount={1}/>*/
}
{/*<Post avatar={PostData.avatar} message="What's new?" likesCount={18}/>*/
}
{/*<Post avatar={PostData.avatar} message="Good day!" likesCount={25}/>*/
}