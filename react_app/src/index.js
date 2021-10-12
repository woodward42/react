import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MessageList, Header } from "./components";


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MessageList />
  </React.StrictMode>,
  document.getElementById('root')
);
