import React from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Store } from "redux";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";



/*type PropsType = {
  store: Store
 }*/

export const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}