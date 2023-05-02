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
}) => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  return (
    <>
      <div className="chat-bubble-details">
        <div className="chat-bubble-wrap">
          <div className="chat-bubble">
            <img src={avatar} className="avatar"/>
            {log.message}
          </div>
          <p className="time">10:30</p>
          <p
            className="show-hide"
            style={{ display: log.tasks.length === 0 && "none" }}
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
          style={{
            display: displayDetails,
            marginTop: isDetailExpanded && "30px",
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
