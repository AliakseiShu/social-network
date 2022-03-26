import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { DialogsPageType } from "../../redux/store";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";


type MapStateToProps = {
  dialogsPage:DialogsPageType
}

type MapDispatchToProps = {
  sendMessage: () => void
  updateNewMessageBody: (body: string) => void

}

let mapStateToProps = (state: AppStateType):MapStateToProps => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)