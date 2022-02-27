import React from 'react';
import {connect} from "react-redux";
import {ActionsType, followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";

type mapDispatchToPropsType = {
    follow: (usersId: string) => void
    unfollow: (usersId: string) => void
    setUsers: (users: UserType[]) => void
}
type mapStateToPropsType = {
    users: UserType[]
}

const mapDispatchToProps = (dispatch: (action: ActionsType)=>void): mapDispatchToPropsType => {
    return {
        follow: (usersId: string) => dispatch(followAC(usersId)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;

