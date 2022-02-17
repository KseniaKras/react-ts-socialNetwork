import React, {ChangeEvent, KeyboardEvent} from 'react';
import './Dialogs.module.css'
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    myState: DialogsPageType
    dispatch: (action: ActionsTypes)=>void
}

function Dialogs(props: DialogsPropsType) {

    let message = props.myState.newMessageText

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.dispatch( updateNewMessageTextAC(newMessage) )
    }

    const addMessageHandler = () => {
        props.dispatch( addMessageAC(message) )
    }

    const onKeyPressAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            addMessageHandler()
        }
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {props.myState.dialogs.map(d => {
                    return (
                        <DialogItem id={d.id} name={d.name}/>
                    )
                })}

            </div>
            <div className={c.messages}>
                {props.myState.messages.map(m => {
                    return (
                        <Message message={m.message}/>
                    )
                })}
                <textarea value={message} onChange={onChangeHandler} onKeyPress={onKeyPressAddMessage}/>
                <button onClick={addMessageHandler}>add</button>
            </div>

        </div>
    );
}

export default Dialogs;