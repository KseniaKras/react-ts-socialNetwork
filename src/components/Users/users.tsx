import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/userCommon.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.pageItem}
                                 onClick={() => props.onPageChanged(p)}> {p} </span>
                })}
            </div>

            <div className={s.usersBlock}>
                {
                    props.users.map(u => {
                        const onFollowHandler = () => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f72a4300-5ed0-4f0c-be33-a4b81b2c145d'
                                },
                            })
                                .then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })

                        }
                        const onUnfollowHandler = () => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f72a4300-5ed0-4f0c-be33-a4b81b2c145d'
                                },
                            })
                                .then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                        }
                        return <div key={u.id} className={s.userItem}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.userAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={onUnfollowHandler}>unfollow</button>
                                : <button onClick={onFollowHandler}>follow</button>}
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