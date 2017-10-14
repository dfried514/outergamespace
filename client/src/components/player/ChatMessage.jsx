import React from 'react';

const ChatMessage = props => {
  let messageObj = props.messageObj;
  let username = messageObj.username;
  let message = messageObj.message;
  let datetime = messageObj.datetime;

  let date = new Date(datetime);
  let hour = date.getHours();
  let minute = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth() + 1;

  let dateStr = hour + ':' + minute
    + '--' + day + '/' + month;

  let messageStr = username + ' | ' + message
    + ' | ' + dateStr;

  return (
    <div>{messageStr}</div>
  );
}

export default ChatMessage;
