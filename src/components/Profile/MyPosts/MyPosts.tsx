import React, { ChangeEvent, ChangeEventHandler, useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
import { MyPostsArrayProps } from "../../../redux/state";


type PropsType = {
  posts: MyPostsArrayProps[]
  addPost: (newPostText: string) => void
  newPostText:string
  updateNewPostText:(newText: string)=>void
}

export const MyPosts = (props: PropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let addPost = () => {
    props.addPost(props.newPostText);
    props.updateNewPostText('')
  /*  if (newPostElement.current?.value) {
      props.addPost(newPostElement.current.value)
      newPostElement.current.value = ''
    } else {
      alert('newPostElement is null')
    }*/
  }

  let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
   props.updateNewPostText(e.currentTarget.value);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/>
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