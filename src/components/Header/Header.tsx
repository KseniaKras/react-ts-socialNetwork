import React from 'react';
import './Header.module.css';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

type headerDataType = {
    isAuth: boolean
    login: null | string
    // setAuthUserData: (userId: number, email: string, login: string) => void
}

function Header(props: headerDataType) {
    return (
        <div className={c.header}>
            <img
                src={'https://png.pngtree.com/png-vector/20191206/ourlarge/pngtree-panda-vector-logo-design-png-image_2076518.jpg'}
                alt='Logo'
                className={c.logo}/>

            <div className={c.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>

        </div>
    );
}

export default Header;