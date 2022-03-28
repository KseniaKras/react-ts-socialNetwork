import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'


export type ProfileActionsTypes = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setProfile>

export type PostType = {
    id: string
    //avatar: string
    message: string
    likesCount: number
}
export type ProfileAPIType = {
    userId: number | string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile: ProfileAPIType | null
}

let initialState = {
    newPostText: 'My first post',
    posts: [
        {
            id: v1(),
            // avatar: 'https://kartinkin.net/uploads/posts/2021-07/1626319767_12-kartinkin-com-p-anime-ava-geimer-anime-krasivo-12.png',
            message: 'Hi! It\'s my first post',
            likesCount: 10,
        },
        {
            id: v1(),
            // avatar: 'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg',
            message: 'Hello',
            likesCount: 20,
        },
        {
            id: v1(),
            // avatar: 'https://www.kinonews.ru/insimgs/2016/newsimg/newsimg59861.jpg',
            message: 'What\'s new?',
            likesCount: 25,
        },
        {
            id: v1(),
            // avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
            message: 'Good day!',
            likesCount: 35,
        },
    ],
    profile: null,
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST, postText: initialState.newPostText} as const)
export const updateNewPostText = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)
export const setProfile = (profile: ProfileAPIType) => ({type: SET_PROFILE, profile} as const)

export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        //dispatch(setProfile())
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setProfile(res.data))
        })
    }
}

export default profileReducer;