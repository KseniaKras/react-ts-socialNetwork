import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileAPIType, getUserProfileTC} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";



type mapStateToPropsType = {
    profile: null | ProfileAPIType
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
};

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


const ProfileContainer = (props: ProfileContainerPropsType) => {

    let {userId} = useParams()
    useEffect( ()=>{
        if (!userId) {
            userId='2'
        }
        props.getUserProfileTC(userId)
    }, [userId] )


    if(!props.isAuth) return <Navigate replace to="/login" />
    return (
        <Profile {...props}/>
    );
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { getUserProfileTC } )(ProfileContainer);