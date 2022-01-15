import React from 'react';
import './Dialogs.module.css'
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem id='1' name='Victor'/>
                <DialogItem id='2' name='Alexey'/>
                <DialogItem id='3' name='Irina'/>
                <DialogItem id='4' name='Maksim'/>
                <DialogItem id='5' name='Katya'/>
            </div>
            <div className={c.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Hello'/>
                <Message message="Let's go!"/>
                <Message message='Yo'/>
            </div>
        </div>
    );
}

export default Dialogs;