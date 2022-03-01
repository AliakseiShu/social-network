import React from 'react';
import s from './Post.module.css';
export type MessageProps = {
  message: string
  likesCount: number
}
export const Post = (props: MessageProps) => {
   return (
    <div className={s.item}>
      <img src='data:image/jpeg;base64,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'/>
      { props.message }
      <div>
      <span>like</span> { props.likesCount }
    </div>
    </div>
)
}