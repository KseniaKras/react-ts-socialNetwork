import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import headerReducer from "./header-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer, AppReducerActionsType} from "./App-reducer";


type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    header: headerReducer,
    app: appReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppActionsType =
    | UsersActionsType
    | DialogsActionsTypes
    | ProfileActionsTypes
    | AuthActionsType
    | AppReducerActionsType
export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>



export default store;