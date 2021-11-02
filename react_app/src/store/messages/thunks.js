import { clearMessageValueOnSend } from "../conversations";
import { handleSendNewMessage } from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    dispatch(handleSendNewMessage(message, roomId));
    dispatch(clearMessageValueOnSend(roomId));
  };