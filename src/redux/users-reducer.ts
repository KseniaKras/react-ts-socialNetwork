import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING-PROGRESS'

export type UsersActionsType = ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}
type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

let initialState: initialStateType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],
}


export const usersReducer = (state = initialState, action: UsersActionsType) => {
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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }
        default:
            return state
    }


}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(res => {
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(res.items));
            dispatch(setTotalUsersCount(res.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const changeUsersPageTC = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize).then(res => {
            dispatch(setUsers(res.items));
            dispatch(toggleIsFetching(false));
        });
    }

}


export const followUserTC = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.followUser(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }

}

export const unfollowUserTC = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }

}