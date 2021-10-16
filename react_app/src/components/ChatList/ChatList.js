import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./Chat";
import { Link, useParams } from "react-router-dom";

export const ChatList = ({conversations}) => {
  //const [chats] = useState(["room1", "room2", "room3"]);
  //const [selectedIndex, setSelectedIndex] = useState(0);


  const params = useParams();

  return (
    <List component="nav">
    {conversations.map((chat, index) => (
    <Link key={chat.title} to={`/chat/${chat.title}`}>
        <Chat title={chat.title} selected={chat.title === params.roomId} />
    </Link>
    ))}
</List>
  );
};

