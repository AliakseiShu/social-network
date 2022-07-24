import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {Input, } from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom';
import styles from './../common/FormsControls/FormsControls.module.css'

export type LoginFormPropsType = {
	captchaUrl: string | null
}

export type FormDataType = {
	email: string
	password: string
	rememberMe: boolean
	captchaUrl: string
}

type MapStateToPropsType = {
	isAuth: boolean
	captchaUrl: string | null
}

type MapDispatchToPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

const LoginForm: FC<InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType> = (
	{handleSubmit,error, captchaUrl}) => {

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field placeholder={"Email"} name={"email"} validate={[required]} component={Input}/>
			</div>
			<div>
				<Field placeholder={"Password"} name={"password"} validate={[required]} component={Input} type={"password"}/>
			</div>
			<div>
				<Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
			</div>
			{captchaUrl && <img src={captchaUrl}/> }
			{captchaUrl && <Field placeholder={"Symbols from image"} name={"captchaUrl"} validate={[required]} component={Input}/> }
			{error && <div className={styles.formSummaryError}>
				{error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm<FormDataType,LoginFormPropsType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

const Login: FC<LoginPropsType> = (props) => {
	const onSubmit = (formData: FormDataType) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
	}
	if (props.isAuth) {
		return <Redirect to={"/profile"}/>
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
		</div>
	);
};
export const LoginContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {login})(Login)
