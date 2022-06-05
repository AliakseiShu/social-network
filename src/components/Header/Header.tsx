import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: null,
    isAuth: boolean
    logout: () => void
}

export const Header = (props: HeaderType) => {

    return <header className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WCWFp5epLNc9bnAas3FRM_iViC5LSWUwvA&usqp=CAU"/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}