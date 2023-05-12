import "./ChatBubble.scss";
import { useState, useRef, useEffect } from "react";
import avatar from "../Media/sidekick-avatar.svg";

const ChatBubbleTypewriter = ({ message, borderRadius }) => {

  const [padding, setPadding] = useState();
  const chatBubbleRef = useRef();

  
  return (
    <>
      <div
        className="chat-bubble-details chat-bubble-animation"
        style={{ transform: "scale(0)", maxHeight: "0" }}
      >
        <div className="chat-bubble-wrap ">
          <div
            className="chat-bubble"
            ref={chatBubbleRef}
            style={{
              borderRadius: `${borderRadius}px`,
              paddingTop: `${padding}px`,
              paddingBottom: `${padding}px`,
            }}
          >
            <img src={avatar} className="avatar" />
            {message}
          </div>
          <p className="time">10:30</p>
        </div>
      </div>
    </>
  );
};

export default ChatBubbleTypewriter;
