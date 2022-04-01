import React from 'react';
import { addPostActionCreator, addPostTextActionCreator } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { Store } from "redux";


type MyPostsContainerType = {
  store: Store

}

export const MyPostsContainer = (props: MyPostsContainerType) => {

  let state = props.store.getState()

  let addPost = () => {
      props.store.dispatch(addPostActionCreator(''))
  }

  let onPostChange = (text: string) => {

    let action = addPostTextActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts
      addPostText={onPostChange}
      addPost ={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  )
}