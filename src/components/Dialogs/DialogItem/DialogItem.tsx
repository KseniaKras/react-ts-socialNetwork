import React from 'react';
import c from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: string
    name: string
}

function DialogItem(props: DialogItemType) {
    return (
        <div className={c.dialogItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;