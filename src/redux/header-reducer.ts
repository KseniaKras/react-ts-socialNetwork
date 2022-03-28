import axios from "axios";
import {usersAPI} from "../api/api";

export type HeaderType = {
    logo: string
}

let initialState: HeaderType = {
    logo: 'https://png.pngtree.com/png-vector/20191206/ourlarge/pngtree-panda-vector-logo-design-png-image_2076518.jpg'
}

const headerReducer = (state = initialState, action: any) => {


            return state
    }


export default headerReducer;

