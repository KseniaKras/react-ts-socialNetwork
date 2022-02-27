import React, {ChangeEvent} from 'react';
import './MyPosts.module.css'
import Post from "./Post/Post";
import c from './MyPosts.module.css';
import {ProfilePageType} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
}

function MyPosts({profilePage,addPost,updateNewPostText,...props}: MyPostsPropsType) {

    let postsElements = profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    const onAddPostHandler = () => addPost()

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //debugger
        let newText = e.currentTarget.value
        updateNewPostText(newText)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={ profilePage.newPostText } onChange={ onPostChangeHandler }/>
                </div>
                <div>
                    <button onClick={ onAddPostHandler }>Add Post</button>
                </div>
            </div>
            <div className={c.post}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;