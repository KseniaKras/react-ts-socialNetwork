import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authoriseUserTC} from "../../redux/auth-reducer";


type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type mapDispatchToPropsType = {
    authoriseUserTC: () => void
}
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.authoriseUserTC()
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

export default connect(mapStateToProps, {authoriseUserTC})(HeaderContainer);