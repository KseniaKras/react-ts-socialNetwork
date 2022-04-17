import React, {FC} from 'react';
import LoginForm from "./LoginForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";


export const Login: FC = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if(isAuth) {
        return <Navigate replace to="/profile" />
    }

    return (
        <div>
           <h1>Login</h1>
            <LoginForm />
        </div>
    );
};