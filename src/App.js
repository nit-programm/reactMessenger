import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import { Form } from './components/Form';

const myText = 'Hello from app';

function App() {
  const [messageList, setMessageList] = useState([])

  const handleAddMessage = (objMsg) => {
    setMessageList((prevMessageList => [...prevMessageList, objMsg]))
  }

  useEffect(() => {
    messageList.length != 0 && messageList[messageList.length - 1].author != 'Robot' && setTimeout(() => handleAddMessage({ text: 'I am bot', author: 'Robot' }), 1500)
  }, [messageList])

  return (
    <div className="App">
      <header className="App-header">
        {messageList.map((objMsg) => (
          <Message text={objMsg.text} author={objMsg.author} />
        ))}
        {/* <Counter /> */}
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
