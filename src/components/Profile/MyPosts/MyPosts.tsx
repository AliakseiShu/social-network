import React from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likeCount= '5' />
        <Post message="It's my first post" likeCount= '10' />
      </div>
    </div>
  )
}