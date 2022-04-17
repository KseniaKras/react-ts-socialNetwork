import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsActionsTypes = ReturnType<typeof addMessageAC>

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
        case ADD_MESSAGE:
            let newMessage: MessageType = {id: v1(), message: action.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}


export const addMessageAC = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText} as const)


export default dialogsReducer;