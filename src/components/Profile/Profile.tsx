import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyfxsDdRmIrdONoTLssEJouxfGBr_q9NMyg&usqp=CAU'/>
      </div>
      <div>
        ava + decription
      </div>
      <MyPosts/>
    </div>
  )
}