import {authAPI, securityAPI} from "../components/api/api";
import {AppStateType, AppThunk} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

export type SendMessageCreatorType = ReturnType<typeof setAuthUserData>
export type GetCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

export type ActionAuthTypes =
	| SendMessageCreatorType
	| GetCaptchaUrlSuccessType

let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	logout: false,
	captchaUrl: null as string | null, // if null, then captcha is not required
}

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionAuthTypes): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}
export const setAuthUserData = (userId: null, login: null, email: null, isAuth: any) =>
	({type: SET_USER_DATA, payload: {userId, login, email, isAuth}} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) =>
	({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const)

export const getAuthUserData = (): AppThunk =>
	async (dispatch) => {
		let response = await authAPI.me()
		if (response.data.resultCode === 0) {
			let {id, login, email} = response.data.data
			dispatch(setAuthUserData(id, login, email, true))
		}
	}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
	async (dispatch: ThunkDispatch<AppStateType, unknown, ActionAuthTypes | FormAction>) => {
		let response = await authAPI.login(email, password, rememberMe, captcha)
		if (response.data.resultCode === 0) {

			dispatch(getAuthUserData())
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}
			let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
			dispatch(stopSubmit('login', {_error: message}))
		}
	}

export const getCaptchaUrl = () =>
	async (dispatch: ThunkDispatch<AppStateType, unknown, ActionAuthTypes | FormAction>) => {
		const response = await securityAPI.getCaptchaUrl()
		const captchaUrl = response.data.url
		dispatch(getCaptchaUrlSuccess(captchaUrl))

	}

export const logout = (): AppThunk =>
	async (dispatch) => {
		let response = await authAPI.logout()
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	}

export default authReducer