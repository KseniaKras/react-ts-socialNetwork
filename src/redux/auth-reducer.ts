import {authAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_NEW_USER = 'SET_NEW_USER'


export type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setNewUser>


type initialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}


export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        case SET_NEW_USER:
            return {
                ...state,
                isAuth: true,
            }

        default:
            return state
    }


}

export const setAuthUserData = (userId: number, email: string, login: string) => (
    {type: SET_USER_DATA, payload: {userId, email, login}} as const)
export const setNewUser = () => ({type: SET_NEW_USER} as const)


export const authoriseUserTC = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.getMe()
            .then(res => {
                if (res.resultCode === 0) {
                    let {id, email, login} = res.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean) => {
    debugger
    return (dispatch: Dispatch) => {
        authAPI.loginUser(email, password, rememberMe)
            .then(res => {
                debugger
                if(res.data.resultCode === 0) {
                    dispatch(setNewUser())
                }
            })
    }
}