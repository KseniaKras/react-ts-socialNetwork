import {authoriseUserTC} from "./auth-reducer";
import {ThunkType} from "./redux-store";
import {Dispatch} from "redux";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: AppReducerActionsType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


//ActionCreators
export const setInitialized = () => ({type: SET_INITIALIZED} as const)


//Thunks
export const initializeAppTC = ():ThunkType => (dispatch) => {
    let promise = dispatch(authoriseUserTC())
    promise.then(() => dispatch(setInitialized()))
}


//Types
export type AppReducerActionsType = ReturnType<typeof setInitialized>
type InitialStateType = {
    initialized: boolean
}