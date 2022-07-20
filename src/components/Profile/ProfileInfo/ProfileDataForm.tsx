import {useStyles} from "./stylesProfile";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from '../../common/FormsControls/FormsControls.module.css'
import {ProfileType} from "../ProfileContainer";

export type ProfileFormProfileDataType = {
	profile: ProfileType
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileFormProfileDataType> & ProfileFormProfileDataType>
	= ({handleSubmit, error, profile}) => {

	const styles = useStyles();
	return (
		<form className={styles.descriptionBlock} onSubmit={handleSubmit}>
			{error && <div className={s.formSummaryError}>{error}</div>}
			<div>
				<b>Full name</b>: <Field placeholder={"Full name"}
																 name={"fullName"}
																 component={Input}/>
			</div>
			<div>
				<b>Looking for a job</b>: <Field name={"LookingForAJob"}
																				 component={Input}
																				 type={"checkbox"}/>
			</div>
			<div>
				<b>My professional skills</b>: <Field placeholder={"My professional skills"}
																							name={"lookingForAJobDescription"}
																							component={Textarea}/>
			</div>

			<div>
				<b>About me</b>: <Field placeholder={"About me"}
																name={"aboutMe"}
																component={Textarea}/>
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map(key =>
				<div key={key} className={styles.contact}>
					<b>{key}: <Field placeholder={key}
													 name={"contacts." + key}
													 component={Input}/></b>
				</div>
			)}
			</div>
			<div>
				<button>Save</button>
			</div>
		</form>
	)
}

export const ProfileDataFormContainer = reduxForm<ProfileType, ProfileFormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

