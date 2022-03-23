import React, { ChangeEvent, useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
import { addPostTextActionCreator} from "../../../redux/profile-reducer";
import { ActionsTypes, MyPostsArrayProps } from "../../../redux/state";


type PropsType = {
  posts: MyPostsArrayProps[]
  // addPost: (newPostText: string) => void
  newPostText: string
  // updateNewPostText: (newText: string) => void
  dispatch: (action: ActionsTypes) => void
/*  store: StoreType*/
}


export const MyPosts = (props: PropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let addPost = () => {
  /*  props.dispatch(addPostActionCreator())
    props.dispatch('')*/
    /*  if (newPostElement.current?.value) {
        props.addPost(newPostElement.current.value)
        newPostElement.current.value = ''
      } else {
        alert('newPostElement is null')
      }*/
  }

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let action = e.currentTarget.value
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