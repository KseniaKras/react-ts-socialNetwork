import {v1} from "uuid";

// const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export type DialogsActionsTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>

export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    newMessageText: string
    messages: Array<MessageType>
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Alexey'},
        {id: v1(), name: 'Irina'},
        {id: v1(), name: 'Maksim'},
        {id: v1(), name: 'Katya'},
    ],
    newMessageText: 'Hello!',
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Let\'s go!'},
        {id: v1(), message: 'Yo'},
    ],
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {id: v1(), message: state.newMessageText}
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.message
            }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: 'ADD-MESSAGE', newMessageText: initialState.newMessageText} as const)
export const updateNewMessageTextAC = (newMessage: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    message: newMessage
} as const)


export default dialogsReducer;