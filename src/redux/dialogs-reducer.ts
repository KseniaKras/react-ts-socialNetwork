import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage:MessageType = {id: v1(), message: action.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message
            return state
        default:
            return state
    }
}

export const addMessageAC = (newMessage: string) => ({ type: ADD_MESSAGE, newMessageText: newMessage} as const)
export const updateNewMessageTextAC = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: newMessage} as const)


export default dialogsReducer;