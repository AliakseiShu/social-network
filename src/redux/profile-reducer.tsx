import {ContactsPropsType, PhotoPropsType, ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../components/api/api";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFiILE = 'profile/SET_USER_PROFiILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetUserStatusType = ReturnType<typeof setUserStatus>
export type DeletePostType = ReturnType<typeof deletePost>
export type SetPhotoType = ReturnType<typeof savePhotoSuccess>

type ActionProfileTypes =
	| AddPostActionType
	| SetUserProfileType
	| SetUserStatusType
	| DeletePostType
	| SetPhotoType

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
	profile: {
		userId: 0,
		lookingForAJob: false,
		lookingForAJobDescription: '',
		fullName: '',
		contacts: {} as ContactsPropsType,
		photos: {} as PhotoPropsType,
		aboutMe:""
	},
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
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
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

export const setUserStatus = (status: string) =>
	({type: SET_STATUS, status: status} as const)

export const deletePost = (postId: number) =>
	({type: DELETE_POST, postId} as const)

export const savePhotoSuccess = (photos: PhotoPropsType) =>
	({type: SAVE_PHOTO_SUCCESS, photos} as const)

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
export const savePhoto = (photoFile: string) => async (dispatch: Dispatch) => {
	let response = await profileAPI.savePhoto(photoFile)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}
export const saveProfile = (profile: ProfileType) => async (dispatch: Dispatch, getState: () => AppStateType) => {
const	userId = getState().auth.userId
	let response = await profileAPI.saveProfile(profile)
	if (response.data.resultCode === 0) {
		//dispatch(getUserStatus(userId))
	} else {
		dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))

	}
}
export default ProfileReducer
