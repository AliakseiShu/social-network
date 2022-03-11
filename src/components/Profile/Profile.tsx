import React from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionsTypes, ProfilePageType, } from "../../redux/state";
import { MyPosts } from "./MyPosts/MyPosts";


type PropsType = {
  profilePage: ProfilePageType
 // addPost: (newPostText: string) => void
 // updateNewPostText: (newText: string) => void
  dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}

        /*   updateNewPostText={props.updateNewPostText}*/
      />
    </div>
  )
}