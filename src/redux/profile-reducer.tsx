import { MyPostsArrayProps } from "./state";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST_TEXT';
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextActionType = ReturnType<typeof addPostTextActionCreator>


const ProfileReducer = (state:any, action:any) => {

switch (action.type){
  case ADD_POST:
    let newPost: MyPostsArrayProps = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    state.posts.push(newPost);
    state.newPostText = '';
    return state
  case UPDATE_NEW_POST:
    state.newPostText = action.newPostText;
    return state
  default:
    return state
}
  }
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const addPostTextActionCreator = (newPostText: string) =>
  ({type: UPDATE_NEW_POST, newPostText: newPostText} as const)

    export default ProfileReducer