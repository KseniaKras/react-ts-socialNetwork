import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/store";


type MyPostsContainerPropsType = {
    store: StoreType        // Типизация ??
}

function MyPostsContainer({store}: MyPostsContainerPropsType) {
    debugger
    let state = store.getState().profilePage

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    const updateNewPostText = (newText: string) => {
        store.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <MyPosts
            profilePage={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
}

export default MyPostsContainer;