import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET-STATUS'


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
    // newPostText: string
    posts: Array<PostType>
    profile: ProfileAPIType | null
    status: string
}

let initialState = {
    posts: [
        {
            id: v1(),
            message: 'Hi! It\'s my first post',
            likesCount: 10,
        },
        {
            id: v1(),
            message: 'Hello',
            likesCount: 20,
        },
        {
            id: v1(),
            message: 'What\'s new?',
            likesCount: 25,
        },
        {
            id: v1(),
            message: 'Good day!',
            likesCount: 35,
        },
    ],
    profile: null,
    status: '',
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: action.postText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//AC
export const addPost = (postText: string) => ({type: ADD_POST, postText} as const)
export const setProfile = (profile: ProfileAPIType) => ({type: SET_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)


//thunks
export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getProfile(userId)
            .then(res => {
                dispatch(setProfile(res.data))
            })
    }
}
export const getStatusTC = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getUserStatus(userId)
            .then(res => {
                dispatch(setStatus(res.data))
            })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.updateStatus(status)
            .then(res => {
                //debugger
                if (res.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


//types
export type ProfileActionsTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setStatus>


export default profileReducer;