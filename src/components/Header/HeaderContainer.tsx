import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    login: null,
    isAuth: boolean

}
type MapDispatchToProps = {

    getAuthUserData: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)