import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {
    store: any     // Типизация   ??
}

function DialogsContainer({store}: DialogsContainerPropsType) {

    let state = store.getState().dialogsPage

    const updateNewMessageText = (newMessage: string) => {
        store.dispatch(updateNewMessageTextAC(newMessage))
    }

    const addMessage = () => {
        store.dispatch(addMessageAC())
    }

    return (
        <Dialogs
            dialogsPage={state}
            updateNewMessageText={updateNewMessageText}
            addMessage={addMessage}
        />
    );
}

export default DialogsContainer;