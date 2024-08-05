import React, { useState } from 'react';
import { sendMessageToAPI } from '../services/api';
import '../styles/MessageInput.css';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    // Add user message to chat
    const userMessage = { sender: 'user', text: message };
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.dispatchEvent(new CustomEvent('new-message', { detail: userMessage }));

    // Send message to API
    const response = await sendMessageToAPI(message);
    const botMessage = { sender: 'bot', text: response };

    // Add bot message to chat
    chatWindow.dispatchEvent(new CustomEvent('new-message', { detail: botMessage }));

    setMessage('');
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
