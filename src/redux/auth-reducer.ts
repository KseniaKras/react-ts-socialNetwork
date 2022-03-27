
const SET_USER_DATA = 'SET-USER-DATA'


export type ActionsType = ReturnType<typeof setAuthUserData>


type initialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    // isFetching: boolean
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false
}


export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }


        default:
            return state
    }


}

export const setAuthUserData = (userId: number, email: string, login: string) => (
    {type: SET_USER_DATA, payload: {userId, email, login}} as const)
