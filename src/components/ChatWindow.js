import React, { useState, useEffect } from 'react';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);

  useEffect(() => {
    const handleNewMessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.detail]);
    };

    const chatWindow = document.querySelector('.chat-window');
    chatWindow.addEventListener('new-message', handleNewMessage);

    return () => {
      chatWindow.removeEventListener('new-message', handleNewMessage);
    };
  }, []);

  useEffect(() => {
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
