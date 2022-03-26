import React from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Store } from "redux";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";


type PropsType = {
 /* profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void*/
  store: Store

 }

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}
      />
    </div>
  )
}