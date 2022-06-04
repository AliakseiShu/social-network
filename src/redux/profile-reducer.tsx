import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../components/api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFiILE = 'SET_USER_PROFiILE';
const SET_STATUS = 'SET_STATUS';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetUserStatusType = ReturnType<typeof setUserStatus>


type ActionProfileTypes =
    AddPostActionType
    //| ChangeNewTextActionType
    | SetUserProfileType
    | SetUserStatusType

export type MyPostsArrayProps = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 10},
    ] as Array<MyPostsArrayProps>,
    profile: null as ProfileType | null,
    status: "",

}
export type InitialStateType = typeof initialState

const ProfileReducer = (state: InitialStateType = initialState, action: ActionProfileTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: MyPostsArrayProps = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            }
        }

        case SET_USER_PROFiILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}
export const addPostActionCreator = (newPostText: string) =>
    ({type: ADD_POST, newPostText} as const)

export const setUserProfile = (profile: ProfileType) =>
    ({type: SET_USER_PROFiILE, profile: profile} as const)
export const setUserStatus = (status: string) => ({type: SET_STATUS, status: status} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export default ProfileReducer