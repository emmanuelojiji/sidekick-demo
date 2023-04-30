import "./Log.scss";
import ChatBubble from "./ChatBubble";
import Typewriter from "typewriter-effect";
import { useRef, useEffect } from "react";

const Log = ({
  heading_bold,
  heading_light,
  array,
  displayDetails,
  modalRef,
  highlightedLog,
  logName,
}) => {
  const logRef = useRef();

  useEffect(() => {
    logRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div
      className="Log"
      ref={logRef}
      style={{
        border: highlightedLog === logName && "dashed 1px rgb(71, 159, 109)",
      }}
    >
      <div className="content">
        <h2 className="heading-bold">
          {heading_bold} <span className="heading-light">{heading_light}</span>
        </h2>
        <div className="chat-bubble-container">
          {array.map((log) => (
            <ChatBubble log={log} displayDetails={displayDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Log;
