import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import {ProfilePropsType} from "../Profile";


export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/* <div>
        <img src='https://ak.picdn.net/shutterstock/videos/18062566/thumb/1.jpg'/>
      </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    <ProfileStatus status={props.status} editMode={false} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}