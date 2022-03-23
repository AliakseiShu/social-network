const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


export type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyCreator = ReturnType<typeof updateNewMessageBodyCreator>


const DialogsReducer = (state:any, action:any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
return state
    case SEND_MESSAGE:
      let body = state.newMessageBody = '';
      state.newMessageBody = '';
      state.messages.push({id: 4, message: body},);
      return state
    default:
      return state
  }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default DialogsReducer