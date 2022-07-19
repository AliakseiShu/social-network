import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'
import {compose} from "redux";

export type ContactsPropsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

export type PhotoPropsType = {
	small: string
	large: string
}

export type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsPropsType
	photos: PhotoPropsType
	aboutMe: string
}

export type MapStateToPropsType = {
	profile: ProfileType
	status: string
	authorizedUserId: any
	isAuth: boolean
}

type MapDispatchToPropsType = {
	getUserProfile: (userId: string) => void
	getUserStatus: (userId: string) => void
	updateUserStatus: (status: string) => void
	savePhoto: (file: PhotoPropsType) => void
	saveProfile: () => void
}

export type ProfileAPIContainerType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
	userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerType & MapStateToPropsType

class ProfileAPIContainer extends React.Component<PropsType> {

	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push("/login")
			}
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile
				{...this.props}
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile}
				status={this.props.status}
				updateUserStatus={this.props.updateUserStatus}
				savePhoto={this.props.savePhoto}
				saveProfile={this.props.saveProfile}
			/>
		)
	}
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return ({
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	})
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {getUserProfile,
		getUserStatus,
		updateUserStatus,
		savePhoto,
		saveProfile}),
	withRouter,
)(ProfileAPIContainer)
