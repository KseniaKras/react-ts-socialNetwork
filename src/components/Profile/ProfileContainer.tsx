import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileAPIType, getUserProfileTC, getStatusTC, updateStatusTC} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";



type mapStateToPropsType = {
    profile: null | ProfileAPIType
    status: string
    authorizedUserId: null | number
    isAuth: boolean
}
export type mapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
};
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const ProfileContainer = (props: ProfileContainerPropsType) => {
    let {userId} = useParams()
    useEffect( ()=>{
        if (!userId) {
            userId=(props.authorizedUserId)?.toString()
        }
        props.getUserProfileTC(userId ? userId : '')
        props.getStatusTC(userId ? userId : '')
    }, [userId] )

    return (
        <Profile {...props} status={props.status} updateStatus={props.updateStatusTC}/>
    );
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC } ),
    // WithAuthRedirect
)(ProfileContainer)
