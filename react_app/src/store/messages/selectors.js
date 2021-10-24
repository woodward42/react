export const messagesByRoomSelector = (roomId) => (state) => {
    console.log('in selector',state.messages.messages[roomId])
    return (
      state.messages.messages[roomId] ?? []
    );
  };