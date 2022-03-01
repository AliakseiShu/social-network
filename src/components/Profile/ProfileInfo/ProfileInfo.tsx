import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://ak.picdn.net/shutterstock/videos/18062566/thumb/1.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}