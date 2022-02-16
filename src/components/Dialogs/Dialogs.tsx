import React, {ChangeEvent} from 'react';
import './Dialogs.module.css'
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    myState: DialogsPageType
}

function Dialogs(props: DialogsPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value

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
                {/*<textarea value={props.newMessage} onChange={onChangeHandler}></textarea>*/}
            </div>

        </div>
    );
}

export default Dialogs;