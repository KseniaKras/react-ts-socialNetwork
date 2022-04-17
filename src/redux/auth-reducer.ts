import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkType} from "./redux-store";


const SET_USER_DATA = 'SET-USER-DATA'

let initialState: InitialStateType = {
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
                ...action.payload
            }
        default:
            return state
    }
}


//ActionCreators
export const setAuthUserData =
    (userId: NullableType<number>, email: NullableType<string>, login: NullableType<string>, isAuth: boolean) =>
    ( {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const )


//Thunks
export const authoriseUserTC = () => (dispatch: Dispatch) => {
    authAPI.getMe()
        .then(res => {
            if (res.resultCode === 0) {
                let {id, email, login} = res.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean):ThunkType => (dispatch) => {
    authAPI.loginUser(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authoriseUserTC())
            }
        })
}

export const logoutUserTC = ():ThunkType => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


//Types
export type AuthActionsType = ReturnType<typeof setAuthUserData>
export type NullableType<T> = null | T
type InitialStateType = {
    userId: NullableType<number>
    email: NullableType<string>
    login: NullableType<string>
    isAuth: boolean
}