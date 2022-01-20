import React from 'react';
import './Dialogs.module.css'
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {v1} from "uuid";

function Dialogs() {
    const DialogItemsData = [
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Alexey'},
        {id: v1(), name: 'Irina'},
        {id: v1(), name: 'Maksim'},
        {id: v1(), name: 'Katya'},
    ]
    const MessageData = [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'Hello'},
        {message: 'Let\'s go!'},
        {message: 'Yo'},
    ]
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {DialogItemsData.map(d => {
                    return (
                        <DialogItem id={d.id} name={d.name}/>
                    )
                })}

            </div>
            <div className={c.messages}>
                {MessageData.map(m => {
                    return (
                        <Message message={m.message}/>
                    )
                })}

            </div>
        </div>
    );
}

export default Dialogs;

{/*<DialogItem id='1' name='Victor'/>
                <DialogItem id='2' name='Alexey'/>
                <DialogItem id='3' name='Irina'/>
                <DialogItem id='4' name='Maksim'/>
                <DialogItem id='5' name='Katya'/>*/}

{/*<Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Hello'/>
                <Message message="Let's go!"/>
                <Message message='Yo'/>*/}