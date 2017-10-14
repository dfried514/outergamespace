import React from 'react';
import ChatMessage from './ChatMessage.jsx';

const ChatBoard = props => {
  const chatMsgItems = props.chatMsgObjects.map((messageObj, index) =>
    <ChatMessage key={index} messageObj={messageObj} />
  );
  return (
    <div>
      <ul>{chatMsgItems}</ul>
    </div>
  );
}

export default ChatBoard;
