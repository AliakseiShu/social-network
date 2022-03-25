import { DialogsPageType } from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyCreator = ReturnType<typeof updateNewMessageBodyCreator>

type ActionDialogsTypes =
  SendMessageCreatorType |
  UpdateNewMessageBodyCreator

let initialState = {
    dialogs: [
      {id: 1, name: "Alex"},
      {id: 2, name: "Zina"},
      {id: 3, name: "Anna"},
      {id: 4, name: "Andrey"},
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How are You?"},
      {id: 3, message: "ok"},
    ],
    newMessageBody: ""
  }
const DialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsTypes):DialogsPageType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 4, message: body});
      return state
    default:
      return state
  }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default DialogsReducer