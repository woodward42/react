import { List } from "@mui/material";
import { Chat } from "./Chat";
import { Link, useParams } from "react-router-dom";
import { conversationsSelector, createConversation, } from "../../store/conversations";
import { useDispatch, useSelector } from "react-redux";


export const ChatList = () => {
  const params = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  const createConversationWithName = () => {
    const title = prompt("введите название чата:");

    if (title) {
      dispatch(createConversation(title));
    }
  };


  return (
    <List component="nav">
    <button onClick={createConversationWithName}>Создать чат</button>
    {conversations.map((chat, index) => (
    <Link key={chat.title} to={`/chat/${chat.title}`}>
        <Chat title={chat.title} selected={chat.title === params.roomId} />
    </Link>
    ))}
</List>
  );
};

