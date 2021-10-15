import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./Chat";
import { Link, useParams } from "react-router-dom";

export const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);
  //const [selectedIndex, setSelectedIndex] = useState(0);
  const params = useParams();

  return (
    <List component="nav">
    {chats.map((chat, index) => (
    <Link key={chat} to={`/chat/${chat}`}>
        <Chat title={chat} selected={chat === params.roomId} />
    </Link>
    ))}
</List>
  );
};

