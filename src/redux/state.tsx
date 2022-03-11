export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type DialogItemType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type SidebarType = {}

export type MyPostsArrayProps = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePageType = {
  posts: MyPostsArrayProps[]
  newPostText: string
}

export type DialogsPageType = {
  dialogs: DialogItemType[],
  messages: MessageType[]
  newMessageBody: string
}

export type StoreType = {
  _state: RootStateType
  updateNewPostText: (newText: string) => void
  addPost: (newPostText: string) => void
  _ocChange: () => void
  _subscribe: (callBack: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type ChangeNewTextActionType = ReturnType<typeof addPostTextActionCreator>
type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyCreator = ReturnType<typeof updateNewMessageBodyCreator>


export type ActionsTypes =
  AddPostActionType
  | ChangeNewTextActionType
  | SendMessageCreatorType
  | UpdateNewMessageBodyCreator
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const store: StoreType = {
  _state: {
    profilePage: {
      newPostText: "",
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 10},
      ],
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Zina"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Andrey"},
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are You?"},
        {id: 3, message: "ok"},
      ],

      newMessageBody: ""

    },
    sidebar: {}
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._ocChange()
  },
  addPost(newPostText: string) {
    const newPost: MyPostsArrayProps = {
      id: 5,
      message: newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._ocChange()
  },
  _ocChange() {
    console.log('State changed')
  },
  _subscribe(callBack) {
    this._ocChange = callBack
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === "ADD_POST") {
      const newPost: MyPostsArrayProps = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._ocChange()
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.profilePage.newPostText = action.newPostText;
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 3, message: "body"},);
      this._ocChange();
    }
  }
}
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const addPostTextActionCreator = (newPostText: string) =>
  ({type: UPDATE_NEW_POST, newPostText: newPostText} as const)

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)



