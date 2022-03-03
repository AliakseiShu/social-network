import { rerenderEntireTree } from "../render";

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar:SidebarType
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
  newPostText:string
 }
export type DialogsPageType = {
  dialogs: DialogItemType[],
  messages: MessageType[]
}


export let state: StateType = {
  profilePage: {
    newPostText:"",
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
}

export let addPost = (newPostText: string)=>{
    const newPost:MyPostsArrayProps={
    id:5,
    message: newPostText,
    likesCount:0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string)=>{
   state.profilePage.newPostText=newText
  rerenderEntireTree(state)
}

