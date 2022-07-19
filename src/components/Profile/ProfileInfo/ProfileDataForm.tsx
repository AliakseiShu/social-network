import {useStyles} from "./stylesProfile";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import {ProfileType} from "../ProfileContainer";

export type FormProfileDataType = {
	fullName: string
	LookingForAJob: boolean
}


const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = (props) => {
	const styles = useStyles();
	return (
		<form className={styles.descriptionBlock}>
			<div>
				<button onClick={() => {
				}}>save
				</button>
			</div>
			<div>
				<b>Full name</b>: <Field placeholder={"Full name"}
																 name={"fullName"}
																 validate={[required]}
																 component={Input}/>
			</div>
			<div>
				<b>Looking for a job</b>: <Field name={"LookingForAJob"}
																				 validate={[required]}
																				 component={Input}
																				 type={"checkbox"}/>
			</div>

			<div>
				<b>My professional skills</b>:
			</div>

			<div>
				<b>About me</b>:
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