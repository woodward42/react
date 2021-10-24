
const initialState = {
  messages: {
    room1: [{ value: "Room1", author: "Bot", id: new Date() }],
    room2: [{ value: "Room2", author: "Bot", id: new Date() }],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};