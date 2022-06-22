import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../components/api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFiILE = 'profile/SET_USER_PROFiILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetUserStatusType = ReturnType<typeof setUserStatus>
export type DeletePostType = ReturnType<typeof deletePost>

type ActionProfileTypes =
    | AddPostActionType
    | SetUserProfileType
    | SetUserStatusType
    | DeletePostType

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export default ProfileReducer