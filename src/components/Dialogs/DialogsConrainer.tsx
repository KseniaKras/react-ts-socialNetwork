import React from 'react';
import {addMessageAC, DialogsActionsTypes, DialogsPageType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";


type mapDispatchToPropsType = {
    updateNewMessageText: (newMessage: string) => void
    addMessage: (newMessageText: string) => void
}

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type DialogsContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: (action: DialogsActionsTypes) => void): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        },
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
   // WithAuthRedirect
)(Dialogs);