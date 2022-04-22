import ProfileReducer from "./profile-reducer";
import {authAPI} from "../components/api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA';


export type SendMessageCreatorType = ReturnType<typeof setAuthUserData>


type ActionAuthTypes =
    SendMessageCreatorType

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth:false

}
export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionAuthTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId: null, login: null, email:null) =>
    ({type: SET_USER_DATA, data:{userId, login, email}} as const)
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default authReducer