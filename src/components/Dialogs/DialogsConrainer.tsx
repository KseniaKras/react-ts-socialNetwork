import React from 'react';
import {addMessageAC, DialogsActionsTypes, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type mapDispatchToPropsType = {
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: (action: DialogsActionsTypes) => void): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;