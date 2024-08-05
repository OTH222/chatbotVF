import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import '../styles/ChatbotPopup.css';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-popup">
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <ChatWindow />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
