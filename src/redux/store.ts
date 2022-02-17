import {v1} from "uuid";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";

export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    //avatar: string
    message: string
    likesCount: number
}
export type ProfileDataType = {
    image: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    newMessageText: string
    messages: Array<MessageType>
}
export type ProfilePageType = {
    profileData: ProfileDataType
    newPostText: string
    posts: Array<PostType>
}
export type NavLinkDataType = {
    id: string
    path: string
    title: string
}
export type NavbarType = {
    NavLinkData: Array<NavLinkDataType>
}
export type HeaderType = {
    logo: string
}
export type RootStateType = {
    header: HeaderType
    navbar: NavbarType
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state:RootStateType) => void
    subscribe: (observer: (state:RootStateType) => void) => void
    dispatch: (action: ActionsTypes)=>void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>


export const store: StoreType = {
    _state: {
        header: {
            logo: 'https://png.pngtree.com/png-vector/20191206/ourlarge/pngtree-panda-vector-logo-design-png-image_2076518.jpg'
        },
        navbar: {
            NavLinkData: [
                {id: v1(), path: '/profile', title: 'Profile'},
                {id: v1(), path: '/dialogs', title: 'Messages'},
                {id: v1(), path: '/news', title: 'News'},
                {id: v1(), path: '/music', title: 'Music'},
                {id: v1(), path: '/settings', title: 'Settings'},
            ],
        },
        profilePage: {
            profileData: {
                image: 'http://ic.pics.livejournal.com/jazztour/50295466/797314/797314_original.jpg'
            },
            newPostText: '',
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

        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Victor'},
                {id: v1(), name: 'Alexey'},
                {id: v1(), name: 'Irina'},
                {id: v1(), name: 'Maksim'},
                {id: v1(), name: 'Katya'},
            ],
            newMessageText: '',
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Let\'s go!'},
                {id: v1(), message: 'Yo'},
            ],
        },
    },

    getState() {
        return this._state;
    },
    _callSubscriber(state:RootStateType) {
        console.log('State changed!')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    },
}

export default store;


// window.store = store




// type AddPostActionType = {
//     type: 'ADD-POST'
//     postText: string
// }   или
// type AddPostActionType = ReturnType<typeof addPostAC>

// type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }   или
// type UpdateNewPostTextActionType = ReturnType<typeof changeNewTextAC>