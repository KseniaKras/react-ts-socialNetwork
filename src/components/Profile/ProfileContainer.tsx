import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileAPIType, getUserProfileTC} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";



type mapStateToPropsType = {
    profile: null | ProfileAPIType
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

    return (
        <Profile {...props}/>
    );
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileTC } ),
    WithAuthRedirect
)(ProfileContainer)

//export default WithAuthRedirect(connect(mapStateToProps, { getUserProfileTC } )(ProfileContainer));