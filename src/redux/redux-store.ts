import {combineReducers, createStore} from "redux";
import profileReducer, {addPost, updateNewPostText} from "./profile-reducer";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import headerReducer from "./header-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    header: headerReducer,
})


let store = createStore(rootReducer);


export type ActionsTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>


export default store;