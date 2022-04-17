import React from 'react';
import './Header.module.css';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";


type headerDataType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

function Header(props: headerDataType) {
    return (
        <div className={c.header}>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}   <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
}

export default Header;