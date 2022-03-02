import React, { useRef } from 'react';
import s from './../Dialogs.module.css';


type MessageType = {
  message: string
}

export const Message = (props: MessageType) => {
  let newPostElement = useRef<HTMLTextAreaElement>(null);
  let addPost = () => {
    let text = newPostElement.current?.value;
    alert(text);
  }
  return (
      <div>
         <div className={s.dialog}>{props.message}</div>
        <div><textarea ref={newPostElement}></textarea></div>
        <button onClick={addPost}>Add message</button>
      </div>


  )
}