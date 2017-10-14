import React from 'react';

const ChatMessage = props => {
  let messageObj = props.messageObj;
  let username = messageObj.username;
  let message = messageObj.message;
  let datetime = messageObj.datetime;

  let date = new Date(datetime);

  let amPm = 'am';
  let hour = date.getHours();
  if (hour > 12) {
    hour -= 12;
    amPm = 'pm';
  }
  hour = hour.toString();
  hour = hour.length === 2 ? hour : '0' + hour;

  let minute = date.getMinutes().toString();
  minute = minute.length === 2 ? minute : '0' + minute;

  let day = date.getDate().toString();
  day = day.length === 2 ? day : '0' + day;

  let month = date.getMonth() + 1;
  month = month.toString();
  month = month.length === 2 ? month : '0' + month;

  let nameStr = username + ':';

  let dateStr = hour + ':' + minute + amPm
    + ' | ' + month + '/' + day;

  let messageStr = '&emsp;&emsp;' + message
    + '&emsp;&emsp;&emsp;&emsp;' + dateStr;

  return (
    <div>
      <b>{nameStr}</b>
      &emsp;&emsp;{message}
      <small>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{dateStr}</small>
    </div>
  );
}

export default ChatMessage;
