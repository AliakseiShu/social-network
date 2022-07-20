import React, {ChangeEvent, FC, useState} from 'react';
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/imeges/user.png";
import iconCamera from "../../../assets/imeges/red-camera-emblem-icon-vector-13566625.jpg";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import {SmallAvatar, useStyles} from "./stylesProfile";
import {ProfileDataFormContainer} from "./ProfileDataForm";
import {ContactsPropsType, ProfileType} from "../ProfileContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {getUserProfile} from "../../../redux/profile-reducer";

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

const ProfileData: FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {

	const styles = useStyles();

	const contactsList = Object.keys(profile.contacts).map(key => {
		const contactValue = profile.contacts[key as keyof ContactsPropsType];
		return <Contact key={key} contactTitle={key} contactValue={contactValue}/>;
	});

	return (
		<div className={styles.descriptionBlock}>
			<h3>Profile info</h3>
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
			{isOwner &&
			<div>
				<button onClick={goToEditMode}>edit</button>
			</div>}
		</div>
	)
}

type ProfileInfoPropsType = {
	profile: ProfileType | null
	savePhoto: (file: File) => void
	saveProfile: (profile: ProfileType) => Promise<{}>
	isOwner: boolean
	updateUserStatus: (status: string) => void
	status: string
}

export const ProfileInfo: FC<ProfileInfoPropsType> = (
	{profile, savePhoto, saveProfile, isOwner,updateUserStatus, status}) => {

	const [editMode, setEditMode] = useState(false)

	const styles = useStyles();

	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files && e.currentTarget.files.length) {
			savePhoto(e.currentTarget.files[0])
		}
	};

	const onSubmit = (formData: ProfileType) => {
		saveProfile(formData).then()
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
							src={profile.photos.large || userPhoto}
							style={{width: '150px', height: '150px'}}/>
					</Badge>
				</Stack>
			</label>
			<div className={styles.descriptionBlock}>
				<ProfileStatusWithHooks
					status={status}
					editMode={false}
					updateUserStatus={updateUserStatus}/>
			</div>

			{editMode
				?
				<ProfileDataFormContainer
					initialValues={profile}
					profile={profile}
					onSubmit={onSubmit} />
				:
				<ProfileData
					profile={profile}
					isOwner={isOwner}
					goToEditMode={() => setEditMode(true)}/>}
		</div>
	)
}






