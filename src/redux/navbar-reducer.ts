import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export type NavbarType = {
    NavLinkData: Array<NavLinkDataType>
}
export type NavLinkDataType = {
    id: string
    path: string
    title: string
}

let initialState: NavbarType = {
    NavLinkData: [
        {id: v1(), path: '/profile', title: 'Profile'},
        {id: v1(), path: '/dialogs', title: 'Messages'},
        {id: v1(), path: '/news', title: 'News'},
        {id: v1(), path: '/music', title: 'Music'},
        {id: v1(), path: '/settings', title: 'Settings'},
    ],
}

const navbarReducer = (state = initialState, action: ActionsTypes): NavbarType => {


    return state
}


export default navbarReducer;