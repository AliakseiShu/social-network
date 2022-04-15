import React from 'react';
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from 'react-router'


type ContactsPropsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
type PhotoPropsType = {
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
}

export type MapStateToPropsType = {
  profile: ProfileType | null
}
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}
export type ProfileAPIContainerType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {
  userId:string
}
type PropsType = RouteComponentProps<PathParamsType> &  ProfileAPIContainerType

class ProfileAPIContainer extends React.Component<PropsType> {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
      />

    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile

})
let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)