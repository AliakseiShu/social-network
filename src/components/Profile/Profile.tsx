import React from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Store } from "redux";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";


type PropsType = {
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