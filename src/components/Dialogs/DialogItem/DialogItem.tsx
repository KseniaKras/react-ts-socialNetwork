import React from 'react';
import c from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props:any) {
    return (
        <div className={c.dialogItem}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;