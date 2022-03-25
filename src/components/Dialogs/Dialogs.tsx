import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { DialogItemType, DialogsPageType, MessageType } from "../../redux/store";
import { Store } from "redux";


type PropsType = {
  dialogsPage: DialogsPageType
  store: Store
}

export const Dialogs = (props: PropsType) => {
  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map((d:DialogItemType) => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = state.messages.map((m:MessageType)=> <Message message={m.message}/>)
  let newMessagesBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessagesBody}
                         onChange={onNewMessageChange}
                         placeholder='Enter your message'></textarea></div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}