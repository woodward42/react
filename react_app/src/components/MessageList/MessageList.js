import {useState, useRef, useEffect} from 'react';
import './MessageList.css';
import { Message } from './Message/Message';
import {Input, InputAdornment} from '@mui/material';
import {Send} from '@mui/icons-material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const static_text = 'Статический текст в компонент Message';
const author = 'woodward';


export function MessageList() {

  //стейт, где храним массив сообщений
  const [messageList, setMessageList] = useState([
                    { author: author, text: static_text},
                    { author: 'Bot', text: 'Горячие знакомства бесплатно и без смс'},
                ]);
  
  //стейт, где храним массив сообщений
  const [chatList, setchatList] = useState([
      { id: 'chat_1', name: 'Chat 1'},
      { id: 'chat_2', name: 'Chat 2'},
      { id: 'chat_3', name: 'Chat 3'},
      { id: 'chat_4', name: 'Chat 4'},
  ]);

  //стейт для инпута
  const [inputValue, setInputValue] = useState("");

  //ref для инпута
  const inputRef = useRef(null);

  //фокус для инпута
  useEffect(() => {
    inputRef.current.focus();
  },[]);

  //фокус для инпута после отправки сообщения
  useEffect(() => {
    if (messageList.length && messageList[messageList.length-1]?.author === author){
      inputRef.current.focus();
    }
  },[messageList]);

  //ответ бота
  useEffect(() => {
    //проверяем автора последнего сообщения
    if (messageList.length && messageList[messageList.length-1]?.author === author){

      const delayTimer = setTimeout( () => {
                            setMessageList( 
                              (messageListState) => ([...messageListState, {author: 'Bot', text: 'Bot says hello...'}])
                            )
                          }, 1500);

      return () => clearTimeout(delayTimer);
    }
  }, [messageList])

  const clickHandlerSendMessage = () => {
    if(inputValue){
      setMessageList( 
      (messageListState) => ([...messageListState, {author: author, text: inputValue}])
      );
      setInputValue("");
    }
  }

  const keyPressSendMessage = (evt) => {
    if (inputValue && evt.code === "Enter"){
      clickHandlerSendMessage();
    }
  }
  return (
    
    <div className="App">
      <h3 className="App-header"> homework-3</h3>
      
      <div className="App-grid-wrapper">
        <div className="App-chats-list">
        <List sx={{  bgcolor: '#ccc' }} disablePadding>
          {
            //рендерим список чатов
            chatList.map(
              (chat, idx) => {
                return (
                  <ListItem key={chat.id} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={chat.name} />
                    </ListItemButton>
                  </ListItem>
                )
              }
            )
          }
        </List>
        </div>
        <div className="App-messages-list">
        {
          //рендерим сообщения
          messageList.map(
            (message, idx) => <Message key={`msg_${idx}`} text={message.text} author={message.author}/>
          )
        }
        <Input 
            className="MessageList-Input-custom"
            placeholder="...введите текст сообщения" 
            value={inputValue} 
            onChange={(evt) => setInputValue(evt.target.value)}
            onKeyPress={keyPressSendMessage}
            ref={inputRef}
            fullWidth={false}
            endAdornment={
              <InputAdornment position="end">
                {inputValue && <Send 
                                className="MessageList-Send-btn"
                                onClick={clickHandlerSendMessage}
                                />}
              </InputAdornment>
            }
          />
        </div>
      </div>  

    </div>
  );
}

//export default App;
