import { HANDLE_CHANGE_MESSAGE_VALUE, CREATE_CONVERSATION, CLEAR_MESSAGE_VALUE_ON_SEND } from "./types";

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const createConversation = (name) => ({
  type: CREATE_CONVERSATION,
  payload: name,
});

export const clearMessageValueOnSend = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE_ON_SEND,
  payload: roomId,
});