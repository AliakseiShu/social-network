import React from 'react';
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsArrayProps, ProfilePageType } from "../../redux/state";
import { MyPosts } from "./MyPosts/MyPosts";


type PropsType={
  profilePage: ProfilePageType
  addPost: (newPostText: string) => void
}


export const Profile = (props:PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
    </div>
  )
}