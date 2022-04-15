import { MapStateToPropsType, ProfileType } from "../components/Profile/ProfileContainer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFiILE = 'SET_USER_PROFiILE';


export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextActionType = ReturnType<typeof addPostTextActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>


type ActionProfileTypes =
  AddPostActionType
  | ChangeNewTextActionType
  | SetUserProfileType

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
  newPostText: "",
  profile: null as ProfileType | null
}
export type InitialStateType = typeof initialState

const ProfileReducer = (state: InitialStateType = initialState, action: ActionProfileTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: MyPostsArrayProps = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST: {

      return {
        ...state,
        newPostText: action.newPostText
      }
    }
    case SET_USER_PROFiILE: {
      return {
        ...state,
        profile:action.profile
      }

    }
    default:
      return state
  }
}
export const addPostActionCreator = (newPostText: string) =>
  ({type: ADD_POST, newPostText: newPostText} as const)
export const addPostTextActionCreator = (newPostText: string) =>
  ({type: UPDATE_NEW_POST, newPostText: newPostText} as const)
export const setUserProfile = (profile:ProfileType) =>
  ({type: SET_USER_PROFiILE, profile: profile} as const)


export default ProfileReducer