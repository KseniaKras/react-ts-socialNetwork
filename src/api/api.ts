import axios from "axios";
import {UserType} from "../redux/users-reducer";

type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

type GetFollowUserResponseType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}

type AuthorizeUserResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    messages: string[]
    resultCode: number
}

type GetProfileResponseType = {
    data: {}
    messages: string[]
    resultCode: number
}

type GetUserStatueResponseType = {
    userId: number
}
type UpdateStatusResponseType = {
    data: {}
    fieldsError: string[]
    resultCode: number
    messages: string[]
}
type LoginUserResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

// type usersAPIType = {
//     getUsers: (currentPage: number, pageSize: number) => Promise<usersAPIResponseType>
//     getFollowUser: (userId: number) => Promise<GetFollowUserResponseType>
//     getUnfollowUser: (userId: number) => Promise<GetFollowUserResponseType>
//     authorizeUser: () => Promise<>
// }

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f72a4300-5ed0-4f0c-be33-a4b81b2c145d'
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(res => res.data)
    },
    followUser(userId: number) {
        return instance.post<GetFollowUserResponseType>(`/follow/${userId}`)
            .then(res => res.data)
    },
    unfollowUser(userId: number) {
        return instance.delete<GetFollowUserResponseType>(`/follow/${userId}`)
            .then(res => res.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        profileAPI.getProfile(userId)
    },
}

export const authAPI = {
    getMe() {
        return instance.get<AuthorizeUserResponseType>('auth/me')
            .then(res => res.data)
    },
    loginUser(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginUserResponseType>('auth/login', {
            email, password, rememberMe
        })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)

    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>('profile/status', {status})
    }
}


