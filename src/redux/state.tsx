import { rerenderEntireTree } from "../render";

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
 }

export type DialogItemType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

export type MyPostsArrayProps = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePageType = {
  posts: MyPostsArrayProps[]
}
export type DialogsPageType = {
  dialogs: DialogItemType[],
  messages: MessageType[]
}


export let state: StateType = {
  profilePage: {
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
  }
  //sidebar: {}
}

export let addPost = (newPostText: string)=>{
    let newPost={
    id:5,
    message: newPostText,
    likesCount:0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}

