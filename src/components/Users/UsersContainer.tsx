import React from 'react';
import {connect} from "react-redux";
import {ActionsType, followAC, setCurrentPage, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
// import {Users} from "./Users";
import UsersC from "./UsersC";

type mapDispatchToPropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
}
type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void): mapDispatchToPropsType => {
    return {
        follow: (usersId: number) => dispatch(followAC(usersId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage))
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;

