import "./ChatBubble.scss";
import { useState } from "react";

const ChatBubble = ({ message, details, displayDetails }) => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  return (
    <>
      <div className="chat-bubble-wrap">
        <div className="chat-bubble">
          <p>{message}</p>
        </div>
        <p className="time">10:30</p>
        <p
          onClick={() =>
            isDetailExpanded
              ? setIsDetailExpanded(false)
              : setIsDetailExpanded(true)
          }
        >
          {isDetailExpanded ? "Hide details" : "Show details"}
        </p>
      </div>

      <div
        className={`details ${
          isDetailExpanded ? "details-expand" : "details-collapse"
        }`}
        style={{ display: displayDetails }}
      >
        <div className="details-wrap">{details}</div>
      </div>
    </>
  );
};

export default ChatBubble;
