import {useStyles} from "./stylesProfile";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";

export type FormProfileDataType = {
	fullName: string
	LookingForAJob: boolean
	lookingForAJobDescription:string
	aboutMe:string
}

const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = (props) => {
	const styles = useStyles();
	return (
		<form onSubmit={props.handleSubmit} className={styles.descriptionBlock}>
			<div>
				<button>save</button>
			</div>
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
			{/*<div>
				<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
				// @ts-ignore
				return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
			})}
			</div>*/}
		</form>
	)
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;