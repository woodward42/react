import './App.css';
import { Message } from './Message';

const text = 'Текст для пропса в компонент Message';

export function App() {
  return (
    <div className="App">
      <h3 className="App-header"> homework-1</h3>
      <Message text={text}/>
    </div>
  );
}

//export default App;
