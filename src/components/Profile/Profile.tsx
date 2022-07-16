import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

export type ProfilePropsType = {
	profile: ProfileType
	status: string
	updateUserStatus: (status: string) => void
	isOwner: boolean
	savePhoto:(file: string) => void
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
									 goToEditMode={props.goToEditMode}
			/>
			<MyPostsContainer/>
		</div>
	)
}
