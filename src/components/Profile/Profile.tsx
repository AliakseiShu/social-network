import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://ak.picdn.net/shutterstock/videos/18062566/thumb/1.jpg'/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}