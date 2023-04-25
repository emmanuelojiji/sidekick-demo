import "./ChatBubble.scss";
import { useState } from "react";

const ChatBubble = ({ message, details, displayDetails }) => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(true);
  return (
    <>
      <div className="chat-bubble-wrap">
        <div className="chat-bubble">
          <p>{message}</p>
        </div>
        <p className="time">10:30</p>
        <p>Hide detail</p>
      </div>

      <div className="details" style={{display: displayDetails}}>
        {details}
      </div>
    </>
  );
};

export default ChatBubble;
