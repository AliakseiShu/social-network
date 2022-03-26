import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { DialogItemType, MessageType } from "../../redux/store";
import { Store } from "redux";
import { Dialogs } from "./Dialogs";


type PropsType = {
   store: Store
}

export const DialogsContainer = (props: PropsType) => {
  let state = props.store.getState().dialogsPage

  /*let dialogsElements = state.dialogs.map((d:DialogItemType) => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = state.messages.map((m:MessageType)=> <Message message={m.message}/>)
  let newMessagesBody = state.newMessageBody*/

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return (
   <Dialogs updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}/>
  )
}