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
type AddPostActionType = {
  type: 'ADD-POST'
  newPostText:string
}
type ChangeNewTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText:string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType



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
      ]
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
    if (action.type === 'ADD-POST') {
      const newPost: MyPostsArrayProps = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._ocChange()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._ocChange()
    }
  }
}

