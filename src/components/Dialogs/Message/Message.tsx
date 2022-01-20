import React from 'react';
import c from './Message.module.css'

type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    );
}

export default Message;