import React from 'react';
import {setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import s from './users.module.css'
import {v1} from "uuid";

type UsersType = {
    users: UserType[]
    follow: (usersId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users = ({users, follow, unfollow, setUsers}: UsersType) => {

    users.length === 0 && setUsers([
        {
            id: v1(),
            photoUrl: 'https://uprostim.com/wp-content/uploads/2021/03/image011-99-555x720.jpg',
            followed: false,
            fullName: 'Ksenia',
            status: 'I\'m a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://i.pinimg.com/736x/4a/9c/d5/4a9cd57d44157fa8401d1662e0ed6f51.jpg',
            followed: true,
            fullName: 'Maksim',
            status: 'I\'m a boss too',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://papik.pro/uploads/posts/2021-09/1631825667_5-papik-pro-p-krasivie-avatarki-risunki-5.jpg',
            followed: true,
            fullName: 'Irina',
            status: 'I\'m a big boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ])

    return (
        <div>
            {
                users.map(u => {
                    const onFollowHandler = () => follow(u.id)
                    const onUnfollowHandler = () => unfollow(u.id)
                    return <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userAvatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={onUnfollowHandler}>unfollow</button>
                                : <button onClick={onFollowHandler}>follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                    </div>
                })
            }
            <button>set users</button>
        </div>
    );
};

