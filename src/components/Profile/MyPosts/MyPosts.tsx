import React from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export type MyPostsArrayProps = {
  id: number
  message: string
  likesCount: number
}
type PropsType={
  posts:MyPostsArrayProps[]
}

export const MyPosts = (props: PropsType) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}