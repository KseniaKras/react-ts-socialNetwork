import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import Post from "./Post/Post";
import c from './MyPosts.module.css';
import {ActionsTypes, addPostAC, updateNewPostTextAC, PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostMessage: string
    dispatch: (action: ActionsTypes)=>void
}

function MyPosts({posts,newPostMessage,dispatch,...props}: MyPostsPropsType) {
   // const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        dispatch( addPostAC(newPostMessage) )
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        dispatch( updateNewPostTextAC(newText) )
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    {/*<textarea ref={newPostElement}/>*/}
                    <textarea value={newPostMessage} onChange={ onPostChange }/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={c.post}>
                {posts.map(p => {
                    return (
                        <Post message={p.message} likesCount={p.likesCount}/>
                    )
                })}

            </div>
        </div>
    );
}

export default MyPosts;