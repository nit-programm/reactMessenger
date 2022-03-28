import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import { MessageList } from './components/MessageList';
import { Form } from './components/Form';
import { FormMui } from './components/FormMui';
import './utils/constans.js'
import { AUTHORS } from './utils/constans.js';
import { ChatList } from './components/ChatList';

const myText = 'Hello from app';

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const chatList = [
    {id: '1', name: 'Chat1'},
    {id: '2', name: 'Chat2'},
  ]

  const sendMessage = (text, author) => {
    const newMessage = {
      text: text,
      author: AUTHORS.ME,
      id: `msg-${Date.now()}`
    }
    handleAddMessage(newMessage);
  }

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList => [...prevMessageList, newMessage]))
  }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeout;
    messageList[messageList.length - 1]?.author === AUTHORS.ME && (timeout = setTimeout(() => handleAddMessage({ text: 'I am bot', author: AUTHORS.BOT, id: `msg-${Date.now()}` }), 1500))

    return () => clearTimeout(timeout);
  }, [messageList])

  useEffect(() => {
    console.log(messagesEnd)
  }, []);

  return (
    <div className="App">
      <div className='App-content'>
        <MessageList messages={messageList}/>
        <div ref={messagesEnd}></div>
      </div>
      <Form onSubmit={sendMessage} />
      <ul className="chatList">
        <ChatList chats={chatList}/>
      </ul>
    </div>
  );
}

export default App;
