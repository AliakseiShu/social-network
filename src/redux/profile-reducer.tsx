const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST_TEXT';
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextActionType = ReturnType<typeof addPostTextActionCreator>

type ActionProfileTypes =
  AddPostActionType |
  ChangeNewTextActionType

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
}
export type InitialStateType = typeof initialState

const ProfileReducer = (state: InitialStateType = initialState, action: ActionProfileTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: MyPostsArrayProps = {
        id: 5,
        message: action.newPostText,
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
export const addPostActionCreator = (newPostText: string) =>
  ({type: ADD_POST, newPostText: newPostText} as const)
export const addPostTextActionCreator = (newPostText: string) =>
  ({type: UPDATE_NEW_POST, newPostText: newPostText} as const)

export default ProfileReducer