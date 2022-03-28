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
    data: {

    }
    messages: string[]
    resultCode: number
}

// type usersAPIType = {
//     getUsers: (currentPage: number, pageSize: number) => Promise<usersAPIResponseType>
//     getFollowUser: (userId: number) => Promise<GetFollowUserResponseType>
//     getUnfollowUser: (userId: number) => Promise<GetFollowUserResponseType>
//     authorizeUser: () => Promise<>
// }

let instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
         'API-KEY': 'f72a4300-5ed0-4f0c-be33-a4b81b2c145d'
    },
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser (userId: number) {
        return instance.post<GetFollowUserResponseType>(`/follow/${userId}`)
            .then(res => res.data)
    },
    unfollowUser (userId: number) {
        return instance.delete<GetFollowUserResponseType>(`/follow/${userId}`)
            .then(res => res.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            // .then(res => res.data)
    }
}


export const authAPI = {
    getMe () {
        return instance.get<AuthorizeUserResponseType>('auth/me')
            .then(res => res.data)
    },

}



/*
const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data)
}

const getFollowUser = (userId: number) => {
    return instance.post(`/follow/${userId}`)
        .then(res => res.data)
}

const getUnfollowUser = (userId: number) => {
    return instance.delete(`/follow/${userId}`)
        .then(res => res.data)
}
*/
