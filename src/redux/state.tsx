import profileReducer, { AddPostActionType, ChangeNewTextActionType } from "./profile-reducer";
import dialogsReducer, { SendMessageCreatorType, UpdateNewMessageBodyCreator } from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
  // updateNewPostText: (newText: string) => void
  // addPost: (newPostText: string) => void
  _ocChange: () => void
  _subscribe: (callBack: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
  }

// export type ActionsTypes =
//   AddPostActionType
//   | ChangeNewTextActionType
//   | SendMessageCreatorType
//   | UpdateNewMessageBodyCreator

 export type ActionsTypes = any

export const store: StoreType = {
  _state: {
    profilePage: {
          posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 10},
      ],
      newPostText: "",
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
   _ocChange() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  _subscribe(callBack) {
    this._ocChange = callBack
  },
/*  addPost(newPostText: string) {
    const newPost: MyPostsArrayProps = {
      id: 5,
      message:newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._ocChange()
  },*/
 /* updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._ocChange()
  },*/
  dispatch(action) {
    console.log('profilePage:', this._state)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._ocChange();
  }
}


