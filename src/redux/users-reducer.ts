import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPage>

export type LocationType = {
    city: string
    country: string
}
// export type UserType = {
//     id: string
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: LocationType
// }
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small:  null
        large:  null
    }
    status: null | string
    followed: boolean
}
type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 21,
    currentPage: 1,
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }


}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

