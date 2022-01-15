import React from 'react';
import c from './Message.module.css'

function Message(props:any) {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    );
}

export default Message;