import React from "react";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Field} from "redux-form";
import {ContactsPropsType, PhotoPropsType} from "../ProfileContainer";

type ProfileDataFormType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsPropsType
	photos: PhotoPropsType,
	//onSubmit: () => void
}


export const ProfileDataForm = (props: ProfileDataFormType) => {
	return <form >
		<div>
			<button>save</button>
		</div>
		<div>
			<b>Full name</b>:
			{<Field placeholder={"Full name"}
							name={"fullName"}
							validate={[required]}
							component={Input}/>}
		</div>
		<div><b>Looking for a job</b>: {props.lookingForAJob ? "yes" : "no"}
			<Field component={Input}
						 name={"rememberMe"}
						 type={"checkbox"}/> remember me
		</div>
		<div>
			<b>My professional skills</b>: {props.lookingForAJobDescription}
			<Field placeholder={"My professional skills"}
						 name={"lookingForAJobDescription"}
						 validate={[required]}
						 component={Textarea}/>
		</div>
	</form>
}
/*
const ProfileDataFormReduxForm = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm
*/
