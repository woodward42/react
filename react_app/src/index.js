import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MessageList, Header, ChatList, MainTemplate } from "./components";


ReactDOM.render(
  <React.StrictMode>
    <MainTemplate
        header={<Header />}
        chats={<ChatList />}
        children={<MessageList />}
    /></React.StrictMode>,
  document.getElementById('root')
);
