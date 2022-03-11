import React, { useRef } from 'react';
import s from './../Dialogs.module.css';


type MessageType = {
  message: string
}

export const Message = (props: MessageType) => {
  let newPostElement = useRef<HTMLTextAreaElement>(null);
  return (
      <div>
         <div className={s.dialog}>{props.message}</div>
      </div>


  )
}