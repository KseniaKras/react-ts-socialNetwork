import React, {ChangeEvent, KeyboardEvent} from 'react';
import './Dialogs.module.css'
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

function Dialogs({dialogsPage, updateNewMessageText, addMessage}: DialogsPropsType) {

    let DialogsElements = dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let MessagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>)

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        updateNewMessageText(newMessage)
    }

    const onAddMessageHandler = () => addMessage()

    const onKeyPressAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onAddMessageHandler()
        }
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={c.messages}>
                {MessagesElements}

                <textarea value={dialogsPage.newMessageText} onChange={onChangeMessageHandler} onKeyPress={onKeyPressAddMessage}/>
                <button onClick={onAddMessageHandler}>add</button>
            </div>

        </div>
    );
}

export default Dialogs;