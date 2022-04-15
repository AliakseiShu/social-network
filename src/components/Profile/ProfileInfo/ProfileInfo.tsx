import React from 'react';
import s from './ProfileInfo.module.css';
import { MapStateToPropsType } from "../ProfileContainer";
import { Preloader } from "../../common/Preloader/Preloader";

export const ProfileInfo = (props: MapStateToPropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src='https://ak.picdn.net/shutterstock/videos/18062566/thumb/1.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}
        />
        <div>ava + description</div>
      </div>
    </div>
  )
}