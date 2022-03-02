import React, { useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
import { MyPostsArrayProps } from "../../../redux/state";


type PropsType = {
  posts: MyPostsArrayProps[]
  addPost: (newPostText: string) => void
}

export const MyPosts = (props: PropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let addPost = () => {
      if(newPostElement.current) {
        props.addPost(newPostElement.current.value)
      } else {
        alert('newPostElement is null')
      }

      // let text = newPostElement.current;
      // alert(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}