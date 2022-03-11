import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../assets/images/userCommon.png';


type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (usersId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersC extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages: number[] = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={ () => {this.props.setCurrentPage(p)} }
                            className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    })}
                </div>

                <div className={s.usersBlock}>
                    {
                        this.props.users.map(u => {
                            const onFollowHandler = () => this.props.follow(u.id)
                            const onUnfollowHandler = () => this.props.unfollow(u.id)
                            return <div key={u.id} className={s.userItem}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userAvatar}/>
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
    }
}

export default UsersC;