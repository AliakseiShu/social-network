import {ProfilePropsType} from "../Profile";
import React from "react";
import {FormDataType} from "../../Login/Login";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import reduxForm, {Field} from "redux-form";

const ProfileDataForm = (props: ProfilePropsType) => {
	return <form onSubmit={props.handleSubmit}>
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
		<div><b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
			<Field component={Input}
						 name={"rememberMe"}
						 type={"checkbox"}/> remember me
		</div>
		<div>
			<b>My professional skills</b>: {props.profile.lookingForAJobDescription}
			<Field placeholder={"My professional skills"}
						 name={"lookingForAJobDescription"}
						 validate={[required]}
						 component={Textarea}/>
		</div>
	</form>
}
const ProfileDataFormReduxForm = reduxForm<FormDataType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm