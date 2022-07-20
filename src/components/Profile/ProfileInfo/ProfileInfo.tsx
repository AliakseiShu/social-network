import React, {FC, useState} from 'react';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/imeges/user.png";
import iconCamera from "../../../assets/imeges/red-camera-emblem-icon-vector-13566625.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import {SmallAvatar, useStyles} from "./stylesProfile";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";
import {ProfileType} from "../ProfileContainer";

type ContactType = {
	contactTitle: string
	contactValue: string
}

export const Contact: FC<ContactType> = ({contactTitle, contactValue}) => {
	const styles = useStyles();
	return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

type ProfileDataType = {
	profile: ProfileType
	isOwner: boolean
	goToEditMode: () => void
}

const ProfileData: FC<ProfileDataType> = ({profile,isOwner,goToEditMode}) => {

	const styles = useStyles();

	const contactsList = Object.keys(profile.contacts).map(key => {
		const contactValue = profile.contacts[key as keyof ContactsType];
		return <Contact key={key} contactTitle={key} contactValue={contactValue}/>;
	});


	return (
		<div className={styles.descriptionBlock}>
			{isOwner &&
			<div>
				<button onClick={goToEditMode}>edit</button>
			</div>}
			<div>
				<b>Full name</b>: {profile.fullName}
			</div>
			<div>
				<b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
			</div>
			{profile.lookingForAJob &&
			<div>
				<b>My professional skills</b>: {profile.lookingForAJobDescription}
			</div>
			}
			<div>
				<b>About me</b>: {profile.aboutMe}
			</div>
			<div>
				<b>Contacts</b>: {contactsList}
			</div>
		</div>
	)
}








export const ProfileInfo = (props: ProfilePropsType) => {

	const [editMode, setEditMode] = useState(false)

	const styles = useStyles();
	if (!props.profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: any) => {
		if (e.target.files && e.target.files.length) {
			const file = props.savePhoto(e.target.files[0])
		}
	};
	const onSubmit = (formData: FormProfileDataType) => {
		//saveProfile(formData)
		setEditMode(false)
	}

	return (
		<div>
			<label>
				<input type="file"
							 accept={'image/*'}
							 onChange={onMainPhotoSelected}
							 style={{display: 'none'}}/>
				<Stack direction="row" spacing={2}>
					<Badge
						overlap="circular"
						anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
						badgeContent={
							<SmallAvatar
								alt="Remy Sharp" src={iconCamera}
							/>}>
						<Avatar
							alt="Travis Howard"
							src={props.profile.photos.large || userPhoto}
							style={{width: '150px', height: '150px'}}/>
					</Badge>
				</Stack>
			</label>

			{editMode
				?
				<ProfileDataForm initialValues ={props.profile} /*profile={props.profile} onSubmit={props.onSubmit}*/ />
				:
				<ProfileData
					profile={props.profile}
					savePhoto={props.savePhoto}
					isOwner={props.isOwner}
					updateUserStatus={props.updateUserStatus}
					status={props.status}
					goToEditMode={() => setEditMode(true)}/>}

			<div className={styles.descriptionBlock}>
				<ProfileStatusWithHooks
					status={props.status}
					editMode={false}
					updateUserStatus={props.updateUserStatus}/>
			</div>
		</div>
	)
}






