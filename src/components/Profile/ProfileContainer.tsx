import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {ProfileAPIType, setProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";


type mapStateToPropsType = {
    profile: null | ProfileAPIType
}

export type mapDispatchToPropsType = {
    setProfile: (profile: ProfileAPIType) => void
};

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


const ProfileContainer = (props: ProfileContainerPropsType) => {

   /* const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfileAPIType | null>(state => state.profilePage.profile)*/

    let {userId} = useParams()

    useEffect( ()=>{
        if (!userId) {
            userId='2'
        }
        //props.setProfile(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials: true,
        }).then(response => {
            // dispatch(setProfile(response.data))

        })

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

export default connect(mapStateToProps, { setProfile } )(ProfileContainer);