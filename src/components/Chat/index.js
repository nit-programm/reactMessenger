import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import { MessageList } from '../../components/MessageList';
import { Form } from '../../components/Form';
import { FormMui } from '../../components/FormMui';
import { AUTHORS } from '../../utils/constans.js';
import { ChatList } from '../../components/ChatList';

import { Navigate, useParams } from 'react-router-dom';

const chats = [{id: 'chat1'}];
const messages = {
    chat1: [],
}

export function Chat() {

  const params = useParams();
  const {chatId} = params;


  const [messageList, setMessageList] = useState({
      chat1: [],
      chat2: [],
      chat3: [],
  });
  const messagesEnd = useRef();

  const sendMessage = (text, author) => {
    const newMessage = {
      text: text,
      author: AUTHORS.ME,
      id: `msg-${Date.now()}`
    }
    handleAddMessage(newMessage);
  }

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => ({
        ...prevMessageList,
        [chatId]: [...prevMessageList[chatId], newMessage]
    }))
  }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeout;
    messageList[chatId]?.[messageList[chatId].length - 1]?.author === AUTHORS.ME && (timeout = setTimeout(() => handleAddMessage({ text: 'I am bot', author: AUTHORS.BOT, id: `msg-${Date.now()}` }), 1500))

    return () => clearTimeout(timeout);
  }, [messageList])

  useEffect(() => {

  }, []);

  if (!messageList[chatId]){
    return <Navigate to="/chats" replace></Navigate>
}


  return (
    <div className="App">
      <div className='App-content'>
        <MessageList messages={messageList[chatId]}/>
        <div ref={messagesEnd}></div>
      </div>
      <Form onSubmit={sendMessage}/>
    </div>
  );
}
