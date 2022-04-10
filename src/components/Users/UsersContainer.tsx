import React from 'react';
import {connect} from "react-redux";
import {
    FilterType,
    followUserTC, getUsersTC,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollowUserTC, UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";



type UsersContainerType = mapStateToPropsType & {
    followUserTC: (usersId: number) => void
    unfollowUserTC: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType)  => void
    changeUsersPageTC: (pageNumber: number, pageSize: number) => void
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
    filter: FilterType
}


class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.getUsersTC(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsersTC(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.getUsersTC(1, pageSize, filter)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
                   onFilterChanged={this.onFilterChanged}
                   followUserTC={this.props.followUserTC}
                   unfollowUserTC={this.props.unfollowUserTC}
                   isFollowing={this.props.isFollowing}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        filter: state.usersPage.filter
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        followUserTC,
        unfollowUserTC,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsersTC,
    })
)(UsersContainer)
