import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type initialStateType = {
    users: UserType[]
}

let initialState: initialStateType = {
    users: [
       // {id: v1(), photoUrl: 'https://uprostim.com/wp-content/uploads/2021/03/image011-99-555x720.jpg', followed: false, fullName: 'Ksenia', status: 'I\'m a boss', location: {city:'Minsk', country: 'Belarus'}},
       // {id: v1(), photoUrl: 'https://i.pinimg.com/736x/4a/9c/d5/4a9cd57d44157fa8401d1662e0ed6f51.jpg', followed: true, fullName: 'Maksim', status: 'I\'m a boss too', location: {city:'Minsk', country: 'Belarus'}},
       // {id: v1(), photoUrl: 'https://papik.pro/uploads/posts/2021-09/1631825667_5-papik-pro-p-krasivie-avatarki-risunki-5.jpg', followed: true, fullName: 'Irina', status: 'I\'m a big boss', location: {city:'Minsk', country: 'Belarus'}},
    ]
}


export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }


}

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

