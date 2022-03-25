import React from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionsTypes, ProfilePageType, } from "../../redux/store";
import { MyPosts } from "./MyPosts/MyPosts";


type PropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}
      />
    </div>
  )
}