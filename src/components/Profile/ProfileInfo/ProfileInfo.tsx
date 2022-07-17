import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/imeges/user.png";

export type FormProfileDataType = {
	fullName: string
	lookingForAJobDescription: string
	rememberMe: boolean

}

export const ProfileInfo = (props: ProfilePropsType) => {

	//const [editMode, setEditMode] = useState(false)

	if (!props.profile) {
		return <Preloader/>
	}
	const onMainPhotoSelected = (e: any) => {
		if (e.currentTarget.files.length) {
			props.savePhoto(e.currentTarget.files[0])
		}


		/*const onSubmit = (props:FormProfileDataType) => {
			//console.log(formData)
		}*/
	}
	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
				{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

				{/*{ editMode
					? <ProfileDataForm
						status={props.status}
						updateUserStatus={props.updateUserStatus}
						profile={props.profile}
						isOwner={props.isOwner}
						savePhoto={props.savePhoto}
						onSubmit={onSubmit}
					/>
					:
					<ProfileData status={props.status}
											 updateUserStatus={props.updateUserStatus}
											 profile={props.profile}
											 isOwner={props.isOwner}
											 savePhoto={props.savePhoto}
											 goToEditMode={() => setEditMode(true)}
					/>}*/}
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
	return <div className={s.contact}><b>props.contactTitle</b>: {props.contactValue}</div>
}

const ProfileData = (props: ProfilePropsType) => {
	return <div>
		{props.isOwner && <div>
			<button onClick={props.goToEditMode}>edit</button>
		</div>}
		<div>
			<b>Full name</b>: {props.profile.fullName}
		</div>
		<div>
			<b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
		</div>
		{props.profile.lookingForAJob &&
		<div>
			<b>My professional skills</b>: {props.profile.lookingForAJobDescription}
		</div>}
		<div>
			<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
			//return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
		})}
		</div>
	</div>
}

