import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PhotoPropsType, ProfileType} from "./ProfileContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
	profile: ProfileType
	status: string
	updateUserStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: PhotoPropsType) => void
	goToEditMode?: () => void

}

export const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo profile={props.profile}
									 status={props.status}
									 updateUserStatus={props.updateUserStatus}
									 isOwner={props.isOwner}
									 savePhoto={props.savePhoto}
									 //goToEditMode={props.goToEditMode}
			/>
			<MyPostsContainer/>
		</div>
	)
}
