import {useState, useRef, useEffect} from 'react';
import './App.css';
import { Message } from './Message';

const static_text = 'Статический текст в компонент Message';
const author = 'woodward';


export function App() {

  //стейт, где храним массив сообщений
  const [messageList, setMessageList] = useState([
                    { author: author, text: static_text},
                    { author: 'Bot', text: 'Горячие знакомства бесплатно и без смс'},
                ]);

  //стейт для инпута
  const [inputValue, setInputValue] = useState("");

  //ref для инпута
  const inputRef = useRef(null);

  //фокус для инпута
  useEffect(() => {
    inputRef.current.focus();
  },[]);

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

  return (
    
    <div className="App">
      <h3 className="App-header"> homework-2</h3>
      
      {
        //рендерим сообщения
        messageList.map(
          (message, idx) => <Message key={`msg_${idx}`} text={message.text} author={message.author}/>
        )
      }

      <input 
        placeholder="...введите текст сообщения" 
        value={inputValue} 
        onChange={(evt) => setInputValue(evt.target.value)}
        ref={inputRef}
        style={{'width':'50%', 'padding':'6px', 'marginBottom':'15px'}}
      />

      <button
        onClick={() => {
          setMessageList( 
            (messageListState) => ([...messageListState, {author: author, text: inputValue}])
          );
          setInputValue("");
        }}
      >Отправить сообщение</button>

    </div>
  );
}

//export default App;
