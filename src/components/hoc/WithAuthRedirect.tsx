import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Navigate replace to="/login" />
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent

};


type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}