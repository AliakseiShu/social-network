const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyCreator = ReturnType<typeof updateNewMessageBodyCreator>

type ActionDialogsTypes =
  SendMessageCreatorType |
  UpdateNewMessageBodyCreator

export type DialogItemType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    {id: 1, name: "Alex"},
    {id: 2, name: "Zina"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Andrey"},
  ] as DialogItemType[] ,
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are You?"},
    {id: 3, message: "ok"},
  ] as MessageType[],
  newMessageBody: ""
}

export type InitialStateType = typeof initialState


const DialogsReducer = (state: InitialStateType = initialState, action: ActionDialogsTypes): InitialStateType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state, newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 4, message: body}]
      }
    default:
      return state
  }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default DialogsReducer