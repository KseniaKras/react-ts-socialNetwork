import React from 'react';
import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchToPropsType = {
    updateNewMessageText: (newMessage: string)=>void
    addMessage:  ()=>void
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes)=>void):mapDispatchToPropsType => {
    return {
        updateNewMessageText: (newMessage: string)=>{
            dispatch(updateNewMessageTextAC(newMessage))
        },
        addMessage: ()=>{
            dispatch(addMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;