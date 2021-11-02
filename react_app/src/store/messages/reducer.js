import {SEND_NEW_MESSAGE} from './types';

const initialState = {
  messages: {
    room1: [{ value: "Room1 - msg 1", author: "Bot", id: new Date() },{ value: "Room1 - msg 2", author: "Bot", id: new Date() },],
    room2: [{ value: "Room2", author: "Bot", id: new Date() }],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      //console.log('in SEND_NEW_MESSAGE');
      //console.log('action', action);
      return {
        ...state,
        messages:{
          ...state.messages,
          [action.payload.roomId]: [...state.messages[action.payload.roomId],{...action.payload.message, id: new Date()}]
        }
      }

    default:
      return state;
  }
};