import React from 'react';
import {connect} from "react-redux";
import {
    changeUsersPageTC,
    followUserTC, getUsersTC,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollowUserTC, UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";



type UsersContainerType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followUserTC: (usersId: number) => void
    unfollowUserTC: (userId: number) => void
    isFollowing: number[]
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number)  => void
    changeUsersPageTC: (pageNumber: number, pageSize: number) => void
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}


class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        let pageSize = this.props.pageSize
        this.props.changeUsersPageTC(pageNumber, pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(res => {
        //     this.props.setUsers(res.items);
        //     this.props.toggleIsFetching(false);
        // });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
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
    }
}


export default connect(mapStateToProps, {
    followUserTC,
    unfollowUserTC,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersTC,
    changeUsersPageTC,
})(UsersContainer)

