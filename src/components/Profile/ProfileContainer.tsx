import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {ProfileType, setProfile} from "../../redux/profile-reducer";

type mapStateToPropsType = {
    profile: null | ProfileType
}

type ProfileContainerType = {
    profile: null | ProfileType
    setProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


export default connect(mapStateToProps, { setProfile } )(ProfileContainer);