import React from 'react';
import './Dialogs.module.css'
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {AddMessageForm} from "./MessageForm";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (newMessageText: string) => void
}

function Dialogs({dialogsPage, addMessage}: DialogsPropsType) {

    let DialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let MessagesElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={c.messages}>
                {MessagesElements}
                <AddMessageForm addMessage={addMessage} />
            </div>

        </div>
    );
}

export default Dialogs;