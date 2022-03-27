import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";


type UsersContainerType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (usersId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFollowing: number[]
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
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
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setUsers(res.items);
            this.props.setTotalUsersCount(res.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(res => {
            this.props.setUsers(res.items);
            this.props.toggleIsFetching(false);
        });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFollowing={this.props.isFollowing}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
})(UsersContainer)

