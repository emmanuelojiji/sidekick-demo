import "./ChatBubble.scss";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import avatar from "../Media/sidekick-avatar.svg";

const ChatBubbleDefault = ({
  message,
  details,
  displayDetails,
  log,
  displayControls,
  showDetails,
}) => {
  return (
    <>
      <div className="chat-bubble-details">
        <div className="chat-bubble-wrap">
          <div className="chat-bubble">
            <img src={avatar} className="avatar" />
            {log.message}
          </div>
          <p className="time">10:30</p>
        </div>
      </div>
    </>
  );
};

export default ChatBubbleDefault;
