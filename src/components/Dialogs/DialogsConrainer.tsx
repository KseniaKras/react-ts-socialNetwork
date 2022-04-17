import React from 'react';
import {addMessageAC, DialogsActionsTypes, DialogsPageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


type mapDispatchToPropsType = {
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
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
   WithAuthRedirect
)(Dialogs);