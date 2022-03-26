import React from 'react';
import { addPostActionCreator, addPostTextActionCreator } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { MyPostsArrayProps } from "../../../redux/store";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToProps = {
  posts: MyPostsArrayProps[]
  newPostText: string
}

type MapDispatchToProps = {
  addPostText: (text: string) => void
  addPost:()=>void
}

const mapStateToProps = (state: AppStateType):MapStateToProps => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
  return {
    addPostText: (text: string) => {
      let action = addPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator("state.profilePage.newPostText"))
    }
  }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

