import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogItemType, DialogsPageType, MessageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    sendMessage: (newMessagesBody: string) => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d: DialogItemType) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map((m: MessageType) => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessagesBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMassageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type FormDataType = {
    message: string
}

const AddMassageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessagesBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMassageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm)