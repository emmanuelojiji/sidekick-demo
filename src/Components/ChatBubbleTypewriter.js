import "./ChatBubble.scss";
import { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import avatar from "../Media/sidekick-avatar.svg";

const ChatBubbleTypewriter = ({
  message,
  details,
  displayDetails,
  log,
  displayControls,
  showDetails,
}) => {


  const [borderRadius, setBorderRadius] = useState(100);
  const [padding, setPadding] = useState();
  const chatBubbleRef = useRef();

  useEffect(() => {
    // Create a new MutationObserver instance
    const observer = new MutationObserver((mutations) => {
      // Check if any mutations affect the height of the chat bubble
      const height = chatBubbleRef.current.offsetHeight;
      if (height > 70) {
        setBorderRadius(20);
        setPadding(20);
      } else {
        setBorderRadius(500);
        setPadding(10);
      }
    });

    // Observe mutations on the chat bubble
    observer.observe(chatBubbleRef.current, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

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

        <div
          className={`details ${
            showDetails? "details-expand" : "details-collapse"
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

export default ChatBubbleTypewriter;
