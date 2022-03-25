import React, { ChangeEvent, useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
import { addPostActionCreator, addPostTextActionCreator } from "../../../redux/profile-reducer";
import { ActionsTypes, MyPostsArrayProps } from "../../../redux/store";


type PropsType = {
  posts: MyPostsArrayProps[]
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: PropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
  }

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

    let action = e.currentTarget.value
    debugger
    props.dispatch(addPostTextActionCreator(action))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    placeholder='Enter posts'/>
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