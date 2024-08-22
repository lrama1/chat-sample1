import React, { useState } from 'react';
import './Chat.css'; // Import CSS for styling

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {!isChatOpen && (
        <div className="chat-icon" onClick={toggleChat}>
          💬
        </div>
      )}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat</span>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chat-body">
            {/* Chat content goes here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;