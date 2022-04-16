import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    login: null,
    isAuth: boolean

}
type MapDispatchToProps = {
    setAuthUserData: (userId: null, login: null, email: null) => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToProps


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)