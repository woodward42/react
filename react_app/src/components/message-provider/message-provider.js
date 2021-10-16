import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

// @TODO перенести состояние из messageList/ChatList
export function MessageProvider({ children }) {
  const { roomId } = useParams();
  // ChatList передать value в дочерний инпут
  const [conversations, setConversations] = useState([
    { title: "room1", value: "" },
    { title: "room2", value: "" },
  ]);
  const [messages, setMessages] = useState({
    room1: [{ value: "Room1", author: "Bot", id: new Date() }],
    room2: [{ value: "Room2", author: "Bot", id: new Date() }],
  });

  const state = useMemo(() => {
    return {
      messages: messages[roomId] ?? [],
      savedValue: conversations.find(item => item?.title === `${roomId}`)?.value,
      conversations: conversations,
      allMessages: messages,
    }
  }, [roomId, messages, conversations]);

  const actions = useMemo(() => {
    return {
      handleChangeValue: (value) => {
        // придумать как обновлять value на onChange
        setConversations((conversations) => {
            let temp_arr = [...conversations];

                temp_arr.find(item => item?.title === `${roomId}`).value = value;
                
            return temp_arr;
        });
        //console.log(conversations);
      },
      createConversation: () => {
        // придумать как добавить чат
      },
      sendMessage: (message) => {
        const newMessage = { ...message, id: new Date() };

        setMessages((messages) => {
          return {
            ...messages,
            [roomId]: [...(messages[roomId] ?? []), newMessage],
          };
        });
      },
    };
  }, [roomId]);

  useEffect(() => {
    const messagesByRoomId = messages[roomId] ?? [];
    const lastMessage = messagesByRoomId[messagesByRoomId.length - 1];
    let timerId = null;

    if (lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        actions.sendMessage({ value: "Hello from Bot", author: "Bot" });
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messages, roomId, actions]);

  return children([state, actions]);
}