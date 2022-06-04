import React from 'react';
import {reduxForm,InjectedFormProps, Field} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    message: string
}

const maxlength50 = maxLengthCreator(50)

const AddMassageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate = {[required,maxlength50]}
                       name="newMessagesBody"
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

export const AddMassageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm)