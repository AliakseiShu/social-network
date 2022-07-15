import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/imeges/user.png";

export const ProfileInfo = (props: ProfilePropsType) => {
	if (!props.profile) {
		return <Preloader/>
	}
	const onMainPhotoSelected = (e: any) => {
		if (e.target.file.length) {
			props.savePhoto(e.target.file[0])
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
				{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
				<div>
					<div>
						<b>Full name</b>: {props.profile.fullName}
					</div>
					<div>
						<b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
					</div>
					{ props.profile.lookingForAJob &&
					<div>
						<b>My professional skills</b>: {props.profile.lookingForAJobDescription}
					</div>}
					<div>
						<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
							return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
					})}
					</div>
				</div>
				<div>
					<ProfileStatusWithHooks
						status={props.status}
						editMode={false}
						updateUserStatus={props.updateUserStatus}/>
				</div>
			</div>
		</div>
	)
}

type ContactType = {
	contactTitle: string,
	contactValue: string,
}

const Contact = (props: ContactType) => {
	return <div><b>props.contactTitle</b>: {props.contactValue}</div>
}