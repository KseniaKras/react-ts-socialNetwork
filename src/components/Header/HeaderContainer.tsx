import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";


type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type mapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                debugger
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                   this.props.setAuthUserData(id, email, login)
                    debugger
                }
            })
    }

    render () {
        return (
            <Header {...this.props}/>
        );
    }

}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);