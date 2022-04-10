import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/userCommon.png";
import {FilterType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {UsersSearchForm} from "./UsersSearchForm";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    currentPage: number
    users: UserType[]
    followUserTC: (usersId: number) => void
    unfollowUserTC: (usersId: number) => void
    isFollowing: number[]
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>

            <div className={s.pages}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.selectedPage : s.pageItem}
                                 onClick={() => props.onPageChanged(p)}> {p} </span>
                })}
            </div>

            <div className={s.usersBlock}>
                {
                    props.users.map(u => {
                        const onFollowHandler = () => {
                            props.followUserTC(u.id)
                        }
                        const onUnfollowHandler = () => {
                            props.unfollowUserTC(u.id)
                        }
                        return <div key={u.id} className={s.userItem}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.userAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    onClick={onUnfollowHandler}
                                    disabled={props.isFollowing.some(id => id === u.id)}>
                                    unfollow
                                </button>
                                : <button
                                    onClick={onFollowHandler}
                                    disabled={props.isFollowing.some(id => id === u.id)}>
                                    follow
                                </button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                        </div>
                    })
                }
            </div>
            <button>set users</button>
        </div>
    );
};

export default Users;




