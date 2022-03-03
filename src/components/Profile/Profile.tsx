import React from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType, updateNewPostText } from "../../redux/state";
import { MyPosts } from "./MyPosts/MyPosts";


type PropsType = {
  profilePage: ProfilePageType
  addPost: (newPostText: string) => void
  updateNewPostText: (newText: string) => void
}


export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               addPost={props.addPost}
               updateNewPostText={updateNewPostText}
      />
    </div>
  )
}