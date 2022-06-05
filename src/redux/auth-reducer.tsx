import {authAPI} from "../components/api/api";
import {AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type SendMessageCreatorType = ReturnType<typeof setAuthUserData>

export type ActionAuthTypes =
    SendMessageCreatorType

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    logout: false

}

export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionAuthTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId: null, login: null, email: null, isAuth: any) =>
    ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}} as const)

export const getAuthUserData = (): AppThunk =>
    (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true)
                    )
                }
            })
    }
export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
export const logout = (): AppThunk =>
    (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }

export default authReducer