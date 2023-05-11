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
  showDetails
}) => {
  
  return (
    <>
      <div className="chat-bubble-details">
        <div className="chat-bubble-wrap">
          <div className="chat-bubble">
            <img src={avatar} className="avatar"/>
            {log.message}
          </div>
          <p className="time">10:30</p>
         
        </div>

        <div
          className={`details ${
            showDetails ? "details-expand" : "details-collapse"
          }`}
          style={{
            display: displayDetails,
            marginTop: showDetails && "30px",
          }}
        >
          <div className="details-wrap">
            {log.tasks.map((task) => (
              <div className="details-row">
                <p>{task.name}</p>
                <div className="details-row-right">
                  <p>{task.time}</p>
                  <p>{task.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubbleDefault;
