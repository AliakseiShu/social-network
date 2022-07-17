import React, {ChangeEvent} from 'react';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/imeges/user.png";
import iconCamera from "../../../assets/imeges/red-camera-emblem-icon-vector-13566625.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {styled} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import {SmallAvatar} from "./ProfileInfoStyles";



export const ProfileInfo1 = (props: ProfilePropsType) => {

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
			<div>
				<ProfileStatusWithHooks
					status={props.status}
					editMode={false}
					updateUserStatus={props.updateUserStatus}/>
			</div>
		</div>
	)
}

