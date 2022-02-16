import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import Post from "./Post/Post";
import c from './MyPosts.module.css';
import {ActionsTypes, addPostAC, changeNewTextAC, PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostMessage: string
    dispatch: (action: ActionsTypes)=>void
}

function MyPosts({posts,newPostMessage,dispatch,...props}: MyPostsPropsType) {
   // const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostHandler = () => {
        dispatch( addPostAC(newPostMessage) )
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        dispatch(changeNewTextAC(newText))
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    {/*<textarea ref={newPostElement}/>*/}
                    <textarea value={newPostMessage} onChange={ newTextChangeHandler }/>
                </div>
                <div>
                    <button onClick={onClickAddPostHandler}>Add Post</button>
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