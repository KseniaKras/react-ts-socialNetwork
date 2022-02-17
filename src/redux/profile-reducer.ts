import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: action.postText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (postText: string) => ({ type: ADD_POST, postText: postText} as const)
export const updateNewPostTextAC = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

export default profileReducer;