import React from 'react';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/imeges/user.png";
import iconCamera from "../../../assets/imeges/red-camera-emblem-icon-vector-13566625.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import {SmallAvatar, useStyles} from "./stylesProfile";


export const ProfileInfo = (props: ProfilePropsType) => {
	const styles = useStyles();
	if (!props.profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: any) => {
		if (e.target.files && e.target.files.length) {
			const file = props.savePhoto(e.target.files[0])
		}
	};

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
							style={{width: '120px', height: '120px'}}/>
					</Badge>
				</Stack>
			</label>
			{/*<div className={styles.descriptionBlock}>
				<div>
					<b>Full name</b>: {props.profile.fullName}
				</div>
				<div>
					<b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
				</div>
				{props.profile.lookingForAJob &&
				<div>
					<b>My professional skills</b>: {props.profile.lookingForAJobDescription}
				</div>
				}
				<div>
					<b>About me</b>: {props.profile.aboutMe}
				</div>
				<div>
					<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
					// @ts-ignore
					return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
				})}
				</div>
			</div>*/}
			<div className={styles.descriptionBlock}>
				<ProfileStatusWithHooks
					status={props.status}
					editMode={false}
					updateUserStatus={props.updateUserStatus}/>
			</div>
		</div>
	)
}

const ProfileData = (props: ProfilePropsType) => {
	const styles = useStyles();
	return (
		<div className={styles.descriptionBlock}>
			<div>
				<b>Full name</b>: {props.profile.fullName}
			</div>
			<div>
				<b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
			</div>
			{props.profile.lookingForAJob &&
			<div>
				<b>My professional skills</b>: {props.profile.lookingForAJobDescription}
			</div>
			}
			<div>
				<b>About me</b>: {props.profile.aboutMe}
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
				// @ts-ignore
				return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
			})}
			</div>
		</div>
	)

}



type ContactType = {
	contactTitle: string
	contactValue: string
}

const Contact = (props: ContactType) => {
	const styles = useStyles();
	return <div className={styles.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

