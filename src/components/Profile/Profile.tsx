import React from 'react';
import s from './Profile.module.css';
import { MyPosts, MyPostsArrayProps } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


type PropsType={
  posts:MyPostsArrayProps[]
}


export const Profile = (props:PropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}