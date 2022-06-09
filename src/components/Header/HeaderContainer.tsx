import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    login: null,
    isAuth: boolean
}
type MapDispatchToProps = {
    logout: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<AuthPropsType> {

    render() {
        const {logout, login, isAuth} = this.props;
        return <Header isAuth={isAuth} login={login} logout={logout}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {logout})(HeaderContainer)