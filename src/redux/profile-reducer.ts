import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: string
    //avatar: string
    message: string
    likesCount: number
}
export type ProfileDataType = {
    image: string
}
export type ProfilePageType = {
    profileData: ProfileDataType
    newPostText: string
    posts: Array<PostType>
}

let initialState = {
    profileData: {
        image: 'http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg'
    },
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
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                newPostText: '',
                posts: [newPost,...state.posts]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST, postText: initialState.newPostText} as const)
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const )

export default profileReducer;