import {useStyles} from "./stylesProfile";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from '../../common/FormsControls/FormsControls.module.css'

export type FormProfileDataType = {
	fullName: string
	LookingForAJob: boolean
	lookingForAJobDescription:string
	aboutMe:string
}



const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = (props) => {
	const styles = useStyles();
		return (
		<form className={styles.descriptionBlock} onSubmit={props.handleSubmit}>
			<div><button>save</button></div>
			{props.error && <div className={s.formSummaryError}>{props.error}	</div>}
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
		{/*	<div>
				<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
				// @ts-ignore
				return <div key={key} className={styles.contact}>
					<b>{key}: <Field placeholder={key}
													 name={"contacts." + key}
													 component={Input}/></b>
				</div>
				})}
			</div>*/}
		</form>
	)
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;