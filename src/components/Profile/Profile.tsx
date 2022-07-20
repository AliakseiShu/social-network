import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {PhotoPropsType, ProfileType} from "./ProfileContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {saveProfile} from "../../redux/profile-reducer";

export type ProfilePropsType = {
	profile: ProfileType | null
	status: string
	updateUserStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: File) => void
	goToEditMode?: () => void
	saveProfile: (profile: ProfileType) => Promise<{}>

}

export const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo profile={props.profile}
									 status={props.status}
									 updateUserStatus={props.updateUserStatus}
									 isOwner={props.isOwner}
									 savePhoto={props.savePhoto}
									 saveProfile={props.saveProfile}
			/>
			<MyPostsContainer/>
		</div>
	)
}
