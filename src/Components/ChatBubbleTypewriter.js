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
}) => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);

  const [borderRadius, setBorderRadius] = useState(100);
  const chatBubbleRef = useRef();

  useEffect(() => {
    // Create a new MutationObserver instance
    const observer = new MutationObserver((mutations) => {
      // Check if any mutations affect the height of the chat bubble
      const height = chatBubbleRef.current.offsetHeight;
      if (height > 70) {
        setBorderRadius(20);
      } else {
        setBorderRadius(500);
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
      <div className="chat-bubble-details">
        <div className="chat-bubble-wrap">
          <div
            className="chat-bubble"
            ref={chatBubbleRef}
            style={{ borderRadius: `${borderRadius}px` }}
          >
            <img src={avatar} className="avatar" />
            {
              <Typewriter
                options={{
                  strings: log.message,
                  autoStart: true,
                  loop: false,
                  cursor: "",
                  delay: 50,
                }}
              />
            }
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

export default ChatBubbleTypewriter;
