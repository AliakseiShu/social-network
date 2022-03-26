import React, { ChangeEvent, useRef } from 'react';
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";
import { MyPostsArrayProps } from "../../../redux/store";

type PropsType = {
  posts: MyPostsArrayProps[]
  newPostText: string
  addPostText:(text: string)=>void
  addPost:()=>void

}
export const MyPosts = (props: PropsType) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = useRef<HTMLTextAreaElement>(null);

  let onAddPost = () => {
    props.addPost()

    /* props.dispatch(addPostActionCreator(props.newPostText))*/
  }

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value
    props.addPostText(text)
  }

  /*   let action = e.currentTarget.value
     props.dispatch(addPostTextActionCreator(action))
   }*/

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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}